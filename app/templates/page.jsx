"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { templates, segments } from "@/lib/templates";
import { useState } from "react";

export default function TemplatesPage() {
    const [active, setActive] = useState("all");

    // ✅ FIX: case-safe + safe fallback
    const filtered =
        active === "all"
            ? templates
            : templates.filter(
                (t) => t.segment?.toLowerCase() === active.toLowerCase()
            );

    return (
        <div className="min-h-screen bg-[#0F172A] px-6 py-16">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl font-bold text-white"
                    >
                        Browse Templates
                    </motion.h1>
                    <p className="text-[#64748B] text-sm mt-3">
                        Pick a template. Fill your details. Download free PDF.
                    </p>
                </div>

                {/* Segment Filter */}
                <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
                    {segments.map((seg) => (
                        <button
                            key={seg}
                            onClick={() => setActive(seg)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all capitalize
                ${active === seg
                                    ? "bg-[#6366F1] text-white"
                                    : "bg-[#1E293B] border border-[#334155] text-[#94A3B8] hover:border-[#6366F1] hover:text-white"
                                }`}
                        >
                            {seg === "all" ? "All Templates" : seg}
                        </button>
                    ))}
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.08 }}
                        >
                            <Link href={`/builder/${t.id}`}>
                                <div className="group bg-[#1E293B] border border-[#334155] hover:border-[#6366F1] rounded-2xl overflow-hidden transition-all cursor-pointer">

                                    {/* Preview */}
                                    <div
                                        className="h-52 flex items-center justify-center relative overflow-hidden"
                                        style={{ backgroundColor: t.accentColor + "10" }}
                                    >
                                        <div className="w-28 h-36 bg-white rounded shadow-lg flex flex-col gap-1.5 p-3 opacity-90">
                                            <div
                                                className="h-2.5 rounded"
                                                style={{ backgroundColor: t.accentColor, width: "60%" }}
                                            />
                                            <div className="h-1.5 bg-gray-200 rounded w-full mt-1" />
                                            <div className="h-1.5 bg-gray-200 rounded w-4/5" />
                                            <div className="h-1.5 bg-gray-200 rounded w-full mt-1" />
                                            <div className="h-1.5 bg-gray-200 rounded w-3/5" />
                                            <div className="h-1.5 bg-gray-200 rounded w-full mt-1" />
                                            <div className="h-1.5 bg-gray-200 rounded w-4/5" />
                                        </div>

                                        {t.popular && (
                                            <span className="absolute top-3 right-3 bg-[#6366F1] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                                                POPULAR
                                            </span>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="text-white font-semibold text-sm">
                                                {t.name}
                                            </h3>
                                            <span
                                                className="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize"
                                                style={{
                                                    backgroundColor: t.accentColor + "20",
                                                    color: t.accentColor,
                                                }}
                                            >
                                                {t.segment}
                                            </span>
                                        </div>

                                        <p className="text-[#475569] text-xs leading-relaxed">
                                            {t.description}
                                        </p>

                                        <p className="text-[#6366F1] text-xs font-semibold mt-4 group-hover:underline">
                                            Use this template →
                                        </p>
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="text-center py-20 text-[#475569] text-sm">
                        No templates found for this segment yet. Coming soon.
                    </div>
                )}
            </div>
        </div>
    );
}