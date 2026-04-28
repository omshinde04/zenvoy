"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { HiSparkles } from "react-icons/hi"
import { FaBolt } from "react-icons/fa"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#0F172A]"
        >

            {/* 🔥 Gradient Glow Background */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#6366F1] opacity-[0.08] blur-[140px] rounded-full" />
            <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] bg-[#4F46E5] opacity-[0.06] blur-[120px] rounded-full" />

            {/* 🔥 Grid Overlay (premium feel) */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">

                {/* 🔥 Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-[#1E293B]/80 backdrop-blur border border-[#334155] text-[#94A3B8] text-xs px-5 py-2 rounded-full mb-8"
                >
                    <HiSparkles className="text-[#6366F1]" />
                    Built for Indian students • 100% Free
                </motion.div>

                {/* 🔥 Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                >
                    Build resumes that{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#4F46E5]">
                        get shortlisted.
                    </span>
                </motion.h1>

                {/* 🔥 Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto"
                >
                    AI-powered resume builder for Tech, MBA & Design students.
                    Create clean, ATS-friendly resumes in minutes — no signup needed.
                </motion.p>

                {/* 🔥 CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/templates"
                        className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#6366F1] text-white rounded-xl font-semibold hover:bg-[#4F46E5] transition shadow-lg shadow-[#6366F1]/30"
                    >
                        <FaBolt />
                        Start Building →
                    </Link>

                    <Link
                        href="#features"
                        className="px-8 py-3.5 border border-[#334155] text-white rounded-xl hover:border-[#6366F1] transition"
                    >
                        See Features
                    </Link>
                </motion.div>

                {/* 🔥 Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-xs text-[#64748B]"
                >
                    Trusted by students from IITs, NITs & top colleges 🚀
                </motion.div>

            </div>
        </section>
    )
}