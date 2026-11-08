"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaShieldAlt, FaCheckCircle, FaBolt } from "react-icons/fa"

export default function CTA() {
    return (
        <section className="relative px-4 py-24 sm:px-6 bg-white text-center overflow-hidden border-t border-slate-200/70">
            <div className="max-w-5xl mx-auto">

                {/* Card Container */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-8 sm:p-14 text-white shadow-2xl shadow-indigo-950/20">
                    
                    {/* Background glow circle */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

                    <div className="relative z-10 space-y-6">
                        {/* Process Pipeline Flow */}
                        <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs font-mono font-bold text-slate-300">
                            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 backdrop-blur-md">
                                <span className="text-base">🧑‍💻</span>
                                <span>Input Skills</span>
                            </div>

                            <span className="text-indigo-400 font-bold">→</span>

                            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 backdrop-blur-md">
                                <span className="text-base">🏛️</span>
                                <span>Harvard ATS AST</span>
                            </div>

                            <span className="text-indigo-400 font-bold">→</span>

                            <div className="flex items-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 px-3 py-1.5 text-emerald-300 backdrop-blur-md">
                                <span className="text-base">⚡</span>
                                <span>Interview Callback</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="space-y-3 max-w-2xl mx-auto">
                            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                                Stop Getting Filtered Out by Automated Bots.
                            </h2>

                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                Build your interview-ready, Harvard-standard developer resume in under 10 minutes. 100% free with zero paywalls.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/builder/classic-ats"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-black shadow-xl shadow-indigo-500/30 transition hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
                            >
                                <span>Build Free on Classic ATS</span>
                                <FaArrowRight className="text-xs" />
                            </Link>

                            <Link
                                href="/templates"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-bold transition text-sm sm:text-base"
                            >
                                <span>Browse Spacing Guide</span>
                            </Link>
                        </div>

                        {/* Trust Checklist */}
                        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
                            <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                                <FaCheckCircle className="text-emerald-400" />
                                100% Free Forever
                            </span>
                            <span>•</span>
                            <span>Zero Paywalls</span>
                            <span>•</span>
                            <span>No Signup Required</span>
                            <span>•</span>
                            <span>Pure Vector PDF</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
