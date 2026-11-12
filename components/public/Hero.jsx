"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaPlay, FaStar, FaArrowRight } from "react-icons/fa"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative px-3 sm:px-6 lg:px-8 pt-3 pb-12 md:pb-20 bg-[#E8E2D5]"
        >
            {/* The Master Framed Canvas (Exact Match to Studio Agency Reference) */}
            <div className="max-w-6xl mx-auto rounded-[32px] sm:rounded-[44px] bg-[#FAF6EE] border border-[#E3DBD0] p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">

                {/* Subtle Concentric Curved Ripple Lines in Top Right */}
                <div className="absolute right-6 top-6 sm:right-10 sm:top-10 w-28 h-28 pointer-events-none opacity-40">
                    <svg viewBox="0 0 120 120" fill="none" stroke="#D9541E" strokeWidth="1.2">
                        <path d="M 120 20 C 75 20, 20 75, 20 120" />
                        <path d="M 120 45 C 85 45, 45 85, 45 120" />
                        <path d="M 120 70 C 95 70, 70 95, 70 120" />
                    </svg>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

                    {/* LEFT COLUMN: Eyebrow + Headline + Pill Badge + Subtitle + CTAs */}
                    <div className="lg:col-span-6 space-y-6 text-left relative z-10">

                        {/* Eyebrow Pill Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#F5EDE0] border border-[#E0D2C0] px-3.5 py-1 text-xs font-semibold text-[#111111] shadow-2xs"
                        >
                            <FaStar className="text-[#D9541E] text-xs" />
                            <span>Trusted by 14k+</span>
                        </motion.div>

                        {/* Main Headline with Terracotta Pill Highlight */}
                        <motion.h1
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111111] tracking-[-0.03em] leading-[1.14]"
                        >
                            We help your <br />
                            Career{" "}
                            <span className="inline-block bg-[#D9541E] text-[#FAF6EE] px-4 sm:px-5 py-0.5 rounded-full shadow-lg shadow-[#D9541E]/30 text-3xl sm:text-4xl lg:text-[46px] font-bold align-middle my-1">
                                Growth
                            </span>{" "}
                            <br />
                            up to pro level
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08, duration: 0.35 }}
                            className="text-[#66615B] text-sm sm:text-[15px] leading-relaxed max-w-[420px]"
                        >
                            Zero paywalls, no watermark traps, and 100% private. Build recruiter-approved Harvard standard resumes with universal Times New Roman formatting and instant vector PDF export.
                        </motion.p>

                        {/* Dual Action CTAs: Solid Black Pill + Circular Play Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.35 }}
                            className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6"
                        >
                            <Link
                                href="/builder/classic-ats"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] hover:bg-[#D9541E] text-[#FAF6EE] px-8 py-3.5 text-sm font-semibold transition-colors duration-200 shadow-sm"
                            >
                                <span>Get started</span>
                                <FaArrowRight className="text-xs text-[#FAF6EE]/80 transition-transform duration-150 group-hover:translate-x-0.5" />
                            </Link>

                            <Link
                                href="/templates"
                                className="group inline-flex items-center gap-3 text-sm font-semibold text-[#111111] hover:text-[#D9541E] transition-colors"
                            >
                                <span className="w-10 h-10 rounded-full bg-white border border-[#DDD6C8] flex items-center justify-center text-[#D9541E] text-xs shadow-xs transition-transform duration-200 group-hover:scale-105">
                                    <FaPlay className="ml-0.5" />
                                </span>
                                <span>Watch demo</span>
                            </Link>
                        </motion.div>

                    </div>

                    {/* RIGHT COLUMN: Candidate Hero Graphic + Floating Connected Cards */}
                    <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[460px] sm:min-h-[500px]">

                        {/* Isolated Candidate Graphic (With Mustard Sweater, Black Arch, and Terracotta Hexagon) */}
                        <div className="relative w-68 sm:w-76 lg:w-84 flex items-center justify-center">
                            <img
                                src="/hero-candidate.png"
                                alt="Candidate Growth to Pro Level"
                                className="w-full h-auto object-contain filter drop-shadow-md select-none pointer-events-none"
                            />
                        </div>

                        {/* FLOATING CARD 1 (Top-Left of Person): White Card with 20k+ Metric & Avatars */}
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="absolute -left-2 sm:left-4 lg:left-6 top-6 sm:top-10 z-20 rounded-2xl bg-white border border-[#E5DFD3] p-4 sm:p-5 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] w-40 sm:w-44 text-left"
                        >
                            {/* Thin Hairline Connector with Diamond Node on Left */}
                            <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden sm:flex items-center pointer-events-none">
                                <span className="w-2 h-2 rotate-45 bg-[#D9541E]" />
                                <span className="w-5 h-[1px] bg-[#D4CBBA]" />
                            </div>

                            <span className="text-2xl sm:text-[28px] font-extrabold text-[#111111] tracking-tight block leading-tight">
                                20k+
                            </span>
                            <span className="text-xs text-[#66615B] font-medium block mt-0.5 mb-2.5">
                                Happy clients
                            </span>

                            {/* Avatar Stack Row */}
                            <div className="flex items-center -space-x-1.5">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                                    alt="Candidate 1"
                                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                                    alt="Candidate 2"
                                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                                    alt="Candidate 3"
                                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                                    alt="Candidate 4"
                                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                                />
                                <span className="w-6 h-6 rounded-full border-2 border-white bg-[#D9541E] text-white text-[9px] font-bold flex items-center justify-center">
                                    +
                                </span>
                            </div>
                        </motion.div>

                        {/* FLOATING CARD 2 (Bottom-Left of Person): Obsidian Dark Card with 99% Ring */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="absolute left-2 sm:left-10 lg:left-14 bottom-4 sm:bottom-6 z-20 rounded-2xl bg-[#111111] p-4 sm:p-5 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.38)] w-38 sm:w-42 text-center border border-[#222222]"
                        >
                            {/* Circular Progress Ring in Terracotta */}
                            <div className="relative w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                    <path
                                        className="text-[#262626]"
                                        strokeWidth="3.5"
                                        stroke="currentColor"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                        className="text-[#D9541E]"
                                        strokeDasharray="99, 100"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <span className="absolute text-sm font-black text-[#FAF6EE]">
                                    99%
                                </span>
                            </div>

                            <span className="text-[11px] font-medium text-[#A09A90] block">
                                ATS Pass Rate
                            </span>

                            {/* Hairline Connector Below Dark Card with Diamond Node */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center pointer-events-none">
                                <span className="w-[1px] h-4 bg-[#D4CBBA]" />
                                <span className="w-2 h-2 rotate-45 bg-[#D9541E]" />
                            </div>
                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    )
}
