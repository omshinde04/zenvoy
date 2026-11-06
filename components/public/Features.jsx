"use client"

import { motion } from "framer-motion"
import { FaFilePdf, FaEye, FaBolt, FaLayerGroup } from "react-icons/fa"

const features = [
    {
        icon: <FaLayerGroup />,
        title: "Harvard & Tech ATS Standards",
        desc: "Single-column formats proven to pass ATS screening algorithms at Google, Amazon, Microsoft, and tech startups.",
        tag: "100% ATS Score",
    },
    {
        icon: <FaFilePdf />,
        title: "Crisp Vector PDF Export",
        desc: "Downloads real, selectable-text vector PDFs rendered natively with zero watermarks and zero quality compression.",
        tag: "Zero Watermark",
    },
    {
        icon: <FaEye />,
        title: "Real-Time Visual Canvas",
        desc: "What you see is pixel-for-pixel what prints. No surprise page breaks or broken margin overflows.",
        tag: "A4 Calibrated",
    },
    {
        icon: <FaBolt />,
        title: "Zero Accounts & Pure Privacy",
        desc: "No password fatigue or email harvesting. Your resume auto-saves locally with one-click JSON backup files.",
        tag: "Client-Side Secure",
    },
]

export default function Features() {
    return (
        <section
            id="features"
            className="relative px-6 py-24 bg-white overflow-hidden border-t border-slate-200/60"
        >
            <div className="relative max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full mb-3.5 font-comfortaa">
                        Engineering Precision
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-comfortaa">
                        Everything You Need to{" "}
                        <span className="text-indigo-600">Get Recruiter Callbacks</span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                        No subscription paywalls. No confusing dashboards. Pure, distraction-free resume engineering.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:shadow-hover hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center text-lg mb-5 shadow-xs">
                                    {f.icon}
                                </div>

                                <span className="inline-block text-[10px] font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50/80 px-2.5 py-0.5 rounded-full mb-2 font-comfortaa">
                                    {f.tag}
                                </span>

                                <h3 className="text-base font-bold text-slate-900 font-comfortaa">
                                    {f.title}
                                </h3>

                                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
