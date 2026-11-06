"use client"

import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="relative bg-slate-50 border-t border-slate-200/80 overflow-hidden text-slate-600">
            <div className="relative max-w-6xl mx-auto px-6 py-14">

                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center p-1.5">
                                <Image
                                    src="/logo.png"
                                    alt="Zapiya Logo"
                                    width={28}
                                    height={28}
                                    className="object-contain filter invert brightness-0"
                                />
                            </div>
                            <span className="text-slate-900 text-xl font-bold tracking-tight font-comfortaa">
                                Zapiya
                            </span>
                        </Link>

                        <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
                            100% free ATS resume builder for software engineers, developers, and students. Zero paywalls, no signup required, zero watermarks.
                        </p>

                        {/* Social */}
                        <div className="flex gap-2.5 mt-5">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition shadow-xs"
                            >
                                <FaLinkedin size={13} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter"
                                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition shadow-xs"
                            >
                                <FaXTwitter size={13} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition shadow-xs"
                            >
                                <FaInstagram size={13} />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <p className="text-slate-900 text-xs font-bold uppercase tracking-wider font-comfortaa mb-4">Templates</p>
                        <div className="flex flex-col gap-2.5 text-sm">
                            <Link href="/builder/classic-ats" className="footer-link">Classic ATS (Harvard)</Link>
                            <Link href="/builder/tech-minimal" className="footer-link">Tech Minimal</Link>
                            <Link href="/builder/tech-two-column" className="footer-link">Tech Pro</Link>
                            <Link href="/builder/tech-bold-header" className="footer-link">Tech Bold Header</Link>
                            <Link href="/templates" className="footer-link font-semibold text-indigo-600">Browse All Templates →</Link>
                        </div>
                    </div>

                    {/* Guides & Resources */}
                    <div>
                        <p className="text-slate-900 text-xs font-bold uppercase tracking-wider font-comfortaa mb-4">Guides & Career</p>
                        <div className="flex flex-col gap-2.5 text-sm">
                            <Link href="/guides/ats-resume-guide-2026" className="footer-link">ATS Resume Guide 2026</Link>
                            <Link href="/guides/harvard-resume-format-breakdown" className="footer-link">Harvard Format Breakdown</Link>
                            <Link href="/guides/action-verbs-for-software-engineers" className="footer-link">150+ Action Verbs</Link>
                            <Link href="/guides/single-column-vs-two-column-resumes" className="footer-link">Single vs Two Column</Link>
                            <Link href="/guides" className="footer-link font-semibold text-indigo-600">Career Knowledge Hub →</Link>
                        </div>
                    </div>

                    {/* Company & Legal */}
                    <div>
                        <p className="text-slate-900 text-xs font-bold uppercase tracking-wider font-comfortaa mb-4">Company & Legal</p>
                        <div className="flex flex-col gap-2.5 text-sm">
                            <Link href="/about" className="footer-link">About Zapiya</Link>
                            <Link href="/contact" className="footer-link">Contact & Support</Link>
                            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
                            <Link href="/terms" className="footer-link">Terms of Service</Link>
                            <Link href="/cookies" className="footer-link">Cookie Policy</Link>
                            <Link href="/disclaimer" className="footer-link">Disclaimer</Link>
                            <a href="mailto:support@zapiya.com" className="footer-link text-indigo-600">support@zapiya.com</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Zapiya. 100% Free Client-Side ATS Resume Builder. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                            ● Zero Paywalls Forever
                        </span>
                        <span>Times New Roman Standard</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}
