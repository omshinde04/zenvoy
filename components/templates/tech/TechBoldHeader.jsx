// components/templates/tech/TechBoldHeader.jsx

export default function TechBoldHeader({ data }) {
    const d = data

    const allSkills = [
        d.skills?.languages?.length > 0 ? { label: "Languages", items: d.skills.languages } : null,
        d.skills?.frameworks?.length > 0 ? { label: "Frameworks & Libraries", items: d.skills.frameworks } : null,
        d.skills?.tools?.length > 0 ? { label: "Tools", items: d.skills.tools } : null,
        d.skills?.other?.length > 0 ? { label: "Other", items: d.skills.other } : null,
    ].filter(Boolean)

    return (
        <div style={{
            width: "794px",
            height: "1123px",
            backgroundColor: "#FFFFFF",
            fontFamily: "Inter, sans-serif",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            WebkitFontSmoothing: "antialiased",
            boxSizing: "border-box",
        }}>

            {/* ── Dark Bold Header ─────────────────────────────── */}
            <header style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#1E3A5F",
                padding: "28px 40px",
                flexShrink: 0,
            }}>
                <h1 style={{
                    fontSize: "30px",
                    fontWeight: "900",
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    margin: 0,
                    lineHeight: "36px",
                }}>
                    {d.personal.name || "YOUR NAME"}
                </h1>
                <p style={{
                    color: "#FFFFFF",
                    marginTop: "8px",
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    opacity: 0.85,
                    margin: "8px 0 0 0",
                }}>
                    {[
                        d.personal.location,
                        d.personal.email,
                        d.personal.phone,
                        d.personal.linkedin,
                        d.personal.github,
                    ].filter(Boolean).join("  |  ")}
                </p>
            </header>

            {/* ── Body ─────────────────────────────────────────── */}
            <div style={{
                flex: 1,
                padding: "28px 40px 0 40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                overflow: "hidden",
            }}>

                {/* ── Technical Skills ─────────────────────────── */}
                {allSkills.length > 0 && (
                    <section>
                        <SectionHeader title="Technical Skills" />
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {allSkills.map((s, i) => (
                                <p key={i} style={{ fontSize: "13px", color: "#374151", margin: 0, lineHeight: "1.6" }}>
                                    <strong style={{ color: "#111827" }}>{s.label}:</strong>{" "}
                                    {s.items.join(", ")}
                                </p>
                            ))}
                        </div>
                    </section>
                )}

                {/* ── Experience ───────────────────────────────── */}
                {d.experience?.length > 0 && (
                    <section>
                        <SectionHeader title="Professional Experience" />
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            {d.experience.map((exp, i) => (
                                <div key={i}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                                        <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#111827", margin: 0 }}>
                                            {exp.role}{exp.company ? ` / ${exp.company}` : ""}
                                        </h3>
                                        <span style={{ fontSize: "11px", color: "#6B7280", flexShrink: 0, marginLeft: "12px" }}>
                                            {exp.startDate}{exp.startDate && " – "}{exp.current ? "Present" : exp.endDate}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                        {exp.bullets?.filter(Boolean).map((b, j) => (
                                            <BulletItem key={j} text={b} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ── Projects ─────────────────────────────────── */}
                {d.projects?.length > 0 && (
                    <section>
                        <SectionHeader title="Projects" />
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {d.projects.map((proj, i) => (
                                <div key={i}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                                        <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#111827", margin: 0 }}>
                                            {proj.name}
                                        </h3>
                                        {proj.techStack && (
                                            <span style={{ fontSize: "11px", color: "#6B7280", flexShrink: 0, marginLeft: "12px" }}>
                                                {proj.techStack}
                                            </span>
                                        )}
                                    </div>
                                    {proj.description && (
                                        <p style={{ fontSize: "13px", color: "#374151", margin: "0 0 4px 0", lineHeight: "1.6" }}>
                                            {proj.description}
                                        </p>
                                    )}
                                    {proj.bullets?.filter(Boolean).map((b, j) => (
                                        <BulletItem key={j} text={b} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ── Education ────────────────────────────────── */}
                {d.education?.length > 0 && (
                    <section>
                        <SectionHeader title="Education" />
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            {d.education.map((edu, i) => (
                                <div key={i}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
                                        <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#111827", margin: 0 }}>
                                            {edu.degree}
                                        </h3>
                                        <span style={{ fontSize: "11px", color: "#6B7280", flexShrink: 0, marginLeft: "12px" }}>
                                            {edu.endYear}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: "13px", color: "#374151", margin: 0 }}>
                                        {edu.institution}
                                        {edu.cgpa ? ` — CGPA: ${edu.cgpa}` : ""}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ── Achievements ─────────────────────────────── */}
                {d.achievements?.filter(Boolean).length > 0 && (
                    <section>
                        <SectionHeader title="Achievements" />
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {d.achievements.filter(Boolean).map((a, i) => (
                                <BulletItem key={i} text={a} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Spacer */}
                <div style={{ flex: 1 }} />

            </div>

            {/* ── Footer ───────────────────────────────────────── */}
            <footer style={{
                padding: "14px 40px",
                borderTop: "1px solid #0F172A",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexShrink: 0,
            }}>
                <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F172A" }}>
                    {d.personal.name ? `${d.personal.name}` : "Portfolio"}
                </span>
                <div style={{ display: "flex", gap: "16px" }}>
                    {d.personal.linkedin && (
                        <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B" }}>
                            LinkedIn
                        </span>
                    )}
                    {d.personal.github && (
                        <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B" }}>
                            GitHub
                        </span>
                    )}
                    {d.personal.portfolio && (
                        <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B" }}>
                            Portfolio
                        </span>
                    )}
                </div>
            </footer>

        </div>
    )
}

// ── Shared Sub-components ────────────────────────────────────

function SectionHeader({ title }) {
    return (
        <div style={{
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.1em",
            color: "#2563EB",
            textTransform: "uppercase",
            borderBottom: "1px solid #E5E7EB",
            paddingBottom: "4px",
            marginBottom: "12px",
        }}>
            {title}
        </div>
    )
}

function BulletItem({ text }) {
    return (
        <div style={{ display: "flex", fontSize: "13px", color: "#374151", lineHeight: "1.6", marginBottom: "2px" }}>
            <span style={{ width: "14px", flexShrink: 0, marginRight: "4px" }}>–</span>
            <span>{text}</span>
        </div>
    )
}