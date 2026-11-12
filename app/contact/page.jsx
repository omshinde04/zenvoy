// app/contact/page.jsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { HiMail, HiLocationMarker, HiClock } from "react-icons/hi"
import { FaArrowRight, FaCheckCircle, FaSpinner } from "react-icons/fa"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      const response = await fetch("https://formspree.io/f/xqpqkgab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject || "Zapiya In-App Contact Request",
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const errorData = await response.json().catch(() => ({}))
        setStatus({
          submitting: false,
          submitted: false,
          error: errorData.error || "Failed to deliver message. Please try again or email us directly.",
        })
      }
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Network error occurred. Please check your connection or email support@zapiya.com directly.",
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#F3EEE3] py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Two-Font Editorial Structure */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-medium text-[#66615B] bg-[#FAF7F2] border border-[#E5DFD3] px-3.5 py-1 rounded-md mb-4 shadow-xs">
            Direct Support &amp; Feedback
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Contact &amp;{" "}
            <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
              Support
            </span>
          </h1>
          <p className="mt-4 text-[#66615B] text-sm sm:text-base leading-relaxed">
            Have questions about ATS formatting, feedback on our Harvard templates, or need technical assistance? Send us a direct message below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Info Side */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white border border-[#E5DFD3] rounded-xl p-6 shadow-xs">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] rounded-lg flex items-center justify-center text-lg mb-3 shadow-xs">
                <HiMail />
              </div>
              <h3 className="font-bold text-[#111111] text-sm">Direct Support</h3>
              <p className="text-xs text-[#66615B] mt-1">Direct inquiries &amp; engineering feedback</p>
              <a
                href="mailto:omshinde0484@gmail.com"
                className="mt-3 block text-sm font-semibold text-[#D9541E] hover:text-[#111111] break-all transition-colors"
              >
                omshinde0484@gmail.com
              </a>
            </div>

            <div className="bg-white border border-[#E5DFD3] rounded-xl p-6 shadow-xs">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] rounded-lg flex items-center justify-center text-lg mb-3 shadow-xs">
                <HiClock />
              </div>
              <h3 className="font-bold text-[#111111] text-sm">Response Time</h3>
              <p className="text-xs text-[#66615B] mt-1 leading-relaxed">
                We typically reply within 24–48 hours on business days.
              </p>
            </div>

            <div className="bg-white border border-[#E5DFD3] rounded-xl p-6 shadow-xs">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#E5DFD3] text-[#D9541E] rounded-lg flex items-center justify-center text-lg mb-3 shadow-xs">
                <HiLocationMarker />
              </div>
              <h3 className="font-bold text-[#111111] text-sm">Online Platform</h3>
              <p className="text-xs text-[#66615B] mt-1 leading-relaxed">
                Available globally 24/7 across modern HTML5 web browsers.
              </p>
            </div>

            <div className="bg-white border border-[#E5DFD3] rounded-xl p-6 shadow-xs">
              <div className="w-10 h-10 bg-[#111111] text-[#F3EEE3] rounded-lg flex items-center justify-center text-xs font-bold mb-3 shadow-xs">
                OS
              </div>
              <h3 className="font-bold text-[#111111] text-sm">Founder &amp; Engineering Lead</h3>
              <p className="text-xs font-semibold text-[#111111] mt-1">Om Vilas Shinde</p>
              <p className="text-xs text-[#66615B] mt-0.5">Maharashtra, India</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-2 bg-white border border-[#E5DFD3] rounded-2xl p-8 sm:p-10 shadow-sm">
            {status.submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 bg-[#D9541E]/10 border border-[#D9541E]/20 text-[#D9541E] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <FaCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] tracking-tight">Message Delivered</h3>
                <p className="text-[#66615B] text-sm mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you! Your message has been sent directly to Om Shinde via Formspree. We will review your message and respond shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                  className="mt-6 inline-flex items-center gap-2 text-xs text-[#D9541E] hover:text-[#111111] font-semibold transition-colors"
                >
                  <span>Send another message</span>
                  <span>→</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#F3EEE3] pb-4 mb-2">
                  <h2 className="text-xl font-bold text-[#111111] tracking-tight">Send a Direct Message</h2>
                  <p className="text-xs text-[#66615B] mt-1">
                    Powered by Formspree · Connected to omshinde0484@gmail.com
                  </p>
                </div>

                {status.error && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
                    {status.error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
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
                      onChange={handleChange}
                      placeholder="Alexander Chase"
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
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-1.5" htmlFor="subject">
                    Subject / Topic <span className="text-[#D9541E]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Feedback on Classic ATS spacing / Bug report"
                    className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-1.5" htmlFor="message">
                    Message <span className="text-[#D9541E]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help? Share your questions, template requests, or ATS parser feedback..."
                    className="w-full bg-[#FAF7F2] border border-[#E5DFD3] text-[#111111] text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#D9541E] focus:bg-white transition-colors resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#111111] hover:bg-[#D9541E] disabled:bg-[#66615B] text-[#F3EEE3] px-7 py-3 text-sm font-medium transition-colors shadow-xs"
                  >
                    {status.submitting ? (
                      <>
                        <FaSpinner className="animate-spin text-xs" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message via Formspree</span>
                        <FaArrowRight className="text-xs text-[#F3EEE3]/80" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}
