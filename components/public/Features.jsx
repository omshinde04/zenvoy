"use client"

import { motion } from "framer-motion"
import { FaFilePdf, FaLock, FaLayerGroup, FaCompressAlt, FaCheck, FaShieldAlt } from "react-icons/fa"

const FEATURES = [
    {
        icon: <FaLayerGroup />,
        title: "Harvard Single-Column Standard",
        tag: "100% ATS Benchmark",
        tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
        desc: "Linear top-to-bottom AST hierarchy that completely eliminates the two-column parsing bugs common in Workday, Greenhouse, and Taleo.",
        metric: "99.4% Parsing Rate",
    },
    {
        icon: <FaFilePdf />,
        title: "Pure Vector PDF Synthesis",
        tag: "Native Digital Text",
        tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
        desc: "Generates true vector PDFs with selectable, searchable text layers. No low-resolution canvas screenshots or compressed font artifacts.",
        metric: "100% Selectable Text",
    },
    {
        icon: <FaCompressAlt />,
        title: "Granular Spacing Calibration",
        tag: "1-Page Strict Rule",
        tagColor: "bg-violet-50 text-violet-700 border-violet-200",
        desc: "Toggle between Compact, Normal, and Relaxed spacing with 1 click to fit high-density technical achievements onto strictly 1 page.",
        metric: "Zero Page Spills",
    },
    {
        icon: <FaLock />,
        title: "Client-Side Data Sovereignty",
        tag: "Zero Data Harvesting",
        tagColor: "bg-amber-50 text-amber-700 border-amber-200",
        desc: "No accounts, no email requirements, and zero server storage. Your resume data lives strictly in your local browser storage.",
        metric: "0 Data Sold",
    },
]

export default function Features() {
    return (
        <section
            id="features"
            className="relative px-4 py-24 sm:px-6 bg-white overflow-hidden border-t border-slate-200/70"
        >
            <div className="relative max-w-6xl mx-auto space-y-14">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 text-xs font-bold text-indigo-700 uppercase tracking-wider">
                        <FaShieldAlt className="text-indigo-600" />
                        Engineering Architecture
                    </span>

                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        Built with Senior Developer{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
                            Precision
                        </span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        No subscription paywalls. No confusing dashboards. Pure, distraction-free resume engineering designed to get you past automated screening bots.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            className="group bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 hover:bg-white hover:shadow-xl hover:shadow-indigo-950/5 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center text-lg shadow-xs group-hover:scale-110 transition-transform">
                                        {f.icon}
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${f.tagColor}`}>
                                        {f.tag}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-base font-black text-slate-900 tracking-tight">
                                        {f.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                                        {f.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-700">
                                <span>Benchmark:</span>
                                <span className="text-indigo-600">{f.metric}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
