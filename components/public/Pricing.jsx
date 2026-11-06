"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa"

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="relative px-6 py-28 bg-[#0F172A] overflow-hidden"
        >

            {/* Glow */}
            <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#6366F1] opacity-[0.05] blur-[120px] rounded-full" />

            <div className="relative max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-xs font-bold text-[#34D399] uppercase tracking-wider bg-[#064E3B]/60 border border-[#059669]/40 px-3 py-1 rounded-full mb-4">
                        Zero Cost • Zero Paywalls
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        100% Free.{" "}
                        <span className="text-[#6366F1]">Forever.</span>
                    </h2>

                    <p className="text-[#94A3B8] text-base mt-4 max-w-xl mx-auto">
                        No credit card. No paywall tricks at download. No hidden subscriptions. Build and export unlimited ATS resumes for free.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch">

                    {/* FREE PLAN */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative bg-[#1E293B] border border-[#6366F1] rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-[#6366F1]/10"
                    >
                        <span className="absolute top-4 right-4 text-[10px] font-bold bg-[#6366F1] px-3 py-1 rounded-full text-white">
                            ALL FEATURES INCLUDED
                        </span>

                        <div>
                            <h3 className="text-white font-semibold text-xl">Community Edition</h3>

                            <p className="text-4xl sm:text-5xl font-bold text-white mt-4 flex items-baseline gap-2">
                                ₹0
                                <span className="text-sm text-[#34D399] font-semibold">
                                    Free Forever
                                </span>
                            </p>

                            <p className="text-[#94A3B8] text-xs mt-3 leading-relaxed">
                                Complete access to all templates, universal Times New Roman ATS typography, and instant vector PDF downloads.
                            </p>

                            <ul className="mt-6 space-y-3.5 text-sm">
                                {[
                                    "All ATS templates (Classic ATS, Tech Minimal, Tech Pro, Tech Bold)",
                                    "Unlimited resume builds & live edits",
                                    "Clean high-resolution vector PDF export",
                                    "100% watermark-free forever",
                                    "No signup, login, or email required",
                                    "Local in-browser auto-save & JSON backup",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-[#E2E8F0]">
                                        <FaCheckCircle className="text-[#34D399] text-xs flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            href="/templates"
                            className="block mt-8 text-center bg-[#6366F1] py-3.5 rounded-xl text-white font-semibold hover:bg-[#4F46E5] transition shadow-lg shadow-[#6366F1]/25"
                        >
                            Start Building Now — 100% Free →
                        </Link>
                    </motion.div>

                    {/* TRANSPARENCY PROMISE */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="bg-[#1E293B]/70 border border-[#334155] rounded-2xl p-8 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-2 text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-2">
                                <FaShieldAlt className="text-[#6366F1]" />
                                Our Honest Promise
                            </div>

                            <h3 className="text-white font-semibold text-xl">
                                Why is Zapiya Free?
                            </h3>

                            <p className="text-[#94A3B8] text-sm mt-3 leading-relaxed">
                                Most resume builders trap you with hours of work only to demand a credit card before letting you download.
                            </p>

                            <p className="text-[#94A3B8] text-sm mt-3 leading-relaxed">
                                Zapiya was built by engineers for engineers and students. We believe job seekers shouldn&apos;t be taxed to apply for jobs.
                            </p>

                            <ul className="mt-6 space-y-3 text-sm">
                                {[
                                    "Zero subscription traps or paywall surprises",
                                    "100% client-side privacy — your data never leaves your device",
                                    "Harvard & Jake's proven single-column ATS layouts",
                                    "Universal Times New Roman compliance for recruiters",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-[#CBD5E1]">
                                        <span className="text-[#6366F1] font-bold text-xs">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 pt-6 border-t border-[#334155]/60 flex items-center justify-between text-xs text-[#64748B]">
                            <span>No credit card required</span>
                            <span>Direct instant download</span>
                        </div>
                    </motion.div>

                </div>

                {/* Trust line */}
                <p className="text-center text-xs text-[#64748B] mt-10">
                    Trusted by developers, students, and engineers across top universities and startups.
                </p>

            </div>
        </section>
    )
}
