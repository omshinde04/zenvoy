// components/builder/BuilderForm.jsx
"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const C = {
    bg: "#080F1C",
    panel: "#0B1120",
    card: "#0D1526",
    cardHover: "#111E33",
    border: "#1A2744",
    borderHover: "#243558",
    indigo: "#6366F1",
    violet: "#8B5CF6",
    text: "#F1F5F9",
    textSec: "#94A3B8",
    textMuted: "#4A5568",
    textFaint: "#2D3748",
    green: "#10B981",
    amber: "#F59E0B",
}

const input = {
    width: "100%",
    backgroundColor: "#060D1A",
    border: `1px solid ${C.border}`,
    color: C.text,
    fontSize: "13px",
    padding: "9px 12px",
    borderRadius: "8px",
    outline: "none",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    transition: "border-color 0.15s, box-shadow 0.15s",
}

const lbl = {
    fontSize: "10px",
    fontWeight: "600",
    color: C.textMuted,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "5px",
    display: "block",
}

const card = {
    backgroundColor: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "10px",
}

const addBtn = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: `1px dashed ${C.border}`,
    background: "none",
    color: C.indigo,
    fontSize: "12px",
    cursor: "pointer",
    fontWeight: "500",
    letterSpacing: "0.02em",
    transition: "border-color 0.15s, background 0.15s",
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
                placeholder={placeholder || ""}
                style={{
                    ...input,
                    borderColor: focused ? C.indigo : C.border,
                    boxShadow: focused ? `0 0 0 3px ${C.indigo}18` : "none",
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
    const [input, setInput] = useState("")
    const [focused, setFocused] = useState(false)

    const handleKey = (e) => {
        if ((e.key === "Enter" || e.key === ",") && input.trim()) {
            e.preventDefault()
            if (!values.includes(input.trim())) onChange([...values, input.trim()])
            setInput("")
        }
        if (e.key === "Backspace" && !input && values.length) {
            onChange(values.slice(0, -1))
        }
    }

    return (
        <div style={{ marginBottom: "12px" }}>
            <label style={lbl}>{label}</label>
            <div style={{
                display: "flex", flexWrap: "wrap", gap: "5px",
                backgroundColor: "#060D1A",
                border: `1px solid ${focused ? C.indigo : C.border}`,
                borderRadius: "8px", padding: "7px 8px",
                minHeight: "42px", alignItems: "center",
                boxShadow: focused ? `0 0 0 3px ${C.indigo}18` : "none",
                transition: "border-color 0.15s, box-shadow 0.15s",
                cursor: "text",
            }}
                onClick={() => document.getElementById(`tag_${label}`)?.focus()}
            >
                {values.map((v, i) => (
                    <span key={i} style={{
                        backgroundColor: "#1A2F50",
                        color: "#7DD3FC",
                        fontSize: "11px", padding: "3px 9px", borderRadius: "5px",
                        display: "flex", alignItems: "center", gap: "5px",
                        border: "1px solid #1E3A5F",
                        fontWeight: "500",
                    }}>
                        {v}
                        <span
                            onClick={() => onChange(values.filter((_, idx) => idx !== i))}
                            style={{ cursor: "pointer", color: "#60A5FA", fontSize: "13px", lineHeight: 1, fontWeight: "700" }}
                        >×</span>
                    </span>
                ))}
                <input
                    id={`tag_${label}`}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={values.length === 0 ? "Type and press Enter" : ""}
                    style={{
                        ...input, border: "none", padding: "2px 4px",
                        width: "auto", flex: 1, minWidth: "80px",
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
        <div style={{ marginBottom: "4px" }}>
            <label style={lbl}>Bullet Points</label>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {bullets.map((b, i) => (
                    <div key={i} style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                        <span style={{ color: C.indigo, fontSize: "12px", flexShrink: 0, marginTop: "1px" }}>–</span>
                        <input
                            value={b}
                            onChange={e => update(i, e.target.value)}
                            placeholder="Describe impact with numbers..."
                            style={{ ...input, flex: 1 }}
                            onFocus={e => { e.target.style.borderColor = C.indigo; e.target.style.boxShadow = `0 0 0 3px ${C.indigo}18` }}
                            onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "none" }}
                        />
                        <span
                            onClick={() => remove(i)}
                            style={{ color: C.textMuted, cursor: "pointer", fontSize: "16px", lineHeight: 1, flexShrink: 0, padding: "2px" }}
                        >×</span>
                    </div>
                ))}
                <button
                    onClick={add}
                    style={{
                        background: "none", border: `1px dashed ${C.border}`,
                        color: C.textMuted, fontSize: "11px", padding: "7px",
                        borderRadius: "7px", cursor: "pointer", textAlign: "left",
                        transition: "border-color 0.15s, color 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.color = C.indigo }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textMuted }}
                >
                    + Add bullet
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
                <p style={{ fontSize: "12px", fontWeight: "600", color: C.textSec, margin: 0 }}>{title}</p>
                {subtitle && <p style={{ fontSize: "10px", color: C.textMuted, margin: "1px 0 0 0" }}>{subtitle}</p>}
            </div>
            <button
                onClick={onRemove}
                style={{
                    background: "none", border: "none", color: C.textMuted,
                    cursor: "pointer", fontSize: "18px", lineHeight: 1,
                    padding: "0 2px", transition: "color 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#EF4444"}
                onMouseLeave={e => e.currentTarget.style.color = C.textMuted}
            >×</button>
        </div>
    )
}

// ── Empty State ──────────────────────────────────────────────
function EmptyState({ icon, title, sub }) {
    return (
        <div style={{
            border: `1px dashed ${C.border}`, borderRadius: "12px",
            padding: "28px 20px", textAlign: "center", marginBottom: "10px",
        }}>
            <div style={{ fontSize: "24px", marginBottom: "8px", opacity: 0.4 }}>{icon}</div>
            <p style={{ fontSize: "12px", color: C.textMuted, margin: "0 0 3px 0" }}>{title}</p>
            <p style={{ fontSize: "11px", color: C.textFaint, margin: 0 }}>{sub}</p>
        </div>
    )
}

// ── Section Panels ───────────────────────────────────────────

function PersonalSection({ data, onChange }) {
    const set = (field) => (val) => onChange({ ...data.personal, [field]: val })
    return (
        <div>
            <Field label="Full Name" value={data.personal.name} onChange={set("name")} placeholder="Rahul Sharma" />
            <Field label="Role / Title" value={data.personal.role} onChange={set("role")} placeholder="Software Engineer" />
            <Field label="Email" value={data.personal.email} onChange={set("email")} placeholder="rahul@email.com" type="email" />
            <Field label="Phone" value={data.personal.phone} onChange={set("phone")} placeholder="+91 98765 43210" />
            <Field label="Location" value={data.personal.location} onChange={set("location")} placeholder="Mumbai, Maharashtra" />
            <Field label="LinkedIn" value={data.personal.linkedin} onChange={set("linkedin")} placeholder="linkedin.com/in/rahul" />
            <Grid2>
                <Field label="GitHub" value={data.personal.github} onChange={set("github")} placeholder="github.com/rahul" />
                <Field label="Portfolio" value={data.personal.portfolio} onChange={set("portfolio")} placeholder="rahul.dev" />
            </Grid2>
        </div>
    )
}

function SkillsSection({ data, onChange }) {
    const set = (field) => (val) => onChange({ ...data.skills, [field]: val })
    return (
        <div>
            <div style={{
                backgroundColor: C.card, border: `1px solid ${C.border}`,
                borderRadius: "10px", padding: "12px 14px", marginBottom: "14px",
            }}>
                <p style={{ fontSize: "11px", color: C.textMuted, margin: 0, lineHeight: "1.7" }}>
                    Type a skill and press <kbd style={{ backgroundColor: C.border, color: C.textSec, padding: "1px 5px", borderRadius: "4px", fontSize: "10px" }}>Enter</kbd> or <kbd style={{ backgroundColor: C.border, color: C.textSec, padding: "1px 5px", borderRadius: "4px", fontSize: "10px" }}>,</kbd> to add it.
                </p>
            </div>
            <TagInput label="Languages" values={data.skills.languages} onChange={set("languages")} />
            <TagInput label="Frameworks & Libraries" values={data.skills.frameworks} onChange={set("frameworks")} />
            <TagInput label="Tools & Platforms" values={data.skills.tools} onChange={set("tools")} />
            <TagInput label="Other" values={data.skills.other} onChange={set("other")} />
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
                            title={exp.role || `Experience ${i + 1}`}
                            subtitle={exp.company}
                            onRemove={() => remove(i)}
                        />
                        <Field label="Role / Position" value={exp.role} onChange={v => update(i, "role", v)} placeholder="Software Engineer" />
                        <Field label="Company" value={exp.company} onChange={v => update(i, "company", v)} placeholder="Google" />
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
                                style={{ accentColor: C.indigo, cursor: "pointer", width: "14px", height: "14px" }}
                            />
                            <label style={{ fontSize: "12px", color: C.textMuted, cursor: "pointer" }}>
                                Currently working here
                            </label>
                        </div>
                        <BulletList bullets={exp.bullets} onChange={v => update(i, "bullets", v)} />
                    </motion.div>
                ))}
            </AnimatePresence>

            {data.experience.length === 0 && (
                <EmptyState icon="◆" title="No experience added yet" sub="Add internships, jobs or part-time roles" />
            )}

            <button onClick={add} style={addBtn}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.background = `${C.indigo}0D` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "none" }}
            >+ Add Experience</button>
        </div>
    )
}

function ProjectsSection({ data, onChange }) {
    const add = () => onChange([...data.projects, {
        id: `proj_${Date.now()}`, name: "", techStack: "",
        description: "", link: "", github: "", bullets: [""],
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
                        <CardHeader title={proj.name || `Project ${i + 1}`} onRemove={() => remove(i)} />
                        <Field label="Project Name" value={proj.name} onChange={v => update(i, "name", v)} placeholder="Zenvoy" />
                        <Field label="Tech Stack" value={proj.techStack} onChange={v => update(i, "techStack", v)} placeholder="React, Node.js, PostgreSQL" />
                        <Field label="Short Description" value={proj.description} onChange={v => update(i, "description", v)} placeholder="One line about this project" />
                        <Grid2>
                            <Field label="GitHub" value={proj.github} onChange={v => update(i, "github", v)} placeholder="github.com/you/proj" />
                            <Field label="Live Link" value={proj.link} onChange={v => update(i, "link", v)} placeholder="proj.vercel.app" />
                        </Grid2>
                        <BulletList bullets={proj.bullets} onChange={v => update(i, "bullets", v)} />
                    </motion.div>
                ))}
            </AnimatePresence>

            {data.projects.length === 0 && (
                <EmptyState icon="◉" title="No projects added yet" sub="Side projects show initiative — add yours" />
            )}

            <button onClick={add} style={addBtn}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.background = `${C.indigo}0D` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "none" }}
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
                        <CardHeader title={edu.institution || `Education ${i + 1}`} subtitle={edu.degree} onRemove={() => remove(i)} />
                        <Field label="Degree" value={edu.degree} onChange={v => update(i, "degree", v)} placeholder="B.Tech in Computer Science" />
                        <Field label="Institution" value={edu.institution} onChange={v => update(i, "institution", v)} placeholder="IIT Bombay" />
                        <Field label="Location" value={edu.location} onChange={v => update(i, "location", v)} placeholder="Mumbai" />
                        <Grid3>
                            <Field label="Start Year" value={edu.startYear} onChange={v => update(i, "startYear", v)} placeholder="2020" />
                            <Field label="End Year" value={edu.endYear} onChange={v => update(i, "endYear", v)} placeholder="2024" />
                            <Field label="CGPA" value={edu.cgpa} onChange={v => update(i, "cgpa", v)} placeholder="8.5" />
                        </Grid3>
                    </motion.div>
                ))}
            </AnimatePresence>

            <button onClick={add} style={addBtn}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.background = `${C.indigo}0D` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "none" }}
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
                backgroundColor: C.card, border: `1px solid ${C.border}`,
                borderRadius: "10px", padding: "12px 14px", marginBottom: "14px",
            }}>
                <p style={{ fontSize: "11px", color: C.textMuted, margin: 0, lineHeight: "1.7" }}>
                    Hackathons, scholarships, open source contributions, awards — anything that stands out.
                </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {data.achievements.map((a, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                        style={{ display: "flex", gap: "8px", alignItems: "center" }}
                    >
                        <span style={{ color: C.indigo, fontSize: "12px", flexShrink: 0 }}>✦</span>
                        <input
                            value={a}
                            onChange={e => update(i, e.target.value)}
                            placeholder="Won 1st place at HackNITK 2023 among 200+ teams"
                            style={{ ...input, flex: 1 }}
                            onFocus={e => { e.target.style.borderColor = C.indigo; e.target.style.boxShadow = `0 0 0 3px ${C.indigo}18` }}
                            onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "none" }}
                        />
                        <span onClick={() => remove(i)}
                            style={{ color: C.textMuted, cursor: "pointer", fontSize: "16px", lineHeight: 1 }}
                            onMouseEnter={e => e.currentTarget.style.color = "#EF4444"}
                            onMouseLeave={e => e.currentTarget.style.color = C.textMuted}
                        >×</span>
                    </motion.div>
                ))}
            </div>
            <button onClick={add} style={{ ...addBtn, marginTop: "10px" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.background = `${C.indigo}0D` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "none" }}
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
                        <CardHeader title={cert.name || `Certification ${i + 1}`} subtitle={cert.issuer} onRemove={() => remove(i)} />
                        <Field label="Certification Name" value={cert.name} onChange={v => update(i, "name", v)} placeholder="AWS Solutions Architect" />
                        <Grid2>
                            <Field label="Issuer" value={cert.issuer} onChange={v => update(i, "issuer", v)} placeholder="Amazon" />
                            <Field label="Year" value={cert.year} onChange={v => update(i, "year", v)} placeholder="2024" />
                        </Grid2>
                    </motion.div>
                ))}
            </AnimatePresence>

            {data.certifications.length === 0 && (
                <EmptyState icon="◐" title="No certifications yet" sub="AWS, Google Cloud, Meta — add them here" />
            )}

            <button onClick={add} style={addBtn}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.indigo; e.currentTarget.style.background = `${C.indigo}0D` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "none" }}
            >+ Add Certification</button>
        </div>
    )
}

// ── Resume Score ─────────────────────────────────────────────
function ResumeScore({ data }) {
    const [open, setOpen] = useState(false)

    const checks = [
        { label: "Name filled", pass: !!data.personal?.name },
        { label: "Email filled", pass: !!data.personal?.email },
        { label: "Role filled", pass: !!data.personal?.role },
        { label: "LinkedIn added", pass: !!data.personal?.linkedin },
        { label: "GitHub or Portfolio", pass: !!(data.personal?.github || data.personal?.portfolio) },
        { label: "3+ Languages", pass: (data.skills?.languages?.length || 0) >= 3 },
        { label: "2+ Frameworks", pass: (data.skills?.frameworks?.length || 0) >= 2 },
        { label: "Has experience", pass: (data.experience?.length || 0) >= 1 },
        { label: "Quantified bullets", pass: (data.experience || []).some(e => (e.bullets || []).some(b => /\d/.test(b))) },
        { label: "Has project", pass: (data.projects?.length || 0) >= 1 },
        { label: "Has education", pass: (data.education?.length || 0) >= 1 },
        { label: "CGPA added", pass: (data.education || []).some(e => !!e.cgpa) },
    ]

    const score = Math.round(checks.filter(c => c.pass).length / checks.length * 100)
    const failing = checks.filter(c => !c.pass)
    const color = score >= 80 ? C.green : score >= 55 ? C.amber : "#EF4444"
    const label = score >= 80 ? "Strong" : score >= 55 ? "Good" : "Needs Work"

    return (
        <div style={{
            margin: "10px 12px",
            backgroundColor: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: "12px",
            padding: "12px 14px",
            flexShrink: 0,
            cursor: "pointer",
        }} onClick={() => setOpen(o => !o)}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: C.textSec, letterSpacing: "0.04em" }}>
                        Resume Score
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color }}>{score}</span>
                    <span style={{
                        fontSize: "10px", color,
                        backgroundColor: `${color}18`, padding: "1px 7px",
                        borderRadius: "4px", fontWeight: "600",
                    }}>{label}</span>
                </div>
                <span style={{ fontSize: "10px", color: C.textMuted }}>{open ? "▲" : "▼"}</span>
            </div>

            {/* Bar */}
            <div style={{ marginTop: "10px", height: "3px", backgroundColor: C.border, borderRadius: "2px", overflow: "hidden" }}>
                <motion.div
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ height: "100%", backgroundColor: color, borderRadius: "2px" }}
                />
            </div>

            {/* Dots */}
            <div style={{ display: "flex", gap: "3px", marginTop: "5px" }}>
                {checks.map((c, i) => (
                    <div key={i} style={{
                        flex: 1, height: "3px", borderRadius: "2px",
                        backgroundColor: c.pass ? color : C.border,
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
                        <div style={{ paddingTop: "12px", display: "flex", flexDirection: "column", gap: "5px" }}>
                            {failing.length === 0
                                ? <span style={{ fontSize: "11px", color: C.green }}>✓ Resume looks complete!</span>
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
                        position: "fixed", bottom: "88px", left: "185px",
                        backgroundColor: "#050D1A",
                        border: `1px solid ${C.indigo}33`,
                        borderRadius: "20px", padding: "5px 14px",
                        fontSize: "11px", color: "#7DD3FC", zIndex: 999,
                        pointerEvents: "none",
                    }}
                >
                    ✓ Draft saved
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
                margin: "10px 12px 0 12px",
                backgroundColor: "#050D1A",
                border: `1px solid ${C.indigo}33`,
                borderRadius: "10px", padding: "11px 14px",
                flexShrink: 0,
            }}
        >
            <p style={{ fontSize: "12px", color: C.textSec, marginBottom: "9px", margin: "0 0 9px 0" }}>
                📋 Found a saved draft — restore it?
            </p>
            <div style={{ display: "flex", gap: "7px" }}>
                <button onClick={onRestore} style={{
                    flex: 1, padding: "7px", borderRadius: "7px", fontSize: "12px",
                    backgroundColor: C.indigo, color: "#fff", border: "none",
                    cursor: "pointer", fontWeight: "600",
                }}>Restore</button>
                <button onClick={onDismiss} style={{
                    padding: "7px 12px", borderRadius: "7px", fontSize: "12px",
                    backgroundColor: "transparent", color: C.textMuted,
                    border: `1px solid ${C.border}`, cursor: "pointer",
                }}>Dismiss</button>
            </div>
        </motion.div>
    )
}

// ── Template Switcher ─────────────────────────────────────────
export function TemplateSwitcher({ activeId, onSwitch, meta }) {
    return (
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            {Object.entries(meta).map(([id, m]) => (
                <button key={id} onClick={() => onSwitch(id)}
                    style={{
                        padding: "5px 12px", borderRadius: "6px", fontSize: "11px",
                        backgroundColor: activeId === id ? C.indigo : C.card,
                        color: activeId === id ? "#fff" : C.textMuted,
                        border: `1px solid ${activeId === id ? C.indigo : C.border}`,
                        cursor: "pointer", fontWeight: activeId === id ? "600" : "400",
                        transition: "all 0.15s",
                    }}
                >{m.name}</button>
            ))}
        </div>
    )
}

// ── Section Tabs ──────────────────────────────────────────────
const SECTIONS = [
    { id: "personal", label: "Personal Info", icon: "◎" },
    { id: "skills", label: "Skills", icon: "◈" },
    { id: "experience", label: "Experience", icon: "◆" },
    { id: "projects", label: "Projects", icon: "◉" },
    { id: "education", label: "Education", icon: "◇" },
    { id: "achievements", label: "Achievements", icon: "✦" },
    { id: "certifications", label: "Certifications", icon: "◐" },
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

    const renderSection = () => {
        switch (activeSection) {
            case "personal": return <PersonalSection data={data} onChange={updatePersonal} />
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
            width: "360px", flexShrink: 0,
            backgroundColor: C.panel,
            borderRight: `1px solid ${C.border}`,
            display: "flex", flexDirection: "column",
            height: "100vh", overflow: "hidden",
        }}>
            <AutosaveToast saved={savedToast} />

            {/* Top Bar */}
            <div style={{
                padding: "13px 16px",
                borderBottom: `1px solid ${C.border}`,
                flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
                <button onClick={onBack} style={{
                    background: "none", border: "none", color: C.textMuted,
                    cursor: "pointer", fontSize: "13px", padding: "4px 0",
                    display: "flex", alignItems: "center", gap: "5px",
                    transition: "color 0.15s",
                }}
                    onMouseEnter={e => e.currentTarget.style.color = C.textSec}
                    onMouseLeave={e => e.currentTarget.style.color = C.textMuted}
                >
                    ← Templates
                </button>
                <div style={{
                    fontSize: "11px", color: C.textMuted,
                    backgroundColor: C.border, padding: "3px 10px",
                    borderRadius: "20px", fontWeight: "500",
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
                display: "flex", flexDirection: "column", gap: "1px",
                padding: "8px 10px 0 10px", flexShrink: 0,
            }}>
                {SECTIONS.map(s => {
                    const isActive = activeSection === s.id
                    const isDone = completion[s.id]
                    return (
                        <button key={s.id} onClick={() => setActiveSection(s.id)}
                            style={{
                                display: "flex", alignItems: "center", gap: "10px",
                                padding: "8px 12px", borderRadius: "8px", border: "none",
                                backgroundColor: isActive ? "#141F33" : "transparent",
                                color: isActive ? C.text : C.textMuted,
                                cursor: "pointer", fontSize: "13px",
                                fontWeight: isActive ? "500" : "400",
                                textAlign: "left", transition: "all 0.12s",
                                boxShadow: isActive ? `inset 3px 0 0 ${C.indigo}` : "none",
                            }}
                            onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = "#0D1828" }}
                            onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = "transparent" }}
                        >
                            <span style={{ fontSize: "11px", color: isActive ? C.indigo : C.textFaint }}>{s.icon}</span>
                            <span style={{ flex: 1 }}>{s.label}</span>
                            {isDone && <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: C.green }} />}
                            {!isDone && isActive && <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: C.indigo }} />}
                        </button>
                    )
                })}
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: C.border, margin: "8px 10px", flexShrink: 0 }} />

            {/* Form Area */}
            <div style={{
                flex: 1, overflowY: "auto", padding: "12px 14px",
                scrollbarWidth: "thin", scrollbarColor: `${C.border} transparent`,
            }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.12 }}
                    >
                        {renderSection()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Download */}
            <div style={{
                padding: "12px 14px 16px 14px",
                borderTop: `1px solid ${C.border}`,
                flexShrink: 0,
            }}>
                <button
                    onClick={onDownload}
                    disabled={downloading}
                    style={{
                        width: "100%", padding: "13px",
                        background: downloading ? C.border : `linear-gradient(135deg, ${C.indigo} 0%, ${C.violet} 100%)`,
                        color: downloading ? C.textMuted : "#FFFFFF",
                        border: "none", borderRadius: "10px",
                        fontSize: "14px", fontWeight: "600",
                        cursor: downloading ? "not-allowed" : "pointer",
                        boxShadow: downloading ? "none" : `0 4px 24px ${C.indigo}44`,
                        transition: "all 0.2s",
                        letterSpacing: "0.01em",
                    }}
                >
                    {downloading ? "⏳ Generating PDF..." : "⬇  Download PDF — Free"}
                </button>
                <p style={{ textAlign: "center", fontSize: "10px", color: C.textFaint, marginTop: "8px" }}>
                    Zero watermark · Always free
                </p>
            </div>
        </div>
    )
}