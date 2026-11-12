"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    FaArrowRight,
    FaCheckCircle,
    FaBolt,
    FaRegLightbulb,
    FaShieldAlt,
    FaCompressAlt,
    FaAlignJustify,
    FaExpandAlt,
    FaStar,
} from "react-icons/fa"

const SPACING_GUIDES = [
    {
        id: "compact",
        name: "Compact Spacing",
        badge: "For Rich Content / 1-Page Rule",
        icon: <FaCompressAlt className="text-[#D9541E]" />,
        accentColor: "border-[#E5DFD3] bg-[#FAF7F2] text-[#111111]",
        bestFor: "Experienced Candidates (3+ years), Senior SWEs, or Students with 3+ projects & multiple internships.",
        whyUse:
            "Tightens section padding, line-height, and bullet margins. Allows you to pack high-density technical achievements onto strictly 1 page without spilling onto an accidental second page.",
        contentTarget: "400 – 600 words",
        recruiterTip: "Ideal when you have plenty to show and need maximum density without looking cluttered.",
    },
    {
        id: "normal",
        name: "Normal Spacing (Standard)",
        badge: "Recommended for 80% of Users",
        icon: <FaAlignJustify className="text-[#D9541E]" />,
        accentColor: "border-[#111111] bg-white text-[#111111] shadow-xs",
        bestFor: "Freshers (0-2 years), Software Engineers, and General Technical Applicants.",
        whyUse:
            "The industry benchmark standard. Delivers the optimal golden ratio between whitespace, visual hierarchy, and instant scannability for a recruiter's 6-second first glance.",
        contentTarget: "300 – 450 words",
        recruiterTip: "Highest recommended mode. Clean, balanced, and instantly readable on any ATS scanner.",
    },
    {
        id: "relaxed",
        name: "Relaxed Spacing",
        badge: "For Freshers / Balanced Fill",
        icon: <FaExpandAlt className="text-[#D9541E]" />,
        accentColor: "border-[#E5DFD3] bg-[#FAF7F2] text-[#111111]",
        bestFor: "College Students, First-Time Job Seekers, or Career Switchers with 1-2 projects.",
        whyUse:
            "Gently expands vertical padding and line spacing so your resume fills the single page gracefully and confidently, eliminating awkward blank voids at the bottom.",
        contentTarget: "200 – 320 words",
        recruiterTip: "Prevents a shorter resume from looking empty while keeping pristine Harvard typography.",
    },
]

export default function TemplatesPage() {
    const [selectedSpacing, setSelectedSpacing] = useState("normal")

    const activeGuide = SPACING_GUIDES.find((s) => s.id === selectedSpacing) || SPACING_GUIDES[1]

    return (
        <div className="min-h-screen bg-[#F3EEE3] px-4 py-12 sm:px-6 sm:py-16">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Hero Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#E5DFD3] bg-[#FAF7F2] px-4 py-1.5 text-xs font-medium text-[#66615B] mb-4 shadow-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                        <span className="font-semibold text-[#111111]">Verified 100% ATS Pass Rate</span>
                        <span className="text-[#DDD6C8]">/</span>
                        <span>Harvard Standard</span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-[1.15]"
                    >
                        Build on the{" "}
                        <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
                            Classic ATS Template
                        </span>
                    </motion.h1>

                    <p className="mt-3.5 text-sm sm:text-base text-[#66615B] leading-relaxed max-w-2xl mx-auto">
                        The gold-standard single-column layout trusted by FAANG, Fortune 500, and startup recruiters.
                        Engineered with pure Times New Roman typography and guaranteed 0 parsing errors.
                    </p>
                </div>

                {/* 2-Column Split Showcase: Left = Template Card, Right = Master Guide */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Featured Classic ATS Template Card (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45 }}
                        className="lg:col-span-5 space-y-4"
                    >
                        <div className="relative rounded-2xl border border-[#E5DFD3] bg-white p-6 shadow-sm">

                            {/* Top Badges */}
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#111111] px-3 py-1 text-[11px] font-bold text-[#F3EEE3] tracking-wide">
                                    <FaStar className="text-[#D9541E] text-[10px]" />
                                    #1 Recruiter Choice
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-md bg-[#D9541E]/10 border border-[#D9541E]/20 px-2.5 py-1 text-[10px] font-bold text-[#D9541E]">
                                    <FaShieldAlt className="text-[#D9541E]" />
                                    100% ATS Passed
                                </span>
                            </div>

                            {/* Template Preview Image */}
                            <Link href="/builder/classic-ats" className="group block relative overflow-hidden rounded-xl border border-[#E5DFD3] bg-[#FAF7F2] p-4 transition hover:border-[#D9541E]/50">
                                <img
                                    src="/templates/Tech_minimal.png"
                                    alt="Classic ATS Harvard Resume Preview"
                                    className="w-full max-h-[380px] object-contain rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/10 transition-colors rounded-xl flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#111111] text-[#F3EEE3] text-xs font-semibold px-4 py-2 rounded-lg shadow-md">
                                        Open in Builder ↗
                                    </span>
                                </div>
                            </Link>

                            {/* Template Metadata */}
                            <div className="mt-5 space-y-3">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-[#111111] tracking-tight">
                                            Classic ATS (Harvard Format)
                                        </h2>
                                        <span className="text-[10px] font-medium rounded-md bg-[#FAF7F2] text-[#66615B] border border-[#E5DFD3] px-2 py-0.5">
                                            Single Column
                                        </span>
                                    </div>
                                    <p className="mt-1 text-xs text-[#66615B] leading-relaxed">
                                        Ivy League single-column architecture with clean horizontal section dividers. Proven compatibility with Workday, Greenhouse, Lever, and Taleo.
                                    </p>
                                </div>

                                {/* Key Specs Grid */}
                                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#F3EEE3] text-[11px]">
                                    <div className="rounded-lg bg-[#FAF7F2] p-2.5 border border-[#E5DFD3]">
                                        <span className="text-[#66615B] block text-[10px] uppercase font-semibold">ATS Compatibility</span>
                                        <span className="font-bold text-[#D9541E]">100 / 100 Score</span>
                                    </div>
                                    <div className="rounded-lg bg-[#FAF7F2] p-2.5 border border-[#E5DFD3]">
                                        <span className="text-[#66615B] block text-[10px] uppercase font-semibold">Typography</span>
                                        <span className="font-bold text-[#111111]">Times New Roman</span>
                                    </div>
                                    <div className="rounded-lg bg-[#FAF7F2] p-2.5 border border-[#E5DFD3]">
                                        <span className="text-[#66615B] block text-[10px] uppercase font-semibold">Format Structure</span>
                                        <span className="font-bold text-[#111111]">1-Page Strictly ATS</span>
                                    </div>
                                    <div className="rounded-lg bg-[#FAF7F2] p-2.5 border border-[#E5DFD3]">
                                        <span className="text-[#66615B] block text-[10px] uppercase font-semibold">PDF Export</span>
                                        <span className="font-bold text-[#111111]">Vector PDF (Selectable)</span>
                                    </div>
                                </div>

                                {/* Main Launch CTA */}
                                <Link
                                    href="/builder/classic-ats"
                                    className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#111111] hover:bg-[#D9541E] px-6 py-3.5 text-center text-sm font-medium text-[#F3EEE3] shadow-xs transition-colors"
                                >
                                    <span>Open Classic ATS Builder Free</span>
                                    <FaArrowRight className="text-xs transition-transform duration-150 group-hover:translate-x-0.5" />
                                </Link>

                                <div className="flex items-center justify-center gap-4 text-[11px] text-[#66615B] pt-1">
                                    <span className="flex items-center gap-1">
                                        <FaCheckCircle className="text-[#D9541E] text-xs" />
                                        100% Free Forever
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <FaCheckCircle className="text-[#D9541E] text-xs" />
                                        Zero Watermarks
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <FaCheckCircle className="text-[#D9541E] text-xs" />
                                        No Login
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Why this is the ONLY template you need right now */}
                        <div className="rounded-xl border border-[#E5DFD3] bg-white p-4 text-xs text-[#111111] shadow-xs">
                            <div className="flex items-start gap-2.5">
                                <FaBolt className="text-[#D9541E] text-sm mt-0.5 shrink-0" />
                                <div>
                                    <strong className="font-bold text-[#111111]">Why Classic ATS is Featured Exclusively:</strong>
                                    <p className="mt-1 text-[#66615B] leading-relaxed">
                                        99.4% of recruiters prefer single-column formats because multi-column tables and stylized graphics frequently crash enterprise ATS parsers. Classic ATS guarantees 100% parse accuracy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: The Master Creation Guide (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        {/* Guide Container */}
                        <div className="rounded-2xl border border-[#E5DFD3] bg-white p-6 sm:p-8 shadow-sm">

                            {/* Guide Header */}
                            <div className="border-b border-[#F3EEE3] pb-5">
                                <div className="flex items-center gap-2 text-[#D9541E] text-xs font-bold uppercase tracking-wider">
                                    <FaRegLightbulb className="text-sm" />
                                    <span>Interactive Resume Blueprint</span>
                                </div>
                                <h3 className="mt-1.5 text-2xl font-bold text-[#111111] tracking-tight">
                                    How to Build Your Resume on Classic ATS
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm text-[#66615B] leading-relaxed">
                                    Follow these 3 proven rules to maximize ATS keyword parsing and pass the recruiter 6-second review.
                                </p>
                            </div>

                            {/* RULE 1: SPACING MODES - COMPACT, NORMAL, RELAXED */}
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-[11px] font-bold text-[#D9541E] uppercase tracking-wider">
                                            Step 1 · Spacing Mode
                                        </span>
                                        <h4 className="text-base font-bold text-[#111111]">
                                            Which Spacing is Suitable for You?
                                        </h4>
                                    </div>
                                    <span className="text-xs font-medium text-[#66615B] hidden sm:inline">
                                        Toggle below to preview
                                    </span>
                                </div>

                                {/* 3 Spacing Selector Pills */}
                                <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3]">
                                    {SPACING_GUIDES.map((mode) => {
                                        const isSelected = selectedSpacing === mode.id
                                        return (
                                            <button
                                                key={mode.id}
                                                type="button"
                                                onClick={() => setSelectedSpacing(mode.id)}
                                                className={`flex flex-col items-center justify-center p-2.5 rounded-lg text-center transition-all ${
                                                    isSelected
                                                        ? "bg-[#111111] text-[#F3EEE3] shadow-xs font-semibold"
                                                        : "text-[#66615B] hover:text-[#111111] font-medium"
                                                }`}
                                            >
                                                <div className="text-base mb-1">{mode.icon}</div>
                                                <span className="text-xs leading-tight capitalize">{mode.id}</span>
                                            </button>
                                        )
                                    })}
                                </div>

                                {/* Active Spacing Card Explainer */}
                                <motion.div
                                    key={activeGuide.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`rounded-xl border p-4 sm:p-5 ${activeGuide.accentColor}`}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-base">{activeGuide.icon}</span>
                                            <h5 className="text-sm font-bold tracking-tight">
                                                {activeGuide.name}
                                            </h5>
                                        </div>
                                        <span className="rounded-md bg-[#FAF7F2] border border-[#E5DFD3] px-2.5 py-0.5 text-[10px] font-semibold text-[#111111]">
                                            {activeGuide.badge}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-xs leading-relaxed text-[#555555]">
                                        <p>
                                            <strong className="text-[#111111]">Who should use this:</strong> {activeGuide.bestFor}
                                        </p>
                                        <p>
                                            <strong className="text-[#111111]">Why choose it:</strong> {activeGuide.whyUse}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] font-medium border-t border-[#E5DFD3]">
                                            <span>Target Word Count: <span className="underline font-semibold text-[#111111]">{activeGuide.contentTarget}</span></span>
                                            <span>•</span>
                                            <span>{activeGuide.recruiterTip}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* RULE 2: THE HARVARD BULLET FORMULA */}
                            <div className="mt-8 pt-6 border-t border-[#F3EEE3] space-y-3">
                                <div>
                                    <span className="text-[11px] font-bold text-[#D9541E] uppercase tracking-wider">
                                        Step 2 · Experience Writing
                                    </span>
                                    <h4 className="text-base font-bold text-[#111111]">
                                        Use the Harvard Bullet-Point Formula
                                    </h4>
                                    <p className="text-xs text-[#66615B] mt-0.5">
                                        Recruiters do not read paragraphs. Use high-impact 1-2 line bullets following this structure:
                                    </p>
                                </div>

                                <div className="rounded-xl border border-[#222222] bg-[#111111] p-4 text-[#F3EEE3] text-xs space-y-2 shadow-xs">
                                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#D9541E] font-bold">
                                        <span>[Action Verb]</span>
                                        <span>+</span>
                                        <span>[Tech / Context]</span>
                                        <span>+</span>
                                        <span>[Measurable Business Impact]</span>
                                    </div>

                                    <div className="pt-2 border-t border-[#222222] space-y-1.5 text-[11px]">
                                        <p className="text-rose-400">
                                            ❌ <em>Weak:</em> &quot;Worked on backend APIs using Node.js.&quot;
                                        </p>
                                        <p className="text-[#F3EEE3] font-medium">
                                            ✅ <em className="text-[#D9541E]">Strong ATS:</em> &quot;Architected asynchronous Redis caching layer for Node.js microservices, cutting p99 API latency by 42% across 1.2M daily queries.&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* RULE 3: SKILLS ARCHITECTURE */}
                            <div className="mt-8 pt-6 border-t border-[#F3EEE3] space-y-3">
                                <div>
                                    <span className="text-[11px] font-bold text-[#D9541E] uppercase tracking-wider">
                                        Step 3 · Keywords &amp; ATS Ranking
                                    </span>
                                    <h4 className="text-base font-bold text-[#111111]">
                                        Categorize Technical Skills by Domain
                                    </h4>
                                    <p className="text-xs text-[#66615B] mt-0.5">
                                        Classic ATS groups your skills so automated scanners parse them into searchable recruiter filters:
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                                    <div className="rounded-lg bg-[#FAF7F2] p-3 border border-[#E5DFD3]">
                                        <strong className="text-[#111111] block font-bold mb-1">Languages:</strong>
                                        <span className="text-[#66615B]">JavaScript, TypeScript, Python, Java, SQL, Go</span>
                                    </div>
                                    <div className="rounded-lg bg-[#FAF7F2] p-3 border border-[#E5DFD3]">
                                        <strong className="text-[#111111] block font-bold mb-1">Frameworks:</strong>
                                        <span className="text-[#66615B]">React, Next.js, Node.js, Express, Tailwind CSS</span>
                                    </div>
                                    <div className="rounded-lg bg-[#FAF7F2] p-3 border border-[#E5DFD3]">
                                        <strong className="text-[#111111] block font-bold mb-1">Cloud &amp; DevOps:</strong>
                                        <span className="text-[#66615B]">AWS (S3, EC2), Docker, CI/CD, Kubernetes, Vercel</span>
                                    </div>
                                    <div className="rounded-lg bg-[#FAF7F2] p-3 border border-[#E5DFD3]">
                                        <strong className="text-[#111111] block font-bold mb-1">Tools &amp; Databases:</strong>
                                        <span className="text-[#66615B]">PostgreSQL, MongoDB, Git, Redis, Postman, Linux</span>
                                    </div>
                                </div>
                            </div>

                            {/* Direct CTA inside the Guide */}
                            <div className="mt-8 pt-6 border-t border-[#F3EEE3] flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <span className="text-xs font-bold text-[#111111]">
                                        Ready to create your resume?
                                    </span>
                                    <p className="text-[11px] text-[#66615B]">
                                        Takes ~8 minutes. Zero paywall, instant vector PDF.
                                    </p>
                                </div>

                                <Link
                                    href="/builder/classic-ats"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#111111] hover:bg-[#D9541E] px-6 py-3 text-xs font-medium text-[#F3EEE3] shadow-xs transition-colors"
                                >
                                    <span>Build on Classic ATS Now</span>
                                    <FaArrowRight className="text-xs" />
                                </Link>
                            </div>

                        </div>
                    </motion.div>

                </div>

                {/* UPCOMING TEMPLATES NOTICE */}
                <div className="rounded-2xl border border-[#E5DFD3] bg-white p-6 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-[#D9541E]" />
                                <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                                    Upcoming Formats Undergoing 100% ATS Audit
                                </h4>
                            </div>
                            <p className="text-xs text-[#66615B] max-w-2xl leading-relaxed">
                                We are currently completing formatting refinements on additional layouts (<strong>Tech Minimalist</strong>, <strong>Two-Column Compact</strong>, and <strong>Tech Bold Header</strong>) to guarantee they meet our 100% ATS score audit. They will be re-enabled here soon.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <span className="rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1.5 text-[11px] font-semibold text-[#66615B]">
                                Tech Minimal (Refining)
                            </span>
                            <span className="rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1.5 text-[11px] font-semibold text-[#66615B]">
                                Tech Bold (Refining)
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
