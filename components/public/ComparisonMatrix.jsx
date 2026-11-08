"use client"

import { motion } from "framer-motion"
import { FaCheck, FaTimes, FaShieldAlt } from "react-icons/fa"

const COMPARISON_ROWS = [
    {
        feature: "Price to Download PDF",
        zapiya: "100% Free Forever ($0)",
        zapiyaGood: true,
        commercial: "$24.95 / month subscription trap",
        commercialGood: false,
        canva: "Freemium ($12.99/mo for Pro)",
        canvaGood: false,
    },
    {
        feature: "Account or Email Required",
        zapiya: "None (Zero Signup / No Email)",
        zapiyaGood: true,
        commercial: "Mandatory signup & credit card",
        commercialGood: false,
        canva: "Mandatory account creation",
        canvaGood: false,
    },
    {
        feature: "ATS Parser Compatibility",
        zapiya: "99.4% Verified (Workday, Greenhouse, Lever)",
        zapiyaGood: true,
        commercial: "Mixed (~60-70% due to tables)",
        commercialGood: false,
        canva: "Poor (<35% - graphic canvas bugs)",
        canvaGood: false,
    },
    {
        feature: "Data Privacy & Security",
        zapiya: "100% In-Browser (Local Only)",
        zapiyaGood: true,
        commercial: "Uploaded & stored in cloud DB",
        commercialGood: false,
        canva: "Uploaded to cloud servers",
        canvaGood: false,
    },
    {
        feature: "PDF Export Quality",
        zapiya: "Pure Vector PDF (Selectable Text)",
        zapiyaGood: true,
        commercial: "Rasterized / Compressed PDF",
        commercialGood: false,
        canva: "Flattened image / mixed layers",
        canvaGood: false,
    },
    {
        feature: "Watermarks on Free Export",
        zapiya: "Zero Watermarks Ever",
        zapiyaGood: true,
        commercial: "Heavy watermark if unpaid",
        commercialGood: false,
        canva: "Watermarked premium assets",
        canvaGood: false,
    },
    {
        feature: "Document Spacing Tuning",
        zapiya: "Compact, Normal, Relaxed (1-Page Fit)",
        zapiyaGood: true,
        commercial: "Rigid fixed spacing",
        commercialGood: false,
        canva: "Manual drag-and-drop only",
        canvaGood: false,
    },
]

export default function ComparisonMatrix() {
    return (
        <section className="relative px-4 py-24 sm:px-6 bg-slate-50/70 border-t border-slate-200/70 overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 text-xs font-bold text-indigo-700 uppercase tracking-wider">
                        <FaShieldAlt className="text-indigo-600" />
                        Engineering Benchmark
                    </span>

                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        Why Developers Choose{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
                            Zapiya
                        </span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We engineered Zapiya as an open antidote to subscription paywalls and unreadable graphic templates.
                    </p>
                </div>

                {/* Comparison Table Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/[0.03]"
                >
                    <table className="w-full min-w-[700px] text-left text-xs sm:text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-600">
                                <th className="p-4 sm:p-5 font-bold w-1/4">Key Capability</th>
                                <th className="p-4 sm:p-5 font-black text-indigo-700 bg-indigo-50/60 border-x border-indigo-100 w-1/3">
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span>Zapiya ATS (Our Tool)</span>
                                    </div>
                                </th>
                                <th className="p-4 sm:p-5 font-bold text-slate-600 w-1/4">Commercial Builders (Zety, etc.)</th>
                                <th className="p-4 sm:p-5 font-bold text-slate-600 w-1/6">Canva Graphic Resumes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {COMPARISON_ROWS.map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                                        {row.feature}
                                    </td>
                                    <td className="p-4 sm:p-5 font-bold text-slate-900 bg-indigo-50/20 border-x border-indigo-100/60">
                                        <div className="flex items-start gap-2 text-emerald-800">
                                            <FaCheck className="text-emerald-600 text-xs mt-1 shrink-0" />
                                            <span>{row.zapiya}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 sm:p-5 text-slate-500">
                                        <div className="flex items-start gap-2">
                                            <FaTimes className="text-rose-400 text-xs mt-1 shrink-0" />
                                            <span>{row.commercial}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 sm:p-5 text-slate-500">
                                        <div className="flex items-start gap-2">
                                            <FaTimes className="text-rose-400 text-xs mt-1 shrink-0" />
                                            <span>{row.canva}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Bottom Trust Guarantee */}
                <div className="text-center text-xs text-slate-500 font-semibold">
                    <span>Tested against live ATS parsing engines from Workday, Greenhouse, Lever, Taleo, and iCIMS.</span>
                </div>

            </div>
        </section>
    )
}
