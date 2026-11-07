// components/templates/tech/ClassicATS.jsx
// Production-Grade Classic ATS Template (Word-like Font Sizing & Spacing, 100% Times New Roman)

const TIMES_FONT = "'Times New Roman', Times, 'Tinos', serif"

// Formats inline **bold**, <b>bold</b>, or <strong>bold</strong> text
function formatText(text = "") {
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
                        color: "#000000",
                        fontWeight: "700",
                        fontFamily: TIMES_FONT,
                    }}
                >
                    {part.slice(2, -2)}
                </strong>
            )
        }
        return part
    })
}

// Compact bullet item: dynamically sized
function BulletItem({ children, fontSize = "11px", lineHeight = 1.28, marginBottom = "2px", style }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom,
                lineHeight,
                fontSize,
                fontWeight: "400",
                color: "#000000",
                fontFamily: TIMES_FONT,
                ...style,
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    width: "13px",
                    flexShrink: 0,
                    fontSize,
                    lineHeight,
                    color: "#000000",
                    fontFamily: TIMES_FONT,
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
                    color: "#000000",
                    fontFamily: TIMES_FONT,
                }}
            >
                {children}
            </div>
        </div>
    )
}

// Section Heading: base + 1, Bold
function SectionHeading({ title, fontSize = "12px" }) {
    return (
        <h2
            style={{
                fontSize,
                fontWeight: "700",
                color: "#000000",
                margin: "0 0 3px 0",
                lineHeight: 1.24,
                textTransform: "none",
                fontFamily: TIMES_FONT,
            }}
        >
            {title}
        </h2>
    )
}

// Clean horizontal rule separating completed sections
function SectionDivider({ marginY = "8px", style }) {
    return (
        <div
            style={{
                borderTop: "1px solid #000000",
                height: "0px",
                lineHeight: "0px",
                fontSize: "0px",
                marginTop: marginY,
                marginBottom: marginY,
                width: "100%",
                ...style,
            }}
        />
    )
}

export default function ClassicATS({
    data,
    fontFamily = TIMES_FONT,
    fontSize = 11,
    spacing = "normal",
}) {
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

    const hasEducation = Array.isArray(d.education) && d.education.length > 0
    const hasExperience = Array.isArray(d.experience) && d.experience.length > 0
    const hasSkills = skillCategories.length > 0
    const hasProjects = Array.isArray(d.projects) && d.projects.length > 0
    const hasAchievements = Array.isArray(d.achievements) && d.achievements.filter(Boolean).length > 0
    const hasCertifications = Array.isArray(d.certifications) && d.certifications.filter(c => c && c.name).length > 0

    // Font Sizing Scale (Word-like controls)
    const baseFs = typeof fontSize === "number" ? fontSize : 11
    const headingFs = `${baseFs + 1}px`
    const bodyFs = `${baseFs}px`
    const nameFs = `${baseFs + 10}px`

    // Spacing configuration (Compact, Normal, Relaxed)
    const spacingPresets = {
        compact: {
            paddingY: "36px",
            dividerMargin: "6px",
            itemGap: "5px",
            bulletMargin: "1.5px",
            lineHeight: 1.25,
        },
        normal: {
            paddingY: "44px",
            dividerMargin: "8px",
            itemGap: "7px",
            bulletMargin: "2px",
            lineHeight: 1.29,
        },
        relaxed: {
            paddingY: "48px",
            dividerMargin: "10px",
            itemGap: "9px",
            bulletMargin: "3px",
            lineHeight: 1.34,
        },
    }

    // Auto-detect density & 1-page vertical balancing
    const expBullets = (d.experience || []).reduce((acc, e) => acc + (e.bullets?.filter(Boolean).length || 0), 0)
    const projBullets = (d.projects || []).reduce((acc, p) => acc + (p.bullets?.filter(Boolean).length || 0), 0)
    const achBullets = (d.achievements || []).filter(Boolean).length
    const certCount = (d.certifications || []).filter(c => c && c.name).length
    const totalBullets = expBullets + projBullets + achBullets + certCount

    let chosenPreset = spacingPresets[spacing] || spacingPresets.normal
    if (spacing === "normal") {
        if (totalBullets >= 20) chosenPreset = spacingPresets.compact
        else if (totalBullets <= 10) chosenPreset = spacingPresets.relaxed
    }

    const { paddingY, dividerMargin, itemGap, bulletMargin, lineHeight } = chosenPreset

    // When content is 1 page (<= 19 bullets), distribute sections evenly so top and bottom margins match!
    const isSinglePage = totalBullets <= 19

    return (
        <div
            style={{
                width: "794px",
                minHeight: "1123px",
                backgroundColor: "#FFFFFF",
                fontFamily: TIMES_FONT,
                color: "#000000",
                padding: `${paddingY} 44px`,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: isSinglePage ? "space-between" : "flex-start",
                WebkitFontSmoothing: "antialiased",
                lineHeight,
            }}
        >
            {/* ── 1. HEADER (name and all) ───────────────────────── */}
            <div style={{ width: "100%", fontFamily: TIMES_FONT }}>
                <header style={{ textAlign: "center", marginBottom: "0px", fontFamily: TIMES_FONT }}>
                    <h1
                        style={{
                            fontSize: nameFs,
                            fontWeight: "700",
                            letterSpacing: "0.01em",
                            color: "#000000",
                            margin: "0 0 3px 0",
                            lineHeight: 1.2,
                            fontFamily: TIMES_FONT,
                        }}
                    >
                        {formatText(p.name || "Your Name")}
                    </h1>

                    {/* Contacts */}
                    {contactItems.length > 0 && (
                        <div style={{ fontSize: bodyFs, fontWeight: "400", color: "#000000", marginBottom: "2px", fontFamily: TIMES_FONT }}>
                            {contactItems.map((item, idx) => (
                                <span key={idx} style={{ fontFamily: TIMES_FONT }}>
                                    {item}
                                    {idx < contactItems.length - 1 && (
                                        <span style={{ margin: "0 5px", color: "#000000", fontFamily: TIMES_FONT }}>|</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Links */}
                    {linkItems.length > 0 && (
                        <div style={{ fontSize: bodyFs, fontWeight: "400", fontFamily: TIMES_FONT }}>
                            {linkItems.map((item, idx) => (
                                <span key={idx} style={{ fontFamily: TIMES_FONT }}>
                                    <a
                                        href={formatUrl(item.url)}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            color: "#0000EE",
                                            textDecoration: "underline",
                                            fontFamily: TIMES_FONT,
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                    {idx < linkItems.length - 1 && (
                                        <span style={{ margin: "0 5px", color: "#000000", textDecoration: "none", fontFamily: TIMES_FONT }}>|</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    )}
                </header>
                <SectionDivider marginY={dividerMargin} />
            </div>

            {/* ── 2. PROFESSIONAL SUMMARY ───────────────────────── */}
            {d.summary && (
                <div style={{ width: "100%", fontFamily: TIMES_FONT }}>
                    <section style={{ fontFamily: TIMES_FONT }}>
                        <SectionHeading title="Professional Summary" fontSize={headingFs} />
                        <p style={{
                            fontSize: bodyFs,
                            fontWeight: "400",
                            color: "#000000",
                            lineHeight,
                            margin: 0,
                            textAlign: "justify",
                            fontFamily: TIMES_FONT,
                        }}>
                            {formatText(d.summary)}
                        </p>
                    </section>
                    <SectionDivider marginY={dividerMargin} />
                </div>
            )}

            {/* ── 3. EDUCATION ──────────────────────────────────── */}
            {hasEducation && (
                <div style={{ width: "100%", fontFamily: TIMES_FONT }}>
                    <section style={{ fontFamily: TIMES_FONT }}>
                        <SectionHeading title="Education" fontSize={headingFs} />
                        <div style={{ display: "flex", flexDirection: "column", gap: spacing === "relaxed" ? "5px" : "2px", fontFamily: TIMES_FONT }}>
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
                                    <div key={edu.id || idx} style={{ fontSize: bodyFs, fontWeight: "400", lineHeight, color: "#000000", fontFamily: TIMES_FONT }}>
                                        <strong style={{ color: "#000000", fontWeight: "700", fontFamily: TIMES_FONT }}>{formatText(degreeText)}</strong>
                                        {instText && <span style={{ fontFamily: TIMES_FONT }}> – {formatText(instText)}{locText}</span>}
                                        {dates && <span style={{ fontFamily: TIMES_FONT }}> | {dates}</span>}
                                        {cgpa && <span style={{ fontFamily: TIMES_FONT }}> | {cgpa}</span>}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    <SectionDivider marginY={dividerMargin} />
                </div>
            )}

            {/* ── 4. EXPERIENCE ─────────────────────────────────── */}
            {hasExperience && (
                <div style={{ width: "100%", fontFamily: TIMES_FONT }}>
                    <section style={{ fontFamily: TIMES_FONT }}>
                        <SectionHeading title="Experience" fontSize={headingFs} />
                        <div style={{ display: "flex", flexDirection: "column", gap: itemGap, fontFamily: TIMES_FONT }}>
                            {d.experience.map((exp, idx) => {
                                const dates = (exp.startDate || exp.endDate)
                                    ? `${exp.startDate ? `${exp.startDate} – ` : ""}${exp.current ? "Present" : exp.endDate}`
                                    : ""
                                return (
                                    <div key={exp.id || idx} style={{ fontFamily: TIMES_FONT }}>
                                        <div style={{ fontSize: bodyFs, lineHeight: 1.25, marginBottom: "2px", color: "#000000", fontFamily: TIMES_FONT }}>
                                            <strong style={{ color: "#000000", fontWeight: "700", fontFamily: TIMES_FONT }}>{formatText(exp.role)}</strong>
                                            {exp.company && <span style={{ fontFamily: TIMES_FONT }}> — {formatText(exp.company)}</span>}
                                            {dates && <span style={{ fontFamily: TIMES_FONT }}> | {dates}</span>}
                                            {exp.location && <span style={{ fontFamily: TIMES_FONT }}> | {exp.location}</span>}
                                        </div>

                                        {/* Bullets */}
                                        {Array.isArray(exp.bullets) && exp.bullets.length > 0 && (
                                            <div style={{ paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                                                {exp.bullets.filter(Boolean).map((bullet, bIdx) => (
                                                    <BulletItem key={bIdx} fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin}>
                                                        {formatText(bullet)}
                                                    </BulletItem>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    <SectionDivider marginY={dividerMargin} />
                </div>
            )}

            {/* ── 5. TECHNICAL SKILLS ───────────────────────────── */}
            {hasSkills && (
                <div style={{ width: "100%", fontFamily: TIMES_FONT }}>
                    <section style={{ fontFamily: TIMES_FONT }}>
                        <SectionHeading title="Technical Skills" fontSize={headingFs} />
                        <div style={{ display: "flex", flexDirection: "column", gap: spacing === "relaxed" ? "4px" : "2px", paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                            {skillCategories.map((cat, idx) => (
                                <div key={idx} style={{ display: "flex", alignItems: "flex-start", fontSize: bodyFs, fontWeight: "400", lineHeight, color: "#000000", fontFamily: TIMES_FONT }}>
                                    <span style={{ width: "13px", flexShrink: 0, color: "#000000", fontFamily: TIMES_FONT }}>•</span>
                                    <div style={{ flex: 1, color: "#000000", fontFamily: TIMES_FONT }}>
                                        <strong style={{ color: "#000000", fontWeight: "700", fontFamily: TIMES_FONT }}>{cat.label}: </strong>
                                        <span style={{ color: "#000000", fontFamily: TIMES_FONT }}>{cat.items.join(", ")}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <SectionDivider marginY={dividerMargin} />
                </div>
            )}

            {/* ── 6. PROJECTS (name - link, bullets one below one) ─ */}
            {hasProjects && (
                <div style={{ width: "100%", fontFamily: TIMES_FONT }}>
                    <section style={{ fontFamily: TIMES_FONT }}>
                        <SectionHeading title="Projects" fontSize={headingFs} />
                        <div style={{ display: "flex", flexDirection: "column", gap: itemGap, fontFamily: TIMES_FONT }}>
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
                                    <div key={proj.id || idx} style={{ fontFamily: TIMES_FONT }}>
                                        {/* Line 1: Project Name – Link */}
                                        <div style={{ fontSize: bodyFs, lineHeight: 1.25, marginBottom: "2px", color: "#000000", fontFamily: TIMES_FONT }}>
                                            <strong style={{ color: "#000000", fontWeight: "700", fontFamily: TIMES_FONT }}>
                                                {formatText(proj.name)}
                                            </strong>
                                            {linkUrl && (
                                                <span style={{ fontFamily: TIMES_FONT }}>
                                                    {" – "}
                                                    <a
                                                        href={linkUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        style={{
                                                            color: "#0000EE",
                                                            textDecoration: "underline",
                                                            fontFamily: TIMES_FONT,
                                                            fontWeight: "400",
                                                        }}
                                                    >
                                                        ({linkLabel})
                                                    </a>
                                                </span>
                                            )}
                                        </div>

                                        {/* Bullets points directly one below one */}
                                        {Array.isArray(proj.bullets) && proj.bullets.length > 0 ? (
                                            <div style={{ paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                                                {proj.bullets.filter(Boolean).map((bullet, bIdx) => (
                                                    <BulletItem key={bIdx} fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin}>
                                                        {formatText(bullet)}
                                                    </BulletItem>
                                                ))}
                                            </div>
                                        ) : proj.description ? (
                                            <div style={{ paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                                                <BulletItem fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin}>
                                                    {formatText(proj.description)}
                                                </BulletItem>
                                            </div>
                                        ) : null}

                                        {/* Divider between project items if no achievements/certifications follow */}
                                        {!hasAchievements && !hasCertifications && idx < d.projects.length - 1 && (
                                            <SectionDivider marginY={dividerMargin} />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    {(hasAchievements || hasCertifications) && <SectionDivider marginY={dividerMargin} />}
                </div>
            )}

            {/* ── 7. ACHIEVEMENTS (Optional) ─────────────────────── */}
            {hasAchievements && (
                <div style={{ width: "100%", fontFamily: TIMES_FONT }}>
                    <section style={{ fontFamily: TIMES_FONT }}>
                        <SectionHeading title="Achievements" fontSize={headingFs} />
                        <div style={{ paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                            {d.achievements.filter(Boolean).map((item, idx) => (
                                <BulletItem key={idx} fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin}>
                                    {formatText(item)}
                                </BulletItem>
                            ))}
                        </div>
                    </section>
                    {hasCertifications && <SectionDivider marginY={dividerMargin} />}
                </div>
            )}

            {/* ── 8. CERTIFICATIONS (Optional) ──────────────────── */}
            {hasCertifications && (
                <div style={{ width: "100%", fontFamily: TIMES_FONT }}>
                    <section style={{ fontFamily: TIMES_FONT }}>
                        <SectionHeading title="Certifications" fontSize={headingFs} />
                        <div style={{ paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                            {d.certifications.filter(c => c && c.name).map((cert, idx) => (
                                <BulletItem key={idx} fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin}>
                                    <strong style={{ color: "#000000", fontWeight: "700", fontFamily: TIMES_FONT }}>{formatText(cert.name)}</strong>
                                    {cert.issuer ? ` – ${cert.issuer}` : ""}
                                    {cert.year ? ` (${cert.year})` : ""}
                                </BulletItem>
                            ))}
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
}
