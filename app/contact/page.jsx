// app/contact/page.jsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { HiMail, HiLocationMarker, HiClock } from "react-icons/hi"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated client-side submission
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full mb-4 font-comfortaa">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-comfortaa">
            Contact & <span className="text-indigo-600">Support</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Have questions about ATS formatting, feedback on our templates, or need technical help? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Info Side */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-subtle">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-lg mb-3">
                <HiMail />
              </div>
              <h3 className="font-bold text-slate-900 text-sm font-comfortaa">Email Support</h3>
              <p className="text-xs text-slate-500 mt-1">Direct inquiries & feedback</p>
              <a
                href="mailto:support@zapiya.com"
                className="mt-3 block text-sm font-semibold text-indigo-600 hover:text-indigo-700 break-all"
              >
                support@zapiya.com
              </a>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-subtle">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-lg mb-3">
                <HiClock />
              </div>
              <h3 className="font-bold text-slate-900 text-sm font-comfortaa">Response Time</h3>
              <p className="text-xs text-slate-500 mt-1">We typically reply within 24–48 hours on business days.</p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-subtle">
              <div className="w-10 h-10 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center text-lg mb-3">
                <HiLocationMarker />
              </div>
              <h3 className="font-bold text-slate-900 text-sm font-comfortaa">Online Platform</h3>
              <p className="text-xs text-slate-500 mt-1">Available globally 24/7 across all modern browsers.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-2 bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-subtle">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-comfortaa">Thank You!</h3>
                <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                  Your message has been received. Our team will review your inquiry and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", subject: "", message: "" })
                  }}
                  className="mt-6 text-xs text-indigo-600 hover:underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-slate-900 font-comfortaa mb-2">
                  Send Us a Message
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Feedback / ATS Question / Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl transition shadow-md shadow-indigo-500/10"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

