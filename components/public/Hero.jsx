"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaFileAlt, FaCheck } from "react-icons/fa"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 bg-[#F3EEE3] overflow-hidden"
        >
            {/* Fine Warm Architectural Grid (Whisper Subtle) */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#11111107_1px,transparent_1px),linear-gradient(to_bottom,#11111107_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="max-w-4xl mx-auto text-center">

                {/* Eyebrow: Editorial Badge with Terracotta Signature Dot */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E5DFD3] bg-[#FAF7F2] px-3.5 py-1 text-xs font-medium text-[#66615B] mb-6 shadow-xs"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                    <span className="text-[#111111] font-semibold">Harvard ATS Standard</span>
                    <span className="text-[#DDD6C8]">/</span>
                    <span>100% Free Forever</span>
                    <span className="text-[#DDD6C8]">/</span>
                    <span>No Signup Required</span>
                </motion.div>

                {/* Two-Font Editorial Headline: High-Contrast Sans paired with Cursive Accent */}
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-[-0.03em] leading-[1.12]"
                >
                    The Free ATS Resume Builder{" "}
                    <span className="font-cursive italic font-normal text-[#D9541E] text-[1.15em] tracking-normal inline-block px-1">
                        engineered for
                    </span>{" "}
                    Software Developers.
                </motion.h1>

                {/* Subtitle: Clean Editorial Tone */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="mt-6 text-[#66615B] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    Zero paywalls, no watermark extortion, and no signup required. Build recruiter-approved, Harvard-standard resumes with universal Times New Roman typography and instant vector PDF export.
                </motion.p>

                {/* Actions: Obsidian Primary + Warm Bone Secondary */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.4 }}
                    className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
                >
                    <Link
                        href="/builder/classic-ats"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] text-sm font-medium transition-colors shadow-sm"
                    >
                        <span>Build Free Resume on Classic ATS</span>
                        <FaArrowRight className="text-xs text-[#F3EEE3]/70 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-white" />
                    </Link>

                    <Link
                        href="/templates"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE4D7] text-[#111111] border border-[#DDD6C8] text-sm font-medium transition-colors shadow-xs"
                    >
                        View Template &amp; Spacing Guide
                    </Link>
                </motion.div>

                {/* Trust Points: Terracotta Signature Dots */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.26 }}
                    className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#66615B] font-medium"
                >
                    <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                        100% Free Forever
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                        Zero Watermarks
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                        No Credit Card Required
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                        Client-Side In-Browser Privacy
                    </span>
                </motion.div>

                {/* Hero Document Preview: Pure White Paper Sheet on Warm Bone Canvas */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="mt-12 relative max-w-2xl mx-auto text-left"
                >
                    <div className="rounded-xl border border-[#E5DFD3] bg-white shadow-[0_20px_50px_-15px_rgba(17,17,17,0.08),0_1px_3px_rgba(17,17,17,0.04)] overflow-hidden">

                        {/* Top Document Status Bar (Utilitarian & Professional) */}
                        <div className="h-10 px-4 flex items-center justify-between border-b border-[#E5DFD3] bg-[#FAF7F2] text-xs select-none">
                            <div className="flex items-center gap-2 text-[#111111] font-medium font-mono text-[11px]">
                                <FaFileAlt className="text-[#66615B] text-xs" />
                                <span>classic-ats.pdf</span>
                                <span className="text-[#DDD6C8]">·</span>
                                <span className="text-[#66615B] font-sans font-normal text-[11px]">Vector PDF (A4)</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/25 px-2 py-0.5 rounded-md">
                                    <FaCheck className="text-[9px]" />
                                    ATS Pass: 100/100
                                </span>
                            </div>
                        </div>

                        {/* Authentic Harvard ATS Paper Body */}
                        <div className="bg-white p-6 sm:p-10 border-t border-[#F3EEE3]">
                            {/* Document Header */}
                            <div className="border-b border-[#111111] pb-3 mb-3 text-center">
                                <h2 className="text-lg sm:text-xl font-bold text-[#111111] font-serif tracking-tight">
                                    ALEXANDER CHASE
                                </h2>
                                <p className="text-xs text-[#555555] font-serif mt-1">
                                    San Francisco, CA · +1 (555) 019-2834 · alex.chase@example.com · portfolio.dev · github.com/alexchase · linkedin.com/in/alexchase
                                </p>
                            </div>

                            {/* Section: Education */}
                            <div className="border-b border-[#111111] pb-2.5 mb-2.5">
                                <h3 className="text-xs font-bold text-[#111111] font-serif uppercase tracking-wider">
                                    Education
                                </h3>
                                <div className="flex justify-between items-baseline text-[11px] font-serif text-[#111111] font-bold mt-1">
                                    <span>University of California, Berkeley</span>
                                    <span className="font-normal text-[#555555]">Berkeley, CA</span>
                                </div>
                                <div className="flex justify-between items-baseline text-[11px] font-serif text-[#333333] italic">
                                    <span>B.S. in Computer Science — GPA: 3.85 / 4.0</span>
                                    <span className="not-italic text-[#555555]">May 2021</span>
                                </div>
                            </div>

                            {/* Section: Experience */}
                            <div className="border-b border-[#111111] pb-2.5 mb-2.5">
                                <h3 className="text-xs font-bold text-[#111111] font-serif uppercase tracking-wider">
                                    Work Experience
                                </h3>
                                <div className="flex justify-between items-baseline text-[11px] font-serif text-[#111111] font-bold mt-1">
                                    <span>CloudScale Systems — Senior Full Stack Engineer</span>
                                    <span className="font-normal text-[#555555]">2022 – Present</span>
                                </div>
                                <ul className="text-[11px] text-[#222222] font-serif list-disc pl-4 space-y-0.5 mt-0.5 leading-snug">
                                    <li>Architected high-throughput message ingestion pipeline using Node.js and Redis, handling 45,000+ events/sec with 99.99% uptime.</li>
                                    <li>Reduced API p99 latency from 240ms to 62ms by indexing PostgreSQL queries and introducing multi-tier caching.</li>
                                    <li>Led migration of monolith services to containerized microservices on Kubernetes, reducing deploy cycle times by 65%.</li>
                                </ul>

                                <div className="flex justify-between items-baseline text-[11px] font-serif text-[#111111] font-bold mt-2.5">
                                    <span>Vanguard Labs — Software Engineer</span>
                                    <span className="font-normal text-[#555555]">2021 – 2022</span>
                                </div>
                                <ul className="text-[11px] text-[#222222] font-serif list-disc pl-4 space-y-0.5 mt-0.5 leading-snug">
                                    <li>Built client-side data export engine generating pixel-perfect vector PDFs, adopted by 120,000+ monthly active users.</li>
                                    <li>Automated CI/CD validation suites with GitHub Actions, slashing broken pull request merges by 80%.</li>
                                </ul>
                            </div>

                            {/* Section: Technical Skills */}
                            <div>
                                <h3 className="text-xs font-bold text-[#111111] font-serif uppercase tracking-wider">
                                    Technical Skills
                                </h3>
                                <p className="text-[11px] text-[#222222] font-serif mt-1 leading-snug">
                                    <strong>Languages:</strong> TypeScript, JavaScript, Python, Go, SQL, Bash<br />
                                    <strong>Frameworks &amp; Runtimes:</strong> React, Next.js, Node.js, Express, Fastify, Tailwind CSS<br />
                                    <strong>Cloud, Databases &amp; Tools:</strong> AWS, Docker, Kubernetes, PostgreSQL, Redis, Git, CI/CD
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quiet Bottom Footnote (Verified Recruiter Parsers) */}
                    <div className="mt-4 text-center">
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#66615B] font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                            Verified 100% parsing accuracy across Workday, Greenhouse, Taleo &amp; Lever ATS systems
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
