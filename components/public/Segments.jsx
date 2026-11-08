"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaServer, FaLaptopCode, FaCloud, FaArrowRight, FaShieldAlt } from "react-icons/fa"

const DOMAINS = [
    {
        label: "Backend & Systems Engineering",
        badge: "Highest Recruiter Demand",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
        desc: "Single-column Harvard layout highlighting API throughput, database query optimization, concurrency, and distributed microservices architecture.",
        icon: <FaServer />,
        color: "text-blue-600",
        bg: "bg-blue-50 border-blue-100",
        highlights: ["Database Indexing & Caching", "REST / gRPC / WebSockets", "Latency Benchmarks (p99)"],
    },
    {
        label: "Full Stack & Modern Web",
        badge: "Most Popular",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
        desc: "Balanced end-to-end engineering format showcasing React, Next.js, TypeScript, cloud deployments, and scalable state architecture.",
        icon: <FaLaptopCode />,
        color: "text-emerald-600",
        bg: "bg-emerald-50 border-emerald-100",
        highlights: ["Next.js & React Ecosystem", "TypeScript & State Engines", "Full-Stack System Design"],
    },
    {
        label: "Cloud, DevOps & Infrastructure",
        badge: "High Seniority",
        badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
        desc: "High-density technical structure focused on container orchestration, CI/CD pipelines, AWS infrastructure, and site reliability metrics.",
        icon: <FaCloud />,
        color: "text-violet-600",
        bg: "bg-violet-50 border-violet-100",
        highlights: ["Kubernetes & Docker", "Automated CI/CD Pipelines", "AWS / Cloud Infrastructure"],
    },
]

export default function Segments() {
    return (
        <section className="relative px-4 py-24 sm:px-6 bg-slate-50/60 overflow-hidden border-t border-slate-200/70">
            <div className="relative max-w-6xl mx-auto space-y-14">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 text-xs font-bold text-indigo-700 uppercase tracking-wider">
                        <FaShieldAlt className="text-indigo-600" />
                        Role-Specific Engineering Blueprints
                    </span>

                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        Built for Modern{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
                            Engineering Careers
                        </span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Every section is calibrated to surface your highest-impact technical contributions to automated screening bots and senior engineering managers.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {DOMAINS.map((d, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="group bg-white border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-indigo-950/5 hover:border-indigo-300 transition-all duration-300"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className={`w-12 h-12 rounded-2xl ${d.bg} border ${d.color} flex items-center justify-center text-xl shadow-xs`}>
                                        {d.icon}
                                    </div>
                                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${d.badgeColor}`}>
                                        {d.badge}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                                        {d.label}
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                                        {d.desc}
                                    </p>
                                </div>

                                {/* Highlight Pills */}
                                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                                    {d.highlights.map((h, j) => (
                                        <div key={j} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="pt-6 mt-6 border-t border-slate-100">
                                <Link
                                    href="/builder/classic-ats"
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 group-hover:bg-indigo-600 py-3 text-xs font-bold text-white transition shadow-sm"
                                >
                                    <span>Build Resume for this Role</span>
                                    <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
