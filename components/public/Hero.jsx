"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { HiCheckCircle } from "react-icons/hi"
import { FaArrowRight } from "react-icons/fa"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-6 overflow-hidden bg-white"
        >
            {/* Fine-Grained Ambient Background Grid & Glow */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a06_1px,transparent_1px),linear-gradient(to_bottom,#0f172a06_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-gradient-to-b from-indigo-50/70 via-slate-50/20 to-transparent blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center">

                {/* Floating Aesthetic Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-xs backdrop-blur-md mb-6 hover:border-slate-300 transition"
                >
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>100% Free Forever</span>
                    <span className="text-slate-300">•</span>
                    <span>Zero Paywalls</span>
                    <span className="text-slate-300">•</span>
                    <span>No Signup Required</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.1] font-sans"
                >
                    Zapiya – The 100% Free ATS Resume Builder That{" "}
                    <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
                        Gets You Shortlisted.
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="mt-6 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans"
                >
                    Zapiya is engineered for software engineers, developers &amp; students.
                    Create recruiter-approved, Harvard-standard ATS resumes with universal Times New Roman formatting and instant vector PDF export. 100% free with zero paywalls.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="mt-9 flex flex-col sm:flex-row gap-3.5 justify-center items-center"
                >
                    <Link
                        href="/templates"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm sm:text-base font-semibold shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <span>Build Free Resume Now</span>
                        <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/guides/ats-resume-guide-2026"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 text-sm sm:text-base font-semibold transition shadow-xs hover:border-slate-300"
                    >
                        Read ATS 2026 Guide
                    </Link>
                </motion.div>

                {/* Key Benefits Checklist */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium"
                >
                    <span className="flex items-center gap-1.5">
                        <HiCheckCircle className="text-emerald-500 text-base" />
                        Zero Watermarks
                    </span>
                    <span className="flex items-center gap-1.5">
                        <HiCheckCircle className="text-emerald-500 text-base" />
                        No Credit Card Ever
                    </span>
                    <span className="flex items-center gap-1.5">
                        <HiCheckCircle className="text-emerald-500 text-base" />
                        Harvard Single-Column Layout
                    </span>
                    <span className="flex items-center gap-1.5">
                        <HiCheckCircle className="text-emerald-500 text-base" />
                        100% In-Browser Privacy
                    </span>
                </motion.div>

                {/* Visual Document Mockup Preview in Sleek Window Chrome */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                    className="mt-14 relative max-w-3xl mx-auto"
                >
                    <div className="bg-slate-900/5 p-2 sm:p-3 rounded-3xl ring-1 ring-slate-900/10 shadow-[0_20px_50px_rgba(79,70,229,0.08)]">
                        {/* Window Header */}
                        <div className="bg-slate-100/90 rounded-2xl border border-slate-200/80 overflow-hidden">
                            <div className="h-9 px-4 flex items-center justify-between border-b border-slate-200/80 bg-slate-50">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                </div>
                                <span className="text-[11px] font-mono text-slate-500 font-medium">
                                    harvard-classic-ats-preview.pdf
                                </span>
                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                                    98% ATS MATCH
                                </span>
                            </div>

                            {/* Realistic Document Paper Body */}
                            <div className="bg-white p-6 sm:p-10 text-left border-t border-slate-100">
                                {/* Document Mockup Header */}
                                <div className="border-b border-slate-900 pb-3 mb-3 text-center">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                                        ALEXANDER CHASE
                                    </h3>
                                    <p className="text-xs text-slate-600 font-serif mt-1">
                                        San Francisco, CA | +1 (555) 019-2834 | alex.chase@example.com | Portfolio | LinkedIn | GitHub
                                    </p>
                                </div>

                                {/* Section 1 */}
                                <div className="border-b border-slate-900 pb-2.5 mb-2.5">
                                    <h4 className="text-xs font-bold text-slate-900 font-serif uppercase tracking-wider">
                                        Professional Summary
                                    </h4>
                                    <p className="text-[11px] text-slate-800 font-serif mt-1 leading-snug">
                                        Senior Full Stack Engineer with 5+ years specializing in distributed systems, high-concurrency microservices, and modern web applications with React, Node.js, and PostgreSQL.
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div className="border-b border-slate-900 pb-2.5 mb-2.5">
                                    <h4 className="text-xs font-bold text-slate-900 font-serif uppercase tracking-wider">
                                        Experience
                                    </h4>
                                    <div className="text-[11px] text-slate-900 font-serif font-bold mt-1">
                                        Lead Software Engineer — CloudScale Technologies | 2022 – Present
                                    </div>
                                    <ul className="text-[11px] text-slate-800 font-serif list-disc pl-4 space-y-0.5 mt-0.5 leading-tight">
                                        <li>Architected high-throughput message pipeline with Fastify and Redis handling 45,000 requests/sec.</li>
                                        <li>Reduced API p99 response latency by 44% through database query indexing and connection pooling.</li>
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div>
                                    <h4 className="text-xs font-bold text-slate-900 font-serif uppercase tracking-wider">
                                        Technical Skills
                                    </h4>
                                    <p className="text-[11px] text-slate-800 font-serif mt-1 leading-tight">
                                        • <strong>Languages:</strong> TypeScript, JavaScript, Python, Go, Java, SQL<br />
                                        • <strong>Frameworks:</strong> React, Next.js, Node.js, Fastify, Express, Tailwind CSS<br />
                                        • <strong>Cloud &amp; Tools:</strong> AWS, Docker, Kubernetes, PostgreSQL, Redis, Git, CI/CD
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Trust Pill */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-slate-200/90 shadow-md py-1.5 px-4 rounded-full text-xs font-semibold text-slate-700 flex items-center gap-2 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Verified 100% Parsing on Workday, Greenhouse &amp; Lever</span>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
