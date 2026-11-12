"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaCheckCircle, FaShieldAlt, FaArrowRight } from "react-icons/fa"

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="relative px-6 py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#E5DFD3]"
        >
            <div className="relative max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="inline-block text-xs font-medium text-[#66615B] bg-[#F3EEE3] border border-[#E5DFD3] px-3 py-1 rounded-md mb-3">
                        Zero Cost · Zero Paywalls
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
                        100% Free.{" "}
                        <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
                            Always.
                        </span>
                    </h2>

                    <p className="text-[#66615B] text-sm sm:text-base mt-3 leading-relaxed">
                        No credit card required. No subscription traps at the download screen. Build and export unlimited ATS resumes completely free.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch">

                    {/* FREE PLAN */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-white border-2 border-[#111111] rounded-xl p-8 sm:p-10 flex flex-col justify-between shadow-sm"
                    >
                        <span className="absolute top-5 right-5 text-xs font-medium text-[#F3EEE3] bg-[#111111] px-3 py-1 rounded-md tracking-wide">
                            Unlimited Access
                        </span>

                        <div>
                            <h3 className="text-[#111111] font-bold text-2xl tracking-tight">
                                Community Edition
                            </h3>

                            <div className="mt-4 flex items-baseline gap-2">
                                <span className="text-5xl font-extrabold text-[#111111] tracking-tight">
                                    ₹0
                                </span>
                                <span className="text-sm font-semibold text-[#D9541E]">
                                    / Free Forever
                                </span>
                            </div>

                            <p className="text-[#66615B] text-xs sm:text-sm mt-3 leading-relaxed">
                                Complete access to all templates, Harvard-standard typography, and instant vector PDF downloads.
                            </p>

                            <ul className="mt-8 space-y-3.5 text-sm">
                                {[
                                    "Harvard-standard Classic ATS template with 100% parser pass rate",
                                    "Compact, Normal, and Relaxed spacing controls for 1-page perfection",
                                    "Unlimited resume builds & live edits",
                                    "High-resolution vector PDF export",
                                    "100% watermark-free forever",
                                    "No signup, login, or email required",
                                    "Local in-browser auto-save & JSON backup",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#111111]">
                                        <FaCheckCircle className="text-[#D9541E] text-sm flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            href="/templates"
                            className="mt-10 block text-center rounded-lg bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] font-medium py-3.5 shadow-xs transition-colors text-sm sm:text-base"
                        >
                            Start Building Now — 100% Free →
                        </Link>
                    </motion.div>

                    {/* TRANSPARENCY PROMISE */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white border border-[#E5DFD3] rounded-xl p-8 sm:p-10 flex flex-col justify-between shadow-xs"
                    >
                        <div>
                            <div className="flex items-center gap-2 text-[#66615B] text-xs font-medium mb-2">
                                <FaShieldAlt className="text-[#D9541E]" />
                                <span>Our Honest Promise</span>
                            </div>

                            <h3 className="text-[#111111] font-bold text-2xl tracking-tight">
                                Why is Zapiya Free?
                            </h3>

                            <p className="text-[#66615B] text-sm mt-3 leading-relaxed">
                                Most resume builders lure you in with &ldquo;free&rdquo; editors, only to demand a credit card before letting you download your PDF.
                            </p>

                            <p className="text-[#66615B] text-sm mt-3 leading-relaxed">
                                Zapiya was built by engineers for engineers and students. We believe job seekers shouldn&apos;t be taxed just to apply for career opportunities.
                            </p>

                            <ul className="mt-8 space-y-3.5 text-sm">
                                {[
                                    "Zero subscription traps or paywall surprises",
                                    "100% client-side privacy — your data never leaves your device",
                                    "Harvard & Jake's proven single-column ATS layouts",
                                    "Universal Times New Roman compliance for recruiters",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#111111]">
                                        <FaCheckCircle className="text-[#D9541E] text-sm flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-10 pt-6 border-t border-[#F3EEE3] flex items-center justify-between text-xs text-[#66615B] font-medium">
                            <span>No credit card required</span>
                            <span>Direct instant download</span>
                        </div>
                    </motion.div>

                </div>

                {/* Trust line */}
                <p className="text-center text-xs text-[#66615B] mt-12 font-medium">
                    Trusted by developers, students, and engineers across top universities and startups.
                </p>

            </div>
        </section>
    )
}
