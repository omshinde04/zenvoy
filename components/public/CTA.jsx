"use client"

import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export default function CTA() {
    return (
        <section className="relative px-6 py-24 bg-[#F3EEE3] text-center overflow-hidden border-t border-[#E5DFD3]">
            <div className="max-w-4xl mx-auto">

                {/* Obsidian Luxury Card with Terracotta Accents */}
                <div className="relative bg-[#111111] border border-[#222222] rounded-2xl p-8 sm:p-14 text-white shadow-2xl shadow-[#111111]/15 overflow-hidden">
                    
                    <div className="relative z-10 max-w-2xl mx-auto">
                        {/* Process Steps (Quiet Monospace Pill) */}
                        <div className="inline-flex items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-[#A09A90] mb-8 bg-[#1A1A1A] border border-[#2A2A2A] px-4 py-1.5 rounded-full">
                            <span>1. Select Template</span>
                            <span className="text-[#444444]">→</span>
                            <span>2. Add Experience</span>
                            <span className="text-[#444444]">→</span>
                            <span className="text-[#D9541E] font-semibold">3. Export Vector PDF</span>
                        </div>

                        {/* Heading: Sans with Editorial Cursive Accent */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F3EEE3] tracking-tight leading-tight">
                            From Application to{" "}
                            <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
                                Shortlist.
                            </span>
                        </h2>

                        {/* Subtext */}
                        <p className="mt-4 text-[#A09A90] text-sm sm:text-base leading-relaxed">
                            Stop getting filtered out by automated parsers. Build your clean, Harvard-standard developer resume in under 5 minutes.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link
                                href="/builder/classic-ats"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D9541E] hover:bg-[#c04716] text-[#F3EEE3] font-medium text-sm transition-colors shadow-sm"
                            >
                                <span>Build Free Resume on Classic ATS</span>
                                <FaArrowRight className="text-xs text-[#F3EEE3]/80 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-white" />
                            </Link>

                            <Link
                                href="/templates"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#222222] hover:bg-[#2a2a2a] text-[#F3EEE3] border border-[#333333] text-sm font-medium transition-colors"
                            >
                                Browse All Templates
                            </Link>
                        </div>

                        {/* Quiet Trust line */}
                        <p className="mt-6 text-xs text-[#777169] font-medium">
                            100% Free Forever · Zero Watermarks · No Signup Required · Client-Side In-Browser Privacy
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}
