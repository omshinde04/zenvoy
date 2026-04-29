// app/builder/[templateId]/page.jsx
"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useAuth } from "@/lib/AuthContext"
import { defaultResumeData } from "@/lib/resumeData"
import BuilderForm, { TemplateSwitcher } from "@/components/builder/BuilderForm"
import TechMinimal from "@/components/templates/tech/TechMinimal"
import TechTwoColumn from "@/components/templates/tech/TechTwoColumn"
import TechBoldHeader from "@/components/templates/tech/TechBoldHeader"

const TEMPLATE_MAP = {
    "tech-minimal": TechMinimal,
    "tech-two-column": TechTwoColumn,
    "tech-bold-header": TechBoldHeader,

}

const TEMPLATE_META = {
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
}

export default function BuilderPage() {
    const { user, loading } = useAuth()
    const { templateId } = useParams()
    const router = useRouter()

    const [data, setData] = useState(defaultResumeData)
    const [activeSection, setActiveSection] = useState("personal")
    const [activeTemplateId, setActiveTemplateId] = useState(templateId)
    const [downloading, setDownloading] = useState(false)
    const [zoom, setZoom] = useState(0.72)

    const DRAFT_KEY = `zenvoy_draft_${templateId}`

    // Autosave
    useEffect(() => {
        const t = setTimeout(() => {
            try { localStorage.setItem(DRAFT_KEY, JSON.stringify(data)) } catch { }
        }, 1500)
        return () => clearTimeout(t)
    }, [data])

    // Auth loading
    if (loading) {
        return (
            <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: C.bg }}>
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{ color: C.textSec, fontSize: "13px" }}>
                    Loading...
                </motion.div>
            </div>
        )
    }

    // Auth guard
    if (!user) {
        return (
            <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: C.bg, gap: "12px" }}>
                <p style={{ color: C.textSec, fontSize: "14px" }}>Please log in to access the builder</p>
                <button onClick={() => router.push("/login")} style={{
                    backgroundColor: C.indigo, color: "#fff", padding: "10px 22px",
                    borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "600", fontSize: "13px",
                }}>Go to Login</button>
            </div>
        )
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

    const handleDownload = async () => {
        setDownloading(true)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pdf/generate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ templateId: activeTemplateId, data }),
            })

            console.log("Status:", res.status)

            if (!res.ok) {
                const errText = await res.text()
                console.error("Backend error:", errText)
                throw new Error("PDF failed")
            }

            const blob = await res.blob()

            console.log("Blob size:", blob.size)

            const url = URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `${data.personal.name || "resume"}-zenvoy.pdf`
            a.click()
            URL.revokeObjectURL(url)

        } catch (err) {
            console.error(err)
            alert("PDF generation failed")
        } finally {
            setDownloading(false)
        }
    }

    return (
        <div style={{
            display: "flex", height: "100vh",
            backgroundColor: C.bg,
            fontFamily: "Inter, sans-serif",
            overflow: "hidden",
        }}>

            {/* Left Panel — Form */}
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

            {/* Right Panel — Preview */}
            <div style={{
                flex: 1, backgroundColor: C.bg,
                display: "flex", flexDirection: "column",
                alignItems: "center", overflow: "auto",
                padding: "24px 28px",
                backgroundImage: "radial-gradient(circle, #1A2744 1px, transparent 1px)",
                backgroundSize: "22px 22px",
            }}>

                {/* Preview Top Bar */}
                <div style={{
                    width: "100%", maxWidth: "860px",
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", marginBottom: "20px", flexShrink: 0,
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "11px", color: C.textFaint, letterSpacing: "0.04em" }}>LIVE PREVIEW</span>
                        <TemplateSwitcher
                            activeId={activeTemplateId}
                            onSwitch={setActiveTemplateId}
                            meta={TEMPLATE_META}
                        />
                    </div>

                    {/* Zoom Controls */}
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
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
                        <span style={{
                            fontSize: "10px", color: C.textFaint,
                            backgroundColor: "#0A1628", padding: "4px 12px",
                            borderRadius: "20px", border: `1px solid ${C.border}`,
                        }}>
                            A4 · 794 × 1123px
                        </span>
                    </div>
                </div>

                {/* Template Preview */}
                <div style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: "top center",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
                    borderRadius: "2px",
                    flexShrink: 0,
                    marginBottom: `${-(1 - zoom) * 1123 + 24}px`,
                }}>
                    <TemplateComponent data={data} />
                </div>

            </div>
        </div>
    )
}