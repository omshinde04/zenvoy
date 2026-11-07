// components/templates/tech/ClassicATS.jsx
// Production-Grade Classic ATS Template (Standard 1-Page Software Engineer Format)

// Formats inline **bold** text in bullets
function formatText(text = "") {
    if (!text || typeof text !== "string") return text
    if (!text.includes("**")) return text
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i} style={{ color: "#000000", fontWeight: "700" }}>{part.slice(2, -2)}</strong>
        }
        return part
    })
}

// Compact bullet item matching exact document line spacing
function BulletItem({ children, style }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "0.5px",
                lineHeight: 1.24,
                fontSize: "10.5px",
                color: "#000000",
                ...style,
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    width: "12px",
                    flexShrink: 0,
                    fontSize: "10.5px",
                    lineHeight: "1.24",
                    color: "#000000",
                }}
            >
                •
            </span>
            <div style={{ flex: 1, fontSize: "10.5px", lineHeight: 1.24, color: "#000000" }}>
                {children}
            </div>
        </div>
    )
}

// Section Heading without underline directly underneath (separators are section-bounded)
function SectionHeading({ title }) {
    return (
        <h2
            style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#000000",
                margin: "0 0 3px 0",
                lineHeight: 1.22,
                textTransform: "none",
            }}
        >
            {title}
        </h2>
    )
}

// Clean horizontal rule separating completed sections
function SectionDivider() {
    return (
        <div
            style={{
                borderBottom: "1px solid #000000",
                marginTop: "6px",
                marginBottom: "6px",
                width: "100%",
            }}
        />
    )
}

export default function ClassicATS({ data, fontFamily = "'Times New Roman', Times, 'Tinos', serif" }) {
    const d = data || {}
    const p = d.personal || {}
    const skills = d.skills || {}

    // Contacts row
    const contactItems = [
        p.location,
        p.phone,
        p.email,
    ].filter(Boolean)

    // Links row
    const linkItems = [
        p.portfolio ? { label: "Portfolio", url: p.portfolio } : null,
        p.linkedin ? { label: "LinkedIn", url: p.linkedin } : null,
        p.github ? { label: "GitHub", url: p.github } : null,
    ].filter(Boolean)

    // Skill categories
    const skillCategories = [
        { label: "Languages", items: skills.languages },
        { label: "Backend", items: skills.backend },
        { label: "Frontend", items: skills.frontend || skills.frameworks },
        { label: "Databases", items: skills.databases },
        { label: "AI / ML & Search Systems", items: skills.ai },
        { label: "Tools & Technologies", items: skills.tools },
        { label: "Other", items: skills.other },
    ].filter(cat => Array.isArray(cat.items) && cat.items.length > 0)

    const formatUrl = (url = "") => {
        if (!url) return "#"
        if (url.startsWith("http://") || url.startsWith("https://")) return url
        return `https://${url}`
    }

    const hasAchievements = Array.isArray(d.achievements) && d.achievements.filter(Boolean).length > 0
    const hasCertifications = Array.isArray(d.certifications) && d.certifications.filter(c => c && c.name).length > 0

    return (
        <div
            style={{
                width: "794px",
                minHeight: "1123px",
                backgroundColor: "#FFFFFF",
                fontFamily: fontFamily || "'Times New Roman', Times, 'Tinos', serif",
                color: "#000000",
                padding: "24px 34px 24px 34px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                WebkitFontSmoothing: "antialiased",
                lineHeight: 1.25,
            }}
        >
            {/* ── 1. HEADER (name and all) ───────────────────────── */}
            <header style={{ textAlign: "center", marginBottom: "0px" }}>
                <h1
                    style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        letterSpacing: "0.01em",
                        color: "#000000",
                        margin: "0 0 3px 0",
                        lineHeight: 1.18,
                    }}
                >
                    {p.name || "Your Name"}
                </h1>

                {/* Contacts: Location | Phone | Email */}
                {contactItems.length > 0 && (
                    <div style={{ fontSize: "10.5px", color: "#000000", marginBottom: "2px" }}>
                        {contactItems.map((item, idx) => (
                            <span key={idx}>
                                {item}
                                {idx < contactItems.length - 1 && (
                                    <span style={{ margin: "0 5px", color: "#000000" }}>|</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links: Portfolio | LinkedIn | GitHub */}
                {linkItems.length > 0 && (
                    <div style={{ fontSize: "10.5px" }}>
                        {linkItems.map((item, idx) => (
                            <span key={idx}>
                                <a
                                    href={formatUrl(item.url)}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: "#0000EE",
                                        textDecoration: "underline",
                                    }}
                                >
                                    {item.label}
                                </a>
                                {idx < linkItems.length - 1 && (
                                    <span style={{ margin: "0 5px", color: "#000000", textDecoration: "none" }}>|</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            {/* Line under header */}
            <SectionDivider />

            {/* ── 2. PROFESSIONAL SUMMARY ───────────────────────── */}
            {d.summary && (
                <section>
                    <SectionHeading title="Professional Summary" />
                    <p style={{
                        fontSize: "10.5px",
                        color: "#000000",
                        lineHeight: 1.28,
                        margin: 0,
                        textAlign: "justify",
                    }}>
                        {d.summary}
                    </p>
                    <SectionDivider />
                </section>
            )}

            {/* ── 3. EDUCATION ──────────────────────────────────── */}
            {Array.isArray(d.education) && d.education.length > 0 && (
                <section>
                    <SectionHeading title="Education" />
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        {d.education.map((edu, idx) => {
                            const dates = (edu.startYear || edu.endYear)
                                ? `${edu.startYear ? `${edu.startYear}–` : ""}${edu.endYear}`
                                : ""
                            const cgpa = edu.cgpa
                                ? (edu.cgpa.startsWith("SGPA") || edu.cgpa.startsWith("CGPA") || edu.cgpa.startsWith("GPA") ? edu.cgpa : `GPA: ${edu.cgpa}`)
                                : ""

                            const degreeText = edu.degree || ""
                            const instText = edu.institution || ""
                            const locText = edu.location ? `, ${edu.location}` : ""

                            return (
                                <div key={edu.id || idx} style={{ fontSize: "10.5px", lineHeight: 1.26 }}>
                                    <strong>{degreeText}</strong>
                                    {instText && <span> – {instText}{locText}</span>}
                                    {dates && <span> | {dates}</span>}
                                    {cgpa && <span> | {cgpa}</span>}
                                </div>
                            )
                        })}
                    </div>
                    <SectionDivider />
                </section>
            )}

            {/* ── 4. EXPERIENCE ─────────────────────────────────── */}
            {Array.isArray(d.experience) && d.experience.length > 0 && (
                <section>
                    <SectionHeading title="Experience" />
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        {d.experience.map((exp, idx) => {
                            const dates = (exp.startDate || exp.endDate)
                                ? `${exp.startDate ? `${exp.startDate} – ` : ""}${exp.current ? "Present" : exp.endDate}`
                                : ""
                            return (
                                <div key={exp.id || idx}>
                                    <div style={{ fontSize: "11px", lineHeight: 1.24, marginBottom: "2px" }}>
                                        <strong>{exp.role}</strong>
                                        {exp.company && <span> – {exp.company}</span>}
                                        {dates && <span> | {dates}</span>}
                                        {exp.location && <span> | {exp.location}</span>}
                                    </div>

                                    {/* Bullets with exact spacing */}
                                    {Array.isArray(exp.bullets) && exp.bullets.length > 0 && (
                                        <div style={{ paddingLeft: "4px" }}>
                                            {exp.bullets.filter(Boolean).map((bullet, bIdx) => (
                                                <BulletItem key={bIdx}>
                                                    {formatText(bullet)}
                                                </BulletItem>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <SectionDivider />
                </section>
            )}

            {/* ── 5. TECHNICAL SKILLS ───────────────────────────── */}
            {skillCategories.length > 0 && (
                <section>
                    <SectionHeading title="Technical Skills" />
                    <div style={{ display: "flex", flexDirection: "column", gap: "1px", paddingLeft: "4px" }}>
                        {skillCategories.map((cat, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "flex-start", fontSize: "10.5px", lineHeight: 1.26 }}>
                                <span style={{ width: "12px", flexShrink: 0, color: "#000000" }}>•</span>
                                <div style={{ flex: 1 }}>
                                    <strong style={{ color: "#000000" }}>{cat.label}: </strong>
                                    <span style={{ color: "#000000" }}>{cat.items.join(", ")}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <SectionDivider />
                </section>
            )}

            {/* ── 6. PROJECTS ───────────────────────────────────── */}
            {Array.isArray(d.projects) && d.projects.length > 0 && (
                <section>
                    <SectionHeading title="Projects" />
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {d.projects.map((proj, idx) => (
                            <div key={proj.id || idx}>
                                <div style={{ fontSize: "11px", lineHeight: 1.25, marginBottom: "2px" }}>
                                    <strong>{proj.name}</strong>
                                    {proj.link && (
                                        <a
                                            href={formatUrl(proj.link)}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                color: "#0000EE",
                                                textDecoration: "underline",
                                                marginLeft: "4px",
                                                fontSize: "10px",
                                            }}
                                        >
                                            ({proj.link === "live" ? "live" : "demo"})
                                        </a>
                                    )}
                                    {proj.github && (
                                        <a
                                            href={formatUrl(proj.github)}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                color: "#0000EE",
                                                textDecoration: "underline",
                                                marginLeft: "4px",
                                                fontSize: "10px",
                                            }}
                                        >
                                            (code)
                                        </a>
                                    )}
                                    {proj.techStack && (
                                        <span style={{ fontStyle: "italic", fontSize: "10px", color: "#374151", marginLeft: "6px" }}>
                                            [{proj.techStack}]
                                        </span>
                                    )}
                                </div>

                                {proj.description && (
                                    <div style={{ fontStyle: "italic", fontSize: "10px", color: "#374151", marginBottom: "2px" }}>
                                        {proj.description}
                                    </div>
                                )}

                                {Array.isArray(proj.bullets) && proj.bullets.length > 0 && (
                                    <div style={{ paddingLeft: "4px" }}>
                                        {proj.bullets.filter(Boolean).map((bullet, bIdx) => (
                                            <BulletItem key={bIdx}>
                                                {formatText(bullet)}
                                            </BulletItem>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {(hasAchievements || hasCertifications) && <SectionDivider />}
                </section>
            )}

            {/* ── 7. ACHIEVEMENTS (Optional) ─────────────────────── */}
            {hasAchievements && (
                <section>
                    <SectionHeading title="Achievements" />
                    <div style={{ paddingLeft: "4px" }}>
                        {d.achievements.filter(Boolean).map((item, idx) => (
                            <BulletItem key={idx}>
                                {formatText(item)}
                            </BulletItem>
                        ))}
                    </div>
                    {hasCertifications && <SectionDivider />}
                </section>
            )}

            {/* ── 8. CERTIFICATIONS (Optional) ──────────────────── */}
            {hasCertifications && (
                <section>
                    <SectionHeading title="Certifications" />
                    <div style={{ paddingLeft: "4px" }}>
                        {d.certifications.filter(c => c && c.name).map((cert, idx) => (
                            <BulletItem key={idx}>
                                <strong>{cert.name}</strong>{cert.issuer ? ` – ${cert.issuer}` : ""}{cert.year ? ` (${cert.year})` : ""}
                            </BulletItem>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}
