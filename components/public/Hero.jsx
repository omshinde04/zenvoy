"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { HiCheckCircle } from "react-icons/hi"
import { FaArrowRight, FaCode, FaCheck, FaShieldAlt, FaBolt, FaTerminal } from "react-icons/fa"

export default function Hero() {
    const [activeTab, setActiveTab] = useState("pdf") // "pdf" | "json" | "latex"

    return (
        <section
            id="home"
            className="relative pt-10 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 overflow-hidden bg-white"
        >
            {/* Fine-Grained Ambient Background Grid & Glow */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a06_1px,transparent_1px),linear-gradient(to_bottom,#0f172a06_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-gradient-to-b from-indigo-50/80 via-slate-50/30 to-transparent blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center space-y-6">

                {/* Eyebrow Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-indigo-50/60 px-4 py-1.5 text-xs font-bold text-indigo-900 shadow-xs backdrop-blur-md hover:border-indigo-300 transition"
                >
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ENGINEERED FOR DEVELOPERS · HARVARD ATS SPEC · ZERO PAYWALLS</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-[-0.03em] leading-[1.08] font-sans max-w-4xl mx-auto"
                >
                    The Free ATS Resume Builder Engineered for{" "}
                    <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
                        Software Developers.
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                    className="text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans"
                >
                    Zero paywalls, no watermark extortion, and no signup required. Build recruiter-approved, Harvard-standard resumes with universal Times New Roman typography and instant vector PDF export.
                </motion.p>

                {/* Primary CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45 }}
                    className="flex flex-col sm:flex-row gap-3.5 justify-center items-center pt-2"
                >
                    <Link
                        href="/builder/classic-ats"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 hover:from-indigo-600 hover:to-violet-600 text-white text-sm sm:text-base font-black shadow-xl shadow-indigo-950/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <span>Build Free Resume on Classic ATS</span>
                        <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/templates"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 text-sm sm:text-base font-bold transition shadow-xs hover:border-slate-300"
                    >
                        <span>View Template &amp; Spacing Guide</span>
                    </Link>
                </motion.div>

                {/* Key Benefits Checklist */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 font-semibold pt-1"
                >
                    <span className="flex items-center gap-1.5">
                        <HiCheckCircle className="text-emerald-500 text-base" />
                        100% Free Forever
                    </span>
                    <span className="flex items-center gap-1.5">
                        <HiCheckCircle className="text-emerald-500 text-base" />
                        Zero Watermarks
                    </span>
                    <span className="flex items-center gap-1.5">
                        <HiCheckCircle className="text-emerald-500 text-base" />
                        No Credit Card Required
                    </span>
                    <span className="flex items-center gap-1.5">
                        <HiCheckCircle className="text-emerald-500 text-base" />
                        Client-Side In-Browser Privacy
                    </span>
                </motion.div>

                {/* VISUAL DEVELOPER DOCUMENT & AST TERMINAL WINDOW */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38, duration: 0.55 }}
                    className="mt-10 relative max-w-3xl mx-auto text-left"
                >
                    <div className="rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-indigo-950/10 overflow-hidden ring-1 ring-slate-900/5">

                        {/* macOS Window Chrome Bar */}
                        <div className="h-10 px-4 flex items-center justify-between border-b border-slate-200 bg-slate-100/90 select-none">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500/30" />
                                <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/30" />
                                <span className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/30" />
                            </div>

                            {/* Window Tabs: PDF | JSON AST | LaTeX */}
                            <div className="flex items-center gap-1 bg-slate-200/80 p-0.5 rounded-lg text-[11px] font-mono">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("pdf")}
                                    className={`px-3 py-1 rounded-md transition font-semibold ${
                                        activeTab === "pdf"
                                            ? "bg-white text-slate-900 shadow-xs"
                                            : "text-slate-600 hover:text-slate-900"
                                    }`}
                                >
                                    classic-ats.pdf
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("json")}
                                    className={`px-3 py-1 rounded-md transition font-semibold ${
                                        activeTab === "json"
                                            ? "bg-white text-slate-900 shadow-xs"
                                            : "text-slate-600 hover:text-slate-900"
                                    }`}
                                >
                                    ats-audit.json
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("latex")}
                                    className={`px-3 py-1 rounded-md transition font-semibold ${
                                        activeTab === "latex"
                                            ? "bg-white text-slate-900 shadow-xs"
                                            : "text-slate-600 hover:text-slate-900"
                                    }`}
                                >
                                    harvard.tex
                                </button>
                            </div>

                            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-2 py-0.5 rounded-md">
                                ✓ ATS PASS: 100/100
                            </span>
                        </div>

                        {/* WINDOW BODY 1: THE RENDERED HARVARD RESUME */}
                        {activeTab === "pdf" && (
                            <div className="bg-white p-6 sm:p-10 text-left relative font-serif select-none">
                                {/* Header */}
                                <div className="border-b border-slate-900 pb-3 mb-3 text-center">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                                        ALEXANDER CHASE
                                    </h3>
                                    <p className="text-xs text-slate-700 mt-1">
                                        San Francisco, CA · +1 (555) 019-2834 · alex.chase@example.com · <span className="text-indigo-600 underline">portfolio.dev</span> · <span className="text-indigo-600 underline">github.com/alexchase</span> · <span className="text-indigo-600 underline">linkedin.com/in/alexchase</span>
                                    </p>
                                </div>

                                {/* Professional Summary */}
                                <div className="border-b border-slate-900 pb-2.5 mb-2.5">
                                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                        Professional Summary
                                    </h4>
                                    <p className="text-[11.5px] text-slate-800 mt-1 leading-snug">
                                        Full Stack Software Engineer with 4+ years architecting high-throughput distributed microservices and modern web applications with Next.js, Node.js, and PostgreSQL. Experienced in caching layers, database indexing, and automated CI/CD pipelines.
                                    </p>
                                </div>

                                {/* Experience */}
                                <div className="border-b border-slate-900 pb-2.5 mb-2.5">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                            Experience
                                        </h4>
                                        <span className="text-[10px] text-slate-500 font-sans font-semibold">Strict Single Column</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[11.5px] font-bold text-slate-900 mt-1">
                                        <span>Senior Software Engineer — CloudScale Technologies</span>
                                        <span>2022 – Present</span>
                                    </div>
                                    <ul className="text-[11px] text-slate-800 list-disc pl-4 space-y-1 mt-1 leading-tight">
                                        <li>Architected asynchronous message processing pipeline handling <strong>45,000 requests/sec</strong> using Fastify, Redis Streams, and Docker.</li>
                                        <li>Reduced p99 database response latency by <strong>44%</strong> across 1.2M queries via PostgreSQL B-tree indexing and PgBouncer connection pooling.</li>
                                        <li>Championed automated unit and integration test pipelines in GitHub Actions, maintaining <strong>96% code coverage</strong> across 18 microservices.</li>
                                    </ul>
                                </div>

                                {/* Technical Skills */}
                                <div>
                                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                        Technical Skills
                                    </h4>
                                    <p className="text-[11px] text-slate-800 mt-1 leading-tight">
                                        • <strong>Languages:</strong> TypeScript, JavaScript, Python, Go, SQL, Java<br />
                                        • <strong>Frameworks &amp; Web:</strong> Next.js 16, React 19, Node.js, Fastify, Express, Tailwind CSS<br />
                                        • <strong>Cloud &amp; DevOps:</strong> AWS (S3, EC2, ECS), Docker, Kubernetes, PostgreSQL, Redis, Git, CI/CD
                                    </p>
                                </div>

                                {/* Interactive Overlay Pill */}
                                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 font-sans text-xs">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                        <span className="font-bold text-slate-700">100% Workday / Greenhouse Tested</span>
                                    </div>
                                    <Link
                                        href="/builder/classic-ats"
                                        className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline inline-flex items-center gap-1"
                                    >
                                        <span>Customize this live in Builder</span>
                                        <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* WINDOW BODY 2: JSON AST AUDIT VIEW */}
                        {activeTab === "json" && (
                            <div className="bg-slate-950 p-6 sm:p-8 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
                                <div className="flex items-center justify-between text-slate-500 text-[11px] mb-4 pb-2 border-b border-slate-800">
                                    <span>// ATS Parser Output Audit · Top ATS Match</span>
                                    <span className="text-emerald-400 font-bold">STATUS: 200 OK</span>
                                </div>
                                <pre className="text-indigo-200">
{`{
  "parser": "Enterprise ATS AST Scanner (v2026.4)",
  "candidate": "Alexander Chase",
  "score": {
    "overall": 100,
    "formatRating": "EXCELLENT",
    "parserErrors": 0
  },
  "compatibility": {
    "workday": "PASSED (100%)",
    "greenhouse": "PASSED (100%)",
    "lever": "PASSED (100%)",
    "taleo": "PASSED (100%)"
  },
  "layoutRules": {
    "singleColumn": true,
    "tableCount": 0,
    "textFrameCount": 0,
    "embeddedFonts": "Universal Times New Roman",
    "vectorSearchableText": true
  },
  "extractedKeywords": [
    "TypeScript", "Next.js", "React", "PostgreSQL", 
    "Docker", "AWS", "Microservices", "Redis", "CI/CD"
  ]
}`}
                                </pre>
                            </div>
                        )}

                        {/* WINDOW BODY 3: LATEX SOURCE VIEW */}
                        {activeTab === "latex" && (
                            <div className="bg-slate-950 p-6 sm:p-8 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                                <div className="text-slate-500 text-[11px] mb-4 pb-2 border-b border-slate-800">
                                    % Clean LaTeX / Harvard AST representation
                                </div>
                                <pre className="text-amber-200">
{`\\documentclass[letterpaper,11pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[hidelinks]{hyperref}

\\titleformat{\\section}{\\bfseries\\scshape\\raggedright\\large}{}{0em}{}[\\titlerule]

\\begin{document}
\\begin{center}
    {\\Huge \\scshape Alexander Chase} \\\\ \\vspace{1pt}
    San Francisco, CA $|$ alex.chase@example.com $|$ \\href{https://github.com/alexchase}{github.com/alexchase}
\\end{center}

\\section{Technical Skills}
\\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Languages}{: TypeScript, JavaScript, Python, Go, SQL} \\\\
     \\textbf{Frameworks}{: React, Next.js, Fastify, Node.js, Express, Tailwind CSS} \\\\
     \\textbf{Cloud \\& Tools}{: AWS, Docker, Kubernetes, PostgreSQL, Redis, Git}
    }}
\\end{itemize}
\\end{document}`}
                                </pre>
                            </div>
                        )}

                    </div>

                    {/* Floating Bottom Verification Banner */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-900 px-4 py-2.5 text-xs text-white shadow-lg">
                        <div className="flex items-center gap-2">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                            <span className="font-semibold text-slate-200">
                                Verified by Senior Engineers: Zero paywalls, zero accounts, 100% free vector PDF.
                            </span>
                        </div>
                        <Link
                            href="/builder/classic-ats"
                            className="font-bold text-indigo-300 hover:text-white transition underline"
                        >
                            Open Builder →
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
