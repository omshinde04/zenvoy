"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaBolt, FaArrowRight } from "react-icons/fa"

export default function CTA() {
    return (
        <section className="relative px-6 py-24 bg-white text-center overflow-hidden border-t border-slate-200/60">
            <div className="max-w-4xl mx-auto">

                {/* Card Container */}
                <div className="relative bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 rounded-3xl p-8 sm:p-14 text-white shadow-xl shadow-indigo-500/15 overflow-hidden">
                    
                    {/* Background glow circle */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl -z-0 pointer-events-none" />

                    <div className="relative z-10">
                        {/* Flow Icons */}
                        <div className="flex items-center justify-center mb-8 gap-4 sm:gap-6 text-sm">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center text-xl border border-white/20">
                                    🎓
                                </div>
                                <span className="text-[11px] text-indigo-100 font-medium mt-1.5 font-comfortaa">Student</span>
                            </div>

                            <span className="text-indigo-200 text-lg">→</span>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center text-xl border border-white/20">
                                    📄
                                </div>
                                <span className="text-[11px] text-indigo-100 font-medium mt-1.5 font-comfortaa">ATS Resume</span>
                            </div>

                            <span className="text-indigo-200 text-lg">→</span>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center text-xl border border-white/20">
                                    💼
                                </div>
                                <span className="text-[11px] text-indigo-100 font-medium mt-1.5 font-comfortaa">Hired</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-comfortaa">
                            From Application to Shortlist.
                        </h2>

                        {/* Subtext */}
                        <p className="mt-4 text-indigo-100 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                            Stop getting filtered out by ATS parsers. Build your clean, Harvard-standard developer resume in minutes.
                        </p>

                        {/* CTA Button */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/templates"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-slate-50 transition shadow-lg hover:scale-[1.02] font-comfortaa text-sm sm:text-base"
                            >
                                <FaBolt className="text-amber-400 text-xs" />
                                Start Building Free
                                <FaArrowRight className="text-xs ml-1" />
                            </Link>
                        </div>

                        {/* Trust line */}
                        <p className="mt-6 text-xs text-indigo-200 font-medium">
                            100% Free Forever • Zero Paywalls • No Signup Required • Instant Vector PDF
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}
