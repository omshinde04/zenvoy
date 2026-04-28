"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="relative px-6 py-28 bg-[#0F172A] overflow-hidden"
        >

            {/* 🔥 Glow */}
            <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#6366F1] opacity-[0.05] blur-[120px] rounded-full" />

            <div className="relative max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Start free.{" "}
                        <span className="text-[#6366F1]">Upgrade when you’re ready.</span>
                    </h2>

                    <p className="text-[#64748B] text-sm mt-4">
                        No hidden charges. No pressure. Build your resume first.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* 🔥 FREE PLAN */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8 hover:border-[#6366F1] transition"
                    >
                        <h3 className="text-white font-semibold text-lg">Free</h3>

                        <p className="text-4xl font-bold text-white mt-3">
                            ₹0
                            <span className="text-sm text-[#64748B] font-normal">
                                {" "}forever
                            </span>
                        </p>

                        <ul className="mt-6 space-y-4 text-sm">
                            {[
                                "3 resume templates",
                                "1 resume build",
                                "PDF download",
                                "No watermark",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-[#94A3B8]">
                                    <FaCheckCircle className="text-[#6366F1] text-xs" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/templates"
                            className="block mt-8 text-center border border-[#334155] py-3 rounded-xl text-white hover:border-[#6366F1] transition"
                        >
                            Start Building →
                        </Link>
                    </motion.div>

                    {/* 🔥 PRO PLAN */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="relative bg-[#1E293B] border border-[#6366F1] rounded-2xl p-8 shadow-xl shadow-[#6366F1]/10"
                    >

                        {/* Badge */}
                        <span className="absolute top-4 right-4 text-[10px] bg-[#6366F1] px-3 py-1 rounded-full text-white">
                            MOST POPULAR
                        </span>

                        <h3 className="text-[#6366F1] font-semibold text-lg">
                            Pro
                        </h3>

                        <p className="text-4xl font-bold text-white mt-3">
                            ₹99
                            <span className="text-sm text-[#64748B] font-normal">
                                {" "}/ month
                            </span>
                        </p>

                        {/* 🔥 Free trial highlight */}
                        <p className="text-[#22C55E] text-xs mt-2 font-medium">
                            🎉 First month FREE — no card required
                        </p>

                        <p className="text-[#64748B] text-xs mt-2 leading-relaxed">
                            A small investment today can unlock opportunities worth lakhs in your career.
                        </p>

                        <ul className="mt-6 space-y-4 text-sm">
                            {[
                                "All premium templates",
                                "Unlimited resumes",
                                "Priority support",
                                "Future AI features",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-[#94A3B8]">
                                    <FaCheckCircle className="text-[#6366F1] text-xs" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/register"
                            className="block mt-8 text-center bg-[#6366F1] py-3 rounded-xl text-white font-semibold hover:bg-[#4F46E5] transition shadow-lg shadow-[#6366F1]/20"
                        >
                            Start Free Trial →
                        </Link>
                    </motion.div>

                </div>

                {/* 🔥 Trust line */}
                <p className="text-center text-xs text-[#475569] mt-10">
                    No credit card required • Cancel anytime
                </p>

            </div>
        </section>
    )
}