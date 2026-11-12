"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaLaptopCode, FaChartLine, FaPalette, FaArrowRight } from "react-icons/fa"

const templates = [
    {
        label: "Tech & Engineering",
        desc: "Single-column Harvard ATS format optimized for software developers, backend, frontend, devops & data engineers.",
        icon: <FaLaptopCode />,
        color: "text-blue-600",
        bg: "bg-blue-50 border-blue-100",
        templateId: "classic-ats",
    },
    {
        label: "MBA & Finance",
        desc: "High-density executive single-column structure tailored for consulting, finance, and technical management.",
        icon: <FaChartLine />,
        color: "text-emerald-600",
        bg: "bg-emerald-50 border-emerald-100",
        templateId: "classic-ats",
    },
    {
        label: "Design & Product",
        desc: "Clean ATS hierarchy tailored for UI/UX designers, product managers, and technical leads.",
        icon: <FaPalette />,
        color: "text-violet-600",
        bg: "bg-violet-50 border-violet-100",
        templateId: "classic-ats",
    },
]

export default function Segments() {
    return (
        <section className="relative px-6 py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#E5DFD3]">
            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="inline-block text-xs font-medium text-[#66615B] bg-[#F3EEE3] border border-[#E5DFD3] px-3 py-1 rounded-md mb-3">
                        Role-Specific Formats
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
                        Templates Built for Your{" "}
                        <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
                            Career Trajectory
                        </span>
                    </h2>

                    <p className="text-[#66615B] text-sm sm:text-base mt-3 leading-relaxed">
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
                            whileHover={{ y: -3 }}
                            className="bg-white border border-[#E5DFD3] rounded-xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#D9541E]/50 transition-all duration-200"
                        >
                            <div>
                                <div className="w-11 h-11 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] flex items-center justify-center text-lg mb-5 shadow-xs">
                                    {t.icon}
                                </div>

                                <h3 className="text-lg font-bold text-[#111111] tracking-tight">
                                    {t.label}
                                </h3>

                                <p className="text-[#66615B] text-sm mt-2.5 leading-relaxed">
                                    {t.desc}
                                </p>
                            </div>

                            <div className="mt-6 pt-5 border-t border-[#F3EEE3]">
                                <Link
                                    href={`/builder/${t.templateId}`}
                                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#D9541E] hover:text-[#111111] transition-colors"
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
