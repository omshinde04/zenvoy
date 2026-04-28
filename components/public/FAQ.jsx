"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

const faqs = [
    {
        q: "Is Zenvoy completely free to use?",
        a: "Yes — you can build and download resumes for free. We also offer a Pro plan with advanced templates and features, but the core experience remains free.",
    },
    {
        q: "Do I need to create an account to start?",
        a: "No. You can start building your resume instantly without signing up. An account is only required if you want to save or manage multiple resumes.",
    },
    {
        q: "Will my resume have a watermark?",
        a: "No. All resumes downloaded from Zenvoy are clean, professional, and completely watermark-free.",
    },
    {
        q: "Are these templates ATS-friendly?",
        a: "Yes. All templates are designed to pass Applicant Tracking Systems (ATS) used by companies like Amazon, Google, and top startups.",
    },
    {
        q: "Can I edit my resume later?",
        a: "Yes. If you create an account, your resumes are saved and can be edited anytime from your dashboard.",
    },
    {
        q: "What makes Zenvoy different from other resume builders?",
        a: "Zenvoy focuses on simplicity, modern design, and real hiring standards. No clutter, no outdated templates — just resumes that get shortlisted.",
    },
]

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="relative px-6 py-28 bg-[#0B1120] overflow-hidden">

            {/* Glow */}
            <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6366F1] opacity-[0.05] blur-[120px] rounded-full" />

            <div className="relative max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Frequently asked{" "}
                        <span className="text-[#6366F1]">questions</span>
                    </h2>

                    <p className="text-[#64748B] text-sm mt-4">
                        Everything you need to know before getting started.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden"
                        >

                            {/* Question */}
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between px-5 py-4 text-left"
                            >
                                <span className="text-white font-medium text-sm">
                                    {faq.q}
                                </span>

                                <FaChevronDown
                                    className={`text-[#6366F1] transition-transform ${activeIndex === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-5 pb-5 text-[#94A3B8] text-sm leading-relaxed"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}