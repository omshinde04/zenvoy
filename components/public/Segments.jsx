"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaLaptopCode, FaChartLine, FaPalette } from "react-icons/fa"

const templates = [
    {
        label: "Tech & Engineering",
        desc: "Built for developers, product engineers & startups",
        icon: <FaLaptopCode />,
        color: "#2563EB",
    },
    {
        label: "MBA & Finance",
        desc: "Perfect for consulting, finance & management roles",
        icon: <FaChartLine />,
        color: "#059669",
    },
    {
        label: "Design & Creative",
        desc: "Crafted for UI/UX, creatives & portfolios",
        icon: <FaPalette />,
        color: "#7C3AED",
    },
]

export default function Segments() {
    return (
        <section className="relative px-6 py-28 bg-[#0B1120] overflow-hidden">

            {/* 🔥 Background Glow */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#6366F1] opacity-[0.05] blur-[120px] rounded-full" />

            <div className="relative max-w-6xl mx-auto">

                {/* 🔥 Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Templates built for your{" "}
                        <span className="text-[#6366F1]">career path</span>
                    </h2>

                    <p className="text-[#64748B] text-sm mt-4 max-w-xl mx-auto">
                        Choose from industry-specific templates designed to get you shortlisted faster.
                    </p>
                </div>

                {/* 🔥 Cards */}
                <div className="grid md:grid-cols-3 gap-6">

                    {templates.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -6 }}
                        >
                            <Link href="/templates">
                                <div className="group relative bg-[#1E293B] border border-[#334155] rounded-2xl p-8 hover:border-[#6366F1] transition-all duration-300 cursor-pointer overflow-hidden">

                                    {/* Glow hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                                        style={{
                                            background: `radial-gradient(circle at top, ${t.color}20, transparent 70%)`
                                        }}
                                    />

                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 text-white text-xl"
                                        style={{ backgroundColor: t.color }}
                                    >
                                        {t.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-white font-semibold text-lg">
                                        {t.label}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#64748B] text-sm mt-2 leading-relaxed">
                                        {t.desc}
                                    </p>

                                    {/* CTA */}
                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-[#6366F1] text-sm font-semibold group-hover:underline">
                                            Explore templates →
                                        </span>

                                        {/* subtle arrow animation */}
                                        <span className="text-[#6366F1] transform group-hover:translate-x-1 transition">
                                            →
                                        </span>
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    )
}