// app/builder/[templateId]/page.jsx
"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import { defaultResumeData, omShindeResumeData } from "@/lib/resumeData"
import BuilderForm, { TemplateSwitcher } from "@/components/builder/BuilderForm"
import ClassicATS from "@/components/templates/tech/ClassicATS"
import TechMinimal from "@/components/templates/tech/TechMinimal"
import TechTwoColumn from "@/components/templates/tech/TechTwoColumn"
import TechBoldHeader from "@/components/templates/tech/TechBoldHeader"

const TEMPLATE_MAP = {
    "classic-ats": ClassicATS,
    "tech-minimal": TechMinimal,
    "tech-two-column": TechTwoColumn,
    "tech-bold-header": TechBoldHeader,
}

const TEMPLATE_META = {
    "classic-ats": { name: "Classic ATS", segment: "tech" },
    "tech-minimal": { name: "Tech Minimal", segment: "tech" },
    "tech-two-column": { name: "Tech Pro", segment: "tech" },
    "tech-bold-header": { name: "Tech Bold", segment: "tech" },
}

const C = {
    bg: "#080F1C",
    border: "#1A2744",
    indigo: "#6366F1",
    textSec: "#94A3B8",
    textMuted: "#4A5568",
    textFaint: "#2D3748",
    card: "#0D1526",
    green: "#10B981",
}

export default function BuilderPage() {
    const { templateId } = useParams()
    const router = useRouter()
    const fileInputRef = useRef(null)

    const [data, setData] = useState(() => (templateId === "classic-ats" ? omShindeResumeData : defaultResumeData))
    const [activeSection, setActiveSection] = useState("personal")
    const [activeTemplateId, setActiveTemplateId] = useState(templateId || "tech-minimal")
    const [downloading, setDownloading] = useState(false)
    const [zoom, setZoom] = useState(0.72)
    const [isSaved, setIsSaved] = useState(true)

    const DRAFT_KEY = `zenvoy_resume_draft`

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
        } catch (e) {
            console.error("Could not load local draft:", e)
        }
    }, [])

    // =========================================================
    // AUTOSAVE TO LOCAL STORAGE
    // =========================================================
    useEffect(() => {
        setIsSaved(false)
        const t = setTimeout(() => {
            try {
                localStorage.setItem(DRAFT_KEY, JSON.stringify(data))
                setIsSaved(true)
            } catch (e) {
                console.error("Local draft save error:", e)
            }
        }, 800)

        return () => clearTimeout(t)
    }, [data])

    // =========================================================
    // IN-BROWSER VECTOR PDF DOWNLOAD
    // =========================================================
    const handleDownload = () => {
        setDownloading(true)
        const rawName = (data.personal?.name || "resume")
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9-]/g, "")
            .toLowerCase()
            .slice(0, 60) || "resume"

        const originalTitle = document.title
        document.title = `${rawName}-resume`

        setTimeout(() => {
            window.print()
            document.title = originalTitle
            setDownloading(false)
        }, 120)
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
                <p style={{ color: C.textSec }}>Template not found</p>
                <button onClick={() => router.push("/templates")}
                    style={{ color: C.indigo, background: "none", border: "none", cursor: "pointer", fontSize: "14px" }}>
                    ← Back to templates
                </button>
            </div>
        )
    }

    return (
        <div style={{
            display: "flex", height: "100vh",
            backgroundColor: C.bg,
            fontFamily: "Inter, sans-serif",
            overflow: "hidden",
        }}>

            {/* Left Panel — Form Editor */}
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
            />

            {/* Right Panel — Canvas Preview */}
            <div style={{
                flex: 1, backgroundColor: C.bg,
                display: "flex", flexDirection: "column",
                alignItems: "center", overflow: "auto",
                padding: "20px 28px",
                backgroundImage: "radial-gradient(circle, #1A2744 1px, transparent 1px)",
                backgroundSize: "22px 22px",
            }}>

                {/* Top Control Bar */}
                <div style={{
                    width: "100%", maxWidth: "860px",
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", marginBottom: "16px", flexShrink: 0,
                    gap: "12px", flexWrap: "wrap",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "11px", color: C.textFaint, letterSpacing: "0.06em", fontWeight: "600" }}>LIVE PREVIEW</span>
                        <TemplateSwitcher
                            activeId={activeTemplateId}
                            onSwitch={setActiveTemplateId}
                            meta={TEMPLATE_META}
                        />

                        {/* Auto-save status */}
                        <span style={{
                            fontSize: "11px",
                            padding: "3px 8px",
                            borderRadius: "12px",
                            backgroundColor: isSaved ? "#064E3B" : "#1E1B4B",
                            color: isSaved ? "#34D399" : "#818CF8",
                            border: `1px solid ${isSaved ? "#059669" : "#4338CA"}`,
                            fontWeight: "500",
                        }}>
                            {isSaved ? "✓ Auto-Saved Locally" : "⏳ Saving..."}
                        </span>
                    </div>

                    {/* Toolbar: JSON Backup, Reset & Zoom */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
                            title="Load Om Shinde's exact resume"
                            style={{
                                padding: "4px 10px", borderRadius: "6px", fontSize: "11px",
                                backgroundColor: "#1E1B4B", color: "#A5B4FC",
                                border: "1px solid #4338CA", cursor: "pointer",
                                fontWeight: "600",
                            }}
                        >
                            ⚡ Load Om Shinde
                        </button>

                        <button
                            onClick={() => fileInputRef.current?.click()}
                            title="Load a saved JSON resume"
                            style={{
                                padding: "4px 9px", borderRadius: "6px", fontSize: "11px",
                                backgroundColor: C.card, color: C.textSec,
                                border: `1px solid ${C.border}`, cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            Import JSON
                        </button>

                        <button
                            onClick={handleExportJSON}
                            title="Backup resume data to a local file"
                            style={{
                                padding: "4px 9px", borderRadius: "6px", fontSize: "11px",
                                backgroundColor: C.card, color: C.textSec,
                                border: `1px solid ${C.border}`, cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            Export JSON
                        </button>

                        <button
                            onClick={handleResetSample}
                            title="Reset to sample data"
                            style={{
                                padding: "4px 9px", borderRadius: "6px", fontSize: "11px",
                                backgroundColor: C.card, color: "#EF4444",
                                border: `1px solid ${C.border}`, cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            Reset
                        </button>

                        <div style={{ width: "1px", height: "18px", backgroundColor: C.border, margin: "0 4px" }} />

                        {/* Zoom Controls */}
                        <button onClick={() => setZoom(z => Math.max(0.45, +(z - 0.05).toFixed(2)))}
                            style={{
                                padding: "4px 10px", borderRadius: "6px", fontSize: "14px",
                                backgroundColor: C.card, color: C.textSec,
                                border: `1px solid ${C.border}`, cursor: "pointer",
                            }}>−</button>
                        <span style={{ fontSize: "11px", color: C.textMuted, minWidth: "38px", textAlign: "center" }}>
                            {Math.round(zoom * 100)}%
                        </span>
                        <button onClick={() => setZoom(z => Math.min(1.0, +(z + 0.05).toFixed(2)))}
                            style={{
                                padding: "4px 10px", borderRadius: "6px", fontSize: "14px",
                                backgroundColor: C.card, color: C.textSec,
                                border: `1px solid ${C.border}`, cursor: "pointer",
                            }}>+</button>
                    </div>
                </div>

                {/* A4 Canvas Container */}
                <div
                    id="resume-preview-container"
                    style={{
                        position: "relative",
                        transform: `scale(${zoom})`,
                        transformOrigin: "top center",
                        boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
                        borderRadius: "2px",
                        flexShrink: 0,
                        marginBottom: `${-(1 - zoom) * 1123 + 32}px`,
                        backgroundColor: "#FFFFFF",
                    }}
                >
                    <TemplateComponent
                        data={data}
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
                        <div style={{ flex: 1, borderTop: "1.5px dashed #EF4444", opacity: 0.7 }} />
                        <span style={{
                            padding: "2px 10px",
                            backgroundColor: "#1E1B4B",
                            color: "#F87171",
                            fontSize: "10px",
                            fontWeight: "600",
                            borderRadius: "10px",
                            border: "1px solid #EF4444",
                            margin: "0 8px",
                            letterSpacing: "0.03em"
                        }}>
                            Page 1 End (1123px) · Content below prints on Page 2
                        </span>
                        <div style={{ flex: 1, borderTop: "1.5px dashed #EF4444", opacity: 0.7 }} />
                    </div>
                </div>

            </div>
        </div>
    )
}
