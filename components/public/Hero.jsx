"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaPlay, FaStar, FaArrowRight, FaCheck, FaFileAlt, FaBullseye, FaBolt, FaShieldAlt } from "react-icons/fa"

export default function Hero() {
    const features = [
        {
            icon: FaFileAlt,
            title: "Single-Column ATS",
            desc: "Harvard-standard layout",
        },
        {
            icon: FaBullseye,
            title: "100/100 Parse Score",
            desc: "Workday & Greenhouse ready",
        },
        {
            icon: FaBolt,
            title: "Instant Vector PDF",
            desc: "Zero watermarks or paywalls",
        },
        {
            icon: FaShieldAlt,
            title: "100% Client-Side",
            desc: "Zero cloud storage required",
        },
    ]

    return (
        <section
            id="home"
            className="relative px-4 sm:px-6 lg:px-8 pt-[72px] sm:pt-[78px] pb-6 sm:pb-8 bg-[#F3EEE3]"
        >
            {/* The Master Framed Canvas (Luxury Editorial Stage) */}
            <div className="max-w-6xl mx-auto rounded-[28px] sm:rounded-[36px] bg-[#FAF7F2] border border-[#E5DFD3] p-6 sm:p-8 lg:p-10 shadow-[0_16px_40px_-15px_rgba(17,17,17,0.05)] relative overflow-hidden">

                {/* Subtle Luxury Corner Decorative Curves */}
                <div className="absolute right-6 top-6 w-24 h-24 pointer-events-none opacity-20">
                    <svg viewBox="0 0 120 120" fill="none" stroke="#D9541E" strokeWidth="1">
                        <path d="M 120 20 C 75 20, 20 75, 20 120" />
                        <path d="M 120 45 C 85 45, 45 85, 45 120" />
                        <path d="M 120 70 C 95 70, 70 95, 70 120" />
                    </svg>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

                    {/* LEFT COLUMN: Eyebrow + Viral Indian Student Hook + Subtitle + CTAs + Trust Proof */}
                    <div className="lg:col-span-6 space-y-5 text-left relative z-10">

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
                            <span className="text-[#66615B] font-normal">100% Free Forever</span>
                        </motion.div>

                        {/* Viral Punch Headline with Two-Font Brand Structure */}
                        <motion.h1
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111111] tracking-[-0.035em] leading-[1.12]"
                        >
                            Bura{" "}
                            <span className="inline-block bg-[#111111] text-[#FAF7F2] px-4 sm:px-5 py-0.5 rounded-full shadow-md shadow-black/15 text-3xl sm:text-4xl lg:text-[42px] font-bold align-middle my-1">
                                SAMAY
                            </span>{" "}
                            nahi chal raha, <br />
                            bas{" "}
                            <span className="font-serif italic font-normal text-[#D9541E] pr-2">
                                Resume
                            </span>
                            barabar nahi hai.
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08, duration: 0.35 }}
                            className="text-[#66615B] text-sm sm:text-base leading-relaxed max-w-[480px]"
                        >
                            75% of student resumes get silently filtered out by automated ATS bots before a recruiter ever sees them. It’s not bad luck — it’s broken formatting. Build a Harvard-spec resume that bypasses filters and lands interviews — 100% free, zero login required.
                        </motion.p>

                        {/* Dual Action CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.35 }}
                            className="pt-1 flex flex-wrap items-center gap-4 sm:gap-5"
                        >
                            <Link
                                href="/builder/classic-ats"
                                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#111111] hover:bg-[#D9541E] text-[#FAF7F2] px-7 sm:px-8 py-3.5 text-sm font-semibold transition-all duration-200 shadow-md shadow-black/10 hover:shadow-lg hover:shadow-[#D9541E]/20"
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
                            className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#66615B] border-t border-[#E5DFD3]/60"
                        >
                            <span className="flex items-center gap-1.5 font-medium text-[#111111]">
                                <FaCheck className="text-[#D9541E] text-[10px]" /> Harvard Spec Approved
                            </span>
                            <span className="flex items-center gap-1.5 font-medium text-[#111111]">
                                <FaCheck className="text-[#D9541E] text-[10px]" /> No Sign-Up Needed
                            </span>
                            <span className="flex items-center gap-1.5 font-medium text-[#111111]">
                                <FaCheck className="text-[#D9541E] text-[10px]" /> 100% Free Forever
                            </span>
                        </motion.div>

                    </div>

                    {/* RIGHT COLUMN: Relaxed Candidate Graphic + Handwritten Callout + Clean Feature Pills */}
                    <div className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[480px]">

                        {/* Ambient Terracotta Glow */}
                        <div className="absolute w-80 h-80 rounded-full bg-[#D9541E]/10 blur-3xl pointer-events-none -z-0" />

                        {/* Handwritten Callout (Top-Left of Person) */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
                            animate={{ opacity: 1, rotate: -6, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="absolute -left-2 sm:left-2 top-0 sm:top-2 z-20 text-left pointer-events-none"
                        >
                            <span className="font-script text-2xl sm:text-3xl font-bold text-[#D9541E] block leading-tight">
                                Stress-free job search ➔
                            </span>
                            <span className="text-[11px] font-semibold text-[#66615B] tracking-wide block uppercase mt-0.5">
                                Resume Barabar, Life Set
                            </span>
                        </motion.div>

                        {/* Candidate Sitting Cross-Legged with Microphone */}
                        <div className="relative z-10 flex flex-col items-center justify-center">
                            <motion.img
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45 }}
                                src="/hero-candidate-relax.png"
                                alt="Student Relaxing with ATS Compliant Resume"
                                className="w-[320px] sm:w-[370px] lg:w-[400px] h-auto object-contain select-none pointer-events-none"
                            />
                            {/* Realistic Contact Floor Shadow Directly Under Shoes */}
                            <div className="w-60 sm:w-72 h-3.5 sm:h-4 rounded-full bg-[#111111]/20 blur-[6px] -mt-2 sm:-mt-2.5 mx-auto pointer-events-none" />
                        </div>

                        {/* Right Stacked Feature Pills (Clean, Modern, Staggered) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25, duration: 0.45 }}
                            className="absolute right-0 lg:-right-4 top-4 sm:top-8 z-20 hidden sm:flex flex-col gap-2.5 max-w-[210px]"
                        >
                            {features.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25 + idx * 0.08, duration: 0.3 }}
                                    className="group flex items-center gap-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5DFD3] hover:border-[#D9541E] px-3.5 py-2 shadow-xs hover:shadow-sm transition-all duration-200"
                                >
                                    <div className="w-7 h-7 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] group-hover:bg-[#D9541E] group-hover:border-[#D9541E] flex items-center justify-center text-[#D9541E] group-hover:text-[#FAF7F2] transition-colors shrink-0">
                                        <item.icon className="text-xs" />
                                    </div>
                                    <div className="text-left overflow-hidden">
                                        <p className="text-xs font-bold text-[#111111] leading-tight truncate">
                                            {item.title}
                                        </p>
                                        <p className="text-[10px] text-[#66615B] leading-tight truncate">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    )
}
