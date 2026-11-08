"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaBookOpen, FaClock, FaCheckCircle } from "react-icons/fa"
import { guides } from "@/lib/guidesData"

export default function GuidesPreview() {
  const featured = guides.slice(0, 4)

  return (
    <section className="relative px-6 py-24 bg-white border-t border-slate-200/70 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full mb-3.5">
            <FaBookOpen className="text-indigo-600" />
            Engineering Career Knowledge Hub
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Master the ATS: Proven{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Career & Resume Guides
            </span>
          </h2>
          <p className="text-slate-600 text-base mt-3.5 leading-relaxed">
            Technical breakdowns on bypassing Workday & Greenhouse automated filters, implementing Harvard-standard formatting, and quantifying engineering impact.
          </p>
        </div>

        {/* 4 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {featured.map((guide, idx) => (
            <motion.div
              key={guide.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              className="group bg-slate-50/80 hover:bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-7 transition-all duration-200 shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Meta row */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3.5">
                  <span className="inline-block px-2.5 py-1 bg-white border border-slate-200 rounded-md font-semibold text-indigo-600">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 font-medium">
                    <FaClock size={11} /> {guide.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  <Link href={`/guides/${guide.slug}`} className="hover:underline">
                    {guide.title}
                  </Link>
                </h3>

                {/* Summary */}
                <p className="text-slate-600 text-sm mt-2.5 leading-relaxed line-clamp-3">
                  {guide.summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {guide.date} · Free Resource
                </span>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 group-hover:text-indigo-700 group-hover:translate-x-1 transition-all"
                >
                  Read Full Guide <FaArrowRight size={11} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-indigo-600 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-indigo-500/25"
          >
            Explore All 8 In-Depth Career Guides <FaArrowRight size={12} />
          </Link>
        </div>

      </div>
    </section>
  )
}
