"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { guides } from "@/lib/guidesData"
import {
    FaSearch,
    FaArrowRight,
    FaBookOpen,
    FaCheckCircle,
    FaShieldAlt,
    FaClock,
    FaCalendarAlt,
    FaFire,
    FaGraduationCap,
} from "react-icons/fa"

const CATEGORIES = [
    "All Guides",
    "ATS Compliance",
    "Format & Structure",
    "Engineering Resumes",
    "Career Strategy",
    "Writing & Content",
]

export default function GuidesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All Guides")
    const [searchQuery, setSearchQuery] = useState("")

    const featuredGuide = guides[0] // "The Definitive ATS Resume Guide for 2026"

    const filteredGuides = useMemo(() => {
        return guides.filter((g) => {
            const matchesCat =
                selectedCategory === "All Guides" ||
                g.category.toLowerCase().includes(selectedCategory.toLowerCase())
            const matchesSearch =
                !searchQuery.trim() ||
                g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                g.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                g.category.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesCat && matchesSearch
        })
    }, [selectedCategory, searchQuery])

    return (
        <div className="min-h-screen bg-slate-50/70 pb-20">

            {/* HERO BANNER */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 pt-20 pb-28 text-white shadow-xl shadow-indigo-950/20">
                {/* Ambient glow effects */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

                <div className="relative max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold text-indigo-300 shadow-sm backdrop-blur-md mb-5"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>ATS Research &amp; Engineering Hub · 100% Free</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white"
                    >
                        ATS Engineering, Resume Benchmarks &amp;{" "}
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                            Career Playbooks
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.45 }}
                        className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Written by software engineers and technical recruiters. Master the exact algorithms powering Workday, Greenhouse, Taleo, and Lever to score 95+ and land interviews.
                    </motion.p>

                    {/* Stats Ribbon */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300 font-semibold border-t border-slate-800/80 pt-6">
                        <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                                📚
                            </span>
                            <span>8 Technical Deep Dives</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                                ✓
                            </span>
                            <span>99.4% ATS Benchmark Pass Rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                                ⚡
                            </span>
                            <span>Zero Gated Paywalls</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT WRAPPER */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-14 relative z-10 space-y-12">

                {/* FEATURED SPOTLIGHT GUIDE CARD */}
                {featuredGuide && (
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-8 shadow-xl shadow-slate-900/[0.04] transition hover:border-indigo-400 group"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Left Image (5 cols) */}
                            <div className="lg:col-span-5 relative overflow-hidden rounded-2xl h-64 sm:h-72 lg:h-80 w-full bg-slate-100">
                                <img
                                    src={featuredGuide.image}
                                    alt={featuredGuide.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="eager"
                                />
                                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-amber-300 ring-1 ring-white/10">
                                    <FaFire className="text-amber-400 text-xs" />
                                    Featured Masterclass
                                </div>
                                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-indigo-700 shadow-md">
                                    {featuredGuide.category}
                                </div>
                            </div>

                            {/* Right Content (7 cols) */}
                            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                                        <span className="flex items-center gap-1.5">
                                            <FaClock className="text-indigo-500" />
                                            {featuredGuide.readTime}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1.5">
                                            <FaCalendarAlt className="text-slate-400" />
                                            {featuredGuide.date}
                                        </span>
                                        <span>•</span>
                                        <span className="text-indigo-600 font-bold">
                                            {featuredGuide.author}
                                        </span>
                                    </div>

                                    <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                                        <Link href={`/guides/${featuredGuide.slug}`}>
                                            {featuredGuide.title}
                                        </Link>
                                    </h2>

                                    <p className="text-slate-600 text-sm leading-relaxed sm:text-base">
                                        {featuredGuide.summary}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                                        ✓ Tested on Workday, Greenhouse &amp; Lever
                                    </span>

                                    <Link
                                        href={`/guides/${featuredGuide.slug}`}
                                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-slate-900/10 transition hover:bg-indigo-600 group-hover:translate-x-1"
                                    >
                                        <span>Read Master Guide</span>
                                        <FaArrowRight className="text-[10px]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* SEARCH & CATEGORY FILTER BAR */}
                <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search guides by keyword (e.g., Harvard, Workday, Action Verbs)..."
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition"
                            />
                        </div>

                        {/* Results Count Badge */}
                        <div className="text-xs font-bold text-slate-500">
                            Showing <span className="text-slate-900">{filteredGuides.length}</span> of {guides.length} Career Guides
                        </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                        {CATEGORIES.map((cat) => {
                            const isSelected = selectedCategory === cat
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                                        isSelected
                                            ? "bg-slate-900 text-white shadow-sm ring-1 ring-slate-900"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                                    }`}
                                >
                                    {cat}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* GUIDES EDITORIAL GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGuides.map((guide, idx) => (
                        <motion.article
                            key={guide.slug}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: idx * 0.05 }}
                            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5"
                        >
                            {/* Card Cover Image */}
                            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                                <img
                                    src={guide.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"}
                                    alt={guide.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/95 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-indigo-700 shadow-sm">
                                    {guide.category}
                                </div>
                                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-slate-200">
                                    <FaClock className="text-[9px]" />
                                    {guide.readTime}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                                <div className="space-y-2">
                                    <div className="text-[11px] font-semibold text-slate-400">
                                        {guide.date}
                                    </div>

                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                                        <Link href={`/guides/${guide.slug}`}>
                                            {guide.title}
                                        </Link>
                                    </h3>

                                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                                        {guide.summary}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                                    <span className="text-slate-400 text-[11px]">
                                        By {guide.author?.replace("Zapiya ", "") || "Research Team"}
                                    </span>
                                    <Link
                                        href={`/guides/${guide.slug}`}
                                        className="inline-flex items-center gap-1.5 text-indigo-600 group-hover:text-indigo-700 group-hover:translate-x-0.5 transition-transform"
                                    >
                                        <span>Read Guide</span>
                                        <FaArrowRight className="text-[10px]" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* EMPTY STATE */}
                {filteredGuides.length === 0 && (
                    <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center">
                        <span className="text-4xl">🔍</span>
                        <h4 className="mt-3 text-base font-bold text-slate-900">
                            No guides found matching &quot;{searchQuery}&quot;
                        </h4>
                        <p className="mt-1 text-xs text-slate-500">
                            Try searching for &quot;ATS&quot;, &quot;Harvard&quot;, &quot;Software Engineer&quot;, or clearing the filter.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setSelectedCategory("All Guides")
                                setSearchQuery("")
                            }}
                            className="mt-4 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}

                {/* BOTTOM ACTION CTA BANNER */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-violet-950 p-8 sm:p-12 text-white shadow-xl shadow-indigo-950/20">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="max-w-xl text-center md:text-left space-y-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-bold text-indigo-300 ring-1 ring-indigo-500/40">
                                🚀 Put Theory Into Practice
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                                Ready to Build Your 100% Free ATS Resume?
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Use our battle-tested Classic ATS Harvard template with built-in action verb guides, domain skill categories, and 1-click vector PDF downloads.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                            <Link
                                href="/builder/classic-ats"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:from-indigo-400 hover:to-violet-500 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>Build with Classic ATS Free</span>
                                <FaArrowRight className="text-xs" />
                            </Link>

                            <Link
                                href="/templates"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/80 px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-200 transition hover:bg-slate-700"
                            >
                                <span>Browse Templates</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
