"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaBookOpen, FaClock } from "react-icons/fa"
import { guides } from "@/lib/guidesData"

export default function GuidesPreview() {
  const featured = guides.slice(0, 4)

  return (
    <section className="relative px-6 py-24 bg-[#F3EEE3] border-t border-[#E5DFD3] overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#66615B] bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1 rounded-md mb-3">
            <FaBookOpen className="text-[#D9541E]" />
            Engineering Career Knowledge Hub
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
            Master the ATS: Proven{" "}
            <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
              Career &amp; Resume Guides
            </span>
          </h2>
          <p className="text-[#66615B] text-base mt-3 leading-relaxed">
            Technical breakdowns on bypassing Workday &amp; Greenhouse automated filters, implementing Harvard-standard formatting, and quantifying engineering impact.
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
              className="group bg-[#FAF7F2] hover:bg-white border border-[#E5DFD3] hover:border-[#D9541E]/50 rounded-xl p-7 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Meta row */}
                <div className="flex items-center justify-between text-xs text-[#66615B] mb-3.5">
                  <span className="inline-block px-2.5 py-1 bg-white border border-[#E5DFD3] rounded-md font-medium text-[#D9541E]">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#66615B] font-medium">
                    <FaClock size={11} /> {guide.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#D9541E] transition-colors leading-snug">
                  <Link href={`/guides/${guide.slug}`} className="hover:underline">
                    {guide.title}
                  </Link>
                </h3>

                {/* Summary */}
                <p className="text-[#66615B] text-sm mt-2.5 leading-relaxed line-clamp-3">
                  {guide.summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-[#E5DFD3] flex items-center justify-between">
                <span className="text-xs text-[#66615B] font-medium">
                  {guide.date} · Free Resource
                </span>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D9541E] group-hover:text-[#111111] transition-colors"
                >
                  <span>Read Full Guide</span>
                  <FaArrowRight size={10} className="transition-transform duration-150 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] font-medium text-sm rounded-lg transition-colors shadow-xs"
          >
            <span>Explore All In-Depth Guides</span>
            <FaArrowRight size={11} />
          </Link>
        </div>

      </div>
    </section>
  )
}
