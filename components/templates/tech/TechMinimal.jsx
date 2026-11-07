// components/templates/tech/TechMinimal.jsx
// Production-Grade Tech Minimal Template (Word-like Font Sizing & Spacing, 100% Times New Roman, ATS Optimized)

const TIMES_FONT = "'Times New Roman', Times, 'Tinos', serif"

// Formats inline **bold**, <b>bold</b>, or <strong>bold</strong> text
function formatText(text = "", fontFamily = TIMES_FONT) {
    if (!text || typeof text !== "string") return text
    const normalized = text.replace(/<\/?(b|strong)>/gi, "**")
    if (!normalized.includes("**")) return normalized
    const parts = normalized.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong
                    key={i}
                    style={{
                        color: "inherit",
                        fontWeight: "700",
                        fontFamily,
                    }}
                >
                    {part.slice(2, -2)}
                </strong>
            )
        }
        return part
    })
}

function formatUrl(url = "") {
    if (!url) return "#"
    if (url.startsWith("http://") || url.startsWith("https://")) return url
    return `https://${url}`
}

// Clean bullet item with aligned bullet
function BulletItem({ children, fontSize = "11px", lineHeight = 1.3, marginBottom = "2px", fontFamily = TIMES_FONT }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom,
                lineHeight,
                fontSize,
                fontWeight: "400",
                color: "#374151",
                fontFamily,
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    width: "14px",
                    flexShrink: 0,
                    fontSize,
                    lineHeight,
                    color: "#2563EB",
                    fontFamily,
                }}
            >
                •
            </span>
            <div
                style={{
                    flex: 1,
                    fontSize,
                    fontWeight: "400",
                    lineHeight,
                    color: "#374151",
                    fontFamily,
                }}
            >
                {children}
            </div>
        </div>
    )
}

function SectionHeading({ title, fontSize = "11px", fontFamily = TIMES_FONT }) {
    return (
        <div style={{ marginBottom: "6px", fontFamily }}>
            <h2
                style={{
                    fontSize,
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    color: "#2563EB",
                    textTransform: "uppercase",
                    margin: 0,
                    lineHeight: 1.2,
                    fontFamily,
                }}
            >
                {title}
            </h2>
            <div
                style={{
                    borderTop: "1px solid #E5E7EB",
                    height: "0px",
                    lineHeight: "0px",
                    fontSize: "0px",
                    marginTop: "4px",
                    width: "100%",
                }}
            />
        </div>
    )
}

export default function TechMinimal({
    data,
    fontFamily = TIMES_FONT,
    fontSize = 11,
    spacing = "normal",
}) {
    const d = data || {}
    const p = d.personal || {}
    const skills = d.skills || {}
    const activeFont = fontFamily || TIMES_FONT

    // Font Sizing Scale
    const baseFs = typeof fontSize === "number" ? fontSize : 11
    const nameFs = `${baseFs + 13}px`
    const headingFs = `${baseFs}px`
    const bodyFs = `${baseFs}px`
    const subFs = `${Math.max(9.5, baseFs - 1)}px`

    // Spacing configuration (Compact, Normal, Relaxed)
    const spacingPresets = {
        compact: {
            paddingY: "38px",
            sectionGap: "10px",
            itemGap: "6px",
            bulletMargin: "2px",
            lineHeight: 1.28,
            headerPaddingBottom: "10px",
        },
        normal: {
            paddingY: "44px",
            sectionGap: "12px",
            itemGap: "7.5px",
            bulletMargin: "2.5px",
            lineHeight: 1.315,
            headerPaddingBottom: "12px",
        },
        relaxed: {
            paddingY: "48px",
            sectionGap: "14px",
            itemGap: "9px",
            bulletMargin: "3px",
            lineHeight: 1.34,
            headerPaddingBottom: "14px",
        },
    }

    const chosenPreset = spacingPresets[spacing] || spacingPresets.normal
    const { paddingY, sectionGap, itemGap, bulletMargin, lineHeight, headerPaddingBottom } = chosenPreset

    // Contact items
    const contactItems = [
        p.email,
        p.phone,
        p.location,
    ].filter(Boolean)

    // Links
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

    const hasEducation = Array.isArray(d.education) && d.education.length > 0
    const hasExperience = Array.isArray(d.experience) && d.experience.length > 0
    const hasSkills = skillCategories.length > 0
    const hasProjects = Array.isArray(d.projects) && d.projects.length > 0
    const hasAchievements = Array.isArray(d.achievements) && d.achievements.filter(Boolean).length > 0
    const hasCertifications = Array.isArray(d.certifications) && d.certifications.filter(c => c && c.name).length > 0

    return (
        <div
            style={{
                width: "794px",
                minHeight: "1123px",
                backgroundColor: "#FFFFFF",
                fontFamily: activeFont,
                color: "#111827",
                padding: `${paddingY} 40px`,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                WebkitFontSmoothing: "antialiased",
                lineHeight,
            }}
        >
            {/* ── HEADER ────────────────────────────────────────── */}
            <header style={{ textAlign: "center", marginBottom: sectionGap, paddingBottom: headerPaddingBottom, borderBottom: "1px solid #E5E7EB", fontFamily: activeFont }}>
                <h1
                    style={{
                        fontSize: nameFs,
                        fontWeight: "700",
                        letterSpacing: "-0.01em",
                        color: "#111827",
                        margin: "0 0 3px 0",
                        lineHeight: 1.2,
                        textTransform: "uppercase",
                        fontFamily: activeFont,
                    }}
                >
                    {formatText(p.name || "YOUR NAME", activeFont)}
                </h1>

                {p.role && (
                    <p style={{ fontSize: bodyFs, color: "#4B5563", margin: "2px 0 4px 0", fontWeight: "600", fontFamily: activeFont }}>
                        {formatText(p.role, activeFont)}
                    </p>
                )}

                {/* Contacts & Links in clean centered row */}
                {(contactItems.length > 0 || linkItems.length > 0) && (
                    <div style={{ fontSize: subFs, color: "#6B7280", display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", gap: "2px", fontFamily: activeFont }}>
                        {contactItems.map((item, idx) => (
                            <span key={`c-${idx}`} style={{ fontFamily: activeFont }}>
                                {item}
                                {(idx < contactItems.length - 1 || linkItems.length > 0) && (
                                    <span style={{ margin: "0 6px", color: "#2563EB", fontWeight: "700" }}>·</span>
                                )}
                            </span>
                        ))}
                        {linkItems.map((link, idx) => (
                            <span key={`l-${idx}`} style={{ fontFamily: activeFont }}>
                                <a
                                    href={formatUrl(link.url)}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: "#2563EB", textDecoration: "underline", fontFamily: activeFont }}
                                >
                                    {link.label}
                                </a>
                                {idx < linkItems.length - 1 && (
                                    <span style={{ margin: "0 6px", color: "#2563EB", fontWeight: "700" }}>·</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            {/* ── BODY SECTIONS ──────────────────────────────────── */}
            <div style={{ display: "flex", flexDirection: "column", gap: sectionGap, fontFamily: activeFont }}>

                {/* 1. PROFESSIONAL SUMMARY (if present) */}
                {d.summary && (
                    <section style={{ fontFamily: activeFont }}>
                        <SectionHeading title="Professional Summary" fontSize={headingFs} fontFamily={activeFont} />
                        <p style={{ fontSize: bodyFs, fontWeight: "400", color: "#374151", margin: 0, lineHeight, textAlign: "justify", fontFamily: activeFont }}>
                            {formatText(d.summary, activeFont)}
                        </p>
                    </section>
                )}

                {/* 2. TECHNICAL SKILLS */}
                {hasSkills && (
                    <section style={{ fontFamily: activeFont }}>
                        <SectionHeading title="Technical Skills" fontSize={headingFs} fontFamily={activeFont} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "3px", fontFamily: activeFont }}>
                            {skillCategories.map((cat, idx) => (
                                <div key={idx} style={{ fontSize: bodyFs, lineHeight, color: "#374151", fontFamily: activeFont }}>
                                    <strong style={{ fontWeight: "700", color: "#111827", fontFamily: activeFont }}>{cat.label}: </strong>
                                    <span style={{ fontFamily: activeFont }}>{cat.items.join(", ")}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 3. EXPERIENCE */}
                {hasExperience && (
                    <section style={{ fontFamily: activeFont }}>
                        <SectionHeading title="Professional Experience" fontSize={headingFs} fontFamily={activeFont} />
                        <div style={{ display: "flex", flexDirection: "column", gap: itemGap, fontFamily: activeFont }}>
                            {d.experience.map((exp, idx) => {
                                const dates = (exp.startDate || exp.endDate)
                                    ? `${exp.startDate ? `${exp.startDate} – ` : ""}${exp.current ? "Present" : exp.endDate}`
                                    : ""
                                return (
                                    <div key={exp.id || idx} style={{ fontFamily: activeFont }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px", fontFamily: activeFont }}>
                                            <span style={{ fontSize: bodyFs, fontWeight: "700", color: "#111827", fontFamily: activeFont }}>
                                                {formatText(exp.role, activeFont)}
                                                {exp.company && <span style={{ fontWeight: "400", color: "#374151" }}> — {formatText(exp.company, activeFont)}</span>}
                                            </span>
                                            <span style={{ fontSize: subFs, color: "#6B7280", flexShrink: 0, marginLeft: "12px", fontFamily: activeFont }}>
                                                {dates}
                                                {exp.location && ` | ${exp.location}`}
                                            </span>
                                        </div>

                                        {/* Bullets */}
                                        {Array.isArray(exp.bullets) && exp.bullets.length > 0 && (
                                            <div style={{ paddingLeft: "2px", fontFamily: activeFont }}>
                                                {exp.bullets.filter(Boolean).map((bullet, bIdx) => (
                                                    <BulletItem key={bIdx} fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin} fontFamily={activeFont}>
                                                        {formatText(bullet, activeFont)}
                                                    </BulletItem>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )}

                {/* 4. PROJECTS (Name – Link, bullets directly one below one) */}
                {hasProjects && (
                    <section style={{ fontFamily: activeFont }}>
                        <SectionHeading title="Projects" fontSize={headingFs} fontFamily={activeFont} />
                        <div style={{ display: "flex", flexDirection: "column", gap: itemGap, fontFamily: activeFont }}>
                            {d.projects.map((proj, idx) => {
                                const linkUrl = proj.link ? formatUrl(proj.link) : proj.github ? formatUrl(proj.github) : null
                                let linkLabel = "Link"
                                if (proj.link) {
                                    const lower = proj.link.toLowerCase()
                                    if (lower === "live" || lower.includes("vercel") || lower.includes("demo")) linkLabel = "Live"
                                    else if (lower.includes("github")) linkLabel = "Code"
                                    else linkLabel = "Link"
                                } else if (proj.github) {
                                    linkLabel = "Code"
                                }

                                return (
                                    <div key={proj.id || idx} style={{ fontFamily: activeFont }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px", fontFamily: activeFont }}>
                                            <div style={{ fontSize: bodyFs, fontWeight: "700", color: "#111827", fontFamily: activeFont }}>
                                                {formatText(proj.name, activeFont)}
                                                {linkUrl && (
                                                    <span style={{ fontWeight: "400", fontFamily: activeFont }}>
                                                        {" – "}
                                                        <a
                                                            href={linkUrl}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            style={{ color: "#2563EB", textDecoration: "underline", fontFamily: activeFont }}
                                                        >
                                                            ({linkLabel})
                                                        </a>
                                                    </span>
                                                )}
                                            </div>
                                            {proj.techStack && (
                                                <span style={{ fontSize: subFs, color: "#6B7280", flexShrink: 0, marginLeft: "12px", fontFamily: activeFont }}>
                                                    {proj.techStack}
                                                </span>
                                            )}
                                        </div>

                                        {Array.isArray(proj.bullets) && proj.bullets.length > 0 ? (
                                            <div style={{ paddingLeft: "2px", fontFamily: activeFont }}>
                                                {proj.bullets.filter(Boolean).map((bullet, bIdx) => (
                                                    <BulletItem key={bIdx} fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin} fontFamily={activeFont}>
                                                        {formatText(bullet, activeFont)}
                                                    </BulletItem>
                                                ))}
                                            </div>
                                        ) : proj.description ? (
                                            <div style={{ paddingLeft: "2px", fontFamily: activeFont }}>
                                                <BulletItem fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin} fontFamily={activeFont}>
                                                    {formatText(proj.description, activeFont)}
                                                </BulletItem>
                                            </div>
                                        ) : null}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )}

                {/* 5. EDUCATION */}
                {hasEducation && (
                    <section style={{ fontFamily: activeFont }}>
                        <SectionHeading title="Education" fontSize={headingFs} fontFamily={activeFont} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontFamily: activeFont }}>
                            {d.education.map((edu, idx) => {
                                const dates = (edu.startYear || edu.endYear)
                                    ? `${edu.startYear ? `${edu.startYear}–` : ""}${edu.endYear}`
                                    : ""
                                const cgpa = edu.cgpa
                                    ? (edu.cgpa.startsWith("SGPA") || edu.cgpa.startsWith("CGPA") || edu.cgpa.startsWith("GPA") ? edu.cgpa : `GPA: ${edu.cgpa}`)
                                    : ""

                                return (
                                    <div key={edu.id || idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: bodyFs, color: "#374151", lineHeight, fontFamily: activeFont }}>
                                        <div>
                                            <strong style={{ fontWeight: "700", color: "#111827", fontFamily: activeFont }}>{formatText(edu.degree, activeFont)}</strong>
                                            {edu.institution && <span style={{ fontFamily: activeFont }}> – {formatText(edu.institution, activeFont)}</span>}
                                            {edu.location && <span style={{ fontFamily: activeFont }}>, {edu.location}</span>}
                                        </div>
                                        <div style={{ fontSize: subFs, color: "#6B7280", flexShrink: 0, marginLeft: "12px", fontFamily: activeFont }}>
                                            {dates}
                                            {cgpa && ` | ${cgpa}`}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )}

                {/* 6. ACHIEVEMENTS (Optional) */}
                {hasAchievements && (
                    <section style={{ fontFamily: activeFont }}>
                        <SectionHeading title="Achievements" fontSize={headingFs} fontFamily={activeFont} />
                        <div style={{ paddingLeft: "2px", fontFamily: activeFont }}>
                            {d.achievements.filter(Boolean).map((item, idx) => (
                                <BulletItem key={idx} fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin} fontFamily={activeFont}>
                                    {formatText(item, activeFont)}
                                </BulletItem>
                            ))}
                        </div>
                    </section>
                )}

                {/* 7. CERTIFICATIONS (Optional) */}
                {hasCertifications && (
                    <section style={{ fontFamily: activeFont }}>
                        <SectionHeading title="Certifications" fontSize={headingFs} fontFamily={activeFont} />
                        <div style={{ paddingLeft: "2px", fontFamily: activeFont }}>
                            {d.certifications.filter(c => c && c.name).map((cert, idx) => (
                                <BulletItem key={idx} fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin} fontFamily={activeFont}>
                                    <strong style={{ fontWeight: "700", color: "#111827", fontFamily: activeFont }}>{formatText(cert.name, activeFont)}</strong>
                                    {cert.issuer ? ` – ${cert.issuer}` : ""}
                                    {cert.year ? ` (${cert.year})` : ""}
                                </BulletItem>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    )
}
