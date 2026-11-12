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
            className="relative px-6 py-24 bg-[#F3EEE3] overflow-hidden border-t border-[#E5DFD3]"
        >
            <div className="relative max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="inline-block text-xs font-medium text-[#66615B] bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1 rounded-md mb-3">
                        Engineering Precision
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
                        Everything You Need to Get{" "}
                        <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
                            Recruiter Callbacks
                        </span>
                    </h2>

                    <p className="text-[#66615B] text-sm sm:text-base mt-3 leading-relaxed">
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
                            className="bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl p-6 hover:bg-white hover:border-[#D9541E]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5DFD3] text-[#111111] flex items-center justify-center text-base mb-4 shadow-xs">
                                    {f.icon}
                                </div>

                                <span className="inline-block text-[11px] font-medium text-[#D9541E] mb-1.5">
                                    {f.tag}
                                </span>

                                <h3 className="text-base font-bold text-[#111111] tracking-tight">
                                    {f.title}
                                </h3>

                                <p className="text-[#66615B] text-xs sm:text-sm mt-2 leading-relaxed">
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
