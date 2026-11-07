// components/templates/tech/TechTwoColumn.jsx
// Production-Grade Tech Pro Template (Two Column, Word-like Font Sizing & Spacing, 100% Times New Roman, ATS Optimized)

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
                    width: "12px",
                    flexShrink: 0,
                    fontSize,
                    lineHeight,
                    color: "#1D4ED8",
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

function SidebarHeading({ title, fontSize = "10px", fontFamily = TIMES_FONT }) {
    return (
        <div style={{ marginBottom: "6px", fontFamily }}>
            <h2
                style={{
                    fontSize,
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#1D4ED8",
                    letterSpacing: "0.08em",
                    margin: 0,
                    lineHeight: 1.2,
                    fontFamily,
                }}
            >
                {title}
            </h2>
            <div
                style={{
                    borderTop: "1px solid #CBD5E1",
                    height: "0px",
                    lineHeight: "0px",
                    fontSize: "0px",
                    marginTop: "3px",
                    width: "100%",
                }}
            />
        </div>
    )
}

function MainHeading({ title, fontSize = "11px", fontFamily = TIMES_FONT }) {
    return (
        <div style={{ marginBottom: "6px", fontFamily }}>
            <h2
                style={{
                    fontSize,
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#1D4ED8",
                    letterSpacing: "0.08em",
                    margin: 0,
                    lineHeight: 1.2,
                    fontFamily,
                }}
            >
                {title}
            </h2>
            <div
                style={{
                    borderTop: "1px solid #0F172A",
                    height: "0px",
                    lineHeight: "0px",
                    fontSize: "0px",
                    marginTop: "3px",
                    width: "100%",
                }}
            />
        </div>
    )
}

export default function TechTwoColumn({
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
    const tinyFs = `${Math.max(9, baseFs - 1.5)}px`

    // Spacing configuration (Compact, Normal, Relaxed)
    const spacingPresets = {
        compact: {
            headerPadding: "16px 36px",
            sidebarPadding: "16px 18px",
            mainPadding: "16px 24px",
            sidebarGap: "16px",
            mainGap: "12px",
            itemGap: "6px",
            bulletMargin: "2px",
            lineHeight: 1.28,
        },
        normal: {
            headerPadding: "20px 36px",
            sidebarPadding: "20px 20px",
            mainPadding: "20px 28px",
            sidebarGap: "20px",
            mainGap: "14px",
            itemGap: "7.5px",
            bulletMargin: "2.5px",
            lineHeight: 1.315,
        },
        relaxed: {
            headerPadding: "24px 36px",
            sidebarPadding: "24px 22px",
            mainPadding: "24px 32px",
            sidebarGap: "24px",
            mainGap: "16px",
            itemGap: "9px",
            bulletMargin: "3px",
            lineHeight: 1.34,
        },
    }

    const chosenPreset = spacingPresets[spacing] || spacingPresets.normal
    const { headerPadding, sidebarPadding, mainPadding, sidebarGap, mainGap, itemGap, bulletMargin, lineHeight } = chosenPreset

    // Skills categories
    const skillCategories = [
        { label: "Languages", items: skills.languages },
        { label: "Backend", items: skills.backend },
        { label: "Frontend", items: skills.frontend || skills.frameworks },
        { label: "Databases", items: skills.databases },
        { label: "AI / ML", items: skills.ai },
        { label: "Tools", items: skills.tools },
        { label: "Other", items: skills.other },
    ].filter(cat => Array.isArray(cat.items) && cat.items.length > 0)

    const hasEducation = Array.isArray(d.education) && d.education.length > 0
    const hasExperience = Array.isArray(d.experience) && d.experience.length > 0
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
                color: "#0F172A",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                overflow: "hidden",
                WebkitFontSmoothing: "antialiased",
                boxSizing: "border-box",
                lineHeight,
            }}
        >
            {/* ── Dark Header ─────────────────────────────────────── */}
            <header
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    padding: headerPadding,
                    backgroundColor: "#0F172A",
                    flexShrink: 0,
                    boxSizing: "border-box",
                    fontFamily: activeFont,
                }}
            >
                <h1
                    style={{
                        fontSize: nameFs,
                        fontWeight: "700",
                        color: "#FFFFFF",
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                        margin: 0,
                        lineHeight: 1.2,
                        fontFamily: activeFont,
                    }}
                >
                    {formatText(p.name || "YOUR NAME", activeFont)}
                </h1>
                {p.role && (
                    <p
                        style={{
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            fontSize: bodyFs,
                            fontWeight: "700",
                            color: "#60A5FA",
                            margin: "4px 0 0 0",
                            fontFamily: activeFont,
                        }}
                    >
                        {formatText(p.role, activeFont)}
                    </p>
                )}
                <p style={{ fontSize: subFs, color: "#CBD5E1", margin: "4px 0 0 0", fontFamily: activeFont }}>
                    {[p.location, p.email, p.phone]
                        .filter(Boolean)
                        .join("  •  ")}
                </p>
            </header>

            {/* ── Body Two Column ─────────────────────────────────── */}
            <div style={{ display: "flex", flex: 1, boxSizing: "border-box", fontFamily: activeFont }}>

                {/* Left Sidebar */}
                <aside
                    style={{
                        width: "235px",
                        backgroundColor: "#F8FAFC",
                        borderRight: "1px solid #E2E8F0",
                        display: "flex",
                        flexDirection: "column",
                        gap: sidebarGap,
                        padding: sidebarPadding,
                        flexShrink: 0,
                        boxSizing: "border-box",
                        fontFamily: activeFont,
                    }}
                >
                    {/* 1. Contact / Links */}
                    <div style={{ fontFamily: activeFont }}>
                        <SidebarHeading title="Contact" fontSize={tinyFs} fontFamily={activeFont} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: tinyFs, fontFamily: activeFont }}>
                            {p.email && (
                                <div>
                                    <span style={{ fontWeight: "700", color: "#334155", display: "block" }}>Email</span>
                                    <span style={{ color: "#475569", wordBreak: "break-all" }}>{p.email}</span>
                                </div>
                            )}
                            {p.phone && (
                                <div>
                                    <span style={{ fontWeight: "700", color: "#334155", display: "block" }}>Phone</span>
                                    <span style={{ color: "#475569" }}>{p.phone}</span>
                                </div>
                            )}
                            {p.location && (
                                <div>
                                    <span style={{ fontWeight: "700", color: "#334155", display: "block" }}>Location</span>
                                    <span style={{ color: "#475569" }}>{p.location}</span>
                                </div>
                            )}
                            {p.linkedin && (
                                <div>
                                    <span style={{ fontWeight: "700", color: "#334155", display: "block" }}>LinkedIn</span>
                                    <a href={formatUrl(p.linkedin)} target="_blank" rel="noreferrer" style={{ color: "#2563EB", textDecoration: "underline" }}>
                                        Profile
                                    </a>
                                </div>
                            )}
                            {p.github && (
                                <div>
                                    <span style={{ fontWeight: "700", color: "#334155", display: "block" }}>GitHub</span>
                                    <a href={formatUrl(p.github)} target="_blank" rel="noreferrer" style={{ color: "#2563EB", textDecoration: "underline" }}>
                                        Repository
                                    </a>
                                </div>
                            )}
                            {p.portfolio && (
                                <div>
                                    <span style={{ fontWeight: "700", color: "#334155", display: "block" }}>Portfolio</span>
                                    <a href={formatUrl(p.portfolio)} target="_blank" rel="noreferrer" style={{ color: "#2563EB", textDecoration: "underline" }}>
                                        Website
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 2. Skills */}
                    {skillCategories.length > 0 && (
                        <div style={{ fontFamily: activeFont }}>
                            <SidebarHeading title="Skills" fontSize={tinyFs} fontFamily={activeFont} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: tinyFs, fontFamily: activeFont }}>
                                {skillCategories.map((cat, idx) => (
                                    <div key={idx} style={{ fontFamily: activeFont }}>
                                        <span style={{ fontWeight: "700", color: "#1E293B", display: "block" }}>{cat.label}</span>
                                        <span style={{ color: "#475569", lineHeight: 1.25 }}>{cat.items.join(", ")}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 3. Education */}
                    {hasEducation && (
                        <div style={{ fontFamily: activeFont }}>
                            <SidebarHeading title="Education" fontSize={tinyFs} fontFamily={activeFont} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: tinyFs, fontFamily: activeFont }}>
                                {d.education.map((edu, idx) => (
                                    <div key={edu.id || idx} style={{ fontFamily: activeFont }}>
                                        <p style={{ fontWeight: "700", color: "#1E293B", margin: 0 }}>{formatText(edu.degree, activeFont)}</p>
                                        <p style={{ color: "#475569", margin: "1px 0" }}>{formatText(edu.institution, activeFont)}</p>
                                        <p style={{ color: "#64748B", margin: 0 }}>
                                            {edu.startYear ? `${edu.startYear}–` : ""}{edu.endYear}
                                            {edu.cgpa ? ` | ${edu.cgpa}` : ""}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 4. Certifications */}
                    {hasCertifications && (
                        <div style={{ fontFamily: activeFont }}>
                            <SidebarHeading title="Certifications" fontSize={tinyFs} fontFamily={activeFont} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: tinyFs, fontFamily: activeFont }}>
                                {d.certifications.filter(c => c && c.name).map((cert, idx) => (
                                    <div key={idx} style={{ color: "#334155", lineHeight: 1.25, fontFamily: activeFont }}>
                                        • <strong style={{ fontWeight: "700" }}>{formatText(cert.name, activeFont)}</strong>
                                        {cert.issuer && ` – ${cert.issuer}`}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>

                {/* Right Main Content */}
                <main
                    style={{
                        flex: 1,
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        gap: mainGap,
                        padding: mainPadding,
                        boxSizing: "border-box",
                        fontFamily: activeFont,
                    }}
                >
                    {/* 1. Summary */}
                    {d.summary && (
                        <section style={{ fontFamily: activeFont }}>
                            <MainHeading title="Professional Summary" fontSize={headingFs} fontFamily={activeFont} />
                            <p style={{ fontSize: bodyFs, color: "#334155", margin: 0, lineHeight, textAlign: "justify", fontFamily: activeFont }}>
                                {formatText(d.summary, activeFont)}
                            </p>
                        </section>
                    )}

                    {/* 2. Experience */}
                    {hasExperience && (
                        <section style={{ fontFamily: activeFont }}>
                            <MainHeading title="Experience" fontSize={headingFs} fontFamily={activeFont} />
                            <div style={{ display: "flex", flexDirection: "column", gap: itemGap, fontFamily: activeFont }}>
                                {d.experience.map((exp, idx) => {
                                    const dates = (exp.startDate || exp.endDate)
                                        ? `${exp.startDate ? `${exp.startDate} – ` : ""}${exp.current ? "Present" : exp.endDate}`
                                        : ""
                                    return (
                                        <div key={exp.id || idx} style={{ fontFamily: activeFont }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px", fontFamily: activeFont }}>
                                                <h3 style={{ fontSize: bodyFs, fontWeight: "700", color: "#0F172A", margin: 0, fontFamily: activeFont }}>
                                                    {formatText(exp.role, activeFont)}
                                                    {exp.company && <span style={{ fontWeight: "400", color: "#475569" }}> — {formatText(exp.company, activeFont)}</span>}
                                                </h3>
                                                <span style={{ fontSize: subFs, color: "#64748B", flexShrink: 0, marginLeft: "10px", fontFamily: activeFont }}>
                                                    {dates}
                                                </span>
                                            </div>
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

                    {/* 3. Projects (Name – Link, bullets directly one below one) */}
                    {hasProjects && (
                        <section style={{ fontFamily: activeFont }}>
                            <MainHeading title="Projects" fontSize={headingFs} fontFamily={activeFont} />
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
                                                <div style={{ fontSize: bodyFs, fontWeight: "700", color: "#0F172A", fontFamily: activeFont }}>
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
                                                    <span style={{ fontSize: subFs, color: "#64748B", flexShrink: 0, marginLeft: "10px", fontFamily: activeFont }}>
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

                    {/* 4. Achievements */}
                    {hasAchievements && (
                        <section style={{ fontFamily: activeFont }}>
                            <MainHeading title="Achievements" fontSize={headingFs} fontFamily={activeFont} />
                            <div style={{ paddingLeft: "2px", fontFamily: activeFont }}>
                                {d.achievements.filter(Boolean).map((a, idx) => (
                                    <BulletItem key={idx} fontSize={bodyFs} lineHeight={lineHeight} marginBottom={bulletMargin} fontFamily={activeFont}>
                                        {formatText(a, activeFont)}
                                    </BulletItem>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>

            {/* ── Footer ─────────────────────────────────────────── */}
            <footer
                style={{
                    padding: "10px 36px",
                    borderTop: "1px solid #E2E8F0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexShrink: 0,
                    marginTop: "auto",
                    boxSizing: "border-box",
                    fontFamily: activeFont,
                }}
            >
                <span style={{ fontSize: subFs, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B", fontFamily: activeFont }}>
                    {p.name || "Portfolio"}
                </span>
                <div style={{ display: "flex", gap: "16px", fontFamily: activeFont }}>
                    {p.linkedin && (
                        <span style={{ fontSize: subFs, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B", fontFamily: activeFont }}>
                            LinkedIn
                        </span>
                    )}
                    {p.github && (
                        <span style={{ fontSize: subFs, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B", fontFamily: activeFont }}>
                            GitHub
                        </span>
                    )}
                    {p.portfolio && (
                        <span style={{ fontSize: subFs, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B", fontFamily: activeFont }}>
                            Portfolio
                        </span>
                    )}
                </div>
            </footer>
        </div>
    )
}
