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
                    <span className="inline-block text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-3.5">
                        Zero Cost • Zero Paywalls
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        100% Free.{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Always.</span>
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
                        className="relative bg-white border-2 border-indigo-600/90 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-indigo-500/5"
                    >
                        <span className="absolute top-5 right-5 text-[11px] font-bold bg-indigo-600 text-white px-3 py-1 rounded-full shadow-xs tracking-wide">
                            UNLIMITED ACCESS
                        </span>

                        <div>
                            <h3 className="text-slate-900 font-bold text-2xl tracking-tight">
                                Community Edition
                            </h3>

                            <div className="mt-4 flex items-baseline gap-2">
                                <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
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
                            className="mt-10 block text-center rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] text-sm sm:text-base"
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
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                                <FaShieldAlt className="text-indigo-600" />
                                Our Honest Promise
                            </div>

                            <h3 className="text-slate-900 font-bold text-2xl tracking-tight">
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
