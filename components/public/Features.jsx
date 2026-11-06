"use client"

import { motion } from "framer-motion"
import { FaFilePdf, FaEye, FaBolt, FaLayerGroup } from "react-icons/fa"

const features = [
    {
        icon: <FaLayerGroup />,
        title: "Harvard & Tech ATS Formats",
        desc: "Single-column ATS-compliant layouts strictly designed to pass recruitment filters at top tech companies.",
    },
    {
        icon: <FaFilePdf />,
        title: "100% Free Vector PDF",
        desc: "Export crisp, selectable-text vector PDFs with zero watermarks and zero paywall traps.",
    },
    {
        icon: <FaEye />,
        title: "Live Real-Time Preview",
        desc: "What you see is exactly what prints. Universal Times New Roman typography standard.",
    },
    {
        icon: <FaBolt />,
        title: "Instant Start, Zero Signup",
        desc: "No accounts, no credit cards, no email spam. 100% client-side privacy on your device.",
    },
]

export default function Features() {
    return (
        <section
            id="features"
            className="relative px-6 py-28 bg-[#0B1120] overflow-hidden"
        >

            {/* 🔥 Background Glow */}
            <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#6366F1] opacity-[0.05] blur-[120px] rounded-full" />

            <div className="relative max-w-6xl mx-auto">

                {/* 🔥 Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Everything you need to{" "}
                        <span className="text-[#6366F1]">get hired faster</span>
                    </h2>

                    <p className="text-[#64748B] text-sm mt-4 max-w-xl mx-auto">
                        No clutter. No complexity. Just powerful tools to build job-winning resumes.
                    </p>
                </div>

                {/* 🔥 Feature Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="group relative bg-[#1E293B] border border-[#334155] rounded-2xl p-6 hover:border-[#6366F1] transition-all duration-300 overflow-hidden">

                                {/* Glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#6366F1]/10 to-transparent" />

                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#6366F1]/10 text-[#6366F1] text-lg mb-5">
                                    {f.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-white font-semibold text-sm">
                                    {f.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-[#64748B] text-xs mt-2 leading-relaxed">
                                    {f.desc}
                                </p>

                                {/* Hover Indicator */}
                                <div className="mt-4 text-[#6366F1] text-xs font-semibold opacity-0 group-hover:opacity-100 transition">
                                    Learn more →
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    )
}