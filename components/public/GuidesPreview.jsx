"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaBookOpen, FaClock } from "react-icons/fa"
import { guides } from "@/lib/guidesData"

export default function GuidesPreview() {
  const featured = guides.slice(0, 4)

  return (
    <section className="relative px-4 py-24 sm:px-6 bg-white border-t border-slate-200/70 overflow-hidden">
      <div className="relative max-w-6xl mx-auto space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
            <FaBookOpen className="text-indigo-600" />
            Engineering Career Knowledge Hub
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Master the ATS: Proven{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
              Career &amp; Resume Guides
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Technical breakdowns on bypassing Workday &amp; Greenhouse automated filters, implementing Harvard-standard formatting, and quantifying engineering impact.
          </p>
        </div>

        {/* 4 Featured Cards Grid with Cover Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {featured.map((guide, idx) => (
            <motion.article
              key={guide.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              className="group overflow-hidden bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-indigo-300 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-950/5 flex flex-col justify-between"
            >
              {/* Cover Image */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
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

              {/* Card Body */}
              <div className="p-6 flex flex-1 flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400">
                    {guide.date}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    <Link href={`/guides/${guide.slug}`} className="hover:underline">
                      {guide.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {guide.summary}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-semibold">
                    Free Technical Playbook
                  </span>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 group-hover:text-indigo-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Full Guide</span>
                    <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-2">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-md hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore All 8 Technical Career Guides</span>
            <FaArrowRight size={11} />
          </Link>
        </div>

      </div>
    </section>
  )
}
