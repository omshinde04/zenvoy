"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaPlay, FaStar, FaArrowRight, FaCheck } from "react-icons/fa"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative px-4 sm:px-6 lg:px-8 pt-4 pb-16 md:pb-24 bg-[#F3EEE3]"
        >
            {/* The Master Framed Canvas (Luxury Editorial Stage) */}
            <div className="max-w-6xl mx-auto rounded-[32px] sm:rounded-[44px] bg-[#FAF7F2] border border-[#E5DFD3] p-6 sm:p-10 lg:p-14 shadow-[0_24px_60px_-15px_rgba(17,17,17,0.05)] relative overflow-hidden">

                {/* Subtle Luxury Corner Decorative Curves */}
                <div className="absolute right-8 top-8 w-28 h-28 pointer-events-none opacity-25">
                    <svg viewBox="0 0 120 120" fill="none" stroke="#D9541E" strokeWidth="1">
                        <path d="M 120 20 C 75 20, 20 75, 20 120" />
                        <path d="M 120 45 C 85 45, 45 85, 45 120" />
                        <path d="M 120 70 C 95 70, 70 95, 70 120" />
                    </svg>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* LEFT COLUMN: Eyebrow + Two-Font Headline + Subtitle + CTAs + Trust Proof */}
                    <div className="lg:col-span-6 space-y-6 text-left relative z-10">

                        {/* Eyebrow Pill Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E5DFD3] px-3.5 py-1.5 text-xs font-semibold text-[#111111] shadow-2xs"
                        >
                            <span className="flex items-center text-[#D9541E]">
                                <FaStar className="text-[11px]" />
                            </span>
                            <span>#1 Free Harvard ATS Resume Builder</span>
                            <span className="w-1 h-1 rounded-full bg-[#D9541E]" />
                            <span className="text-[#66615B] font-normal">100% Free</span>
                        </motion.div>

                        {/* Main Headline with Brand Two-Font Structure (Editorial Serif Cursive + Modern Bold Sans) */}
                        <motion.h1
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#111111] tracking-[-0.035em] leading-[1.12]"
                        >
                            We help your <br />
                            <span className="font-serif italic font-normal text-[#D9541E] pr-2">
                                Career
                            </span>
                            <span className="inline-block bg-[#111111] text-[#FAF7F2] px-4 sm:px-5 py-0.5 rounded-full shadow-md shadow-black/15 text-3xl sm:text-4xl lg:text-[44px] font-bold align-middle my-1">
                                Growth
                            </span>
                            <br />
                            reach pro level.
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08, duration: 0.35 }}
                            className="text-[#66615B] text-base leading-relaxed max-w-[460px]"
                        >
                            Zero paywalls, no watermark traps, and 100% private. Build recruiter-approved Harvard standard resumes with universal Times New Roman formatting and instant vector PDF export.
                        </motion.p>

                        {/* Dual Action CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.35 }}
                            className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5"
                        >
                            <Link
                                href="/builder/classic-ats"
                                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#111111] hover:bg-[#D9541E] text-[#FAF7F2] px-8 py-3.5 text-sm font-semibold transition-all duration-200 shadow-md shadow-black/10 hover:shadow-lg hover:shadow-[#D9541E]/20"
                            >
                                <span>Build Free Resume</span>
                                <FaArrowRight className="text-xs text-[#FAF7F2]/80 transition-transform duration-150 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/templates"
                                className="group inline-flex items-center gap-3 rounded-full bg-white hover:bg-white/90 border border-[#E5DFD3] px-6 py-3.5 text-sm font-semibold text-[#111111] hover:text-[#D9541E] transition-all shadow-2xs"
                            >
                                <span className="w-6 h-6 rounded-full bg-[#D9541E]/10 flex items-center justify-center text-[#D9541E] text-[10px] transition-transform duration-200 group-hover:scale-110">
                                    <FaPlay className="ml-0.5" />
                                </span>
                                <span>View Templates</span>
                            </Link>
                        </motion.div>

                        {/* Trust & Proof Strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.22, duration: 0.4 }}
                            className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#66615B] border-t border-[#E5DFD3]/60"
                        >
                            <span className="flex items-center gap-1.5 font-medium text-[#111111]">
                                <FaCheck className="text-[#D9541E] text-[10px]" /> 100% Free Forever
                            </span>
                            <span className="flex items-center gap-1.5 font-medium text-[#111111]">
                                <FaCheck className="text-[#D9541E] text-[10px]" /> No Sign-Up Needed
                            </span>
                            <span className="flex items-center gap-1.5 font-medium text-[#111111]">
                                <FaCheck className="text-[#D9541E] text-[10px]" /> Zero Cloud Storage
                            </span>
                        </motion.div>

                    </div>

                    {/* RIGHT COLUMN: Architectural Arch Stage + Seamless Candidate Girl + Integrated Floating Badges */}
                    <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[480px] sm:min-h-[520px]">

                        {/* Ambient Terracotta Glow */}
                        <div className="absolute w-80 h-80 rounded-full bg-[#D9541E]/12 blur-3xl pointer-events-none -z-0" />

                        {/* The Architectural Arch Stage */}
                        <div className="relative w-72 sm:w-80 lg:w-[360px] h-[480px] sm:h-[510px] flex items-center justify-center">

                            {/* 1. Main Obsidian Arch with Warm Terracotta Gradient & Contour Lines */}
                            <div className="absolute inset-x-4 top-2 bottom-4 rounded-t-[140px] rounded-b-[40px] bg-[#121212] border border-[#262626] shadow-2xl overflow-hidden -z-0">
                                
                                {/* Radial Warm Center Glow */}
                                <div 
                                    className="absolute inset-0 opacity-60 pointer-events-none" 
                                    style={{
                                        background: "radial-gradient(circle at 50% 45%, rgba(217,84,30,0.45) 0%, rgba(18,18,18,0) 70%)"
                                    }}
                                />

                                {/* Subtle Topographic Contour Lines */}
                                <svg className="w-full h-full opacity-20 pointer-events-none" viewBox="0 0 200 300" fill="none" stroke="#FAF7F2" strokeWidth="1">
                                    <path d="M 0 40 Q 100 80, 200 40" />
                                    <path d="M 0 70 Q 100 110, 200 70" />
                                    <path d="M 0 100 Q 100 140, 200 100" />
                                    <path d="M 0 130 Q 100 170, 200 130" />
                                    <path d="M 0 160 Q 100 200, 200 160" />
                                    <path d="M 0 190 Q 100 230, 200 190" />
                                    <path d="M 0 220 Q 100 260, 200 220" />
                                    <path d="M 0 250 Q 100 290, 200 250" />
                                </svg>

                                {/* Terracotta Geometric Arc in Base */}
                                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#D9541E]/40 to-transparent" />
                            </div>

                            {/* 2. Girl Cutout with Megaphone & Yellow Sweater (Seamless Faded Base) */}
                            <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none select-none translate-x-3 sm:translate-x-5">
                                <img
                                    src="/hero-girl.png"
                                    alt="Candidate Celebrating Career Growth"
                                    className="h-[440px] sm:h-[480px] object-contain filter drop-shadow-xl"
                                />
                            </div>

                            {/* FLOATING CARD 1 (Top-Left): Elegant Glassmorphism Metric Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -16, y: -6 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.45 }}
                                className="absolute -left-10 sm:-left-12 lg:-left-16 top-4 sm:top-6 z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5DFD3] p-4 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.08)] w-44 sm:w-48 text-left"
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-2xl sm:text-[28px] font-extrabold text-[#111111] tracking-tight leading-none">
                                        20k+
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200/60">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Active
                                    </span>
                                </div>
                                <span className="text-xs text-[#66615B] font-medium block mb-2.5">
                                    Happy candidates
                                </span>

                                {/* Overlapping Avatar Stack */}
                                <div className="flex items-center -space-x-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                                        alt="User 1"
                                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                                        alt="User 2"
                                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                                        alt="User 3"
                                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                                        alt="User 4"
                                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                                    />
                                    <span className="w-7 h-7 rounded-full border-2 border-white bg-[#D9541E] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                                        +
                                    </span>
                                </div>
                            </motion.div>

                            {/* FLOATING CARD 2 (Bottom-Left): Obsidian Glass Metric with Circular Ring */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.45 }}
                                className="absolute -left-6 sm:-left-4 lg:-left-6 bottom-3 sm:bottom-4 z-20 rounded-2xl bg-[#111111]/95 backdrop-blur-md p-4 sm:p-5 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.45)] w-40 sm:w-44 text-center border border-[#2D2D2D]"
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
                                    <span className="absolute text-sm font-black text-[#FAF7F2]">
                                        99%
                                    </span>
                                </div>

                                <span className="text-xs font-semibold text-[#FAF7F2] block">
                                    ATS Pass Rate
                                </span>
                                <span className="text-[10px] text-[#8C867D] block mt-0.5">
                                    Workday & Greenhouse
                                </span>
                            </motion.div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
