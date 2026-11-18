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
  FaQuestionCircle,
  FaTerminal,
  FaLayerGroup,
  FaCalendarAlt,
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

    const subject = `[College Project Inquiry] ${formData.teamSize} • ${formData.branch || "CS/IT"} • ${formData.college || "University"}`
    const message = `
Full Name: ${formData.name}
Email Address: ${formData.email}
College / University: ${formData.college}
Branch / Degree: ${formData.branch}
Team Size: ${formData.teamSize}
Topic Status: ${formData.topicStatus}
Project Idea / Topic Details: ${formData.idea}
Submission / Presentation Deadline: ${formData.deadline || "Within 2-3 weeks"}
    `.trim()

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
          HERO SECTION
         ========================================================================= */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 border-b border-[#E5DFD3] overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D9541E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E5DFD3] bg-[#FAF7F2] px-4 py-1.5 text-xs font-semibold text-[#66615B] shadow-xs"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#D9541E] animate-pulse" />
            <span>Final Year &amp; Capstone Projects • 2026 Batch</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.12]"
          >
            Your Project Idea.{" "}
            <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em] block sm:inline">
              Our Working Code.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#66615B] leading-relaxed"
          >
            Skip the stress of non-working databases, broken tutorial repos, and
            strict college examiners. We build production-ready code with live demos
            and provide <strong className="text-[#111111] font-semibold">1-on-1 Google Meet guidance</strong> until
            your college presentation is completed.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#project-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] px-6 py-3.5 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <FaEnvelope className="text-xs" />
              <span>Send Your Project Brief</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href={mailtoUrl}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] hover:border-[#D9541E]/40 px-6 py-3.5 text-sm font-semibold transition-all duration-200 shadow-xs"
            >
              <span>Direct Email</span>
              <span className="text-xs text-[#66615B] font-normal">(omshinde0484@gmail.com)</span>
            </a>

            <button
              onClick={copyEmail}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5DFD3] bg-[#FAF7F2] hover:bg-white px-4 py-3.5 text-xs font-semibold text-[#66615B] hover:text-[#111111] transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <FaCheck className="text-[#D9541E]" />
                  <span className="text-[#D9541E]">Email Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Meet Guarantee Highlight Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="pt-4 max-w-2xl mx-auto"
          >
            <div className="rounded-xl border border-[#D9541E]/30 bg-[#FAF7F2] p-4 flex items-center justify-center gap-3 shadow-xs text-xs sm:text-sm font-medium text-[#111111]">
              <div className="w-8 h-8 rounded-lg bg-[#D9541E]/10 border border-[#D9541E]/20 text-[#D9541E] flex items-center justify-center shrink-0">
                <FaVideo className="text-sm" />
              </div>
              <span>
                <strong className="text-[#D9541E] font-semibold">Google Meet Guarantee:</strong> 1-on-1 walkthrough calls &amp; setup support until your college presentation is completely done.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: ANY TEAM SIZE (SOLO / DUO / GROUP)
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
            Flexible Team Formats
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
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
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#FAF7F2] border-y border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
              Technology &amp; Topics
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
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
          SECTION 3: WHAT YOU GET FROM US (CLEAR DELIVERABLES)
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9541E]">
            Everything Included
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
            What You Receive —{" "}
            <span className="font-cursive italic font-normal text-[#D9541E] text-[1.1em]">
              Zero Incomplete Code
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed">
            We provide clean, working engineering deliverables and direct guidance so you present with 100% confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] flex items-center justify-center text-lg">
              <FaCode />
            </div>
            <h3 className="font-bold text-[#111111] text-base">
              100% Working Code
            </h3>
            <p className="text-xs text-[#66615B] leading-relaxed">
              Clean, modular, well-commented repository. No broken dependencies or outdated packages.
            </p>
          </div>

          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] flex items-center justify-center text-lg">
              <FaRocket />
            </div>
            <h3 className="font-bold text-[#111111] text-base">
              Live Cloud Demo
            </h3>
            <p className="text-xs text-[#66615B] leading-relaxed">
              Hosted on Vercel or Cloud. You can open and demo the project live on your mobile or laptop anywhere.
            </p>
          </div>

          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] flex items-center justify-center text-lg">
              <FaTerminal />
            </div>
            <h3 className="font-bold text-[#111111] text-base">
              3-Step Local Setup
            </h3>
            <p className="text-xs text-[#66615B] leading-relaxed">
              Simple README with exact commands so anyone in your team can run it locally in under 2 minutes.
            </p>
          </div>

          <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] flex items-center justify-center text-lg">
              <FaVideo />
            </div>
            <h3 className="font-bold text-[#111111] text-base">
              Google Meet Guidance
            </h3>
            <p className="text-xs text-[#66615B] leading-relaxed">
              1-on-1 video calls to walk you through the code &amp; answer questions <strong className="text-[#111111]">until your presentation is completed</strong>.
            </p>
          </div>
        </div>

        {/* Clear Disclaimer Note */}
        <div className="mt-8 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3] p-4 text-center text-xs text-[#66615B]">
          <strong className="text-[#111111] font-semibold">Please Note:</strong> We provide the complete technical engine, working source code, live demo, and Meet explanation. Writing your college report, PPT slides, and attending your viva is your task as students.
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INQUIRY FORM & DIRECT EMAIL
         ========================================================================= */}
      <section
        id="project-form"
        className="py-16 md:py-24 px-4 sm:px-6 bg-[#FAF7F2] border-t border-[#E5DFD3]"
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
              Fill out this quick form or email us directly. We will review your topic and get back to you within 24 hours.
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
                  Thank you! We will review your college requirements and reply via email to schedule your first Google Meet discussion.
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
          SECTION 5: FAQ & REASSURANCE
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
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

