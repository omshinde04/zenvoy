// components/templates/tech/TechMinimal.jsx

export default function TechMinimal({ data }) {
    const d = data

    return (
        <div
            style={{
                width: "794px",
                minHeight: "1123px",
                backgroundColor: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                flexDirection: "column",
                WebkitFontSmoothing: "antialiased",
            }}
        >
            {/* Header */}
            <div
                style={{
                    padding: "40px 40px 16px 40px",
                    borderBottom: "1px solid #E5E7EB",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h1
                        style={{
                            fontSize: "30px",
                            fontWeight: "700",
                            letterSpacing: "-0.02em",
                            color: "#111827",
                            margin: 0,
                            lineHeight: "36px",
                        }}
                    >
                        {d.personal.name?.toUpperCase() || "YOUR NAME"}
                    </h1>
                    <p
                        style={{
                            fontSize: "13px",
                            color: "#6B7280",
                            marginTop: "4px",
                            fontWeight: "400",
                        }}
                    >
                        {d.personal.role || "Your Role"}
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: "0",
                            marginTop: "6px",
                            fontSize: "11px",
                            color: "#6B7280",
                        }}
                    >
                        {[
                            d.personal.email,
                            d.personal.phone,
                            d.personal.linkedin,
                            d.personal.location,
                        ]
                            .filter(Boolean)
                            .map((item, i, arr) => (
                                <span key={i}>
                                    {item}
                                    {i < arr.length - 1 && (
                                        <span style={{ margin: "0 8px", color: "#2563EB", fontWeight: "700" }}>·</span>
                                    )}
                                </span>
                            ))}
                    </div>
                    {d.personal.github && (
                        <p style={{ fontSize: "11px", color: "#6B7280", marginTop: "3px" }}>
                            {d.personal.github}
                        </p>
                    )}
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: "24px 40px 40px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>

                {/* Technical Skills */}
                {(d.skills?.languages?.length > 0 || d.skills?.frameworks?.length > 0 || d.skills?.tools?.length > 0) && (
                    <section>
                        <h2 style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", color: "#2563EB", textTransform: "uppercase", margin: 0 }}>
                            TECHNICAL SKILLS
                        </h2>
                        <div style={{ borderBottom: "1px solid #E5E7EB", margin: "4px 0 10px 0" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            {d.skills.languages?.length > 0 && (
                                <div style={{ fontSize: "12px" }}>
                                    <span style={{ fontWeight: "600", color: "#111827" }}>Languages: </span>
                                    <span style={{ color: "#374151" }}>{d.skills.languages.join(", ")}</span>
                                </div>
                            )}
                            {d.skills.frameworks?.length > 0 && (
                                <div style={{ fontSize: "12px" }}>
                                    <span style={{ fontWeight: "600", color: "#111827" }}>Frameworks: </span>
                                    <span style={{ color: "#374151" }}>{d.skills.frameworks.join(", ")}</span>
                                </div>
                            )}
                            {d.skills.tools?.length > 0 && (
                                <div style={{ fontSize: "12px" }}>
                                    <span style={{ fontWeight: "600", color: "#111827" }}>Tools: </span>
                                    <span style={{ color: "#374151" }}>{d.skills.tools.join(", ")}</span>
                                </div>
                            )}
                            {d.skills.other?.length > 0 && (
                                <div style={{ fontSize: "12px" }}>
                                    <span style={{ fontWeight: "600", color: "#111827" }}>Other: </span>
                                    <span style={{ color: "#374151" }}>{d.skills.other.join(", ")}</span>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Experience */}
                {d.experience?.length > 0 && (
                    <section>
                        <h2 style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", color: "#2563EB", textTransform: "uppercase", margin: 0 }}>
                            PROFESSIONAL EXPERIENCE
                        </h2>
                        <div style={{ borderBottom: "1px solid #E5E7EB", margin: "4px 0 10px 0" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {d.experience.map((exp, i) => (
                                <div key={i}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#111827" }}>{exp.role}</span>
                                        <span style={{ fontSize: "11px", color: "#6B7280" }}>
                                            {exp.startDate}{exp.startDate && " – "}{exp.current ? "Present" : exp.endDate}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                                        <span style={{ fontSize: "12px", color: "#374151" }}>{exp.company}</span>
                                        <span style={{ fontSize: "11px", color: "#6B7280" }}>{exp.location}</span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                        {exp.bullets?.filter(Boolean).map((b, j) => (
                                            <div key={j} style={{ display: "flex", fontSize: "12px", color: "#374151" }}>
                                                <span style={{ marginRight: "10px", flexShrink: 0 }}>–</span>
                                                <span>{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {d.projects?.length > 0 && (
                    <section>
                        <h2 style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", color: "#2563EB", textTransform: "uppercase", margin: 0 }}>
                            PROJECTS
                        </h2>
                        <div style={{ borderBottom: "1px solid #E5E7EB", margin: "4px 0 10px 0" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {d.projects.map((proj, i) => (
                                <div key={i}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#111827" }}>{proj.name}</span>
                                        <span style={{ fontSize: "11px", color: "#6B7280" }}>{proj.techStack}</span>
                                    </div>
                                    {proj.description && (
                                        <p style={{ fontSize: "12px", color: "#6B7280", fontStyle: "italic", margin: "2px 0 4px 0" }}>
                                            {proj.description}
                                        </p>
                                    )}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginLeft: "12px" }}>
                                        {proj.bullets?.filter(Boolean).map((b, j) => (
                                            <div key={j} style={{ display: "flex", fontSize: "12px", color: "#374151" }}>
                                                <span style={{ marginRight: "10px", flexShrink: 0 }}>–</span>
                                                <span>{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {d.education?.length > 0 && (
                    <section>
                        <h2 style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", color: "#2563EB", textTransform: "uppercase", margin: 0 }}>
                            EDUCATION
                        </h2>
                        <div style={{ borderBottom: "1px solid #E5E7EB", margin: "4px 0 10px 0" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            {d.education.map((edu, i) => (
                                <div key={i}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#111827" }}>{edu.degree}</span>
                                        <span style={{ fontSize: "11px", color: "#6B7280" }}>{edu.endYear}</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                        <span style={{ fontSize: "12px", color: "#374151" }}>{edu.institution}</span>
                                        {edu.cgpa && (
                                            <span style={{ fontSize: "11px", color: "#6B7280" }}>CGPA: {edu.cgpa}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Achievements */}
                {d.achievements?.filter(Boolean).length > 0 && (
                    <section>
                        <h2 style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", color: "#2563EB", textTransform: "uppercase", margin: 0 }}>
                            ACHIEVEMENTS
                        </h2>
                        <div style={{ borderBottom: "1px solid #E5E7EB", margin: "4px 0 10px 0" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {d.achievements.filter(Boolean).map((a, i) => (
                                <div key={i} style={{ display: "flex", fontSize: "12px", color: "#374151", lineHeight: "1.6" }}>
                                    <span style={{ marginRight: "10px", flexShrink: 0 }}>–</span>
                                    <span>{a}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    )
}