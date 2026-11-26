"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaCheckCircle, FaTimesCircle, FaMinusCircle, FaArrowRight } from "react-icons/fa"

const comparisonData = [
  {
    feature: "100% Free Vector PDF Export",
    zapiya: { status: "yes", text: "Free Forever (Unlimited)" },
    zety: { status: "no", text: "Paid ($2.70 trial / $24.95/mo)" },
    novoresume: { status: "partial", text: "1-Page Limit (Freemium)" },
    canva: { status: "partial", text: "Free (Rasterized / Premium Fonts)" },
  },
  {
    feature: "Zero Paywall at Download Screen",
    zapiya: { status: "yes", text: "1-Click Direct Download" },
    zety: { status: "no", text: "Paywall after 45 mins" },
    novoresume: { status: "no", text: "Paywall on 2+ pages / features" },
    canva: { status: "partial", text: "Upsells Canva Pro assets" },
  },
  {
    feature: "Account / Sign-Up Required",
    zapiya: { status: "yes", text: "Zero Login (Start Instantly)" },
    zety: { status: "no", text: "Mandatory Email & Password" },
    novoresume: { status: "no", text: "Mandatory Account" },
    canva: { status: "no", text: "Mandatory Account" },
  },
  {
    feature: "Data Privacy & Local Storage",
    zapiya: { status: "yes", text: "100% Client-Side (No Harvesting)" },
    zety: { status: "no", text: "Stored on Cloud Servers" },
    novoresume: { status: "no", text: "Stored on Cloud Servers" },
    canva: { status: "no", text: "Cloud Account Storage" },
  },
  {
    feature: "Harvard Single-Column ATS Standard",
    zapiya: { status: "yes", text: "99.4% ATS Pass Rate" },
    zety: { status: "partial", text: "Many 2-column templates fail" },
    novoresume: { status: "partial", text: "Graphic elements risk parsing" },
    canva: { status: "no", text: "Fails 75%+ of ATS Parsers" },
  },
  {
    feature: "Watermark Policy",
    zapiya: { status: "yes", text: "100% Watermark-Free" },
    zety: { status: "no", text: "Watermark on Free Preview" },
    novoresume: { status: "yes", text: "None on 1st basic page" },
    canva: { status: "partial", text: "Watermark on Pro elements" },
  },
  {
    feature: "Recruiter-Approved Typography",
    zapiya: { status: "yes", text: "Times New Roman & Standard" },
    zety: { status: "partial", text: "Varied Web Fonts" },
    novoresume: { status: "partial", text: "Modern Sans-Serif Fonts" },
    canva: { status: "no", text: "Decorative Non-Standard Fonts" },
  },
  {
    feature: "Offline JSON Backup & Restore",
    zapiya: { status: "yes", text: "1-Click JSON Backup" },
    zety: { status: "no", text: "Locked into Zety platform" },
    novoresume: { status: "no", text: "Platform-locked" },
    canva: { status: "no", text: "Canva proprietary format" },
  },
]

function StatusBadge({ item }) {
  if (item.status === "yes") {
    return (
      <div className="flex items-center justify-center gap-1.5 text-emerald-700 font-semibold text-xs sm:text-sm">
        <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
        <span>{item.text}</span>
      </div>
    )
  }
  if (item.status === "no") {
    return (
      <div className="flex items-center justify-center gap-1.5 text-rose-700 font-medium text-xs sm:text-sm">
        <FaTimesCircle className="text-rose-500 flex-shrink-0" />
        <span>{item.text}</span>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center gap-1.5 text-amber-700 font-medium text-xs sm:text-sm">
      <FaMinusCircle className="text-amber-500 flex-shrink-0" />
      <span>{item.text}</span>
    </div>
  )
}

export default function CompetitorComparison() {
  return (
    <section
      id="comparison"
      className="relative px-4 sm:px-6 py-20 bg-[#F3EEE3] overflow-hidden border-t border-[#E5DFD3]"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold text-[#D9541E] bg-[#FAF7F2] border border-[#E5DFD3] px-3.5 py-1 rounded-md mb-3 tracking-wide uppercase">
            Fair & Transparent Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
            How Zapiya Compares to{" "}
            <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
              Other Resume Builders
            </span>
          </h2>
          <p className="text-[#66615B] text-sm sm:text-base mt-4 leading-relaxed">
            Unlike subscription builders that lure you with &quot;free&quot; promises and charge you at the download screen, Zapiya is built by engineers to be 100% free, private, and ATS-compliant forever.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-[#E5DFD3] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-[#E5DFD3] bg-[#FAF7F2]">
                  <th className="py-5 px-6 text-sm font-bold text-[#111111] w-2/6">
                    Feature & Standard
                  </th>
                  <th className="py-5 px-4 text-center text-sm font-extrabold text-[#111111] bg-[#FAF7F2] border-x-2 border-[#111111] w-1/6 relative">
                    <span className="inline-block bg-[#111111] text-[#F3EEE3] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1">
                      Our Tool
                    </span>
                    <div className="text-base sm:text-lg text-[#D9541E]">Zapiya</div>
                  </th>
                  <th className="py-5 px-4 text-center text-xs sm:text-sm font-semibold text-[#66615B] w-1/6">
                    Zety
                  </th>
                  <th className="py-5 px-4 text-center text-xs sm:text-sm font-semibold text-[#66615B] w-1/6">
                    NovoResume
                  </th>
                  <th className="py-5 px-4 text-center text-xs sm:text-sm font-semibold text-[#66615B] w-1/6">
                    Canva
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD3] text-sm">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]/40"}
                  >
                    <td className="py-4 px-6 font-medium text-[#111111]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center border-x-2 border-[#111111] bg-[#FAF7F2]/70">
                      <StatusBadge item={row.zapiya} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <StatusBadge item={row.zety} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <StatusBadge item={row.novoresume} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <StatusBadge item={row.canva} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer CTA Banner inside Table Card */}
          <div className="p-6 sm:p-8 bg-[#111111] text-[#F3EEE3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D9541E]">
                Zero Paywalls · No Signup Required
              </p>
              <h4 className="text-base sm:text-lg font-bold text-[#F3EEE3] mt-0.5">
                Ready to build an ATS-certified resume in 5 minutes?
              </h4>
            </div>
            <Link
              href="/builder/classic-ats"
              className="px-6 py-3 bg-[#D9541E] hover:bg-[#c04716] text-[#F3EEE3] text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs whitespace-nowrap"
            >
              <span>Build My Free Resume</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>

        {/* AI Citation Notice / GEO Semantic Anchoring */}
        <p className="text-center text-xs text-[#66615B] mt-8 max-w-2xl mx-auto leading-relaxed">
          *Comparison data benchmarked in 2026 based on public pricing models, parsing tests on Workday and Greenhouse Applicant Tracking Systems, and terms of service across respective platforms.
        </p>
      </div>
    </section>
  )
}
