"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CTA() {
    return (
        <section className="relative px-6 py-24 bg-[#0F172A] text-center overflow-hidden">

            <div className="max-w-5xl mx-auto">

                {/* 🔥 SVG FLOW ANIMATION */}
                <div className="flex items-center justify-center mb-12 gap-6">

                    {/* Student */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-14 h-14 bg-[#1E293B] rounded-xl flex items-center justify-center text-xl">
                            🎓
                        </div>
                        <span className="text-xs text-[#64748B] mt-2">Student</span>
                    </motion.div>

                    {/* Arrow */}
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                        className="text-[#6366F1]"
                    >
                        →
                    </motion.div>

                    {/* Resume */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-14 h-14 bg-[#1E293B] rounded-xl flex items-center justify-center text-xl">
                            📄
                        </div>
                        <span className="text-xs text-[#64748B] mt-2">Resume</span>
                    </motion.div>

                    {/* Arrow */}
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }}
                        className="text-[#6366F1]"
                    >
                        →
                    </motion.div>

                    {/* Job */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-14 h-14 bg-[#1E293B] rounded-xl flex items-center justify-center text-xl">
                            💼
                        </div>
                        <span className="text-xs text-[#64748B] mt-2">Job</span>
                    </motion.div>

                </div>

                {/* 🔥 Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    From student to{" "}
                    <span className="text-[#6366F1]">hired.</span>
                </h2>

                {/* 🔥 Subtext */}
                <p className="text-[#94A3B8] mt-4 text-sm max-w-md mx-auto">
                    Build your resume in minutes and take the first step towards your dream job.
                </p>

                {/* 🔥 CTA */}
                <Link
                    href="/templates"
                    className="inline-block mt-8 px-8 py-3 bg-[#6366F1] text-white rounded-xl font-semibold hover:bg-[#4F46E5] transition shadow-lg shadow-[#6366F1]/30"
                >
                    Start Building →
                </Link>

                {/* Trust */}
                <p className="mt-6 text-xs text-[#64748B]">
                    Free • No login required • Instant download
                </p>

            </div>
        </section>
    )
}