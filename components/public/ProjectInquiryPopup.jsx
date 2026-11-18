// components/public/ProjectInquiryPopup.jsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaVideo, FaRocket, FaCode, FaCheckCircle, FaStar } from "react-icons/fa"

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

    // Delay appearance by 4.5 seconds for optimal non-intrusive timing
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 4500)

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
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.94 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] select-none"
          role="complementary"
          aria-label="College Project Assistance Notification"
        >
          {/* Main Card with Obsidian Glassmorphism Styling */}
          <div className="relative rounded-2xl bg-[#111111]/98 backdrop-blur-xl border border-[#2D2D2D] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] text-left overflow-hidden">
            
            {/* Subtle Terracotta Background Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#D9541E]/20 blur-2xl pointer-events-none" />

            {/* Top Row: Live Status Pill & Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] border border-[#333333] px-2.5 py-1 text-[11px] font-semibold text-[#F3EEE3]">
                <span className="flex h-2 w-2 rounded-full bg-[#D9541E] animate-pulse" />
                <span>2026 Batch • Final Year &amp; Mini Projects</span>
              </div>

              <button
                onClick={handleDismiss}
                type="button"
                className="w-7 h-7 rounded-full bg-[#1E1E1E] hover:bg-[#2E2E2E] border border-[#333333] flex items-center justify-center text-[#888888] hover:text-white transition-colors"
                aria-label="Close notification"
              >
                <FaTimes size={11} />
              </button>
            </div>

            {/* Main Content Body */}
            <div className="pt-3.5 space-y-2.5">
              <h3 className="text-[15px] sm:text-base font-bold text-white tracking-tight leading-snug">
                Need a College Project in{" "}
                <span className="text-[#D9541E]">ANY Tech Stack</span> or Language?
              </h3>

              {/* Supported Tech Stacks Ticker / Pills */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {["Java", "Python / AI", "MERN", "Next.js", "Flutter", "PHP", "C++"].map((stack) => (
                  <span
                    key={stack}
                    className="text-[10px] font-mono font-medium text-[#CCCCCC] bg-[#1F1F1F] border border-[#333333] px-2 py-0.5 rounded-md"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <p className="text-xs text-[#999999] leading-relaxed pt-1">
                Whatever your college guide demands. 100% working code +{" "}
                <strong className="text-white font-semibold">1-on-1 Google Meet walkthrough</strong>{" "}
                until your college presentation is done.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-2.5">
                <Link
                  href="/college-projects#project-form"
                  onClick={handleDismiss}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9541E] hover:bg-[#e06330] text-white px-4 py-2.5 text-xs font-bold transition-all shadow-md shadow-[#D9541E]/20 hover:-translate-y-0.5"
                >
                  <FaRocket className="text-[10px]" />
                  <span>Discuss Your Project</span>
                  <span>→</span>
                </Link>

                <button
                  onClick={handleDismiss}
                  type="button"
                  className="px-3 py-2.5 text-xs font-medium text-[#777777] hover:text-white transition-colors"
                >
                  Dismiss
                </button>
              </div>

              {/* Micro Trust Guarantee Note */}
              <div className="pt-1 flex items-center gap-1.5 text-[10px] text-[#666666]">
                <FaVideo className="text-[#D9541E] text-[10px]" />
                <span>Google Meet live code walkthrough included</span>
              </div>
            </div>

          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
