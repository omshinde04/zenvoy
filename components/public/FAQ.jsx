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
        <section className="relative px-6 py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#E5DFD3]">
            <div className="relative max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-xl mx-auto mb-14">
                    <span className="inline-block text-xs font-medium text-[#66615B] bg-[#F3EEE3] border border-[#E5DFD3] px-3 py-1 rounded-md mb-3">
                        Frequently Asked Questions
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
                        Everything You Need to{" "}
                        <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
                            Know.
                        </span>
                    </h2>

                    <p className="text-[#66615B] text-sm sm:text-base mt-3 leading-relaxed">
                        Clear, straightforward answers about building and downloading resumes on Zapiya.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3.5">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border rounded-xl overflow-hidden transition-colors ${
                                activeIndex === i
                                    ? "bg-white border-[#D9541E]/50 shadow-xs"
                                    : "bg-white/70 border-[#E5DFD3] hover:bg-white"
                            }`}
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between px-6 py-4.5 text-left gap-4"
                            >
                                <span className="text-[#111111] font-semibold text-sm sm:text-base tracking-tight">
                                    {faq.q}
                                </span>

                                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-transform duration-200 flex-shrink-0 ${
                                    activeIndex === i
                                        ? "bg-[#111111] text-[#F3EEE3] rotate-180"
                                        : "bg-[#EAE4D7] text-[#66615B]"
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
                                        className="px-6 pb-5 text-[#66615B] text-sm sm:text-base leading-relaxed border-t border-[#F3EEE3] pt-3"
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
