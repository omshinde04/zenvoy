// components/builder/BuilderForm.jsx
"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const C = {
    bg: "#F8FAFC",
    panel: "#FFFFFF",
    card: "#FFFFFF",
    cardHover: "#F8FAFC",
    border: "#E2E8F0",
    borderHover: "#CBD5E1",
    borderActive: "#818CF8",
    indigo: "#4F46E5",
    indigoLight: "#EEF2FF",
    indigoHover: "#4338CA",
    violet: "#7C3AED",
    text: "#0F172A",
    textSec: "#334155",
    textMuted: "#64748B",
    textFaint: "#94A3B8",
    green: "#059669",
    greenLight: "#ECFDF5",
    greenBorder: "#A7F3D0",
    amber: "#D97706",
    amberLight: "#FEF3C7",
    red: "#DC2626",
    redLight: "#FEF2F2",
    redBorder: "#FECACA",
}

const input = {
    width: "100%",
    backgroundColor: "#F8FAFC",
    border: `1px solid ${C.border}`,
    color: C.text,
    fontSize: "13px",
    padding: "9px 12px",
    borderRadius: "8px",
    outline: "none",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    transition: "border-color 0.15s, box-shadow 0.15s, background-color 0.15s",
}

const lbl = {
    fontSize: "11px",
    fontWeight: "600",
    color: C.textSec,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "5px",
    display: "block",
}

const card = {
    backgroundColor: "#FFFFFF",
    border: `1px solid ${C.border}`,
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "12px",
    boxShadow: "0 1px 3px rgba(15, 23, 42, 0.04)",
}

const addBtn = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: `1px dashed ${C.borderHover}`,
    backgroundColor: "#FFFFFF",
    color: C.indigo,
    fontSize: "12px",
    cursor: "pointer",
    fontWeight: "600",
    letterSpacing: "0.02em",
    transition: "all 0.15s ease",
}

// ── Word-Style Bold Helper ────────────────────────────────────
function toggleBoldSelection(inputEl, currentValue = "", onChange) {
    if (!inputEl) return
    const start = inputEl.selectionStart ?? 0
    const end = inputEl.selectionEnd ?? 0
    const val = currentValue || ""

    if (start === end) {
        // No selection: insert **bold text** template and select inner text
        const insert = "**bold text**"
        const nextVal = val.slice(0, start) + insert + val.slice(end)
        onChange(nextVal)
        setTimeout(() => {
            inputEl.focus()
            inputEl.setSelectionRange(start + 2, start + insert.length - 2)
        }, 15)
        return
    }

    const selected = val.slice(start, end)
    let nextVal, newStart, newEnd

    // Check if already bolded with **
    if (selected.startsWith("**") && selected.endsWith("**") && selected.length >= 4) {
        const unbolded = selected.slice(2, -2)
        nextVal = val.slice(0, start) + unbolded + val.slice(end)
        newStart = start
        newEnd = start + unbolded.length
    } else if (
        start >= 2 &&
        end <= val.length - 2 &&
        val.slice(start - 2, start) === "**" &&
        val.slice(end, end + 2) === "**"
    ) {
        nextVal = val.slice(0, start - 2) + selected + val.slice(end + 2)
        newStart = start - 2
        newEnd = end - 2
    } else {
        const bolded = `**${selected}**`
        nextVal = val.slice(0, start) + bolded + val.slice(end)
        newStart = start
        newEnd = start + bolded.length
    }

    onChange(nextVal)
    setTimeout(() => {
        inputEl.focus()
        inputEl.setSelectionRange(newStart, newEnd)
    }, 15)
}

// ── Field ────────────────────────────────────────────────────
function Field({ label, value, onChange, placeholder, type = "text", half }) {
    const [focused, setFocused] = useState(false)
    return (
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", width: half ? "100%" : "100%" }}>
            <label style={lbl}>{label}</label>
            <input
                type={type}
                value={value || ""}
                onChange={e => onChange(e.target.value)}
                onKeyDown={e => {
                    if ((e.metaKey || e.ctrlKey) && (e.key === "b" || e.key === "B")) {
                        e.preventDefault()
                        toggleBoldSelection(e.target, value || "", onChange)
                    }
                }}
                placeholder={placeholder || ""}
                style={{
                    ...input,
                    backgroundColor: focused ? "#FFFFFF" : "#F8FAFC",
                    borderColor: focused ? C.indigo : C.border,
                    boxShadow: focused ? `0 0 0 3px rgba(79, 70, 229, 0.12)` : "none",
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </div>
    )
}

function Grid2({ children }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {children}
        </div>
    )
}

function Grid3({ children }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            {children}
        </div>
    )
}

// ── Tag Input ────────────────────────────────────────────────
function TagInput({ label, values = [], onChange }) {
    const [tagText, setTagText] = useState("")
    const [focused, setFocused] = useState(false)

    const handleKey = (e) => {
        if ((e.key === "Enter" || e.key === ",") && tagText.trim()) {
            e.preventDefault()
            if (!values.includes(tagText.trim())) onChange([...values, tagText.trim()])
            setTagText("")
        }
        if (e.key === "Backspace" && !tagText && values.length) {
            onChange(values.slice(0, -1))
        }
    }

    return (
        <div style={{ marginBottom: "12px" }}>
            <label style={lbl}>{label}</label>
            <div style={{
                display: "flex", flexWrap: "wrap", gap: "6px",
                backgroundColor: focused ? "#FFFFFF" : "#F8FAFC",
                border: `1px solid ${focused ? C.indigo : C.border}`,
                borderRadius: "8px", padding: "7px 10px",
                minHeight: "42px", alignItems: "center",
                boxShadow: focused ? `0 0 0 3px rgba(79, 70, 229, 0.12)` : "none",
                transition: "border-color 0.15s, box-shadow 0.15s, background-color 0.15s",
                cursor: "text",
            }}
                onClick={() => document.getElementById(`tag_${label}`)?.focus()}
            >
                {values.map((v, i) => (
                    <span key={i} style={{
                        backgroundColor: C.indigoLight,
                        color: "#3730A3",
                        fontSize: "11px", padding: "3px 9px", borderRadius: "6px",
                        display: "flex", alignItems: "center", gap: "6px",
                        border: "1px solid #C7D2FE",
                        fontWeight: "600",
                    }}>
                        {v}
                        <span
                            onClick={(e) => {
                                e.stopPropagation()
                                onChange(values.filter((_, idx) => idx !== i))
                            }}
                            style={{ cursor: "pointer", color: "#6366F1", fontSize: "14px", lineHeight: 1, fontWeight: "700" }}
                        >×</span>
                    </span>
                ))}
                <input
                    id={`tag_${label}`}
                    value={tagText}
                    onChange={e => setTagText(e.target.value)}
                    onKeyDown={handleKey}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={values.length === 0 ? "Type and press Enter or comma" : ""}
                    style={{
                        ...input, border: "none", padding: "2px 4px",
                        width: "auto", flex: 1, minWidth: "100px",
                        backgroundColor: "transparent", boxShadow: "none",
                        fontSize: "12px",
                    }}
                />
            </div>
        </div>
    )
}

// ── Bullet List ──────────────────────────────────────────────
function BulletList({ bullets = [], onChange }) {
    const update = (i, val) => { const u = [...bullets]; u[i] = val; onChange(u) }
    const add = () => onChange([...bullets, ""])
    const remove = (i) => onChange(bullets.filter((_, idx) => idx !== i))

    return (
        <div style={{ marginBottom: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                <label style={{ ...lbl, marginBottom: 0 }}>Bullet Points (bullets one below one)</label>
                <span style={{ fontSize: "10.5px", color: C.textMuted, display: "flex", alignItems: "center", gap: "3px" }}>
                    <kbd style={{ backgroundColor: "#F1F5F9", border: "1px solid #CBD5E1", borderRadius: "3px", padding: "1px 4px", fontSize: "9.5px", fontWeight: "700" }}>
                        Ctrl+B
                    </kbd>
                    <span>to Bold</span>
                </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {bullets.map((b, i) => (
                    <div key={i} style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                        <span style={{ color: C.indigo, fontSize: "14px", flexShrink: 0, fontWeight: "700" }}>•</span>
                        <input
                            id={`bullet_input_${i}`}
                            value={b}
                            onChange={e => update(i, e.target.value)}
                            onKeyDown={e => {
                                if ((e.metaKey || e.ctrlKey) && (e.key === "b" || e.key === "B")) {
                                    e.preventDefault()
                                    toggleBoldSelection(e.target, b, val => update(i, val))
                                }
                            }}
                            placeholder="Action verb + task + quantified result (e.g., Reduced latency by 45%)..."
                            style={{ ...input, flex: 1 }}
                            onFocus={e => {
                                e.target.style.borderColor = C.indigo
                                e.target.style.backgroundColor = "#FFFFFF"
                                e.target.style.boxShadow = `0 0 0 3px rgba(79, 70, 229, 0.12)`
                            }}
                            onBlur={e => {
                                e.target.style.borderColor = C.border
                                e.target.style.backgroundColor = "#F8FAFC"
                                e.target.style.boxShadow = "none"
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => {
                                const el = document.getElementById(`bullet_input_${i}`)
                                toggleBoldSelection(el, b, val => update(i, val))
                            }}
                            title="Bold selected text (Ctrl+B / Cmd+B)"
                            style={{
                                border: `1px solid ${C.border}`,
                                backgroundColor: "#FFFFFF",
                                color: C.text,
                                cursor: "pointer",
                                fontSize: "11.5px",
                                fontWeight: "700",
                                padding: "6px 9px",
                                borderRadius: "6px",
                                lineHeight: 1,
                                flexShrink: 0,
                                transition: "all 0.15s ease",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = C.indigo
                                e.currentTarget.style.backgroundColor = C.indigoLight
                                e.currentTarget.style.color = C.indigo
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = C.border
                                e.currentTarget.style.backgroundColor = "#FFFFFF"
                                e.currentTarget.style.color = C.text
                            }}
                        >
                            B
                        </button>
                        <button
                            type="button"
                            onClick={() => remove(i)}
                            title="Remove bullet"
                            style={{
                                border: "none", background: "none",
                                color: C.textFaint, cursor: "pointer", fontSize: "16px",
                                lineHeight: 1, flexShrink: 0, padding: "4px 6px",
                                borderRadius: "4px", transition: "color 0.15s, background-color 0.15s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.color = C.red; e.currentTarget.style.backgroundColor = C.redLight }}
                            onMouseLeave={e => { e.currentTarget.style.color = C.textFaint; e.currentTarget.style.backgroundColor = "transparent" }}
                        >×</button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={add}
                    style={{
                        background: "#FFFFFF", border: `1px dashed ${C.borderHover}`,
                        color: C.indigo, fontSize: "11px", fontWeight: "600", padding: "7px 10px",
                        borderRadius: "7px", cursor: "pointer", textAlign: "left",
                        transition: "border-color 0.15s, background-color 0.15s, color 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.backgroundColor = C.indigoLight }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderHover; e.currentTarget.style.backgroundColor = "#FFFFFF" }}
                >
                    + Add bullet point
                </button>
            </div>
        </div>
    )
}

// ── Card Header ──────────────────────────────────────────────
function CardHeader({ title, subtitle, onRemove }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
            <div>
                <p style={{ fontSize: "13px", fontWeight: "700", color: C.text, margin: 0 }}>{title}</p>
                {subtitle && <p style={{ fontSize: "11px", color: C.textMuted, margin: "2px 0 0 0" }}>{subtitle}</p>}
            </div>
            <button
                type="button"
                onClick={onRemove}
                title="Remove item"
                style={{
                    background: "none", border: "none", color: C.textFaint,
                    cursor: "pointer", fontSize: "18px", lineHeight: 1,
                    padding: "2px 6px", borderRadius: "4px", transition: "all 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = C.red; e.currentTarget.style.backgroundColor = C.redLight }}
                onMouseLeave={e => { e.currentTarget.style.color = C.textFaint; e.currentTarget.style.backgroundColor = "transparent" }}
            >×</button>
        </div>
    )
}

// ── Empty State ──────────────────────────────────────────────
function EmptyState({ icon, title, sub }) {
    return (
        <div style={{
            border: `1px dashed ${C.borderHover}`, borderRadius: "12px",
            backgroundColor: "#F8FAFC",
            padding: "24px 18px", textAlign: "center", marginBottom: "12px",
        }}>
            <div style={{ fontSize: "22px", marginBottom: "6px", color: C.indigo }}>{icon}</div>
            <p style={{ fontSize: "12px", fontWeight: "600", color: C.textSec, margin: "0 0 3px 0" }}>{title}</p>
            <p style={{ fontSize: "11px", color: C.textMuted, margin: 0 }}>{sub}</p>
        </div>
    )
}

// ── Section Panels ───────────────────────────────────────────

function PersonalSection({ data, onChange, onSummaryChange }) {
    const set = (field) => (val) => onChange({ ...data.personal, [field]: val })
    return (
        <div>
            <Field label="Full Name" value={data.personal?.name} onChange={set("name")} placeholder="Om Vilas Shinde" />
            <Field label="Role / Title" value={data.personal?.role} onChange={set("role")} placeholder="Senior Systems Architect" />
            
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                    <label style={{ ...lbl, marginBottom: 0 }}>Professional Summary</label>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <button
                            type="button"
                            onClick={() => {
                                const el = document.getElementById("summary_textarea")
                                toggleBoldSelection(el, data.summary || "", onSummaryChange)
                            }}
                            title="Bold selected text (Ctrl+B / Cmd+B)"
                            style={{
                                border: `1px solid ${C.border}`,
                                backgroundColor: "#FFFFFF",
                                color: C.text,
                                cursor: "pointer",
                                fontSize: "11.5px",
                                fontWeight: "700",
                                padding: "3px 8px",
                                borderRadius: "5px",
                                display: "flex",
                                alignItems: "center",
                                gap: "3px",
                                transition: "all 0.15s ease",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = C.indigo
                                e.currentTarget.style.backgroundColor = C.indigoLight
                                e.currentTarget.style.color = C.indigo
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = C.border
                                e.currentTarget.style.backgroundColor = "#FFFFFF"
                                e.currentTarget.style.color = C.text
                            }}
                        >
                            <strong>B</strong> Bold
                        </button>
                        <span style={{ fontSize: "10.5px", color: C.textMuted }}>
                            (Ctrl+B)
                        </span>
                    </div>
                </div>
                <textarea
                    id="summary_textarea"
                    value={data.summary || ""}
                    onChange={e => onSummaryChange(e.target.value)}
                    onKeyDown={e => {
                        if ((e.metaKey || e.ctrlKey) && (e.key === "b" || e.key === "B")) {
                            e.preventDefault()
                            toggleBoldSelection(e.target, data.summary || "", onSummaryChange)
                        }
                    }}
                    placeholder="Brief overview of your background, tech stack, and engineering impact..."
                    rows={3}
                    style={{
                        ...input,
                        height: "auto",
                        resize: "vertical",
                        lineHeight: "1.5",
                    }}
                    onFocus={e => {
                        e.target.style.borderColor = C.indigo
                        e.target.style.backgroundColor = "#FFFFFF"
                        e.target.style.boxShadow = `0 0 0 3px rgba(79, 70, 229, 0.12)`
                    }}
                    onBlur={e => {
                        e.target.style.borderColor = C.border
                        e.target.style.backgroundColor = "#F8FAFC"
                        e.target.style.boxShadow = "none"
                    }}
                />
            </div>

            <Field label="Email" value={data.personal?.email} onChange={set("email")} placeholder="alex.chase@example.com" type="email" />
            <Field label="Phone" value={data.personal?.phone} onChange={set("phone")} placeholder="+91 98765 43210" />
            <Field label="Location" value={data.personal?.location} onChange={set("location")} placeholder="Mumbai, Maharashtra" />
            <Field label="LinkedIn" value={data.personal?.linkedin} onChange={set("linkedin")} placeholder="linkedin.com/in/alexchase" />
            <Grid2>
                <Field label="GitHub" value={data.personal?.github} onChange={set("github")} placeholder="github.com/alexchase" />
                <Field label="Portfolio" value={data.personal?.portfolio} onChange={set("portfolio")} placeholder="alexchase.dev" />
            </Grid2>
        </div>
    )
}

function SkillsSection({ data, onChange }) {
    const set = (field) => (val) => onChange({ ...data.skills, [field]: val })
    return (
        <div>
            <div style={{
                backgroundColor: C.indigoLight, border: `1px solid #C7D2FE`,
                borderRadius: "10px", padding: "10px 14px", marginBottom: "14px",
            }}>
                <p style={{ fontSize: "11px", color: "#3730A3", margin: 0, lineHeight: "1.6", fontWeight: "500" }}>
                    💡 <strong>Pro Tip:</strong> Type a skill and press <kbd style={{ backgroundColor: "#FFFFFF", color: "#1E1B4B", padding: "1px 5px", borderRadius: "4px", fontSize: "10px", border: "1px solid #C7D2FE" }}>Enter</kbd> or <kbd style={{ backgroundColor: "#FFFFFF", color: "#1E1B4B", padding: "1px 5px", borderRadius: "4px", fontSize: "10px", border: "1px solid #C7D2FE" }}>,</kbd> to add chips.
                </p>
            </div>
            <TagInput label="Languages" values={data.skills?.languages || []} onChange={set("languages")} />
            <TagInput label="Backend & APIs" values={data.skills?.backend || []} onChange={set("backend")} />
            <TagInput label="Frontend & Libraries" values={data.skills?.frontend || data.skills?.frameworks || []} onChange={(val) => { set("frontend")(val); set("frameworks")(val); }} />
            <TagInput label="Databases" values={data.skills?.databases || []} onChange={set("databases")} />
            <TagInput label="AI / ML & Search Systems" values={data.skills?.ai || []} onChange={set("ai")} />
            <TagInput label="Tools & Platforms" values={data.skills?.tools || []} onChange={set("tools")} />
            <TagInput label="Other" values={data.skills?.other || []} onChange={set("other")} />
        </div>
    )
}

function ExperienceSection({ data, onChange }) {
    const add = () => onChange([...data.experience, {
        id: `exp_${Date.now()}`, role: "", company: "",
        location: "", startDate: "", endDate: "", current: false, bullets: [""],
    }])
    const update = (i, field, val) => {
        const u = [...data.experience]; u[i] = { ...u[i], [field]: val }; onChange(u)
    }
    const remove = (i) => onChange(data.experience.filter((_, idx) => idx !== i))

    return (
        <div>
            <AnimatePresence>
                {data.experience.map((exp, i) => (
                    <motion.div key={exp.id || i}
                        initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }} style={card}
                    >
                        <CardHeader
                            title={exp.role || `Experience #${i + 1}`}
                            subtitle={exp.company}
                            onRemove={() => remove(i)}
                        />
                        <Field label="Role / Position" value={exp.role} onChange={v => update(i, "role", v)} placeholder="Senior Software Engineer" />
                        <Field label="Company" value={exp.company} onChange={v => update(i, "company", v)} placeholder="TechNova Solutions" />
                        <Field label="Location" value={exp.location} onChange={v => update(i, "location", v)} placeholder="Bangalore, India" />
                        <Grid2>
                            <Field label="Start Date" value={exp.startDate} onChange={v => update(i, "startDate", v)} placeholder="Jan 2022" />
                            <Field
                                label="End Date"
                                value={exp.current ? "Present" : exp.endDate}
                                onChange={v => update(i, "endDate", v)}
                                placeholder="Dec 2023"
                            />
                        </Grid2>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                            <input
                                type="checkbox" checked={exp.current}
                                onChange={e => update(i, "current", e.target.checked)}
                                id={`cur_${i}`}
                                style={{ accentColor: C.indigo, cursor: "pointer", width: "15px", height: "15px" }}
                            />
                            <label htmlFor={`cur_${i}`} style={{ fontSize: "12px", color: C.textSec, cursor: "pointer", fontWeight: "500" }}>
                                Currently working in this role
                            </label>
                        </div>
                        <BulletList bullets={exp.bullets} onChange={v => update(i, "bullets", v)} />
                    </motion.div>
                ))}
            </AnimatePresence>

            {data.experience.length === 0 && (
                <EmptyState icon="💼" title="No experience added yet" sub="Add full-time roles, internships, or freelance work" />
            )}

            <button onClick={add} style={addBtn}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.backgroundColor = C.indigoLight }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderHover; e.currentTarget.style.backgroundColor = "#FFFFFF" }}
            >+ Add Experience</button>
        </div>
    )
}

function ProjectsSection({ data, onChange }) {
    const add = () => onChange([...data.projects, {
        id: `proj_${Date.now()}`, name: "", link: "", github: "", bullets: [""],
    }])
    const update = (i, field, val) => {
        const u = [...data.projects]; u[i] = { ...u[i], [field]: val }; onChange(u)
    }
    const remove = (i) => onChange(data.projects.filter((_, idx) => idx !== i))

    return (
        <div>
            <AnimatePresence>
                {data.projects.map((proj, i) => (
                    <motion.div key={proj.id || i}
                        initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }} style={card}
                    >
                        <CardHeader title={proj.name || `Project #${i + 1}`} onRemove={() => remove(i)} />
                        <Field label="Project Name" value={proj.name} onChange={v => update(i, "name", v)} placeholder="Phishing Detection System" />
                        <Grid2>
                            <Field label="Project Link / Demo (Optional)" value={proj.link} onChange={v => update(i, "link", v)} placeholder="https://demo.app or 'live'" />
                            <Field label="GitHub URL (Optional)" value={proj.github} onChange={v => update(i, "github", v)} placeholder="https://github.com/you/project" />
                        </Grid2>
                        <BulletList bullets={proj.bullets} onChange={v => update(i, "bullets", v)} />
                    </motion.div>
                ))}
            </AnimatePresence>

            {data.projects.length === 0 && (
                <EmptyState icon="🚀" title="No projects added yet" sub="Side projects demonstrate leadership and technical depth" />
            )}

            <button onClick={add} style={addBtn}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.backgroundColor = C.indigoLight }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderHover; e.currentTarget.style.backgroundColor = "#FFFFFF" }}
            >+ Add Project</button>
        </div>
    )
}

function EducationSection({ data, onChange }) {
    const add = () => onChange([...data.education, {
        id: `edu_${Date.now()}`, degree: "", institution: "",
        location: "", startYear: "", endYear: "", cgpa: "",
    }])
    const update = (i, field, val) => {
        const u = [...data.education]; u[i] = { ...u[i], [field]: val }; onChange(u)
    }
    const remove = (i) => onChange(data.education.filter((_, idx) => idx !== i))

    return (
        <div>
            <AnimatePresence>
                {data.education.map((edu, i) => (
                    <motion.div key={edu.id || i}
                        initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }} style={card}
                    >
                        <CardHeader title={edu.institution || `Education #${i + 1}`} subtitle={edu.degree} onRemove={() => remove(i)} />
                        <Field label="Degree" value={edu.degree} onChange={v => update(i, "degree", v)} placeholder="M.Sc. in Computer Science" />
                        <Field label="Institution" value={edu.institution} onChange={v => update(i, "institution", v)} placeholder="Stanford University" />
                        <Field label="Location" value={edu.location} onChange={v => update(i, "location", v)} placeholder="Stanford, CA" />
                        <Grid3>
                            <Field label="Start Year" value={edu.startYear} onChange={v => update(i, "startYear", v)} placeholder="2017" />
                            <Field label="End Year" value={edu.endYear} onChange={v => update(i, "endYear", v)} placeholder="2019" />
                            <Field label="CGPA / Grade" value={edu.cgpa} onChange={v => update(i, "cgpa", v)} placeholder="3.9 / 4.0" />
                        </Grid3>
                    </motion.div>
                ))}
            </AnimatePresence>

            {data.education.length === 0 && (
                <EmptyState icon="🎓" title="No education added yet" sub="Degrees, diplomas, and college coursework" />
            )}

            <button onClick={add} style={addBtn}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.backgroundColor = C.indigoLight }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderHover; e.currentTarget.style.backgroundColor = "#FFFFFF" }}
            >+ Add Education</button>
        </div>
    )
}

function AchievementsSection({ data, onChange }) {
    const update = (i, val) => { const u = [...data.achievements]; u[i] = val; onChange(u) }
    const add = () => onChange([...data.achievements, ""])
    const remove = (i) => onChange(data.achievements.filter((_, idx) => idx !== i))

    return (
        <div>
            <div style={{
                backgroundColor: C.indigoLight, border: `1px solid #C7D2FE`,
                borderRadius: "10px", padding: "10px 14px", marginBottom: "14px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
                <p style={{ fontSize: "11px", color: "#3730A3", margin: 0, lineHeight: "1.6", fontWeight: "500" }}>
                    🏆 Hackathons, scholarships, open-source milestones, patents, and awards.
                </p>
                <span style={{ fontSize: "10px", color: "#4F46E5", fontWeight: "700" }}>
                    Ctrl+B to Bold
                </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {data.achievements.map((a, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                        style={{ display: "flex", gap: "8px", alignItems: "center" }}
                    >
                        <span style={{ color: C.indigo, fontSize: "13px", flexShrink: 0 }}>✦</span>
                        <input
                            id={`ach_input_${i}`}
                            value={a}
                            onChange={e => update(i, e.target.value)}
                            onKeyDown={e => {
                                if ((e.metaKey || e.ctrlKey) && (e.key === "b" || e.key === "B")) {
                                    e.preventDefault()
                                    toggleBoldSelection(e.target, a, val => update(i, val))
                                }
                            }}
                            placeholder="Awarded Engineer of the Year at TechNova for cloud architecture..."
                            style={{ ...input, flex: 1 }}
                            onFocus={e => {
                                e.target.style.borderColor = C.indigo
                                e.target.style.backgroundColor = "#FFFFFF"
                                e.target.style.boxShadow = `0 0 0 3px rgba(79, 70, 229, 0.12)`
                            }}
                            onBlur={e => {
                                e.target.style.borderColor = C.border
                                e.target.style.backgroundColor = "#F8FAFC"
                                e.target.style.boxShadow = "none"
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => {
                                const el = document.getElementById(`ach_input_${i}`)
                                toggleBoldSelection(el, a, val => update(i, val))
                            }}
                            title="Bold selected text (Ctrl+B / Cmd+B)"
                            style={{
                                border: `1px solid ${C.border}`,
                                backgroundColor: "#FFFFFF",
                                color: C.text,
                                cursor: "pointer",
                                fontSize: "11.5px",
                                fontWeight: "700",
                                padding: "6px 9px",
                                borderRadius: "6px",
                                lineHeight: 1,
                                flexShrink: 0,
                                transition: "all 0.15s ease",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = C.indigo
                                e.currentTarget.style.backgroundColor = C.indigoLight
                                e.currentTarget.style.color = C.indigo
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = C.border
                                e.currentTarget.style.backgroundColor = "#FFFFFF"
                                e.currentTarget.style.color = C.text
                            }}
                        >
                            B
                        </button>
                        <button
                            type="button"
                            onClick={() => remove(i)}
                            title="Remove achievement"
                            style={{
                                background: "none", border: "none", color: C.textFaint,
                                cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: "4px 6px",
                                borderRadius: "4px", transition: "all 0.15s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.color = C.red; e.currentTarget.style.backgroundColor = C.redLight }}
                            onMouseLeave={e => { e.currentTarget.style.color = C.textFaint; e.currentTarget.style.backgroundColor = "transparent" }}
                        >×</button>
                    </motion.div>
                ))}
            </div>
            <button onClick={add} style={{ ...addBtn, marginTop: "12px" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.backgroundColor = C.indigoLight }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderHover; e.currentTarget.style.backgroundColor = "#FFFFFF" }}
            >+ Add Achievement</button>
        </div>
    )
}

function CertificationsSection({ data, onChange }) {
    const add = () => onChange([...data.certifications, { id: `cert_${Date.now()}`, name: "", issuer: "", year: "" }])
    const update = (i, field, val) => {
        const u = [...data.certifications]; u[i] = { ...u[i], [field]: val }; onChange(u)
    }
    const remove = (i) => onChange(data.certifications.filter((_, idx) => idx !== i))

    return (
        <div>
            <AnimatePresence>
                {data.certifications.map((cert, i) => (
                    <motion.div key={cert.id || i}
                        initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }} style={card}
                    >
                        <CardHeader title={cert.name || `Certification #${i + 1}`} subtitle={cert.issuer} onRemove={() => remove(i)} />
                        <Field label="Certification Name" value={cert.name} onChange={v => update(i, "name", v)} placeholder="AWS Certified Solutions Architect" />
                        <Grid2>
                            <Field label="Issuer / Authority" value={cert.issuer} onChange={v => update(i, "issuer", v)} placeholder="Amazon Web Services" />
                            <Field label="Year / Date" value={cert.year} onChange={v => update(i, "year", v)} placeholder="2024" />
                        </Grid2>
                    </motion.div>
                ))}
            </AnimatePresence>

            {data.certifications.length === 0 && (
                <EmptyState icon="📜" title="No certifications added yet" sub="AWS, Google Cloud, Cisco, Meta, or academic credentials" />
            )}

            <button onClick={add} style={addBtn}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.backgroundColor = C.indigoLight }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderHover; e.currentTarget.style.backgroundColor = "#FFFFFF" }}
            >+ Add Certification</button>
        </div>
    )
}

// ── Resume ATS Score ─────────────────────────────────────────
function ResumeScore({ data }) {
    const [open, setOpen] = useState(false)

    const checks = [
        { label: "Name filled", pass: !!data.personal?.name },
        { label: "Email filled", pass: !!data.personal?.email },
        { label: "Role / Title added", pass: !!data.personal?.role },
        { label: "LinkedIn profile added", pass: !!data.personal?.linkedin },
        { label: "GitHub or Portfolio link", pass: !!(data.personal?.github || data.personal?.portfolio) },
        { label: "3+ Languages listed", pass: (data.skills?.languages?.length || 0) >= 3 },
        { label: "2+ Frameworks listed", pass: (data.skills?.frameworks?.length || 0) >= 2 || (data.skills?.frontend?.length || 0) >= 2 },
        { label: "1+ Work experiences", pass: (data.experience?.length || 0) >= 1 },
        { label: "Quantified metric bullets", pass: (data.experience || []).some(e => (e.bullets || []).some(b => /\d/.test(b))) },
        { label: "1+ Technical projects", pass: (data.projects?.length || 0) >= 1 },
        { label: "Education credentials", pass: (data.education?.length || 0) >= 1 },
        { label: "CGPA or honors added", pass: (data.education || []).some(e => !!e.cgpa) },
    ]

    const score = Math.round(checks.filter(c => c.pass).length / checks.length * 100)
    const failing = checks.filter(c => !c.pass)
    const color = score >= 80 ? C.green : score >= 55 ? C.amber : C.red
    const bgColor = score >= 80 ? C.greenLight : score >= 55 ? C.amberLight : C.redLight
    const borderColor = score >= 80 ? C.greenBorder : score >= 55 ? "#FDE68A" : C.redBorder
    const label = score >= 80 ? "Strong ATS" : score >= 55 ? "Good" : "Needs Work"

    return (
        <div style={{
            margin: "12px 14px 6px 14px",
            backgroundColor: "#FFFFFF",
            border: `1px solid ${C.border}`,
            borderRadius: "12px",
            padding: "12px 14px",
            flexShrink: 0,
            cursor: "pointer",
            boxShadow: "0 1px 3px rgba(15, 23, 42, 0.04)",
            transition: "all 0.15s ease",
        }} onClick={() => setOpen(o => !o)}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="font-comfortaa" style={{ fontSize: "12px", fontWeight: "700", color: C.text }}>
                        Resume Score
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "800", color }}>{score}%</span>
                    <span style={{
                        fontSize: "10px", color,
                        backgroundColor: bgColor, padding: "2px 7px",
                        borderRadius: "10px", fontWeight: "700",
                        border: `1px solid ${borderColor}`,
                    }}>{label}</span>
                </div>
                <span style={{ fontSize: "10px", color: C.textMuted, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
                    ▼
                </span>
            </div>

            {/* Progress Bar */}
            <div style={{ marginTop: "10px", height: "5px", backgroundColor: "#F1F5F9", borderRadius: "3px", overflow: "hidden" }}>
                <motion.div
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        height: "100%",
                        background: score >= 80
                            ? "linear-gradient(90deg, #10B981, #059669)"
                            : score >= 55
                                ? "linear-gradient(90deg, #F59E0B, #D97706)"
                                : "linear-gradient(90deg, #EF4444, #DC2626)",
                        borderRadius: "3px",
                    }}
                />
            </div>

            {/* Micro Dots */}
            <div style={{ display: "flex", gap: "3px", marginTop: "5px" }}>
                {checks.map((c, i) => (
                    <div key={i} style={{
                        flex: 1, height: "3px", borderRadius: "2px",
                        backgroundColor: c.pass ? color : "#E2E8F0",
                        transition: "background-color 0.3s",
                    }} />
                ))}
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: "hidden" }}
                    >
                        <div style={{ paddingTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                            {failing.length === 0
                                ? <span style={{ fontSize: "11px", color: C.green, fontWeight: "600" }}>✓ Perfect! Resume is ready for ATS scanners.</span>
                                : failing.map((c, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ color: C.amber, fontSize: "10px", flexShrink: 0 }}>○</span>
                                        <span style={{ fontSize: "11px", color: C.textMuted }}>{c.label}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// ── Autosave Toast ────────────────────────────────────────────
export function AutosaveToast({ saved }) {
    return (
        <AnimatePresence>
            {saved && (
                <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: "fixed", bottom: "88px", left: "20px",
                        backgroundColor: "#0F172A",
                        border: `1px solid #334155`,
                        borderRadius: "20px", padding: "6px 14px",
                        fontSize: "11px", color: "#F8FAFC", zIndex: 999,
                        pointerEvents: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                >
                    ✓ Draft saved locally
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// ── Restore Banner ────────────────────────────────────────────
export function RestoreBanner({ onRestore, onDismiss }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
                margin: "10px 14px 0 14px",
                backgroundColor: C.indigoLight,
                border: `1px solid #C7D2FE`,
                borderRadius: "10px", padding: "11px 14px",
                flexShrink: 0,
            }}
        >
            <p style={{ fontSize: "12px", color: "#1E1B4B", marginBottom: "9px", margin: "0 0 9px 0", fontWeight: "600" }}>
                📋 Found an autosaved resume draft. Restore it?
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={onRestore} style={{
                    flex: 1, padding: "7px", borderRadius: "7px", fontSize: "12px",
                    backgroundColor: C.indigo, color: "#fff", border: "none",
                    cursor: "pointer", fontWeight: "600",
                }}>Restore Draft</button>
                <button onClick={onDismiss} style={{
                    padding: "7px 12px", borderRadius: "7px", fontSize: "12px",
                    backgroundColor: "#FFFFFF", color: C.textSec,
                    border: `1px solid #C7D2FE`, cursor: "pointer", fontWeight: "500",
                }}>Dismiss</button>
            </div>
        </motion.div>
    )
}

// ── Template Switcher ─────────────────────────────────────────
export function TemplateSwitcher({ activeId, onSwitch, meta }) {
    return (
        <div style={{
            display: "inline-flex",
            backgroundColor: "#F1F5F9",
            padding: "3px",
            borderRadius: "10px",
            gap: "2px",
            border: "1px solid #E2E8F0",
        }}>
            {Object.entries(meta).map(([id, m]) => {
                const isActive = activeId === id
                return (
                    <button key={id} onClick={() => onSwitch(id)}
                        style={{
                            padding: "5px 12px",
                            borderRadius: "7px",
                            fontSize: "11.5px",
                            backgroundColor: isActive ? "#FFFFFF" : "transparent",
                            color: isActive ? "#0F172A" : "#64748B",
                            border: isActive ? "1px solid #CBD5E1" : "1px solid transparent",
                            boxShadow: isActive ? "0 1px 3px rgba(15, 23, 42, 0.08)" : "none",
                            cursor: "pointer",
                            fontWeight: isActive ? "700" : "500",
                            transition: "all 0.15s ease",
                        }}
                    >
                        {m.name}
                    </button>
                )
            })}
        </div>
    )
}

// ── Section Tabs ──────────────────────────────────────────────
const SECTIONS = [
    { id: "personal", label: "Personal Info", icon: "◎" },
    { id: "skills", label: "Skills", icon: "◈" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
    { id: "certifications", label: "Certifications", icon: "📜" },
]

function getSectionCompletion(data) {
    return {
        personal: !!(data.personal?.name && data.personal?.email && data.personal?.role),
        skills: (data.skills?.languages?.length || 0) >= 2,
        experience: (data.experience?.length || 0) >= 1,
        projects: (data.projects?.length || 0) >= 1,
        education: (data.education?.length || 0) >= 1,
        achievements: (data.achievements?.filter(Boolean).length || 0) >= 1,
        certifications: (data.certifications?.filter(c => c.name).length || 0) >= 1,
    }
}

// ── Main Export ───────────────────────────────────────────────
export default function BuilderForm({
    data, setData, activeSection, setActiveSection,
    downloading, onDownload, onBack, templateMeta, activeTemplateId,
    isMobile,
}) {
    const [savedToast, setSavedToast] = useState(false)
    const [showRestore, setShowRestore] = useState(false)
    const [pendingDraft, setPendingDraft] = useState(null)

    const completion = getSectionCompletion(data)

    const updateSection = useCallback((section) => (val) => {
        setData(prev => ({ ...prev, [section]: val }))
    }, [setData])

    const updatePersonal = useCallback((val) => {
        setData(prev => ({ ...prev, personal: val }))
    }, [setData])

    const updateSummary = useCallback((val) => {
        setData(prev => ({ ...prev, summary: val }))
    }, [setData])

    const renderSection = () => {
        switch (activeSection) {
            case "personal": return <PersonalSection data={data} onChange={updatePersonal} onSummaryChange={updateSummary} />
            case "skills": return <SkillsSection data={data} onChange={updateSection("skills")} />
            case "experience": return <ExperienceSection data={data} onChange={updateSection("experience")} />
            case "projects": return <ProjectsSection data={data} onChange={updateSection("projects")} />
            case "education": return <EducationSection data={data} onChange={updateSection("education")} />
            case "achievements": return <AchievementsSection data={data} onChange={updateSection("achievements")} />
            case "certifications": return <CertificationsSection data={data} onChange={updateSection("certifications")} />
            default: return null
        }
    }

    return (
        <div style={{
            width: isMobile ? "100%" : "390px", flexShrink: 0,
            backgroundColor: C.panel,
            borderRight: `1px solid ${C.border}`,
            display: "flex", flexDirection: "column",
            height: isMobile ? "calc(100vh - 56px)" : "100vh",
            overflow: "hidden",
            boxShadow: "2px 0 16px rgba(15, 23, 42, 0.03)",
        }}>
            <AutosaveToast saved={savedToast} />

            {/* Top Bar */}
            <div style={{
                padding: "12px 16px",
                borderBottom: `1px solid ${C.border}`,
                flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                backgroundColor: "#FFFFFF",
            }}>
                <button onClick={onBack} style={{
                    background: "none", border: "none", color: C.textSec,
                    cursor: "pointer", fontSize: "13px", padding: "4px 0",
                    display: "flex", alignItems: "center", gap: "6px",
                    fontWeight: "600", transition: "color 0.15s",
                }}
                    onMouseEnter={e => e.currentTarget.style.color = C.indigo}
                    onMouseLeave={e => e.currentTarget.style.color = C.textSec}
                >
                    <span style={{ fontSize: "14px" }}>←</span> Back to Templates
                </button>
                <div style={{
                    fontSize: "11px", color: C.indigo,
                    backgroundColor: C.indigoLight, padding: "3px 10px",
                    borderRadius: "20px", fontWeight: "700",
                    border: "1px solid #C7D2FE",
                }}>
                    {templateMeta?.name}
                </div>
            </div>

            {/* Restore Banner */}
            {showRestore && (
                <RestoreBanner
                    onRestore={() => { setData(pendingDraft); setShowRestore(false) }}
                    onDismiss={() => setShowRestore(false)}
                />
            )}

            {/* Resume Score */}
            <ResumeScore data={data} />

            {/* Section Tabs */}
            <div style={{
                display: "flex", flexDirection: "column", gap: "2px",
                padding: "6px 12px 0 12px", flexShrink: 0,
            }}>
                {SECTIONS.map(s => {
                    const isActive = activeSection === s.id
                    const isDone = completion[s.id]
                    return (
                        <button key={s.id} onClick={() => setActiveSection(s.id)}
                            style={{
                                display: "flex", alignItems: "center", gap: "10px",
                                padding: "7px 12px", borderRadius: "8px", border: "none",
                                backgroundColor: isActive ? C.indigoLight : "transparent",
                                color: isActive ? C.indigo : C.textSec,
                                cursor: "pointer", fontSize: "12.5px",
                                fontWeight: isActive ? "700" : "500",
                                textAlign: "left", transition: "all 0.12s",
                                borderLeft: isActive ? `3px solid ${C.indigo}` : "3px solid transparent",
                            }}
                            onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = "#F8FAFC" }}
                            onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = "transparent" }}
                        >
                            <span style={{ fontSize: "13px", color: isActive ? C.indigo : C.textFaint }}>{s.icon}</span>
                            <span style={{ flex: 1 }}>{s.label}</span>
                            {isDone && (
                                <span style={{
                                    width: "16px", height: "16px", borderRadius: "50%",
                                    backgroundColor: C.greenLight, color: C.green,
                                    border: `1px solid ${C.greenBorder}`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "9px", fontWeight: "800",
                                }}>✓</span>
                            )}
                            {!isDone && isActive && (
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: C.indigo }} />
                            )}
                        </button>
                    )
                })}
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: C.border, margin: "8px 12px", flexShrink: 0 }} />

            {/* Form Area */}
            <div style={{
                flex: 1, overflowY: "auto", padding: "8px 14px 16px 14px",
                scrollbarWidth: "thin", scrollbarColor: `${C.border} transparent`,
            }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 6 }}
                        transition={{ duration: 0.12 }}
                    >
                        {renderSection()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Download Button Area */}
            <div style={{
                padding: "12px 14px 14px 14px",
                borderTop: `1px solid ${C.border}`,
                flexShrink: 0,
                backgroundColor: "#FFFFFF",
            }}>
                <button
                    onClick={onDownload}
                    disabled={downloading}
                    style={{
                        width: "100%", padding: "12px",
                        background: downloading ? "#E2E8F0" : `linear-gradient(135deg, ${C.indigo} 0%, ${C.violet} 100%)`,
                        color: downloading ? C.textMuted : "#FFFFFF",
                        border: "none", borderRadius: "10px",
                        fontSize: "13.5px", fontWeight: "700",
                        cursor: downloading ? "not-allowed" : "pointer",
                        boxShadow: downloading ? "none" : `0 4px 16px rgba(79, 70, 229, 0.28)`,
                        transition: "all 0.2s",
                        letterSpacing: "0.01em",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                    }}
                >
                    <span>{downloading ? "⏳" : "⬇"}</span>
                    <span>{downloading ? "Generating 1-Click PDF..." : "1-Click Download PDF — Free"}</span>
                </button>
                <p style={{ textAlign: "center", fontSize: "11px", color: C.textMuted, marginTop: "6px", fontWeight: "500", margin: "6px 0 0 0" }}>
                    Instant 1-Click Download · Zero Watermark · ATS Ready
                </p>
            </div>
        </div>
    )
}
