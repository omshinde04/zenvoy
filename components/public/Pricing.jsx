"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaCheckCircle, FaShieldAlt, FaArrowRight } from "react-icons/fa"

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="relative px-6 py-24 bg-slate-50/60 overflow-hidden border-t border-slate-200/60"
        >
            <div className="relative max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-3.5 font-comfortaa">
                        Zero Cost • Zero Paywalls
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-comfortaa">
                        100% Free.{" "}
                        <span className="text-indigo-600">Always.</span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
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
                        className="relative bg-white border-2 border-indigo-600 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-hover"
                    >
                        <span className="absolute top-5 right-5 text-[11px] font-bold bg-indigo-600 text-white px-3 py-1 rounded-full font-comfortaa shadow-xs">
                            UNLIMITED ACCESS
                        </span>

                        <div>
                            <h3 className="text-slate-900 font-bold text-2xl font-comfortaa">
                                Community Edition
                            </h3>

                            <div className="mt-4 flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-slate-900 font-comfortaa">
                                    ₹0
                                </span>
                                <span className="text-sm font-semibold text-emerald-600">
                                    / Free Forever
                                </span>
                            </div>

                            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                                Complete access to all templates, Harvard-standard typography, and instant vector PDF downloads.
                            </p>

                            <ul className="mt-8 space-y-3.5 text-sm">
                                {[
                                    "All ATS templates (Classic ATS, Tech Minimal, Tech Pro, Tech Bold)",
                                    "Unlimited resume builds & live edits",
                                    "High-resolution vector PDF export",
                                    "100% watermark-free forever",
                                    "No signup, login, or email required",
                                    "Local in-browser auto-save & JSON backup",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <FaCheckCircle className="text-emerald-500 text-sm flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            href="/templates"
                            className="mt-10 block text-center bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold py-4 rounded-2xl shadow-md shadow-indigo-500/25 transition-all hover:shadow-lg hover:shadow-indigo-500/35 font-comfortaa text-sm sm:text-base"
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
                        className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-subtle"
                    >
                        <div>
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 font-comfortaa">
                                <FaShieldAlt className="text-indigo-600" />
                                Our Honest Promise
                            </div>

                            <h3 className="text-slate-900 font-bold text-2xl font-comfortaa">
                                Why is Zapiya Free?
                            </h3>

                            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                                Most resume builders lure you in with &ldquo;free&rdquo; editors, only to demand a credit card before letting you download your PDF.
                            </p>

                            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                                Zapiya was built by engineers for engineers and students. We believe job seekers shouldn&apos;t be taxed just to apply for career opportunities.
                            </p>

                            <ul className="mt-8 space-y-3.5 text-sm">
                                {[
                                    "Zero subscription traps or paywall surprises",
                                    "100% client-side privacy — your data never leaves your device",
                                    "Harvard & Jake's proven single-column ATS layouts",
                                    "Universal Times New Roman compliance for recruiters",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                            <span>No credit card required</span>
                            <span>Direct instant download</span>
                        </div>
                    </motion.div>

                </div>

                {/* Trust line */}
                <p className="text-center text-xs text-slate-500 mt-12 font-medium">
                    Trusted by developers, students, and engineers across top universities and startups.
                </p>

            </div>
        </section>
    )
}
