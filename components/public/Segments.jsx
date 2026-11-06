"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaLaptopCode, FaChartLine, FaPalette, FaArrowRight } from "react-icons/fa"

const templates = [
    {
        label: "Tech & Engineering",
        desc: "Single-column ATS formats optimized for software developers, backend, frontend, devops & data engineers.",
        icon: <FaLaptopCode />,
        color: "text-blue-600",
        bg: "bg-blue-50 border-blue-100",
        templateId: "classic-ats",
    },
    {
        label: "MBA & Finance",
        desc: "High-density executive structures tailored for consulting, investment banking, and product leadership.",
        icon: <FaChartLine />,
        color: "text-emerald-600",
        bg: "bg-emerald-50 border-emerald-100",
        templateId: "tech-minimal",
    },
    {
        label: "Design & Product",
        desc: "Balanced professional hierarchy tailored for UI/UX designers, design leads, and creative technologists.",
        icon: <FaPalette />,
        color: "text-violet-600",
        bg: "bg-violet-50 border-violet-100",
        templateId: "tech-two-column",
    },
]

export default function Segments() {
    return (
        <section className="relative px-6 py-24 bg-slate-50/50 overflow-hidden border-t border-slate-200/60">
            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-xs font-semibold text-indigo-700 uppercase tracking-wider bg-indigo-50/80 border border-indigo-100 px-3.5 py-1.5 rounded-full mb-3.5">
                        Role-Specific Formats
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Templates Built for Your{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                            Career Trajectory
                        </span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                        Every template follows proven recruiter reading patterns to highlight your greatest technical and leadership achievements.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {templates.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-slate-200/80 rounded-2xl p-7 flex flex-col justify-between shadow-subtle hover:shadow-hover hover:border-indigo-300 transition-all duration-200"
                        >
                            <div>
                                <div className={`w-12 h-12 rounded-2xl ${t.bg} border ${t.color} flex items-center justify-center text-xl mb-5 shadow-xs`}>
                                    {t.icon}
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                                    {t.label}
                                </h3>

                                <p className="text-slate-600 text-sm mt-2.5 leading-relaxed">
                                    {t.desc}
                                </p>
                            </div>

                            <div className="mt-6 pt-5 border-t border-slate-100">
                                <Link
                                    href={`/builder/${t.templateId}`}
                                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                                >
                                    <span>Use Template Free</span>
                                    <FaArrowRight className="text-[10px]" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
