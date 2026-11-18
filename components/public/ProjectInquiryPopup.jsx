// components/public/ProjectInquiryPopup.jsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaVideo, FaRocket, FaCode } from "react-icons/fa"

export default function ProjectInquiryPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if dismissed in this browser session
    try {
      const isDismissed = sessionStorage.getItem("zapiya_project_popup_dismissed")
      if (isDismissed) return
    } catch {
      // Ignore storage errors in private/incognito
    }

    // Delay appearance by 4 seconds for non-intrusive timing
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    try {
      sessionStorage.setItem("zapiya_project_popup_dismissed", "true")
    } catch {
      // Ignore
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[370px]"
          role="complementary"
          aria-label="College Project Assistance Notification"
        >
          {/* Main Card — Pure White, High-Contrast Zapiya Card Design */}
          <div className="relative rounded-2xl bg-white border border-[#E5DFD3] p-5 sm:p-5.5 shadow-[0_18px_45px_-10px_rgba(17,17,17,0.18)] text-left">
            
            {/* Top Bar: Eyebrow Tag + Crisp Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-[#F3EEE3]">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/20 px-2.5 py-0.5 rounded-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E] animate-pulse" />
                2026 Batch • College Projects
              </span>

              <button
                onClick={handleDismiss}
                type="button"
                className="w-7 h-7 rounded-full bg-[#FAF7F2] hover:bg-[#111111] text-[#66615B] hover:text-white border border-[#E5DFD3] flex items-center justify-center transition-colors"
                aria-label="Close notification"
              >
                <FaTimes size={11} />
              </button>
            </div>

            {/* Content Body */}
            <div className="pt-3.5 space-y-3">
              <h3 className="text-base font-extrabold text-[#111111] tracking-tight leading-snug">
                Need a College Project in{" "}
                <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
                  ANY Tech Stack?
                </span>
              </h3>

              {/* Supported Tech Stacks Chips */}
              <div className="flex flex-wrap gap-1.5">
                {["Java", "Python / AI", "MERN", "Next.js", "Flutter", "PHP", "C++"].map((stack) => (
                  <span
                    key={stack}
                    className="text-[10px] font-semibold text-[#111111] bg-[#FAF7F2] border border-[#E5DFD3] px-2 py-0.5 rounded-md"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <p className="text-xs text-[#66615B] leading-relaxed">
                Whatever your college guide demands. 100% working code +{" "}
                <strong className="text-[#111111] font-semibold">1-on-1 Google Meet walkthrough</strong>{" "}
                until your presentation is done.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex items-center gap-3">
                <Link
                  href="/college-projects#project-form"
                  onClick={handleDismiss}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] px-4 py-2.5 text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <FaRocket className="text-[10px] text-[#D9541E]" />
                  <span>Discuss Your Project</span>
                  <span>→</span>
                </Link>

                <button
                  onClick={handleDismiss}
                  type="button"
                  className="text-xs font-medium text-[#66615B] hover:text-[#111111] transition-colors px-2 py-2"
                >
                  Dismiss
                </button>
              </div>

              {/* Bottom Proof Note */}
              <div className="pt-2 border-t border-[#F3EEE3] flex items-center gap-1.5 text-[10px] text-[#66615B]">
                <FaVideo className="text-[#D9541E] text-[10px]" />
                <span>Google Meet live code walkthrough &amp; local setup included</span>
              </div>
            </div>

          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
