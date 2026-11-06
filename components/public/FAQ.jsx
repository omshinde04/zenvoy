"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"
import { faqs } from "@/lib/faqData"

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="relative px-6 py-24 bg-white overflow-hidden border-t border-slate-200/60">
            <div className="relative max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-xl mx-auto mb-16">
                    <span className="inline-block text-xs font-semibold text-indigo-700 uppercase tracking-wider bg-indigo-50/80 border border-indigo-100 px-3.5 py-1.5 rounded-full mb-3.5">
                        Frequently Asked Questions
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Got Questions?{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">We&apos;ve Got Answers</span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                        Everything you need to know about building 100% free ATS resumes on Zapiya.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3.5">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                                activeIndex === i
                                    ? "bg-slate-50/90 border-indigo-200 shadow-xs"
                                    : "bg-slate-50/50 border-slate-200/80 hover:bg-slate-50"
                            }`}
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between px-6 py-4.5 text-left gap-4"
                            >
                                <span className="text-slate-900 font-bold text-sm sm:text-base tracking-tight">
                                    {faq.q}
                                </span>

                                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-transform duration-200 flex-shrink-0 ${
                                    activeIndex === i
                                        ? "bg-indigo-600 text-white rotate-180"
                                        : "bg-slate-200/80 text-slate-600"
                                }`}>
                                    <FaChevronDown />
                                </div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="px-6 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 pt-3"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
