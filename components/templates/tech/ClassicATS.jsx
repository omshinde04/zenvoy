// components/templates/tech/ClassicATS.jsx
// Production-Grade Classic ATS Template (Heading: 12px Bold, Other Text: 11px Normal, 100% Times New Roman, Balanced Margins)

const TIMES_FONT = "'Times New Roman', Times, 'Tinos', serif"

// Formats inline **bold** text in bullets
function formatText(text = "") {
    if (!text || typeof text !== "string") return text
    if (!text.includes("**")) return text
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
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

// Compact bullet item: 11px normal font
function BulletItem({ children, lineHeight = 1.28, marginBottom = "2px", style }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom,
                lineHeight,
                fontSize: "11px",
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
                    fontSize: "11px",
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
                    fontSize: "11px",
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

// Section Heading: 12px Bold
function SectionHeading({ title }) {
    return (
        <h2
            style={{
                fontSize: "12px",
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
                borderBottom: "1px solid #000000",
                marginTop: marginY,
                marginBottom: marginY,
                width: "100%",
                ...style,
            }}
        />
    )
}

export default function ClassicATS({ data, fontFamily = TIMES_FONT }) {
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

    // Dynamic Density Balancing: Automatically adjusts vertical spacing so content fills A4 page with equal top and bottom gaps
    const expBullets = (d.experience || []).reduce((acc, e) => acc + (e.bullets?.filter(Boolean).length || 0), 0)
    const projBullets = (d.projects || []).reduce((acc, p) => acc + (p.bullets?.filter(Boolean).length || 0), 0)
    const achBullets = (d.achievements || []).filter(Boolean).length
    const totalBullets = expBullets + projBullets + achBullets

    const isVeryDense = totalBullets >= 14
    const isRelaxed = totalBullets <= 8

    const paddingY = isVeryDense ? "36px" : isRelaxed ? "48px" : "42px"
    const dividerMargin = isVeryDense ? "6px" : isRelaxed ? "11px" : "8px"
    const itemGap = isVeryDense ? "5px" : isRelaxed ? "10px" : "7px"
    const bulletMargin = isVeryDense ? "1.5px" : isRelaxed ? "3.5px" : "2px"
    const lh = isVeryDense ? 1.26 : isRelaxed ? 1.33 : 1.29

    return (
        <div
            style={{
                width: "794px",
                minHeight: "1123px",
                backgroundColor: "#FFFFFF",
                fontFamily: TIMES_FONT,
                color: "#000000",
                padding: `${paddingY} 44px ${paddingY} 44px`,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                WebkitFontSmoothing: "antialiased",
                lineHeight: lh,
            }}
        >
            {/* ── 1. HEADER (name and all) ───────────────────────── */}
            <header style={{ textAlign: "center", marginBottom: "0px", fontFamily: TIMES_FONT }}>
                <h1
                    style={{
                        fontSize: "21px",
                        fontWeight: "700",
                        letterSpacing: "0.01em",
                        color: "#000000",
                        margin: "0 0 3px 0",
                        lineHeight: 1.2,
                        fontFamily: TIMES_FONT,
                    }}
                >
                    {p.name || "Your Name"}
                </h1>

                {/* Contacts: 11px normal */}
                {contactItems.length > 0 && (
                    <div style={{ fontSize: "11px", fontWeight: "400", color: "#000000", marginBottom: "2px", fontFamily: TIMES_FONT }}>
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

                {/* Links: 11px normal */}
                {linkItems.length > 0 && (
                    <div style={{ fontSize: "11px", fontWeight: "400", fontFamily: TIMES_FONT }}>
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

            {/* Line under header */}
            <SectionDivider marginY={dividerMargin} />

            {/* ── 2. PROFESSIONAL SUMMARY ───────────────────────── */}
            {d.summary && (
                <section style={{ fontFamily: TIMES_FONT }}>
                    <SectionHeading title="Professional Summary" />
                    <p style={{
                        fontSize: "11px",
                        fontWeight: "400",
                        color: "#000000",
                        lineHeight: lh,
                        margin: 0,
                        textAlign: "justify",
                        fontFamily: TIMES_FONT,
                    }}>
                        {d.summary}
                    </p>
                    <SectionDivider marginY={dividerMargin} />
                </section>
            )}

            {/* ── 3. EDUCATION ──────────────────────────────────── */}
            {Array.isArray(d.education) && d.education.length > 0 && (
                <section style={{ fontFamily: TIMES_FONT }}>
                    <SectionHeading title="Education" />
                    <div style={{ display: "flex", flexDirection: "column", gap: isRelaxed ? "5px" : "2px", fontFamily: TIMES_FONT }}>
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
                                <div key={edu.id || idx} style={{ fontSize: "11px", fontWeight: "400", lineHeight: lh, color: "#000000", fontFamily: TIMES_FONT }}>
                                    <strong style={{ color: "#000000", fontWeight: "700", fontFamily: TIMES_FONT }}>{degreeText}</strong>
                                    {instText && <span style={{ fontFamily: TIMES_FONT }}> – {instText}{locText}</span>}
                                    {dates && <span style={{ fontFamily: TIMES_FONT }}> | {dates}</span>}
                                    {cgpa && <span style={{ fontFamily: TIMES_FONT }}> | {cgpa}</span>}
                                </div>
                            )
                        })}
                    </div>
                    <SectionDivider marginY={dividerMargin} />
                </section>
            )}

            {/* ── 4. EXPERIENCE ─────────────────────────────────── */}
            {Array.isArray(d.experience) && d.experience.length > 0 && (
                <section style={{ fontFamily: TIMES_FONT }}>
                    <SectionHeading title="Experience" />
                    <div style={{ display: "flex", flexDirection: "column", gap: itemGap, fontFamily: TIMES_FONT }}>
                        {d.experience.map((exp, idx) => {
                            const dates = (exp.startDate || exp.endDate)
                                ? `${exp.startDate ? `${exp.startDate} – ` : ""}${exp.current ? "Present" : exp.endDate}`
                                : ""
                            return (
                                <div key={exp.id || idx} style={{ fontFamily: TIMES_FONT }}>
                                    <div style={{ fontSize: "11px", lineHeight: 1.25, marginBottom: "2px", color: "#000000", fontFamily: TIMES_FONT }}>
                                        <strong style={{ color: "#000000", fontWeight: "700", fontFamily: TIMES_FONT }}>{exp.role}</strong>
                                        {exp.company && <span style={{ fontFamily: TIMES_FONT }}> — {exp.company}</span>}
                                        {dates && <span style={{ fontFamily: TIMES_FONT }}> | {dates}</span>}
                                        {exp.location && <span style={{ fontFamily: TIMES_FONT }}> | {exp.location}</span>}
                                    </div>

                                    {/* Bullets: 11px normal */}
                                    {Array.isArray(exp.bullets) && exp.bullets.length > 0 && (
                                        <div style={{ paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                                            {exp.bullets.filter(Boolean).map((bullet, bIdx) => (
                                                <BulletItem key={bIdx} lineHeight={lh} marginBottom={bulletMargin}>
                                                    {formatText(bullet)}
                                                </BulletItem>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <SectionDivider marginY={dividerMargin} />
                </section>
            )}

            {/* ── 5. TECHNICAL SKILLS ───────────────────────────── */}
            {skillCategories.length > 0 && (
                <section style={{ fontFamily: TIMES_FONT }}>
                    <SectionHeading title="Technical Skills" />
                    <div style={{ display: "flex", flexDirection: "column", gap: isRelaxed ? "4px" : "2px", paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                        {skillCategories.map((cat, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "flex-start", fontSize: "11px", fontWeight: "400", lineHeight: lh, color: "#000000", fontFamily: TIMES_FONT }}>
                                <span style={{ width: "13px", flexShrink: 0, color: "#000000", fontFamily: TIMES_FONT }}>•</span>
                                <div style={{ flex: 1, color: "#000000", fontFamily: TIMES_FONT }}>
                                    <strong style={{ color: "#000000", fontWeight: "700", fontFamily: TIMES_FONT }}>{cat.label}: </strong>
                                    <span style={{ color: "#000000", fontFamily: TIMES_FONT }}>{cat.items.join(", ")}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <SectionDivider marginY={dividerMargin} />
                </section>
            )}

            {/* ── 6. PROJECTS ───────────────────────────────────── */}
            {Array.isArray(d.projects) && d.projects.length > 0 && (
                <section style={{ fontFamily: TIMES_FONT }}>
                    <SectionHeading title="Projects" />
                    <div style={{ display: "flex", flexDirection: "column", gap: itemGap, fontFamily: TIMES_FONT }}>
                        {d.projects.map((proj, idx) => (
                            <div key={proj.id || idx} style={{ fontFamily: TIMES_FONT }}>
                                <div style={{ fontSize: "11px", lineHeight: 1.25, marginBottom: "2px", color: "#000000", fontFamily: TIMES_FONT }}>
                                    <strong style={{ color: "#000000", fontWeight: "700", fontFamily: TIMES_FONT }}>{proj.name}</strong>
                                    {proj.link && (
                                        <a
                                            href={formatUrl(proj.link)}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                color: "#0000EE",
                                                textDecoration: "underline",
                                                marginLeft: "5px",
                                                fontSize: "11px",
                                                fontFamily: TIMES_FONT,
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
                                                marginLeft: "5px",
                                                fontSize: "11px",
                                                fontFamily: TIMES_FONT,
                                            }}
                                        >
                                            (code)
                                        </a>
                                    )}
                                    {proj.techStack && (
                                        <span style={{ fontSize: "11px", color: "#000000", marginLeft: "6px", fontFamily: TIMES_FONT }}>
                                            | {proj.techStack}
                                        </span>
                                    )}
                                </div>

                                {proj.description && (
                                    <div style={{ fontSize: "11px", fontWeight: "400", color: "#000000", marginBottom: "2px", lineHeight: lh, fontFamily: TIMES_FONT }}>
                                        {proj.description}
                                    </div>
                                )}

                                {Array.isArray(proj.bullets) && proj.bullets.length > 0 && (
                                    <div style={{ paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                                        {proj.bullets.filter(Boolean).map((bullet, bIdx) => (
                                            <BulletItem key={bIdx} lineHeight={lh} marginBottom={bulletMargin}>
                                                {formatText(bullet)}
                                            </BulletItem>
                                        ))}
                                    </div>
                                )}

                                {/* Divider between project items if no achievements/certifications follow */}
                                {!hasAchievements && !hasCertifications && idx < d.projects.length - 1 && (
                                    <SectionDivider marginY={dividerMargin} />
                                )}
                            </div>
                        ))}
                    </div>
                    {(hasAchievements || hasCertifications) && <SectionDivider marginY={dividerMargin} />}
                </section>
            )}

            {/* ── 7. ACHIEVEMENTS (Optional) ─────────────────────── */}
            {hasAchievements && (
                <section style={{ fontFamily: TIMES_FONT }}>
                    <SectionHeading title="Achievements" />
                    <div style={{ paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                        {d.achievements.filter(Boolean).map((item, idx) => (
                            <BulletItem key={idx} lineHeight={lh} marginBottom={bulletMargin}>
                                {formatText(item)}
                            </BulletItem>
                        ))}
                    </div>
                    {hasCertifications && <SectionDivider marginY={dividerMargin} />}
                </section>
            )}

            {/* ── 8. CERTIFICATIONS (Optional) ──────────────────── */}
            {hasCertifications && (
                <section style={{ fontFamily: TIMES_FONT }}>
                    <SectionHeading title="Certifications" />
                    <div style={{ paddingLeft: "4px", fontFamily: TIMES_FONT }}>
                        {d.certifications.filter(c => c && c.name).map((cert, idx) => (
                            <BulletItem key={idx} lineHeight={lh} marginBottom={bulletMargin}>
                                <strong style={{ color: "#000000", fontWeight: "700", fontFamily: TIMES_FONT }}>{cert.name}</strong>
                                {cert.issuer ? ` – ${cert.issuer}` : ""}
                                {cert.year ? ` (${cert.year})` : ""}
                            </BulletItem>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}
