// components/templates/tech/ClassicATS.jsx
// Production-Grade Classic ATS Template (Standard Harvard / Software Engineer Format)

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

// Compact bullet item matching exact document line spacing
function BulletItem({ children, style }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "1px",
                lineHeight: 1.28,
                fontSize: "10.5px",
                color: "#111827",
                ...style,
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    width: "12px",
                    flexShrink: 0,
                    fontSize: "10.5px",
                    lineHeight: "1.28",
                    color: "#000000",
                }}
            >
                •
            </span>
            <div style={{ flex: 1, fontSize: "10.5px", lineHeight: 1.28 }}>
                {children}
            </div>
        </div>
    )
}

// Clean ATS Section Title with single underline anchored directly under the title
function SectionTitle({ title }) {
    return (
        <div
            style={{
                borderBottom: "1.2px solid #000000",
                paddingBottom: "2px",
                marginTop: "10px",
                marginBottom: "6px",
            }}
        >
            <h2
                style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#000000",
                    margin: 0,
                    lineHeight: 1.2,
                }}
            >
                {title}
            </h2>
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
        { label: "AI / ML & Search", items: skills.ai },
        { label: "Tools & DevOps", items: skills.tools },
        { label: "Other", items: skills.other },
    ].filter(cat => Array.isArray(cat.items) && cat.items.length > 0)

    const formatUrl = (url = "") => {
        if (!url) return "#"
        if (url.startsWith("http://") || url.startsWith("https://")) return url
        return `https://${url}`
    }

    return (
        <div
            style={{
                width: "794px",
                minHeight: "1123px",
                backgroundColor: "#FFFFFF",
                fontFamily: fontFamily || "'Times New Roman', Times, 'Tinos', serif",
                color: "#000000",
                padding: "26px 36px 28px 36px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                WebkitFontSmoothing: "antialiased",
                lineHeight: 1.26,
            }}
        >
            {/* ── HEADER ────────────────────────────────────────── */}
            <header style={{ textAlign: "center", marginBottom: "4px" }}>
                <h1
                    style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        letterSpacing: "0.03em",
                        color: "#000000",
                        margin: "0 0 4px 0",
                        lineHeight: 1.15,
                        textTransform: "uppercase",
                    }}
                >
                    {p.name || "YOUR NAME"}
                </h1>

                {/* Contact details: Location  •  Phone  •  Email */}
                {contactItems.length > 0 && (
                    <div style={{ fontSize: "10.5px", color: "#111827", marginBottom: "3px" }}>
                        {contactItems.map((item, idx) => (
                            <span key={idx}>
                                {item}
                                {idx < contactItems.length - 1 && (
                                    <span style={{ margin: "0 6px", color: "#6B7280" }}>•</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links: Portfolio  •  LinkedIn  •  GitHub */}
                {linkItems.length > 0 && (
                    <div style={{ fontSize: "10.5px" }}>
                        {linkItems.map((item, idx) => (
                            <span key={idx}>
                                <a
                                    href={formatUrl(item.url)}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: "#0A2540",
                                        textDecoration: "underline",
                                        fontWeight: "600",
                                    }}
                                >
                                    {item.label}
                                </a>
                                {idx < linkItems.length - 1 && (
                                    <span style={{ margin: "0 6px", color: "#6B7280", textDecoration: "none" }}>•</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            {/* ── PROFESSIONAL SUMMARY ─────────────────────────── */}
            {d.summary && (
                <section>
                    <SectionTitle title="Professional Summary" />
                    <p style={{ fontSize: "10.5px", color: "#000000", lineHeight: 1.32, margin: 0, textAlign: "justify" }}>
                        {d.summary}
                    </p>
                </section>
            )}

            {/* ── EDUCATION ────────────────────────────────────── */}
            {Array.isArray(d.education) && d.education.length > 0 && (
                <section>
                    <SectionTitle title="Education" />
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {d.education.map((edu, idx) => (
                            <div key={edu.id || idx}>
                                {/* Row 1: Institution (Left) & Dates (Right) */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "11px", lineHeight: 1.25 }}>
                                    <strong style={{ color: "#000000" }}>{edu.institution}</strong>
                                    {(edu.startYear || edu.endYear) && (
                                        <span style={{ fontSize: "10.5px", color: "#000000", fontWeight: "600" }}>
                                            {edu.startYear ? `${edu.startYear} – ` : ""}{edu.endYear}
                                        </span>
                                    )}
                                </div>
                                {/* Row 2: Degree (Left) & CGPA (Right) */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "10.5px", color: "#111827", lineHeight: 1.25 }}>
                                    <span style={{ fontStyle: "italic" }}>{edu.degree}</span>
                                    {edu.cgpa && (
                                        <span style={{ fontSize: "10.5px", color: "#000000" }}>
                                            {edu.cgpa.startsWith("SGPA") || edu.cgpa.startsWith("CGPA") || edu.cgpa.startsWith("GPA") ? edu.cgpa : `GPA: ${edu.cgpa}`}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ── EXPERIENCE ───────────────────────────────────── */}
            {Array.isArray(d.experience) && d.experience.length > 0 && (
                <section>
                    <SectionTitle title="Professional Experience" />
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {d.experience.map((exp, idx) => (
                            <div key={exp.id || idx}>
                                {/* Row 1: Role (Left) & Dates (Right) */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "11.2px", lineHeight: 1.25 }}>
                                    <strong style={{ color: "#000000" }}>{exp.role}</strong>
                                    {(exp.startDate || exp.endDate) && (
                                        <span style={{ fontSize: "10.5px", color: "#000000", fontWeight: "600" }}>
                                            {exp.startDate ? `${exp.startDate} – ` : ""}{exp.current ? "Present" : exp.endDate}
                                        </span>
                                    )}
                                </div>
                                {/* Row 2: Company (Left) & Location (Right) */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "10.5px", color: "#111827", lineHeight: 1.25, marginBottom: "3px" }}>
                                    <span style={{ fontStyle: "italic" }}>{exp.company}</span>
                                    {exp.location && (
                                        <span style={{ fontStyle: "italic", color: "#000000" }}>{exp.location}</span>
                                    )}
                                </div>

                                {/* Compact Bullets with 4px indent and 0px margin */}
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
                        ))}
                    </div>
                </section>
            )}

            {/* ── TECHNICAL SKILLS ─────────────────────────────── */}
            {skillCategories.length > 0 && (
                <section>
                    <SectionTitle title="Technical Skills" />
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px", fontSize: "10.5px", lineHeight: 1.32 }}>
                        {skillCategories.map((cat, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "flex-start" }}>
                                <span style={{ fontWeight: "700", color: "#000000", minWidth: "95px", flexShrink: 0 }}>
                                    {cat.label}:
                                </span>
                                <span style={{ color: "#111827" }}>
                                    {cat.items.join(", ")}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ── PROJECTS ─────────────────────────────────────── */}
            {Array.isArray(d.projects) && d.projects.length > 0 && (
                <section>
                    <SectionTitle title="Projects" />
                    <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                        {d.projects.map((proj, idx) => (
                            <div key={proj.id || idx}>
                                {/* Row 1: Project Name & Links (Left) & Tech Stack (Right) */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "11.2px", lineHeight: 1.25 }}>
                                    <div>
                                        <strong style={{ color: "#000000" }}>{proj.name}</strong>
                                        {proj.link && (
                                            <a
                                                href={formatUrl(proj.link)}
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{
                                                    color: "#0A2540",
                                                    textDecoration: "underline",
                                                    fontWeight: "600",
                                                    marginLeft: "6px",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                [{proj.link === "live" ? "Live" : "Demo"}]
                                            </a>
                                        )}
                                        {proj.github && (
                                            <a
                                                href={formatUrl(proj.github)}
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{
                                                    color: "#0A2540",
                                                    textDecoration: "underline",
                                                    fontWeight: "600",
                                                    marginLeft: "4px",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                [Code]
                                            </a>
                                        )}
                                    </div>
                                    {proj.techStack && (
                                        <span style={{ fontSize: "10px", color: "#374151", fontStyle: "italic" }}>
                                            {proj.techStack}
                                        </span>
                                    )}
                                </div>

                                {/* Description if any */}
                                {proj.description && (
                                    <p style={{ fontSize: "10.5px", color: "#374151", margin: "1px 0 2px 0", fontStyle: "italic", lineHeight: 1.25 }}>
                                        {proj.description}
                                    </p>
                                )}

                                {/* Compact Bullets with 4px indent */}
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
                </section>
            )}

            {/* ── ACHIEVEMENTS (Optional) ───────────────────────── */}
            {Array.isArray(d.achievements) && d.achievements.filter(Boolean).length > 0 && (
                <section>
                    <SectionTitle title="Achievements" />
                    <div style={{ paddingLeft: "4px" }}>
                        {d.achievements.filter(Boolean).map((item, idx) => (
                            <BulletItem key={idx}>
                                {formatText(item)}
                            </BulletItem>
                        ))}
                    </div>
                </section>
            )}

            {/* ── CERTIFICATIONS (Optional) ────────────────────── */}
            {Array.isArray(d.certifications) && d.certifications.filter(c => c && c.name).length > 0 && (
                <section>
                    <SectionTitle title="Certifications" />
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
