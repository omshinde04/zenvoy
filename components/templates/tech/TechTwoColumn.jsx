// components/templates/tech/TechTwoColumn.jsx

export default function TechTwoColumn({ data }) {
    const d = data
    const allSkills = [
        ...(d.skills?.languages || []),
        ...(d.skills?.frameworks || []),
        ...(d.skills?.tools || []),
        ...(d.skills?.other || []),
    ]

    return (
        <div
            style={{
                width: "794px",
                height: "1123px",
                backgroundColor: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                WebkitFontSmoothing: "antialiased",
            }}
        >
            {/* Dark Header */}
            <header
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    padding: "0 48px",
                    backgroundColor: "#0F172A",
                    height: "120px",
                    flexShrink: 0,
                }}
            >
                <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#FFFFFF", margin: 0, lineHeight: "34px" }}>
                    {d.personal.name?.toUpperCase() || "YOUR NAME"}
                </h1>
                <p style={{ fontFamily: "Inter", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "13px", fontWeight: "700", color: "#60A5FA", marginTop: "6px" }}>
                    {d.personal.role || "Professional Title"}
                </p>
                <p style={{ fontFamily: "Inter", fontSize: "11px", color: "#CBD5E1", marginTop: "4px" }}>
                    {[d.personal.email, d.personal.phone, d.personal.linkedin, d.personal.github]
                        .filter(Boolean)
                        .join("  •  ")}
                </p>
            </header>

            {/* Body */}
            <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

                {/* Sidebar */}
                <aside
                    style={{
                        width: "224px",
                        backgroundColor: "#F1F5F9",
                        borderRight: "1px solid #CBD5E1",
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "28px",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                        flexShrink: 0,
                        overflowY: "hidden",
                    }}
                >
                    {/* Contact */}
                    <div style={{ marginBottom: "24px" }}>
                        <h2 style={{ fontSize: "9px", textTransform: "uppercase", fontWeight: "700", color: "#1D4ED8", letterSpacing: "0.08em", marginBottom: "6px" }}>CONTACT</h2>
                        <div style={{ height: "1px", backgroundColor: "#CBD5E1", marginBottom: "10px" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            {d.personal.phone && (
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontSize: "10px", fontWeight: "600", color: "#334155" }}>Phone</span>
                                    <span style={{ fontSize: "10px", color: "#475569" }}>{d.personal.phone}</span>
                                </div>
                            )}
                            {d.personal.email && (
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontSize: "10px", fontWeight: "600", color: "#334155" }}>Email</span>
                                    <span style={{ fontSize: "10px", color: "#475569" }}>{d.personal.email}</span>
                                </div>
                            )}
                            {d.personal.location && (
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontSize: "10px", fontWeight: "600", color: "#334155" }}>Location</span>
                                    <span style={{ fontSize: "10px", color: "#475569" }}>{d.personal.location}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Skills */}
                    {allSkills.length > 0 && (
                        <div style={{ marginBottom: "24px" }}>
                            <h2 style={{ fontSize: "9px", textTransform: "uppercase", fontWeight: "700", color: "#1D4ED8", letterSpacing: "0.08em", marginBottom: "6px" }}>SKILLS</h2>
                            <div style={{ height: "1px", backgroundColor: "#CBD5E1", marginBottom: "10px" }} />
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                                {allSkills.map((skill, i) => (
                                    <span key={i} style={{ fontSize: "10px", fontWeight: "600", color: "#334155" }}>
                                        {skill}{i < allSkills.length - 1 ? " |" : ""}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {d.education?.length > 0 && (
                        <div style={{ marginBottom: "24px" }}>
                            <h2 style={{ fontSize: "9px", textTransform: "uppercase", fontWeight: "700", color: "#1D4ED8", letterSpacing: "0.08em", marginBottom: "6px" }}>EDUCATION</h2>
                            <div style={{ height: "1px", backgroundColor: "#CBD5E1", marginBottom: "10px" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                {d.education.map((edu, i) => (
                                    <div key={i}>
                                        <p style={{ fontSize: "10px", fontWeight: "600", color: "#1E293B" }}>{edu.degree}</p>
                                        <p style={{ fontSize: "9px", color: "#64748B", marginTop: "1px" }}>{edu.institution}</p>
                                        <p style={{ fontSize: "9px", color: "#64748B", fontStyle: "italic", marginTop: "1px" }}>
                                            {edu.startYear}{edu.startYear && edu.endYear ? " — " : ""}{edu.endYear}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Certifications */}
                    {d.certifications?.filter(c => c.name).length > 0 && (
                        <div style={{ marginBottom: "24px" }}>
                            <h2 style={{ fontSize: "9px", textTransform: "uppercase", fontWeight: "700", color: "#1D4ED8", letterSpacing: "0.08em", marginBottom: "6px" }}>CERTIFICATIONS</h2>
                            <div style={{ height: "1px", backgroundColor: "#CBD5E1", marginBottom: "10px" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                {d.certifications.filter(c => c.name).map((cert, i) => (
                                    <p key={i} style={{ fontSize: "10px", color: "#475569" }}>– {cert.name}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>

                {/* Main Content */}
                <main
                    style={{
                        flex: 1,
                        backgroundColor: "#FFFFFF",
                        paddingTop: "28px",
                        paddingLeft: "32px",
                        paddingRight: "32px",
                        paddingBottom: "28px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    {/* Projects */}
                    {d.projects?.length > 0 && (
                        <section>
                            <h2 style={{ fontSize: "10px", textTransform: "uppercase", fontWeight: "700", color: "#1D4ED8", letterSpacing: "0.1em", marginBottom: "6px" }}>PROJECTS</h2>
                            <div style={{ height: "1px", backgroundColor: "#0F172A", marginBottom: "14px" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                {d.projects.map((proj, i) => (
                                    <div key={i}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                            <h3 style={{ fontSize: "12px", fontWeight: "600", color: "#0F172A", textTransform: "uppercase" }}>{proj.name}</h3>
                                            <span style={{ fontSize: "9px", color: "#64748B" }}>{proj.techStack}</span>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "6px" }}>
                                            {proj.bullets?.filter(Boolean).map((b, j) => (
                                                <div key={j} style={{ display: "flex", fontSize: "10px", color: "#475569", paddingLeft: "10px", position: "relative" }}>
                                                    <span style={{ position: "absolute", left: 0 }}>–</span>
                                                    {b}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Experience */}
                    {d.experience?.length > 0 && (
                        <section>
                            <h2 style={{ fontSize: "10px", textTransform: "uppercase", fontWeight: "700", color: "#1D4ED8", letterSpacing: "0.1em", marginBottom: "6px" }}>EXPERIENCE</h2>
                            <div style={{ height: "1px", backgroundColor: "#0F172A", marginBottom: "14px" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                {d.experience.map((exp, i) => (
                                    <div key={i}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                            <h3 style={{ fontSize: "12px", fontWeight: "600", color: "#0F172A", textTransform: "uppercase" }}>{exp.role}</h3>
                                            <span style={{ fontSize: "9px", color: "#64748B" }}>
                                                {exp.company}{exp.company && " | "}{exp.startDate}{exp.startDate && " — "}{exp.current ? "Present" : exp.endDate}
                                            </span>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "6px" }}>
                                            {exp.bullets?.filter(Boolean).map((b, j) => (
                                                <div key={j} style={{ display: "flex", fontSize: "10px", color: "#475569", paddingLeft: "10px", position: "relative" }}>
                                                    <span style={{ position: "absolute", left: 0 }}>–</span>
                                                    {b}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Achievements */}
                    {d.achievements?.filter(Boolean).length > 0 && (
                        <section>
                            <h2 style={{ fontSize: "10px", textTransform: "uppercase", fontWeight: "700", color: "#1D4ED8", letterSpacing: "0.1em", marginBottom: "6px" }}>ACHIEVEMENTS</h2>
                            <div style={{ height: "1px", backgroundColor: "#0F172A", marginBottom: "14px" }} />
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                                {d.achievements.filter(Boolean).map((a, i) => (
                                    <div key={i} style={{ padding: "10px", backgroundColor: "#F8FAFC", borderLeft: "2px solid #2563EB" }}>
                                        <p style={{ fontSize: "10px", fontWeight: "600", color: "#0F172A" }}>{a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>

            {/* Footer */}
            <footer
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: "12px 48px",
                    backgroundColor: "#FFFFFF",
                    borderTop: "1px solid #E2E8F0",
                    flexShrink: 0,
                }}
            >
                <p style={{ fontSize: "10px", textTransform: "uppercase", color: "#94A3B8" }}>
                    References available upon request
                </p>
                <div style={{ display: "flex", gap: "16px" }}>
                    {d.personal.portfolio && (
                        <span style={{ fontSize: "10px", textTransform: "uppercase", color: "#94A3B8" }}>Portfolio</span>
                    )}
                    {d.personal.linkedin && (
                        <span style={{ fontSize: "10px", textTransform: "uppercase", color: "#94A3B8" }}>LinkedIn</span>
                    )}
                </div>
            </footer>
        </div>
    )
}