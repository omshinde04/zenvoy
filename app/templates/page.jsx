"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { templates, segments } from "@/lib/templates"
import { useState } from "react"
import { FaBolt, FaArrowRight } from "react-icons/fa"

export default function TemplatesPage() {
    const [active, setActive] = useState("all")

    const filtered =
        active === "all"
            ? templates
            : templates.filter(
                (t) => t.segment?.toLowerCase() === active.toLowerCase()
            )

    return (
        <div className="min-h-screen bg-slate-50/50 px-6 py-16">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full mb-3.5 font-comfortaa">
                        ATS-Compliant Gallery
                    </span>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-comfortaa"
                    >
                        Browse ATS <span className="text-indigo-600">Templates</span>
                    </motion.h1>
                    <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                        Pick a template. Fill in your details. Download your 100% free vector PDF instantly.
                    </p>
                </div>

                {/* Segment Filter */}
                <div className="flex items-center justify-center gap-2.5 mb-12 flex-wrap">
                    {segments.map((seg) => (
                        <button
                            key={seg}
                            onClick={() => setActive(seg)}
                            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all capitalize font-comfortaa
                ${active === seg
                                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                                    : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 shadow-xs"
                                }`}
                        >
                            {seg === "all" ? "All Templates" : seg}
                        </button>
                    ))}
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.08 }}
                        >
                            <Link href={`/builder/${t.id}`}>
                                <div className="group bg-white border border-slate-200/90 hover:border-indigo-400 rounded-3xl overflow-hidden transition-all duration-200 cursor-pointer shadow-subtle hover:shadow-hover flex flex-col h-full justify-between">
                                    
                                    {/* Preview */}
                                    <div className="h-72 relative overflow-hidden flex items-center justify-center p-6 bg-slate-100/70 border-b border-slate-100">
                                        <img
                                            src={`/templates/${t.preview}`}
                                            alt={t.name}
                                            className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-md shadow-lg"
                                        />

                                        {t.popular && (
                                            <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full font-comfortaa shadow-sm">
                                                MOST POPULAR
                                            </span>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="p-6 flex flex-col flex-1 justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-slate-900 font-bold text-base font-comfortaa group-hover:text-indigo-600 transition-colors">
                                                    {t.name}
                                                </h3>
                                                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full capitalize bg-indigo-50 text-indigo-700 border border-indigo-100 font-comfortaa">
                                                    {t.segment}
                                                </span>
                                            </div>

                                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                                                {t.description}
                                            </p>
                                        </div>

                                        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 group-hover:text-indigo-700 font-comfortaa">
                                                <FaBolt className="text-amber-400 text-xs" />
                                                Open Builder Free
                                            </span>
                                            <FaArrowRight className="text-xs text-indigo-500 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="text-center py-20 text-slate-500 text-sm">
                        No templates found for this segment yet. Coming soon.
                    </div>
                )}
            </div>
        </div>
    )
}
