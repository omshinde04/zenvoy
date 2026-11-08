// app/builder/[templateId]/page.jsx
"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { defaultResumeData, omShindeResumeData } from "@/lib/resumeData"
import { trackZapiyaEvent } from "@/lib/telemetry"
import BuilderForm, { TemplateSwitcher } from "@/components/builder/BuilderForm"
import ClassicATS from "@/components/templates/tech/ClassicATS"
import TechMinimal from "@/components/templates/tech/TechMinimal"
import TechTwoColumn from "@/components/templates/tech/TechTwoColumn"
import TechBoldHeader from "@/components/templates/tech/TechBoldHeader"
import { generateAndDownloadPdf } from "@/lib/pdf-generator"

const TEMPLATE_MAP = {
    "classic-ats": ClassicATS,
    "tech-minimal": TechMinimal,
    "tech-two-column": TechTwoColumn,
    "tech-bold-header": TechBoldHeader,
}

const TEMPLATE_META = {
    "classic-ats": { name: "Classic ATS (Harvard Standard)", segment: "tech" },
    // Temporarily hidden while ongoing enhancements are completed:
    // "tech-minimal": { name: "Tech Minimal", segment: "tech" },
    // "tech-two-column": { name: "Tech Pro", segment: "tech" },
    // "tech-bold-header": { name: "Tech Bold", segment: "tech" },
}

const C = {
    bg: "#F1F5F9",
    panel: "#FFFFFF",
    card: "#FFFFFF",
    border: "#E2E8F0",
    borderHover: "#CBD5E1",
    indigo: "#4F46E5",
    indigoLight: "#EEF2FF",
    text: "#0F172A",
    textSec: "#334155",
    textMuted: "#64748B",
    textFaint: "#94A3B8",
    green: "#059669",
    greenLight: "#ECFDF5",
}

export default function BuilderPage() {
    const { templateId } = useParams()
    const router = useRouter()
    const fileInputRef = useRef(null)

    const [data, setData] = useState(() => (templateId === "classic-ats" ? omShindeResumeData : defaultResumeData))
    const [activeSection, setActiveSection] = useState("personal")
    const [activeTemplateId, setActiveTemplateId] = useState(templateId || "classic-ats")
    const [downloading, setDownloading] = useState(false)
    const [downloadToast, setDownloadToast] = useState(null)
    const [zoom, setZoom] = useState(0.72)
    const [isSaved, setIsSaved] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const [mobileTab, setMobileTab] = useState("editor") // "editor" | "preview"
    const [docFontSize, setDocFontSize] = useState(11)
    const [docSpacing, setDocSpacing] = useState("normal")

    const DRAFT_KEY = `zenvoy_resume_draft`

    // Responsive screen detection
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 1024
            setIsMobile(mobile)
            if (mobile && zoom > 0.45) {
                // Adjust zoom for mobile screens
                const calculatedZoom = Math.min(0.48, +(window.innerWidth / 860).toFixed(2))
                setZoom(calculatedZoom)
            }
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // =========================================================
    // INITIAL LOAD FROM LOCAL STORAGE
    // =========================================================
    useEffect(() => {
        try {
            const saved = localStorage.getItem(DRAFT_KEY)
            if (saved) {
                const parsed = JSON.parse(saved)
                if (parsed && typeof parsed === "object") {
                    setData(parsed)
                }
            }
            const savedFs = localStorage.getItem("zenvoy_doc_font_size")
            if (savedFs) setDocFontSize(parseFloat(savedFs))
            const savedSp = localStorage.getItem("zenvoy_doc_spacing")
            if (savedSp) setDocSpacing(savedSp)
        } catch (e) {
            console.error("Could not load local draft:", e)
        }
    }, [])

    const handleSetFontSize = (updater) => {
        setDocFontSize(prev => {
            const next = typeof updater === "function" ? updater(prev) : updater
            const clamped = Math.max(9.0, Math.min(13.0, +(Math.round(next * 10) / 10).toFixed(1)))
            try { localStorage.setItem("zenvoy_doc_font_size", String(clamped)) } catch {}
            return clamped
        })
    }

    const handleSetSpacing = (preset) => {
        setDocSpacing(preset)
        try { localStorage.setItem("zenvoy_doc_spacing", preset) } catch {}
    }

    const hasTrackedEditRef = useRef(false)
    const isInitialMountRef = useRef(true)

    // =========================================================
    // AUTOSAVE TO LOCAL STORAGE
    // =========================================================
    useEffect(() => {
        setIsSaved(false)
        const t = setTimeout(() => {
            try {
                localStorage.setItem(DRAFT_KEY, JSON.stringify(data))
                setIsSaved(true)

                // Track first in-session edit event to gauge candidate engagement
                if (!isInitialMountRef.current && !hasTrackedEditRef.current) {
                    hasTrackedEditRef.current = true
                    trackZapiyaEvent("edit", {
                        templateId: templateId || "classic-ats",
                        path: `/builder/${templateId || "classic-ats"}`,
                    })
                }
                isInitialMountRef.current = false
            } catch (e) {
                console.error("Local draft save error:", e)
            }
        }, 800)

        return () => clearTimeout(t)
    }, [data, templateId])

    // =========================================================
    // IN-BROWSER 1-CLICK INSTANT VECTOR PDF DOWNLOAD
    // =========================================================
    const handleDownload = async () => {
        if (downloading) return
        setDownloading(true)
        trackZapiyaEvent("download", {
            templateId: templateId || "classic-ats",
            path: `/builder/${templateId || "classic-ats"}`,
        })

        const rawName = (data.personal?.name || "resume")
            .trim()
            .replace(/[^a-zA-Z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .toLowerCase()
            .slice(0, 60) || "resume"
        const filename = `${rawName}-resume.pdf`

        try {
            // On mobile, if currently on "editor" tab, switch to "preview" so canvas is mounted
            if (isMobile && mobileTab !== "preview") {
                setMobileTab("preview")
                await new Promise((resolve) => setTimeout(resolve, 200))
            }

            const success = await generateAndDownloadPdf("resume-preview-container", filename)
            if (success) {
                setDownloadToast("✓ PDF downloaded successfully!")
                setTimeout(() => setDownloadToast(null), 3500)
            } else {
                window.print()
            }
        } catch (err) {
            console.warn("Direct PDF export error, fallback to print:", err)
            window.print()
        } finally {
            setDownloading(false)
        }
    }

    // =========================================================
    // EXPORT JSON BACKUP
    // =========================================================
    const handleExportJSON = () => {
        const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(data, null, 2)
        )}`
        const a = document.createElement("a")
        a.href = jsonString
        const rawName = (data.personal?.name || "resume")
            .toLowerCase()
            .replace(/\s+/g, "-")
        a.download = `${rawName}-backup.json`
        a.click()
    }

    // =========================================================
    // IMPORT JSON BACKUP
    // =========================================================
    const handleImportJSON = (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = (event) => {
            try {
                const parsed = JSON.parse(event.target.result)
                if (parsed && typeof parsed === "object") {
                    setData(parsed)
                    alert("✅ Resume loaded successfully!")
                }
            } catch {
                alert("❌ Invalid JSON resume file.")
            }
        }
        reader.readAsText(file)
    }

    // =========================================================
    // RESET TO SAMPLE
    // =========================================================
    const handleResetSample = () => {
        if (confirm("Reset resume to sample template data? Your current edits will be overwritten.")) {
            setData(activeTemplateId === "classic-ats" ? omShindeResumeData : defaultResumeData)
        }
    }

    const TemplateComponent = TEMPLATE_MAP[activeTemplateId]

    if (!TemplateComponent) {
        return (
            <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: C.bg, gap: "12px" }}>
                <p style={{ color: C.textSec, fontWeight: "600" }}>Template not found</p>
                <button onClick={() => router.push("/templates")}
                    style={{ color: C.indigo, background: "none", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}>
                    ← Back to templates
                </button>
            </div>
        )
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: C.bg,
            fontFamily: "Inter, sans-serif",
            overflow: "hidden",
        }}>

            {/* Mobile Top Segmented Control (Visible on < 1024px screens) */}
            {isMobile && (
                <div style={{
                    height: "56px",
                    backgroundColor: "#FFFFFF",
                    borderBottom: "1px solid #E2E8F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 12px",
                    flexShrink: 0,
                    zIndex: 50,
                }}>
                    <div style={{ display: "flex", backgroundColor: "#F1F5F9", padding: "3px", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                        <button
                            onClick={() => setMobileTab("editor")}
                            style={{
                                padding: "6px 14px",
                                borderRadius: "6px",
                                fontSize: "12px",
                                fontWeight: mobileTab === "editor" ? "700" : "500",
                                backgroundColor: mobileTab === "editor" ? "#FFFFFF" : "transparent",
                                color: mobileTab === "editor" ? "#4F46E5" : "#64748B",
                                border: mobileTab === "editor" ? "1px solid #CBD5E1" : "1px solid transparent",
                                boxShadow: mobileTab === "editor" ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
                                cursor: "pointer",
                            }}
                        >
                            ✏️ Edit Form
                        </button>
                        <button
                            onClick={() => setMobileTab("preview")}
                            style={{
                                padding: "6px 14px",
                                borderRadius: "6px",
                                fontSize: "12px",
                                fontWeight: mobileTab === "preview" ? "700" : "500",
                                backgroundColor: mobileTab === "preview" ? "#FFFFFF" : "transparent",
                                color: mobileTab === "preview" ? "#4F46E5" : "#64748B",
                                border: mobileTab === "preview" ? "1px solid #CBD5E1" : "1px solid transparent",
                                boxShadow: mobileTab === "preview" ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
                                cursor: "pointer",
                            }}
                        >
                            👁️ View Preview
                        </button>
                    </div>

                    <button
                        onClick={handleDownload}
                        disabled={downloading}
                        style={{
                            padding: "8px 16px",
                            borderRadius: "8px",
                            background: downloading
                                ? "#94A3B8"
                                : "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                            color: "#FFFFFF",
                            fontSize: "12.5px",
                            fontWeight: "700",
                            border: "none",
                            cursor: downloading ? "not-allowed" : "pointer",
                            boxShadow: "0 2px 10px rgba(79, 70, 229, 0.35)",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            transition: "all 0.15s ease",
                        }}
                    >
                        {downloading ? "⏳ Generating..." : "⬇ Download PDF"}
                    </button>
                </div>
            )}

            {/* Main Studio Body */}
            <div style={{
                display: "flex",
                flex: 1,
                overflow: "hidden",
            }}>

                {/* Left Panel — Form Editor (Hidden on mobile if preview tab is active) */}
                {(!isMobile || mobileTab === "editor") && (
                    <BuilderForm
                        data={data}
                        setData={setData}
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                        downloading={downloading}
                        onDownload={handleDownload}
                        onBack={() => router.push("/templates")}
                        templateMeta={TEMPLATE_META[activeTemplateId]}
                        activeTemplateId={activeTemplateId}
                        isMobile={isMobile}
                    />
                )}

                {/* Right Panel — Canvas Preview (Hidden on mobile if editor tab is active) */}
                {(!isMobile || mobileTab === "preview") && (
                    <div style={{
                        flex: 1,
                        backgroundColor: C.bg,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        overflow: "auto",
                        padding: isMobile ? "12px 8px 32px 8px" : "20px 28px",
                        backgroundImage: "radial-gradient(circle, #CBD5E1 1.2px, transparent 1.2px)",
                        backgroundSize: "20px 20px",
                    }}>

                        {/* Top Control Bar */}
                        <div style={{
                            width: "100%",
                            maxWidth: "880px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "18px",
                            flexShrink: 0,
                            gap: "12px",
                            flexWrap: "wrap",
                            backgroundColor: "rgba(255, 255, 255, 0.92)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid #E2E8F0",
                            borderRadius: "14px",
                            padding: "9px 16px",
                            boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.05)",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                                <Link href="/" style={{ textDecoration: "none" }}>
                                    <span className="font-comfortaa font-bold" style={{ fontSize: "13px", color: "#4F46E5", display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#4F46E5" }} />
                                        Zapiya Studio
                                    </span>
                                </Link>

                                <div style={{ width: "1px", height: "16px", backgroundColor: "#E2E8F0" }} />

                                <TemplateSwitcher
                                    activeId={activeTemplateId}
                                    onSwitch={setActiveTemplateId}
                                    meta={TEMPLATE_META}
                                />

                                {/* Auto-save status */}
                                <span style={{
                                    fontSize: "11px",
                                    padding: "3px 10px",
                                    borderRadius: "12px",
                                    backgroundColor: isSaved ? "#ECFDF5" : "#FEF3C7",
                                    color: isSaved ? "#059669" : "#D97706",
                                    border: `1px solid ${isSaved ? "#A7F3D0" : "#FDE68A"}`,
                                    fontWeight: "600",
                                }}>
                                    {isSaved ? "✓ Auto-Saved" : "⏳ Saving..."}
                                </span>
                            </div>

                            {/* Toolbar: JSON Backup, Reset & Zoom */}
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                                {/* Hidden JSON file input */}
                                <input
                                    type="file"
                                    accept=".json"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleImportJSON}
                                />
                                <button
                                    onClick={() => {
                                        setData(omShindeResumeData)
                                        setActiveTemplateId("classic-ats")
                                    }}
                                    title="Load Om Shinde's exact sample resume"
                                    style={{
                                        padding: "5px 11px", borderRadius: "7px", fontSize: "11.5px",
                                        backgroundColor: C.indigoLight, color: C.indigo,
                                        border: "1px solid #C7D2FE", cursor: "pointer",
                                        fontWeight: "700", transition: "all 0.15s ease",
                                    }}
                                >
                                    ⚡ Load Sample
                                </button>

                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    title="Load a saved JSON resume"
                                    style={{
                                        padding: "5px 10px", borderRadius: "7px", fontSize: "11.5px",
                                        backgroundColor: "#FFFFFF", color: C.textSec,
                                        border: `1px solid ${C.border}`, cursor: "pointer",
                                        fontWeight: "600", transition: "all 0.15s ease",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#F8FAFC"}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "#FFFFFF"}
                                >
                                    Import JSON
                                </button>

                                <button
                                    onClick={handleExportJSON}
                                    title="Backup resume data to a local JSON file"
                                    style={{
                                        padding: "5px 10px", borderRadius: "7px", fontSize: "11.5px",
                                        backgroundColor: "#FFFFFF", color: C.textSec,
                                        border: `1px solid ${C.border}`, cursor: "pointer",
                                        fontWeight: "600", transition: "all 0.15s ease",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#F8FAFC"}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "#FFFFFF"}
                                >
                                    Export JSON
                                </button>

                                <button
                                    onClick={handleResetSample}
                                    title="Reset to sample data"
                                    style={{
                                        padding: "5px 10px", borderRadius: "7px", fontSize: "11.5px",
                                        backgroundColor: "#FEF2F2", color: "#DC2626",
                                        border: `1px solid #FECACA`, cursor: "pointer",
                                        fontWeight: "600", transition: "all 0.15s ease",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#FEE2E2"}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "#FEF2F2"}
                                >
                                    Reset
                                </button>

                                <div style={{ width: "1px", height: "18px", backgroundColor: "#E2E8F0", margin: "0 4px" }} />

                                {/* Zoom Controls */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "#FFFFFF",
                                    border: "1px solid #E2E8F0",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                }}>
                                    <button
                                        onClick={() => setZoom(z => Math.max(0.35, +(z - 0.05).toFixed(2)))}
                                        title="Zoom out"
                                        style={{
                                            padding: "4px 9px", fontSize: "13px",
                                            backgroundColor: "transparent", color: C.textSec,
                                            border: "none", cursor: "pointer", fontWeight: "700",
                                        }}
                                    >−</button>
                                    <span style={{ fontSize: "11px", color: C.textSec, minWidth: "38px", textAlign: "center", fontWeight: "600" }}>
                                        {Math.round(zoom * 100)}%
                                    </span>
                                    <button
                                        onClick={() => setZoom(z => Math.min(1.0, +(z + 0.05).toFixed(2)))}
                                        title="Zoom in"
                                        style={{
                                            padding: "4px 9px", fontSize: "13px",
                                            backgroundColor: "transparent", color: C.textSec,
                                            border: "none", cursor: "pointer", fontWeight: "700",
                                        }}
                                    >+</button>
                                </div>

                                <button
                                    onClick={handleDownload}
                                    disabled={downloading}
                                    title="1-Click Direct PDF Download"
                                    style={{
                                        padding: "6px 14px",
                                        borderRadius: "8px",
                                        background: downloading
                                            ? "#94A3B8"
                                            : "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                                        color: "#FFFFFF",
                                        border: "none",
                                        cursor: downloading ? "not-allowed" : "pointer",
                                        fontWeight: "700",
                                        fontSize: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        boxShadow: "0 2px 8px rgba(79, 70, 229, 0.3)",
                                        marginLeft: "4px",
                                    }}
                                >
                                    <span>{downloading ? "⏳" : "⬇"}</span>
                                    <span>{downloading ? "Generating..." : "Download PDF"}</span>
                                </button>
                            </div>
                        </div>

                        {/* Word-style Document Formatting Toolbar */}
                        <div style={{
                            width: "100%",
                            maxWidth: "880px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "14px",
                            flexShrink: 0,
                            gap: "10px",
                            flexWrap: "wrap",
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #E2E8F0",
                            borderRadius: "12px",
                            padding: "8px 14px",
                            boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
                        }}>
                            {/* Font Size & Spacing Controls */}
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#334155" }}>
                                        Font Size:
                                    </span>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "#F8FAFC",
                                        border: "1px solid #CBD5E1",
                                        borderRadius: "7px",
                                        overflow: "hidden",
                                    }}>
                                        <button
                                            type="button"
                                            onClick={() => handleSetFontSize(s => Math.max(9.0, s - 0.5))}
                                            title="Decrease font size (A-)"
                                            style={{
                                                padding: "4px 9px",
                                                backgroundColor: "#FFFFFF",
                                                border: "none",
                                                borderRight: "1px solid #CBD5E1",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                                fontWeight: "700",
                                                color: "#334155",
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#F1F5F9"}
                                            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#FFFFFF"}
                                        >
                                            A⁻
                                        </button>
                                        <span style={{
                                            fontSize: "12px",
                                            fontWeight: "700",
                                            color: "#0F172A",
                                            minWidth: "44px",
                                            textAlign: "center",
                                            padding: "0 4px",
                                        }}>
                                            {docFontSize}pt
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => handleSetFontSize(s => Math.min(13.0, s + 0.5))}
                                            title="Increase font size (A+)"
                                            style={{
                                                padding: "4px 9px",
                                                backgroundColor: "#FFFFFF",
                                                border: "none",
                                                borderLeft: "1px solid #CBD5E1",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                                fontWeight: "700",
                                                color: "#334155",
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#F1F5F9"}
                                            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#FFFFFF"}
                                        >
                                            A⁺
                                        </button>
                                    </div>
                                </div>

                                <div style={{ width: "1px", height: "18px", backgroundColor: "#E2E8F0", margin: "0 4px" }} />

                                {/* Spacing Presets */}
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#334155" }}>
                                        Spacing:
                                    </span>
                                    <div style={{ display: "flex", backgroundColor: "#F1F5F9", padding: "2px", borderRadius: "8px", border: "1px solid #E2E8F0", gap: "2px" }}>
                                        {[
                                            { id: "compact", label: "Compact", tip: "Tight margins (fits heavy resumes onto 1 page)" },
                                            { id: "normal", label: "Normal", tip: "Standard balanced ATS margins" },
                                            { id: "relaxed", label: "Relaxed", tip: "Roomy margins (eliminates bottom empty space)" },
                                        ].map(preset => {
                                            const active = docSpacing === preset.id
                                            return (
                                                <button
                                                    key={preset.id}
                                                    type="button"
                                                    onClick={() => handleSetSpacing(preset.id)}
                                                    title={preset.tip}
                                                    style={{
                                                        padding: "4px 10px",
                                                        fontSize: "11px",
                                                        fontWeight: active ? "700" : "500",
                                                        borderRadius: "6px",
                                                        border: active ? "1px solid #CBD5E1" : "1px solid transparent",
                                                        backgroundColor: active ? "#FFFFFF" : "transparent",
                                                        color: active ? "#4F46E5" : "#64748B",
                                                        boxShadow: active ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
                                                        cursor: "pointer",
                                                        transition: "all 0.15s ease",
                                                    }}
                                                >
                                                    {preset.label}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div style={{ width: "1px", height: "18px", backgroundColor: "#E2E8F0", margin: "0 4px" }} />

                                {/* Auto Fit 1 Page */}
                                <button
                                    type="button"
                                    onClick={() => {
                                        const expB = (data.experience || []).reduce((a, e) => a + (e.bullets?.filter(Boolean).length || 0), 0)
                                        const projB = (data.projects || []).reduce((a, p) => a + (p.bullets?.filter(Boolean).length || 0), 0)
                                        const achB = (data.achievements || []).filter(Boolean).length
                                        const totalB = expB + projB + achB
                                        if (totalB >= 14) {
                                            handleSetFontSize(10.5)
                                            handleSetSpacing("compact")
                                        } else if (totalB <= 7) {
                                            handleSetFontSize(11.5)
                                            handleSetSpacing("relaxed")
                                        } else {
                                            handleSetFontSize(11)
                                            handleSetSpacing("normal")
                                        }
                                    }}
                                    title="Auto-balance font size & margins to fill 1 page cleanly"
                                    style={{
                                        padding: "4px 11px",
                                        borderRadius: "7px",
                                        fontSize: "11.5px",
                                        fontWeight: "700",
                                        backgroundColor: "#EEF2FF",
                                        color: "#4F46E5",
                                        border: "1px solid #C7D2FE",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px",
                                        transition: "all 0.15s ease",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#E0E7FF"}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "#EEF2FF"}
                                >
                                    <span>⚡</span> Fit 1 Page
                                </button>
                            </div>

                            {/* Word Document Badge & Keyboard Tip */}
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <span style={{
                                    fontSize: "11px",
                                    color: "#64748B",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                }}>
                                    <kbd style={{ backgroundColor: "#F1F5F9", border: "1px solid #CBD5E1", borderRadius: "4px", padding: "1px 4px", fontSize: "10px", fontWeight: "700" }}>
                                        Ctrl+B
                                    </kbd>
                                    <span>to Bold anywhere</span>
                                </span>
                                <span style={{
                                    fontSize: "10.5px",
                                    fontWeight: "700",
                                    padding: "2px 8px",
                                    borderRadius: "6px",
                                    backgroundColor: "#F1F5F9",
                                    color: "#334155",
                                    border: "1px solid #E2E8F0",
                                }}>
                                    Times New Roman 100%
                                </span>
                            </div>
                        </div>

                        {/* A4 Canvas Container */}
                        <div
                            id="resume-preview-container"
                            style={{
                                position: "relative",
                                transform: `scale(${zoom})`,
                                transformOrigin: "top center",
                                boxShadow: "0 25px 60px -12px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(15, 23, 42, 0.06)",
                                borderRadius: "2px",
                                flexShrink: 0,
                                marginBottom: `${-(1 - zoom) * 1123 + 40}px`,
                                backgroundColor: "#FFFFFF",
                            }}
                        >
                            <TemplateComponent
                                data={data}
                                fontSize={docFontSize}
                                spacing={docSpacing}
                                fontFamily="'Times New Roman', Times, 'Tinos', serif"
                            />

                            {/* Visual Page 1 Seam Indicator (Editor Only - Hidden in Print) */}
                            <div
                                className="editor-seam no-print"
                                style={{
                                    position: "absolute",
                                    top: "1123px",
                                    left: 0,
                                    right: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    pointerEvents: "none",
                                    zIndex: 40,
                                }}
                            >
                                <div style={{ flex: 1, borderTop: "1.5px dashed #F87171", opacity: 0.8 }} />
                                <span style={{
                                    padding: "3px 12px",
                                    backgroundColor: "#FEF2F2",
                                    color: "#DC2626",
                                    fontSize: "10.5px",
                                    fontWeight: "700",
                                    borderRadius: "12px",
                                    border: "1px solid #FECACA",
                                    margin: "0 10px",
                                    letterSpacing: "0.03em",
                                    boxShadow: "0 2px 6px rgba(220, 38, 38, 0.08)",
                                }}>
                                    Page 1 Boundary (A4 · 1123px) · Content below will flow to Page 2
                                </span>
                                <div style={{ flex: 1, borderTop: "1.5px dashed #F87171", opacity: 0.8 }} />
                            </div>
                        </div>

                    </div>
                )}

            </div>

            {/* Download feedback toast */}
            {downloadToast && (
                <div style={{
                    position: "fixed",
                    bottom: "24px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#0F172A",
                    color: "#FFFFFF",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontWeight: "600",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4)",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}>
                    <span>{downloadToast}</span>
                </div>
            )}
        </div>
    )
}
