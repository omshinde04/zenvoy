// app/college-projects/page.jsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  FaCheckCircle,
  FaGoogle,
  FaVideo,
  FaCode,
  FaRocket,
  FaUsers,
  FaUser,
  FaUserFriends,
  FaLaptopCode,
  FaCopy,
  FaCheck,
  FaArrowRight,
  FaSpinner,
  FaEnvelope,
  FaTerminal,
  FaShieldAlt,
  FaBolt,
  FaStar,
  FaServer,
  FaDatabase,
  FaTimesCircle,
} from "react-icons/fa"

export default function CollegeProjectsPage() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    branch: "",
    teamSize: "Group (3-4 Members)",
    topicStatus: "I have an approved topic",
    idea: "",
    deadline: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  })

  const copyEmail = () => {
    navigator.clipboard.writeText("omshinde0484@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitting: true, submitted: false, error: null })

    try {
      const response = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          college: formData.college,
          branch: formData.branch,
          teamSize: formData.teamSize,
          topicStatus: formData.topicStatus,
          idea: formData.idea,
          deadline: formData.deadline,
        }),
      })

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null })
      } else {
        const errorData = await response.json().catch(() => ({}))
        setFormStatus({
          submitting: false,
          submitted: false,
          error:
            errorData.error ||
            "Failed to send brief. Please email omshinde0484@gmail.com directly.",
        })
      }
    } catch {
      setFormStatus({
        submitting: false,
        submitted: false,
        error:
          "Network error occurred. Please click the direct email button below to send your brief.",
      })
    }
  }

  const mailtoUrl = `mailto:omshinde0484@gmail.com?subject=College%20Project%20Inquiry%20-%20Zapiya&body=Hi%20Om,%0A%0AMy%20Name:%20%0ACollege%20%26%20University:%20%0ABranch%20%26%20Semester:%20%0ATeam%20Size%20(Solo%20/%20Duo%20/%20Group):%20%0AOur%20Topic%20/%20Idea%20(or%20mention%20if%20you%20need%20a%20topic):%20%0ASubmission%20/%20Presentation%20Deadline:%20`

  return (
    <div className="min-h-screen bg-[#F3EEE3] text-[#111111] overflow-x-hidden selection:bg-[#D9541E] selection:text-white">

      {/* =========================================================================
          HIGH-CONVERTING HERO SECTION (MASTER FRAMED CANVAS)
         ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-12 bg-[#F3EEE3]">
        <div className="max-w-6xl mx-auto rounded-[28px] sm:rounded-[36px] bg-[#FAF7F2] border border-[#E5DFD3] p-6 sm:p-8 lg:p-10 shadow-[0_16px_40px_-15px_rgba(17,17,17,0.06)] relative overflow-hidden">

          {/* Decorative Corner SVG curves */}
          <div className="absolute right-6 top-6 w-24 h-24 pointer-events-none opacity-20">
            <svg viewBox="0 0 120 120" fill="none" stroke="#D9541E" strokeWidth="1">
              <path d="M 120 20 C 75 20, 20 75, 20 120" />
              <path d="M 120 45 C 85 45, 45 85, 45 120" />
              <path d="M 120 70 C 95 70, 70 95, 70 120" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* LEFT COLUMN: Viral Indian Student Hook + Subtitle + CTAs + Trust Proofs */}
            <div className="lg:col-span-7 space-y-5 text-left relative z-10">

              {/* Eyebrow Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E5DFD3] px-3.5 py-1.5 text-xs font-semibold text-[#111111] shadow-2xs"
              >
                <span className="flex h-2 w-2 rounded-full bg-[#D9541E] animate-pulse" />
                <span className="text-[#D9541E] font-bold">2026 Batch Major &amp; Capstone Reviews</span>
                <span className="w-1 h-1 rounded-full bg-[#DDD6C8]" />
                <span className="text-[#66615B] font-normal hidden sm:inline">Stage-1 &amp; Final Viva</span>
              </motion.div>

              {/* Viral Punch Headline with Two-Font Brand Structure */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-[#111111] tracking-[-0.03em] leading-[1.12]"
              >
                College viva me code crash hone ka dar? <br />
                <span className="inline-block bg-[#111111] text-[#FAF7F2] px-4 sm:px-5 py-0.5 rounded-full shadow-md text-2xl sm:text-4xl lg:text-[38px] font-bold align-middle my-1">
                  HUM BANAYENGE
                </span>{" "}
                working code, <br />
                saath me{" "}
                <span className="font-cursive italic font-normal text-[#D9541E] text-[1.14em]">
                  Google Meet Guidance.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.35 }}
                className="text-[#66615B] text-sm sm:text-base leading-relaxed max-w-[530px]"
              >
                Stop struggling with outdated tutorial repositories that fail during evaluation.
                We engineer production-grade <strong className="text-[#111111] font-semibold">Full-Stack &amp; AI projects</strong> (Next.js, Python, MERN) tailored to your college guidelines — with <strong className="text-[#111111] font-semibold">1-on-1 Google Meet walkthroughs</strong> until your presentation is complete.
              </motion.p>

              {/* Trust Matrix (4 Quick Badges) */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1"
              >
                <div className="bg-white border border-[#E5DFD3] rounded-lg p-2.5 text-center shadow-2xs">
                  <span className="block text-[11px] font-bold text-[#111111]">100% Working</span>
                  <span className="block text-[10px] text-[#66615B]">Zero broken bugs</span>
                </div>
                <div className="bg-white border border-[#E5DFD3] rounded-lg p-2.5 text-center shadow-2xs">
                  <span className="block text-[11px] font-bold text-[#D9541E]">Google Meet</span>
                  <span className="block text-[10px] text-[#66615B]">1-on-1 calls</span>
                </div>
                <div className="bg-white border border-[#E5DFD3] rounded-lg p-2.5 text-center shadow-2xs">
                  <span className="block text-[11px] font-bold text-[#111111]">Live Cloud URL</span>
                  <span className="block text-[10px] text-[#66615B]">Instant browser demo</span>
                </div>
                <div className="bg-white border border-[#E5DFD3] rounded-lg p-2.5 text-center shadow-2xs">
                  <span className="block text-[11px] font-bold text-[#111111]">Fast Turnaround</span>
                  <span className="block text-[10px] text-[#66615B]">Urgent reviews ok</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.35 }}
                className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <a
                  href="#project-form"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] px-6 py-3.5 text-sm font-semibold transition-all duration-200 shadow-md hover:-translate-y-0.5"
                >
                  <FaBolt className="text-xs text-[#D9541E]" />
                  <span>Submit Project Brief &amp; Get Started</span>
                  <FaArrowRight className="text-xs" />
                </a>

                <button
                  onClick={copyEmail}
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5DFD3] bg-white hover:bg-[#FAF7F2] px-4 py-3.5 text-xs font-semibold text-[#66615B] hover:text-[#111111] transition-colors shadow-2xs"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-[#D9541E]" />
                      <span className="text-[#D9541E] font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      <span>omshinde0484@gmail.com</span>
                    </>
                  )}
                </button>
              </motion.div>

              {/* Urgency Micro Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="flex items-center gap-2 text-xs text-[#66615B] pt-1"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Only accepting <strong>8 more project groups</strong> for November reviews to guarantee 1-on-1 attention.</span>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: Visual Live Terminal & Deliverables Dashboard Widget */}
            <div className="lg:col-span-5 relative">

              {/* Ambient Glow */}
              <div className="absolute w-72 h-72 rounded-full bg-[#D9541E]/15 blur-3xl pointer-events-none -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              {/* Floating Top Student Review Pill */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute -top-3 sm:-top-5 -left-2 sm:left-4 z-20 bg-white/95 backdrop-blur-md border border-[#E5DFD3] rounded-full px-3 py-1.5 shadow-md flex items-center gap-2 text-[11px] font-semibold text-[#111111]"
              >
                <span className="flex text-amber-500 text-[10px]">★★★★★</span>
                <span>SPPU Pune: <em>&ldquo;Cleared viva with 96/100!&rdquo;</em></span>
              </motion.div>

              {/* macOS Style Code & Deliverables Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="bg-[#111111] text-[#F3EEE3] rounded-2xl border border-[#2A2A2A] shadow-2xl overflow-hidden relative z-10"
              >
                {/* Window Chrome Header */}
                <div className="px-4 py-3 bg-[#1A1A1A] border-b border-[#2A2A2A] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    <span className="text-[11px] font-mono text-[#888888] ml-2">
                      zapiya-project-engine • 2026
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                    ● Ready for Viva
                  </span>
                </div>

                {/* Simulated Terminal Commands */}
                <div className="p-4 font-mono text-[11px] space-y-2 border-b border-[#222222] bg-[#0D0D0D]">
                  <p className="text-[#888888]">
                    $ git clone https://github.com/zapiya/college-project.git
                  </p>
                  <p className="text-[#888888]">
                    $ npm install &amp;&amp; npm run dev
                  </p>
                  <p className="text-emerald-400 font-semibold">
                    ✔ Next.js 16.2 &amp; Node.js API compiled in 1.1s
                  </p>
                  <p className="text-emerald-400">
                    ✔ Database schemas verified &amp; connected
                  </p>
                  <p className="text-cyan-400">
                    ✔ Vercel Live: https://your-group-project.vercel.app
                  </p>
                </div>

                {/* Visual Deliverables Inside Card */}
                <div className="p-4 bg-[#141414] space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9541E] block">
                    What You Get in Your Deliverable Package:
                  </span>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2.5 bg-[#1C1C1C] border border-[#2D2D2D] p-2.5 rounded-xl">
                      <FaCode className="text-[#D9541E] text-sm shrink-0" />
                      <div className="overflow-hidden">
                        <p className="font-semibold text-white truncate">1. Full Working Source Code</p>
                        <p className="text-[10px] text-[#888888] truncate">Clean GitHub repo with commit history</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 bg-[#1C1C1C] border border-[#2D2D2D] p-2.5 rounded-xl">
                      <FaRocket className="text-emerald-400 text-sm shrink-0" />
                      <div className="overflow-hidden">
                        <p className="font-semibold text-white truncate">2. Live Cloud Deployment</p>
                        <p className="text-[10px] text-[#888888] truncate">Demo from your phone/laptop without localhost issues</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 bg-[#1C1C1C] border border-[#2D2D2D] p-2.5 rounded-xl">
                      <FaVideo className="text-[#D9541E] text-sm shrink-0" />
                      <div className="overflow-hidden">
                        <p className="font-semibold text-white truncate">3. Google Meet 1-on-1 Walkthrough</p>
                        <p className="text-[10px] text-[#888888] truncate">We explain every line until your presentation is done</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 bg-[#1C1C1C] border border-[#2D2D2D] p-2.5 rounded-xl">
                      <FaDatabase className="text-cyan-400 text-sm shrink-0" />
                      <div className="overflow-hidden">
                        <p className="font-semibold text-white truncate">4. Architecture &amp; Database Flow</p>
                        <p className="text-[10px] text-[#888888] truncate">Ready to copy into your Black Book &amp; PPT slides</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Banner */}
                <div className="px-4 py-2.5 bg-[#1A1A1A] border-t border-[#2A2A2A] flex items-center justify-between text-[11px]">
                  <span className="text-[#888888] flex items-center gap-1.5">
                    <FaShieldAlt className="text-emerald-400 text-xs" /> Clean, Modern Code
                  </span>
                  <a
                    href="#project-form"
                    className="text-[#D9541E] hover:text-white font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>Get Yours</span>
                    <FaArrowRight className="text-[9px]" />
                  </a>
                </div>
              </motion.div>

              {/* Floating Bottom Meet Call Pill */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="absolute -bottom-4 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md border border-[#D9541E]/40 rounded-full px-3.5 py-1.5 shadow-md flex items-center gap-2 text-[11px] font-semibold text-[#111111]"
              >
                <div className="w-5 h-5 rounded-full bg-[#D9541E]/10 text-[#D9541E] flex items-center justify-center text-[10px]">
                  <FaVideo />
                </div>
                <span>Google Meet Calls Included</span>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          BEFORE VS AFTER: WHY STUDENTS FAIL VS HOW WE HELP THEM WIN
         ========================================================================= */}
      <section className="py-12 md:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
            The Reality of College Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
            Copying Random GitHub Clones vs.{" "}
            <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
              Zapiya Working Code
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* THE WRONG WAY */}
          <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-100 text-rose-800 text-xs font-bold">
              <FaTimesCircle />
              <span>Copying Tutorial Repos (The Nightmare)</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-rose-950/80">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span>Code uses 5-year-old deprecated packages that fail during <code>npm install</code> on your laptop.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span>Examiner asks: <em>&ldquo;Explain what this middleware does&rdquo;</em> and you freeze because you didn&apos;t write it.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span>No live demo link — if college Wi-Fi is slow or localhost fails, you get marked down or rejected.</span>
              </li>
            </ul>
          </div>

          {/* THE ZAPIYA WAY */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              <FaCheckCircle />
              <span>With Zapiya Engineering (100% Viva Ready)</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-emerald-950/80">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                <span>Modern, rock-solid stack (Next.js 16, MERN, Python) configured cleanly for your specific college requirements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>1-on-1 Google Meet calls</strong> where we explain how every API, database table, and component functions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                <span>Live Vercel link + offline local setup so your demonstration works flawlessly under any condition.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: ANY TEAM SIZE (SOLO / DUO / GROUP)
         ========================================================================= */}
      <section className="py-12 md:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E5DFD3]">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
            Flexible Team Formats
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
            Solo, Duo, or Full Group —{" "}
            <span className="font-cursive italic font-normal text-[#D9541E] text-[1.1em]">
              We Cover Every Format
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed">
            Every college has different group rules. We structure the project and documentation outline to match your exact team size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* SOLO CARD */}
          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#D9541E]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] flex items-center justify-center text-xl shadow-xs">
                <FaUser />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#D9541E] uppercase tracking-wider">
                  Individual Candidate
                </span>
                <h3 className="text-xl font-bold text-[#111111] mt-0.5">
                  Solo Project
                </h3>
              </div>
              <p className="text-xs text-[#66615B] leading-relaxed">
                Ideal for BCA, BSc CS, MCA, or individual B.Tech capstone candidates.
                Clean, modular full-stack architecture built so you can confidently explain every single function yourself.
              </p>
              <ul className="space-y-2 text-xs text-[#111111] pt-2 border-t border-[#F3EEE3]">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#D9541E] shrink-0" />
                  <span>Focused, easily explainable architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#D9541E] shrink-0" />
                  <span>Single-person code walkthrough on Meet</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#D9541E] shrink-0" />
                  <span>Zero bloat — zero embarrassing bugs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* DUO CARD */}
          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#D9541E]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] flex items-center justify-center text-xl shadow-xs">
                <FaUserFriends />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#D9541E] uppercase tracking-wider">
                  Pair Programming
                </span>
                <h3 className="text-xl font-bold text-[#111111] mt-0.5">
                  Duo Project (2 Members)
                </h3>
              </div>
              <p className="text-xs text-[#66615B] leading-relaxed">
                Ideal for Diploma, 5th/6th sem mini-projects, or two-person final teams.
                Clean logical separation between Frontend/UI and Backend/API logic so both partners have distinct roles.
              </p>
              <ul className="space-y-2 text-xs text-[#111111] pt-2 border-t border-[#F3EEE3]">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#D9541E] shrink-0" />
                  <span>Balanced Frontend &amp; Backend split</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#D9541E] shrink-0" />
                  <span>Clear roles for both presentation speakers</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#D9541E] shrink-0" />
                  <span>Joint Meet call for both team members</span>
                </li>
              </ul>
            </div>
          </div>

          {/* GROUP CARD */}
          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#D9541E]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 text-[10px] font-semibold text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/20 px-2.5 py-0.5 rounded-full">
              Most Popular
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] flex items-center justify-center text-xl shadow-xs">
                <FaUsers />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#D9541E] uppercase tracking-wider">
                  Final Year Team
                </span>
                <h3 className="text-xl font-bold text-[#111111] mt-0.5">
                  Full Group (3–4 Members)
                </h3>
              </div>
              <p className="text-xs text-[#66615B] leading-relaxed">
                The standard BE / B.Tech Major Project format. Multi-tier application with
                authentication, database schemas, dashboards, and role-based access to impress strict HOD panels.
              </p>
              <ul className="space-y-2 text-xs text-[#111111] pt-2 border-t border-[#F3EEE3]">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#D9541E] shrink-0" />
                  <span>Multi-feature system with distinct modules</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#D9541E] shrink-0" />
                  <span>Task breakdown ready for guide review logs</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#D9541E] shrink-0" />
                  <span>Group Google Meet rehearsal &amp; Q&amp;A session</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ANY IDEA & ANY TECH STACK
         ========================================================================= */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-[#FAF7F2] border-y border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
              Technology &amp; Topics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
              Any Tech Stack.{" "}
              <span className="font-cursive italic font-normal text-[#D9541E] text-[1.1em]">
                Your Idea or Ours.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed">
              Whether you already have a topic approved by your teacher or need us to give you a cutting-edge topic, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* PATH 1: YOUR IDEA */}
            <div className="bg-white border border-[#E5DFD3] rounded-2xl p-7 shadow-xs space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111111] text-[#F3EEE3] text-xs font-semibold">
                <FaCode />
                <span>Option 1: You Have an Idea</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Your Approved Topic → We Build the Code
              </h3>
              <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed">
                Already submitted a synopsis or base paper to your college guide?
                Send us your problem statement, required features, or college guidelines.
                We engineer the exact system as per your guide&apos;s expectations.
              </p>
              <div className="bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl p-4 text-xs space-y-2">
                <span className="font-semibold text-[#111111] block">
                  What you can send us:
                </span>
                <p className="text-[#66615B]">
                  • Rough problem statement or abstract
                  <br />
                  • Base IEEE paper reference (if any)
                  <br />
                  • College guide&apos;s specific feature wishlist
                </p>
              </div>
            </div>

            {/* PATH 2: WE GIVE AN IDEA */}
            <div className="bg-white border border-[#E5DFD3] rounded-2xl p-7 shadow-xs space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D9541E] text-white text-xs font-semibold">
                <FaRocket />
                <span>Option 2: You Need an Idea</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Need a Topic? We Have Examiner-Favorites
              </h3>
              <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed">
                If your group hasn&apos;t decided yet or your guide rejected your previous idea,
                we provide innovative, trending concepts that get approved instantly:
              </p>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="bg-[#FAF7F2] border border-[#E5DFD3] p-3 rounded-lg font-medium text-[#111111]">
                  🤖 AI &amp; NLP Scanners
                </div>
                <div className="bg-[#FAF7F2] border border-[#E5DFD3] p-3 rounded-lg font-medium text-[#111111]">
                  ⚡ Next.js &amp; MERN Full-Stack
                </div>
                <div className="bg-[#FAF7F2] border border-[#E5DFD3] p-3 rounded-lg font-medium text-[#111111]">
                  📍 Hyperlocal Marketplaces
                </div>
                <div className="bg-[#FAF7F2] border border-[#E5DFD3] p-3 rounded-lg font-medium text-[#111111]">
                  🔐 Cyber &amp; Auth Systems
                </div>
                <div className="bg-[#FAF7F2] border border-[#E5DFD3] p-3 rounded-lg font-medium text-[#111111]">
                  🏥 Health &amp; Telemedicine
                </div>
                <div className="bg-[#FAF7F2] border border-[#E5DFD3] p-3 rounded-lg font-medium text-[#111111]">
                  📊 Analytics &amp; Telemetry
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INQUIRY FORM & DIRECT EMAIL
         ========================================================================= */}
      <section
        id="project-form"
        className="py-16 md:py-20 px-4 sm:px-6 bg-[#FAF7F2] border-t border-[#E5DFD3]"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
              Fast Connect
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              Send Us Your{" "}
              <span className="font-cursive italic font-normal text-[#D9541E] text-[1.1em]">
                Project Brief
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed">
              Fill out this quick form. We review your requirements and reply with delivery timelines and schedule your first Google Meet discussion.
            </p>
          </div>

          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-10 shadow-sm">
            {formStatus.submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto shadow-xs">
                  <FaCheckCircle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Project Brief Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#66615B] max-w-md mx-auto leading-relaxed">
                  Thank you! We have received your college project brief. Check your email inbox — we will reply shortly to set up your Google Meet call.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() =>
                      setFormStatus({ submitting: false, submitted: false, error: null })
                    }
                    className="text-xs font-semibold text-[#D9541E] hover:underline"
                  >
                    ← Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {formStatus.error && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
                    {formStatus.error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5" htmlFor="name">
                      Your Full Name <span className="text-[#D9541E]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5" htmlFor="email">
                      Email Address <span className="text-[#D9541E]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@gmail.com"
                      className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5" htmlFor="college">
                      College &amp; University <span className="text-[#D9541E]">*</span>
                    </label>
                    <input
                      id="college"
                      type="text"
                      name="college"
                      required
                      value={formData.college}
                      onChange={handleInputChange}
                      placeholder="e.g. SPPU Pune / AKTU / Mumbai Univ"
                      className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5" htmlFor="branch">
                      Branch &amp; Degree <span className="text-[#D9541E]">*</span>
                    </label>
                    <input
                      id="branch"
                      type="text"
                      name="branch"
                      required
                      value={formData.branch}
                      onChange={handleInputChange}
                      placeholder="e.g. B.Tech Computer Engineering / BCA"
                      className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5" htmlFor="teamSize">
                      Team Format
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors"
                    >
                      <option value="Solo (1 Member)">Solo (1 Member)</option>
                      <option value="Duo (2 Members)">Duo (2 Members)</option>
                      <option value="Group (3-4 Members)">Group (3-4 Members)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1.5" htmlFor="topicStatus">
                      Topic Status
                    </label>
                    <select
                      id="topicStatus"
                      name="topicStatus"
                      value={formData.topicStatus}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors"
                    >
                      <option value="I have an approved topic">I have an approved topic</option>
                      <option value="Need a topic idea from you">Need a topic idea from you</option>
                      <option value="Already submitted synopsis, need code">Already submitted synopsis, need code</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-1.5" htmlFor="idea">
                    Your Project Idea / Requirements <span className="text-[#D9541E]">*</span>
                  </label>
                  <textarea
                    id="idea"
                    name="idea"
                    required
                    rows={4}
                    value={formData.idea}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project topic, preferred tech stack (e.g. Next.js, Python, MERN), or mention if you need an innovative idea..."
                    className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors resize-y"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-1.5" htmlFor="deadline">
                    Upcoming Review / Presentation Deadline
                  </label>
                  <input
                    id="deadline"
                    type="text"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    placeholder="e.g. Review 1 on Nov 28 / Final viva in Dec"
                    className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] hover:bg-[#D9541E] disabled:bg-[#66615B] text-[#F3EEE3] px-8 py-3 text-sm font-semibold transition-colors shadow-xs"
                  >
                    {formStatus.submitting ? (
                      <>
                        <FaSpinner className="animate-spin text-xs" />
                        <span>Sending Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <FaArrowRight className="text-xs" />
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoUrl}
                    className="text-xs text-[#66615B] hover:text-[#D9541E] font-medium transition-colors"
                  >
                    Prefer to email directly? Click here →
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FAQ & REASSURANCE
         ========================================================================= */}
      <section className="py-16 md:py-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-[#E5DFD3] rounded-xl p-5 shadow-xs">
            <h3 className="font-bold text-sm text-[#111111]">
              How does the 1-on-1 Google Meet guidance work?
            </h3>
            <p className="text-xs text-[#66615B] mt-2 leading-relaxed">
              Once the code is ready, we schedule a Google Meet call with you or your team.
              We explain how the project is structured, show how each API connects to the database,
              and test it locally on your laptop. We remain available for calls until your college presentation is completed!
            </p>
          </div>

          <div className="bg-white border border-[#E5DFD3] rounded-xl p-5 shadow-xs">
            <h3 className="font-bold text-sm text-[#111111]">
              What if our college guide rejects our initial topic?
            </h3>
            <p className="text-xs text-[#66615B] mt-2 leading-relaxed">
              No problem! If your guide rejects the idea before implementation starts, we help you pivot to an examiner-approved alternative topic that meets your department&apos;s criteria.
            </p>
          </div>

          <div className="bg-white border border-[#E5DFD3] rounded-xl p-5 shadow-xs">
            <h3 className="font-bold text-sm text-[#111111]">
              Can we run the project locally without active internet during viva?
            </h3>
            <p className="text-xs text-[#66615B] mt-2 leading-relaxed">
              Yes! We configure the project with local SQLite/MongoDB/PostgreSQL setups and provide a live cloud URL as a backup. Even if your college Wi-Fi is down, your local setup will work seamlessly.
            </p>
          </div>

          <div className="bg-white border border-[#E5DFD3] rounded-xl p-5 shadow-xs">
            <h3 className="font-bold text-sm text-[#111111]">
              How fast can you deliver if our review is next week?
            </h3>
            <p className="text-xs text-[#66615B] mt-2 leading-relaxed">
              We specialize in rapid semester turnarounds. Mention your deadline in your email brief, and we will confirm the delivery timeline immediately.
            </p>
          </div>
        </div>

        {/* Bottom Contact Pill */}
        <div className="pt-6 text-center">
          <p className="text-xs text-[#66615B]">
            Have a custom question? Email us anytime at{" "}
            <a
              href="mailto:omshinde0484@gmail.com"
              className="font-semibold text-[#D9541E] hover:underline"
            >
              omshinde0484@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
