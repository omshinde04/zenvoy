// components/public/ProjectInquiryPopup.jsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaVideo, FaRocket, FaGraduationCap } from "react-icons/fa"

export default function ProjectInquiryPopup() {
  // State: "hidden" | "expanded" | "collapsed"
  const [popupState, setPopupState] = useState("hidden")

  useEffect(() => {
    // Check if user previously collapsed or minimized in this session
    try {
      const savedState = sessionStorage.getItem("zapiya_project_popup_state")
      if (savedState === "collapsed") {
        setPopupState("collapsed")
        return
      }
    } catch {
      // Ignore storage errors in private/incognito
    }

    // Delay initial card appearance by 4 seconds
    const timer = setTimeout(() => {
      setPopupState("expanded")
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const handleCollapse = () => {
    setPopupState("collapsed")
    try {
      sessionStorage.setItem("zapiya_project_popup_state", "collapsed")
    } catch {
      // Ignore
    }
  }

  const handleExpand = () => {
    setPopupState("expanded")
    try {
      sessionStorage.setItem("zapiya_project_popup_state", "expanded")
    } catch {
      // Ignore
    }
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence mode="wait">
        
        {/* =====================================================================
            STATE 1: FULL EXPANDED WHITE CARD
           ===================================================================== */}
        {popupState === "expanded" && (
          <motion.aside
            key="expanded-card"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="w-[calc(100vw-32px)] sm:w-[370px]"
            role="complementary"
            aria-label="College Project Assistance Notification"
          >
            <div className="relative rounded-2xl bg-white border border-[#E5DFD3] p-5 sm:p-5.5 shadow-[0_18px_45px_-10px_rgba(17,17,17,0.18)] text-left">
              
              {/* Top Bar: Eyebrow Tag + Minimize / Close Button */}
              <div className="flex items-center justify-between pb-3 border-b border-[#F3EEE3]">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/20 px-2.5 py-0.5 rounded-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E] animate-pulse" />
                  2026 Batch • College Projects
                </span>

                <button
                  onClick={handleCollapse}
                  type="button"
                  className="w-7 h-7 rounded-full bg-[#FAF7F2] hover:bg-[#111111] text-[#66615B] hover:text-white border border-[#E5DFD3] flex items-center justify-center transition-colors"
                  aria-label="Minimize notification"
                  title="Minimize"
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

                {/* Action Row */}
                <div className="pt-1 flex items-center gap-3">
                  <Link
                    href="/college-projects#project-form"
                    onClick={handleCollapse}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] px-4 py-2.5 text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    <FaRocket className="text-[10px] text-[#D9541E]" />
                    <span>Discuss Your Project</span>
                    <span>→</span>
                  </Link>

                  <button
                    onClick={handleCollapse}
                    type="button"
                    className="text-xs font-medium text-[#66615B] hover:text-[#111111] transition-colors px-2 py-2"
                  >
                    Minimize
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

        {/* =====================================================================
            STATE 2: COLLAPSED FLOATING LAUNCHER PILL (OPTION A)
           ===================================================================== */}
        {popupState === "collapsed" && (
          <motion.div
            key="collapsed-pill"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={handleExpand}
              type="button"
              className="group flex items-center gap-2.5 rounded-full bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] pl-3.5 pr-4 py-2.5 shadow-[0_10px_25px_-5px_rgba(17,17,17,0.3)] border border-[#2D2D2D] hover:border-[#D9541E] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              title="Click to view College Project details"
            >
              <div className="w-6 h-6 rounded-full bg-[#D9541E] group-hover:bg-white text-white group-hover:text-[#D9541E] flex items-center justify-center text-xs transition-colors shrink-0">
                <FaGraduationCap />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold leading-tight">
                  Need a College Project?
                </span>
                <span className="block text-[10px] text-[#A09A90] group-hover:text-white/90 leading-tight">
                  Any Stack • 1-on-1 Meet Guidance
                </span>
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse ml-1 shrink-0" />
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
