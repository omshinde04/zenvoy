"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { HiSparkles, HiCheckCircle } from "react-icons/hi"
import { FaBolt, FaArrowRight } from "react-icons/fa"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative pt-12 pb-24 md:pt-16 md:pb-32 px-6 overflow-hidden bg-white"
        >
            {/* Subtle Gradient Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-50/80 via-slate-50/40 to-transparent blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 font-comfortaa shadow-xs"
                >
                    <HiSparkles className="text-indigo-600" />
                    100% Free Forever • Zero Paywalls • No Signup Required
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.12] font-comfortaa"
                >
                    The 100% Free ATS Resume Builder That{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-600">
                        Gets You Shortlisted.
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="mt-6 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    Engineered for Software Engineers, Developers & College Students.
                    Create recruiter-approved, Harvard-standard resumes with universal Times New Roman compliance and instant vector PDF export.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="/templates"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-2xl font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] font-comfortaa text-sm sm:text-base"
                    >
                        <FaBolt className="text-amber-300 text-xs" />
                        Build Free Resume Now
                        <FaArrowRight className="text-xs ml-1" />
                    </Link>

                    <Link
                        href="/guides/ats-resume-guide-2026"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 rounded-2xl font-semibold transition font-comfortaa text-sm sm:text-base shadow-xs"
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

                {/* Visual Document Mockup Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                    className="mt-14 relative max-w-3xl mx-auto"
                >
                    <div className="bg-gradient-to-b from-slate-100 to-slate-200/50 p-2 sm:p-4 rounded-3xl shadow-xl border border-slate-200/80">
                        <div className="bg-white rounded-2xl p-6 sm:p-10 text-left border border-slate-200/60 shadow-subtle overflow-hidden">
                            
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
                                    • <strong>Cloud & Tools:</strong> AWS, Docker, Kubernetes, PostgreSQL, Redis, Git, CI/CD
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Floating Trust Pill */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white border border-slate-200/90 shadow-md py-2 px-5 rounded-full text-xs font-semibold text-slate-700 flex items-center gap-2 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Proven 100% ATS Score on Workday, Greenhouse & Lever
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
