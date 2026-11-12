"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaPlay, FaStar, FaArrowRight, FaCheck } from "react-icons/fa"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-6 sm:pb-8 bg-[#F3EEE3]"
        >
            {/* The Master Framed Canvas (Luxury Editorial Stage) */}
            <div className="max-w-6xl mx-auto rounded-[32px] sm:rounded-[44px] bg-[#FAF7F2] border border-[#E5DFD3] p-6 sm:p-10 lg:p-12 pb-8 sm:pb-10 shadow-[0_20px_50px_-15px_rgba(17,17,17,0.05)] relative overflow-hidden">

                {/* Subtle Luxury Corner Decorative Curves */}
                <div className="absolute right-8 top-8 w-28 h-28 pointer-events-none opacity-20">
                    <svg viewBox="0 0 120 120" fill="none" stroke="#D9541E" strokeWidth="1">
                        <path d="M 120 20 C 75 20, 20 75, 20 120" />
                        <path d="M 120 45 C 85 45, 45 85, 45 120" />
                        <path d="M 120 70 C 95 70, 70 95, 70 120" />
                    </svg>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

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
                            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#111111] tracking-[-0.035em] leading-[1.12]"
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

                    {/* RIGHT COLUMN: Next-Level Broadcast Stage (No Clunky Box Cards) */}
                    <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[460px] sm:min-h-[500px]">

                        {/* Ambient Warm Glow */}
                        <div className="absolute w-80 h-80 rounded-full bg-[#D9541E]/12 blur-3xl pointer-events-none -z-0" />

                        {/* The Architectural Obsidian Stage */}
                        <div className="relative w-72 sm:w-80 lg:w-[350px] h-[460px] sm:h-[490px] flex items-center justify-center">

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

                                {/* Terracotta Gradient at Base */}
                                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#D9541E]/40 to-transparent" />
                            </div>

                            {/* 2. Megaphone Acoustic Sound Waves Emitting Outward */}
                            <div className="absolute -left-6 sm:-left-8 top-16 sm:top-20 pointer-events-none z-20">
                                <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                                    <motion.path
                                        initial={{ opacity: 0.2, pathLength: 0.3 }}
                                        animate={{ opacity: [0.3, 0.8, 0.3], pathLength: [0.3, 1, 0.3] }}
                                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                        d="M 50 70 A 30 30 0 0 0 20 20"
                                        stroke="#D9541E"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                    <motion.path
                                        initial={{ opacity: 0.2, pathLength: 0.3 }}
                                        animate={{ opacity: [0.2, 0.6, 0.2], pathLength: [0.3, 1, 0.3] }}
                                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                        d="M 65 80 A 50 50 0 0 0 10 10"
                                        stroke="#D9541E"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        opacity="0.6"
                                    />
                                    <motion.path
                                        initial={{ opacity: 0.1, pathLength: 0.3 }}
                                        animate={{ opacity: [0.1, 0.4, 0.1], pathLength: [0.3, 1, 0.3] }}
                                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                                        d="M 80 90 A 70 70 0 0 0 0 0"
                                        stroke="#D9541E"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        opacity="0.3"
                                    />
                                </svg>
                            </div>

                            {/* 3. Girl Cutout with Megaphone & Yellow Sweater (Seamless Faded Base) */}
                            <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none select-none translate-x-3 sm:translate-x-5">
                                <img
                                    src="/hero-girl.png"
                                    alt="Candidate Celebrating Career Growth"
                                    className="h-[430px] sm:h-[470px] object-contain filter drop-shadow-xl"
                                />
                            </div>

                            {/* NEXT-LEVEL HUD PILL 1 (Top-Left): Live Recruiter Match Status */}
                            <motion.div
                                initial={{ opacity: 0, x: -20, y: -8 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.45 }}
                                className="absolute -left-12 sm:-left-16 lg:-left-20 top-6 sm:top-8 z-20"
                            >
                                <div className="inline-flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E5DFD3] px-4 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                    </span>
                                    <span className="text-xs font-bold text-[#111111] tracking-tight">
                                        ATS Score: 100/100
                                    </span>
                                    <span className="text-[11px] font-semibold text-[#D9541E] bg-[#D9541E]/10 px-2 py-0.5 rounded-full">
                                        Harvard Spec
                                    </span>
                                </div>
                            </motion.div>

                            {/* NEXT-LEVEL HUD PILL 2 (Docked Bottom): Recruiter Interview Broadcast Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.45 }}
                                className="absolute -left-6 sm:-left-4 lg:-left-8 bottom-3 sm:bottom-4 z-20"
                            >
                                <div className="inline-flex items-center gap-3 rounded-full bg-[#111111]/95 backdrop-blur-md border border-[#2D2D2D] px-4 sm:px-5 py-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.4)] text-white">
                                    {/* Equalizer Sound Waves */}
                                    <div className="flex items-center gap-0.5 h-3.5">
                                        <span className="w-0.5 h-2 bg-[#D9541E] rounded-full animate-pulse" />
                                        <span className="w-0.5 h-3.5 bg-[#D9541E] rounded-full" />
                                        <span className="w-0.5 h-1.5 bg-[#D9541E] rounded-full animate-pulse" />
                                        <span className="w-0.5 h-3 bg-[#D9541E] rounded-full" />
                                    </div>

                                    <div className="text-left">
                                        <span className="text-xs font-semibold text-[#FAF7F2] block leading-tight">
                                            99.4% Interview Shortlist Rate
                                        </span>
                                        <span className="text-[10px] text-[#A09A90] block leading-tight mt-0.5">
                                            Workday • Greenhouse • Lever
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
