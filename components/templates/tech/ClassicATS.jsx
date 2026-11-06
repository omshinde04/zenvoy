// components/templates/tech/ClassicATS.jsx
// Production-Grade Classic ATS Template (Standard Software Engineer Format)

// Formats inline **bold** text in bullets
function formatText(text = "") {
    if (!text || typeof text !== "string") return text
    if (!text.includes("**")) return text
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        return part
    })
}

// Ultra-compact bullet item matching exact document line spacing
function BulletItem({ children, style }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "0px",
                lineHeight: 1.22,
                ...style,
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    width: "11px",
                    flexShrink: 0,
                    fontSize: "11px",
                    lineHeight: "1.22",
                    color: "#000000",
                }}
            >
                •
            </span>
            <div style={{ flex: 1, fontSize: "11px", lineHeight: 1.22 }}>
                {children}
            </div>
        </div>
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

    const divider = (
        <div style={{ borderBottom: "1px solid #000000", marginTop: "4px", marginBottom: "5px" }} />
    )

    return (
        <div
            style={{
                width: "794px",
                minHeight: "1123px",
                backgroundColor: "#FFFFFF",
                fontFamily: fontFamily || "'Times New Roman', Times, 'Tinos', serif",
                color: "#000000",
                padding: "32px 42px 36px 42px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                WebkitFontSmoothing: "antialiased",
                lineHeight: 1.26,
            }}
        >
            {/* ── HEADER ────────────────────────────────────────── */}
            <header style={{ textAlign: "center", marginBottom: "2px" }}>
                <h1
                    style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        letterSpacing: "0.01em",
                        color: "#000000",
                        margin: "0 0 2px 0",
                        lineHeight: 1.15,
                    }}
                >
                    {p.name || "YOUR NAME"}
                </h1>

                {/* Contact details: Location | Phone | Email */}
                {contactItems.length > 0 && (
                    <div style={{ fontSize: "11px", color: "#000000", marginBottom: "2px" }}>
                        {contactItems.map((item, idx) => (
                            <span key={idx}>
                                {item}
                                {idx < contactItems.length - 1 && (
                                    <span style={{ margin: "0 5px" }}>|</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links: Portfolio | LinkedIn | GitHub */}
                {linkItems.length > 0 && (
                    <div style={{ fontSize: "11px" }}>
                        {linkItems.map((item, idx) => (
                            <span key={idx}>
                                <a
                                    href={formatUrl(item.url)}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: "#0044CC",
                                        textDecoration: "underline",
                                        fontWeight: "500",
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

            {/* Header End Line */}
            {divider}

            {/* ── PROFESSIONAL SUMMARY ─────────────────────────── */}
            {d.summary && (
                <section>
                    <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#000000", margin: "0 0 2px 0" }}>
                        Professional Summary
                    </h2>
                    <p style={{ fontSize: "11px", color: "#000000", lineHeight: 1.28, margin: 0, textAlign: "justify" }}>
                        {d.summary}
                    </p>
                    {divider}
                </section>
            )}

            {/* ── EDUCATION ────────────────────────────────────── */}
            {Array.isArray(d.education) && d.education.length > 0 && (
                <section>
                    <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#000000", margin: "0 0 2px 0" }}>
                        Education
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        {d.education.map((edu, idx) => (
                            <div key={edu.id || idx} style={{ fontSize: "11px", color: "#000000", lineHeight: 1.25 }}>
                                <strong>{edu.degree}</strong> – {edu.institution}
                                {(edu.startYear || edu.endYear) && (
                                    <> | {edu.startYear ? `${edu.startYear}–` : ""}{edu.endYear}</>
                                )}
                                {edu.cgpa && (
                                    <> | {edu.cgpa.startsWith("SGPA") || edu.cgpa.startsWith("CGPA") ? edu.cgpa : `SGPA: ${edu.cgpa}`}</>
                                )}
                            </div>
                        ))}
                    </div>
                    {divider}
                </section>
            )}

            {/* ── EXPERIENCE ───────────────────────────────────── */}
            {Array.isArray(d.experience) && d.experience.length > 0 && (
                <section>
                    <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#000000", margin: "0 0 2px 0" }}>
                        Experience
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {d.experience.map((exp, idx) => (
                            <div key={exp.id || idx}>
                                {/* Role — Company | Dates */}
                                <div style={{ fontSize: "11.2px", color: "#000000", marginBottom: "1px" }}>
                                    <strong>{exp.role}</strong> — {exp.company}
                                    {(exp.startDate || exp.endDate) && (
                                        <> | {exp.startDate} – {exp.current ? "Present" : exp.endDate}</>
                                    )}
                                </div>

                                {/* Compact Bullets with 8px indent and 0px margin */}
                                {Array.isArray(exp.bullets) && exp.bullets.length > 0 && (
                                    <div style={{ paddingLeft: "8px" }}>
                                        {exp.bullets.filter(Boolean).map((bullet, bIdx) => (
                                            <BulletItem key={bIdx}>
                                                {formatText(bullet)}
                                            </BulletItem>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {divider}
                </section>
            )}

            {/* ── TECHNICAL SKILLS ─────────────────────────────── */}
            {skillCategories.length > 0 && (
                <section>
                    <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#000000", margin: "0 0 2px 0" }}>
                        Technical Skills
                    </h2>
                    <div style={{ paddingLeft: "8px" }}>
                        {skillCategories.map((cat, idx) => (
                            <BulletItem key={idx}>
                                <strong>{cat.label}:</strong> {cat.items.join(", ")}
                            </BulletItem>
                        ))}
                    </div>
                    {divider}
                </section>
            )}

            {/* ── PROJECTS ─────────────────────────────────────── */}
            {Array.isArray(d.projects) && d.projects.length > 0 && (
                <section>
                    <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#000000", margin: "0 0 2px 0" }}>
                        Projects
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {d.projects.map((proj, idx) => (
                            <div key={proj.id || idx}>
                                {idx > 0 && divider}
                                {/* Project Header */}
                                <div style={{ fontSize: "11.2px", color: "#000000", marginBottom: "1px" }}>
                                    <strong>{proj.name}</strong>
                                    {proj.link && (
                                        <a
                                            href={formatUrl(proj.link)}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                color: "#0044CC",
                                                textDecoration: "underline",
                                                fontWeight: "500",
                                                marginLeft: "4px",
                                            }}
                                        >
                                            ({proj.link === "live" ? "live" : "link"})
                                        </a>
                                    )}
                                    {proj.github && (
                                        <a
                                            href={formatUrl(proj.github)}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                color: "#0044CC",
                                                textDecoration: "underline",
                                                fontWeight: "500",
                                                marginLeft: "4px",
                                            }}
                                        >
                                            (code)
                                        </a>
                                    )}
                                </div>

                                {/* Description if any */}
                                {proj.description && (
                                    <p style={{ fontSize: "10.8px", color: "#374151", margin: "0 0 1px 0", fontStyle: "italic" }}>
                                        {proj.description}
                                    </p>
                                )}

                                {/* Compact Bullets with 8px indent and 0px margin */}
                                {Array.isArray(proj.bullets) && proj.bullets.length > 0 && (
                                    <div style={{ paddingLeft: "8px" }}>
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
                    {divider}
                </section>
            )}

            {/* ── ACHIEVEMENTS (Optional) ───────────────────────── */}
            {Array.isArray(d.achievements) && d.achievements.filter(Boolean).length > 0 && (
                <section>
                    <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#000000", margin: "0 0 2px 0" }}>
                        Achievements
                    </h2>
                    <div style={{ paddingLeft: "8px" }}>
                        {d.achievements.filter(Boolean).map((item, idx) => (
                            <BulletItem key={idx}>
                                {formatText(item)}
                            </BulletItem>
                        ))}
                    </div>
                    {divider}
                </section>
            )}

            {/* ── CERTIFICATIONS (Optional) ────────────────────── */}
            {Array.isArray(d.certifications) && d.certifications.filter(c => c && c.name).length > 0 && (
                <section>
                    <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#000000", margin: "0 0 2px 0" }}>
                        Certifications
                    </h2>
                    <div style={{ paddingLeft: "8px" }}>
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
