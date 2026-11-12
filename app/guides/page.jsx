"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { guides } from "@/lib/guidesData"
import {
    FaSearch,
    FaArrowRight,
    FaBookOpen,
    FaClock,
    FaCalendarAlt,
    FaFire,
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
        <div className="min-h-screen bg-[#F3EEE3] pb-20">

            {/* HERO BANNER: Obsidian & Terracotta Two-Font Header */}
            <div className="relative overflow-hidden bg-[#111111] px-6 pt-20 pb-28 text-[#F3EEE3] border-b border-[#222222]">
                {/* Fine Architectural Grid */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

                <div className="relative max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="inline-flex items-center gap-2 rounded-full border border-[#333333] bg-[#1A1A1A] px-3.5 py-1 text-xs font-medium text-[#A09A90] mb-5 shadow-xs"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                        <span>ATS Research &amp; Engineering Hub · 100% Free</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-[#F3EEE3]"
                    >
                        ATS Engineering, Resume Benchmarks &amp;{" "}
                        <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
                            Career Playbooks
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="mt-4 text-sm sm:text-base md:text-lg text-[#A09A90] max-w-2xl mx-auto leading-relaxed"
                    >
                        Written by software engineers and technical recruiters. Master the exact algorithms powering Workday, Greenhouse, Taleo, and Lever to score 95+ and land interviews.
                    </motion.p>

                    {/* Stats Ribbon */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#A09A90] font-medium border-t border-[#222222] pt-6">
                        <div className="flex items-center gap-2">
                            <FaBookOpen className="text-[#D9541E]" />
                            <span>8 Technical Deep Dives</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#D9541E] font-bold">✓</span>
                            <span>99.4% ATS Benchmark Pass Rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                            <span>Zero Gated Paywalls</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT WRAPPER */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-14 relative z-10 space-y-10">

                {/* FEATURED SPOTLIGHT GUIDE CARD */}
                {featuredGuide && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-2xl border border-[#E5DFD3] bg-white p-5 sm:p-8 shadow-sm transition hover:border-[#D9541E]/50 group"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Left Image (5 cols) */}
                            <div className="lg:col-span-5 relative overflow-hidden rounded-xl h-64 sm:h-72 lg:h-80 w-full bg-[#FAF7F2]">
                                <img
                                    src={featuredGuide.image}
                                    alt={featuredGuide.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="eager"
                                />
                                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-[#111111]/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#F3EEE3]">
                                    <FaFire className="text-[#D9541E] text-xs" />
                                    Featured Masterclass
                                </div>
                                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#D9541E] shadow-sm">
                                    {featuredGuide.category}
                                </div>
                            </div>

                            {/* Right Content (7 cols) */}
                            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#66615B]">
                                        <span className="flex items-center gap-1.5">
                                            <FaClock className="text-[#D9541E]" />
                                            {featuredGuide.readTime}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1.5">
                                            <FaCalendarAlt className="text-[#66615B]" />
                                            {featuredGuide.date}
                                        </span>
                                        <span>•</span>
                                        <span className="text-[#111111] font-semibold">
                                            {featuredGuide.author}
                                        </span>
                                    </div>

                                    <h2 className="text-xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-snug group-hover:text-[#D9541E] transition-colors">
                                        <Link href={`/guides/${featuredGuide.slug}`}>
                                            {featuredGuide.title}
                                        </Link>
                                    </h2>

                                    <p className="text-[#66615B] text-sm leading-relaxed sm:text-base">
                                        {featuredGuide.summary}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-[#F3EEE3] flex flex-wrap items-center justify-between gap-4">
                                    <span className="text-xs font-medium text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/20 px-3 py-1 rounded-md">
                                        ✓ Tested on Workday, Greenhouse &amp; Lever
                                    </span>

                                    <Link
                                        href={`/guides/${featuredGuide.slug}`}
                                        className="inline-flex items-center gap-2 rounded-lg bg-[#111111] hover:bg-[#D9541E] px-5 py-2.5 text-xs font-medium text-[#F3EEE3] shadow-xs transition-colors"
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
                <div className="rounded-2xl border border-[#E5DFD3] bg-white p-5 sm:p-6 shadow-xs space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#66615B] text-sm" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search guides by keyword (e.g., Harvard, Workday, Action Verbs)..."
                                className="w-full rounded-lg border border-[#E5DFD3] bg-[#FAF7F2] pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium text-[#111111] placeholder:text-[#66615B] focus:border-[#D9541E] focus:bg-white focus:outline-none transition-colors"
                            />
                        </div>

                        {/* Results Count Badge */}
                        <div className="text-xs font-medium text-[#66615B]">
                            Showing <span className="font-bold text-[#111111]">{filteredGuides.length}</span> of {guides.length} Career Guides
                        </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#F3EEE3]">
                        {CATEGORIES.map((cat) => {
                            const isSelected = selectedCategory === cat
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                                        isSelected
                                            ? "bg-[#111111] text-[#F3EEE3] shadow-xs"
                                            : "bg-[#FAF7F2] border border-[#E5DFD3] text-[#66615B] hover:text-[#111111] hover:bg-white"
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
                            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E5DFD3] bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#D9541E]/50 hover:shadow-md"
                        >
                            {/* Card Cover Image */}
                            <div className="relative h-48 w-full overflow-hidden bg-[#FAF7F2]">
                                <img
                                    src={guide.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"}
                                    alt={guide.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 left-3 inline-flex items-center rounded-md bg-white/95 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-[#D9541E] shadow-xs">
                                    {guide.category}
                                </div>
                                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-[#111111]/85 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-medium text-[#F3EEE3]">
                                    <FaClock className="text-[9px]" />
                                    {guide.readTime}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                                <div className="space-y-2">
                                    <div className="text-[11px] font-medium text-[#66615B]">
                                        {guide.date}
                                    </div>

                                    <h3 className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors leading-snug">
                                        <Link href={`/guides/${guide.slug}`}>
                                            {guide.title}
                                        </Link>
                                    </h3>

                                    <p className="text-xs text-[#66615B] leading-relaxed line-clamp-3">
                                        {guide.summary}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[#F3EEE3] flex items-center justify-between text-xs font-medium">
                                    <span className="text-[#66615B] text-[11px]">
                                        By {guide.author?.replace("Zapiya ", "") || "Research Team"}
                                    </span>
                                    <Link
                                        href={`/guides/${guide.slug}`}
                                        className="inline-flex items-center gap-1.5 text-[#D9541E] hover:text-[#111111] transition-colors"
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
                    <div className="rounded-2xl border border-dashed border-[#E5DFD3] bg-white p-12 text-center">
                        <span className="text-3xl">🔍</span>
                        <h4 className="mt-3 text-base font-bold text-[#111111]">
                            No guides found matching &quot;{searchQuery}&quot;
                        </h4>
                        <p className="mt-1 text-xs text-[#66615B]">
                            Try searching for &quot;ATS&quot;, &quot;Harvard&quot;, &quot;Software Engineer&quot;, or clearing the filter.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setSelectedCategory("All Guides")
                                setSearchQuery("")
                            }}
                            className="mt-4 inline-flex items-center rounded-lg bg-[#111111] hover:bg-[#D9541E] px-4 py-2 text-xs font-medium text-[#F3EEE3] transition-colors"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}

                {/* BOTTOM ACTION CTA BANNER */}
                <div className="relative overflow-hidden rounded-2xl bg-[#111111] border border-[#222222] p-8 sm:p-12 text-[#F3EEE3] shadow-xl">
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="max-w-xl text-center md:text-left space-y-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1A1A1A] border border-[#333333] px-3 py-1 text-xs font-medium text-[#A09A90]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                                Put Theory Into Practice
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3EEE3]">
                                Ready to Build Your 100% Free ATS Resume?
                            </h3>
                            <p className="text-xs sm:text-sm text-[#A09A90] leading-relaxed">
                                Use our battle-tested Classic ATS Harvard template with built-in action verb guides, domain skill categories, and 1-click vector PDF downloads.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                            <Link
                                href="/builder/classic-ats"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D9541E] hover:bg-[#c04716] px-6 py-3.5 text-xs sm:text-sm font-medium text-[#F3EEE3] shadow-xs transition-colors"
                            >
                                <span>Build with Classic ATS Free</span>
                                <FaArrowRight className="text-xs" />
                            </Link>

                            <Link
                                href="/templates"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#333333] bg-[#1A1A1A] hover:bg-[#222222] px-5 py-3.5 text-xs sm:text-sm font-medium text-[#F3EEE3] transition-colors"
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
