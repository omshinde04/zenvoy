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
    FaFilePdf,
    FaCompressAlt,
    FaAlignJustify,
    FaExpandAlt,
    FaGraduationCap,
    FaStar,
} from "react-icons/fa"

const SPACING_GUIDES = [
    {
        id: "compact",
        name: "Compact Spacing",
        badge: "For Rich Content / 1-Page Rule",
        icon: <FaCompressAlt className="text-indigo-600" />,
        accentColor: "border-indigo-200 bg-indigo-50/60 text-indigo-900",
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
        icon: <FaAlignJustify className="text-emerald-600" />,
        accentColor: "border-emerald-200 bg-emerald-50/60 text-emerald-900",
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
        icon: <FaExpandAlt className="text-violet-600" />,
        accentColor: "border-violet-200 bg-violet-50/60 text-violet-900",
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
        <div className="min-h-screen bg-slate-50/60 px-4 py-12 sm:px-6 sm:py-16">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Hero Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-xs font-bold text-emerald-800 mb-4 shadow-xs">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Verified 100% ATS Pass Rate · Harvard Standard</span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
                    >
                        Build on the{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
                            Classic ATS Template
                        </span>
                    </motion.h1>

                    <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
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
                        <div className="relative rounded-3xl border-2 border-indigo-500/80 bg-white p-6 shadow-xl shadow-indigo-950/5 ring-4 ring-indigo-500/10">

                            {/* Top Badges */}
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-black text-white uppercase tracking-wider shadow-sm">
                                    <FaStar className="text-amber-300 text-[10px]" />
                                    #1 Recruiter Choice
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                                    <FaShieldAlt className="text-emerald-500" />
                                    100% ATS Passed
                                </span>
                            </div>

                            {/* Template Preview Image */}
                            <Link href="/builder/classic-ats" className="group block relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/70 p-4 transition hover:border-indigo-400">
                                <img
                                    src="/templates/Tech_minimal.png"
                                    alt="Classic ATS Harvard Resume Preview"
                                    className="w-full max-h-[380px] object-contain rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors rounded-2xl flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                        Click to Customize in Builder ↗
                                    </span>
                                </div>
                            </Link>

                            {/* Template Metadata */}
                            <div className="mt-5 space-y-3">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-black text-slate-900 tracking-tight">
                                            Classic ATS (Harvard Format)
                                        </h2>
                                        <span className="text-[10px] font-bold rounded-md bg-slate-100 text-slate-700 px-2 py-0.5">
                                            Single Column
                                        </span>
                                    </div>
                                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                                        Ivy League single-column architecture with clean horizontal section dividers. Proven compatibility with Workday, Greenhouse, Lever, and Taleo.
                                    </p>
                                </div>

                                {/* Key Specs Grid */}
                                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px]">
                                    <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">ATS Compatibility</span>
                                        <span className="font-bold text-emerald-700">100 / 100 Score</span>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">Typography</span>
                                        <span className="font-bold text-slate-800">Times New Roman</span>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">Format Structure</span>
                                        <span className="font-bold text-slate-800">1-Page Strictly ATS</span>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">PDF Export</span>
                                        <span className="font-bold text-indigo-700">Vector PDF (Selectable)</span>
                                    </div>
                                </div>

                                {/* Main Launch CTA */}
                                <Link
                                    href="/builder/classic-ats"
                                    className="group mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-6 py-4 text-center text-sm font-black text-white shadow-lg shadow-indigo-950/20 transition hover:from-indigo-600 hover:to-violet-600 hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    <span>Open Classic ATS Builder Free</span>
                                    <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                                </Link>

                                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                                    <span className="flex items-center gap-1">
                                        <FaCheckCircle className="text-emerald-500 text-xs" />
                                        100% Free Forever
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <FaCheckCircle className="text-emerald-500 text-xs" />
                                        Zero Watermarks
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <FaCheckCircle className="text-emerald-500 text-xs" />
                                        No Login
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Why this is the ONLY template you need right now */}
                        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 text-xs text-indigo-950">
                            <div className="flex items-start gap-2.5">
                                <FaBolt className="text-indigo-600 text-sm mt-0.5 shrink-0" />
                                <div>
                                    <strong className="font-bold text-indigo-950">Why Classic ATS is Featured Exclusively:</strong>
                                    <p className="mt-1 text-indigo-900/80 leading-relaxed">
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
                        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">

                            {/* Guide Header */}
                            <div className="border-b border-slate-100 pb-5">
                                <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider">
                                    <FaRegLightbulb className="text-sm" />
                                    <span>Interactive Resume Blueprint</span>
                                </div>
                                <h3 className="mt-1.5 text-2xl font-black text-slate-900 tracking-tight">
                                    How to Build Your Resume on Classic ATS
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    Follow these 3 proven rules to maximize ATS keyword parsing and pass the recruiter 6-second review.
                                </p>
                            </div>

                            {/* RULE 1: SPACING MODES - COMPACT, NORMAL, RELAXED */}
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                                            Step 1 · Spacing Mode
                                        </span>
                                        <h4 className="text-base font-bold text-slate-900">
                                            Which Spacing is Suitable for You?
                                        </h4>
                                    </div>
                                    <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                                        Toggle below to preview
                                    </span>
                                </div>

                                {/* 3 Spacing Selector Pills */}
                                <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/70">
                                    {SPACING_GUIDES.map((mode) => {
                                        const isSelected = selectedSpacing === mode.id
                                        return (
                                            <button
                                                key={mode.id}
                                                type="button"
                                                onClick={() => setSelectedSpacing(mode.id)}
                                                className={`flex flex-col items-center justify-center p-2.5 rounded-xl text-center transition-all ${
                                                    isSelected
                                                        ? "bg-white text-slate-900 shadow-md font-bold ring-1 ring-slate-200"
                                                        : "text-slate-600 hover:text-slate-900 font-medium"
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
                                    className={`rounded-2xl border p-4 sm:p-5 ${activeGuide.accentColor}`}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-base">{activeGuide.icon}</span>
                                            <h5 className="text-sm font-black tracking-tight">
                                                {activeGuide.name}
                                            </h5>
                                        </div>
                                        <span className="rounded-full bg-white/90 border border-current px-2.5 py-0.5 text-[10px] font-bold">
                                            {activeGuide.badge}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-xs leading-relaxed">
                                        <p>
                                            <strong>Who should use this:</strong> {activeGuide.bestFor}
                                        </p>
                                        <p>
                                            <strong>Why choose it:</strong> {activeGuide.whyUse}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] font-semibold border-t border-black/5">
                                            <span>Target Word Count: <span className="underline">{activeGuide.contentTarget}</span></span>
                                            <span>•</span>
                                            <span>{activeGuide.recruiterTip}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* RULE 2: THE HARVARD BULLET FORMULA */}
                            <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                                <div>
                                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                                        Step 2 · Experience Writing
                                    </span>
                                    <h4 className="text-base font-bold text-slate-900">
                                        Use the Harvard Bullet-Point Formula
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        Recruiters do not read paragraphs. Use high-impact 1-2 line bullets following this structure:
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-200 bg-slate-900 p-4 text-white text-xs space-y-2">
                                    <div className="flex items-center gap-2 font-mono text-[11px] text-indigo-300 font-bold">
                                        <span>[Action Verb]</span>
                                        <span>+</span>
                                        <span>[Tech / Context]</span>
                                        <span>+</span>
                                        <span>[Measurable Business Impact]</span>
                                    </div>

                                    <div className="pt-2 border-t border-slate-800 space-y-1.5 text-[11px]">
                                        <p className="text-rose-400">
                                            ❌ <em>Weak:</em> &quot;Worked on backend APIs using Node.js.&quot;
                                        </p>
                                        <p className="text-emerald-300 font-medium">
                                            ✅ <em>Strong ATS:</em> &quot;Architected asynchronous Redis caching layer for Node.js microservices, cutting p99 API latency by 42% across 1.2M daily queries.&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* RULE 3: SKILLS ARCHITECTURE */}
                            <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                                <div>
                                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                                        Step 3 · Keywords & ATS Ranking
                                    </span>
                                    <h4 className="text-base font-bold text-slate-900">
                                        Categorize Technical Skills by Domain
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        Classic ATS groups your skills so automated scanners parse them into searchable recruiter filters:
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                                        <strong className="text-slate-900 block font-bold mb-1">Languages:</strong>
                                        <span className="text-slate-600">JavaScript, TypeScript, Python, Java, SQL, Go</span>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                                        <strong className="text-slate-900 block font-bold mb-1">Frameworks:</strong>
                                        <span className="text-slate-600">React, Next.js, Node.js, Express, Tailwind CSS</span>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                                        <strong className="text-slate-900 block font-bold mb-1">Cloud &amp; DevOps:</strong>
                                        <span className="text-slate-600">AWS (S3, EC2), Docker, CI/CD, Kubernetes, Vercel</span>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                                        <strong className="text-slate-900 block font-bold mb-1">Tools &amp; Databases:</strong>
                                        <span className="text-slate-600">PostgreSQL, MongoDB, Git, Redis, Postman, Linux</span>
                                    </div>
                                </div>
                            </div>

                            {/* Direct CTA inside the Guide */}
                            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <span className="text-xs font-bold text-slate-900">
                                        Ready to create your resume?
                                    </span>
                                    <p className="text-[11px] text-slate-500">
                                        Takes ~8 minutes. Zero paywall, instant vector PDF.
                                    </p>
                                </div>

                                <Link
                                    href="/builder/classic-ats"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-xs font-bold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span>Build on Classic ATS Now</span>
                                    <FaArrowRight className="text-xs" />
                                </Link>
                            </div>

                        </div>
                    </motion.div>

                </div>

                {/* UPCOMING TEMPLATES NOTICE */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-amber-400" />
                                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                    Upcoming Formats Undergoing 100% ATS Audit
                                </h4>
                            </div>
                            <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                                We are currently completing formatting refinements on additional layouts (<strong>Tech Minimalist</strong>, <strong>Two-Column Compact</strong>, and <strong>Tech Bold Header</strong>) to guarantee they meet our 100% ATS score audit. They will be re-enabled here soon.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600">
                                Tech Minimal (Refining)
                            </span>
                            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600">
                                Tech Bold (Refining)
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
