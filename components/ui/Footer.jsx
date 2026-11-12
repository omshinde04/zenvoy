"use client"

import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="relative bg-[#F3EEE3] border-t border-[#E5DFD3] overflow-hidden text-[#66615B]">
            <div className="relative max-w-6xl mx-auto px-6 py-14">

                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2.5 group">
                            <div className="w-9 h-9 relative filter drop-shadow-2xs transition-transform duration-200 group-hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="Zapiya ATS Resume Builder Logo"
                                    width={36}
                                    height={36}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="h-7 w-24 relative transition-transform duration-200 group-hover:translate-x-0.5">
                                <Image
                                    src="/zapiya-wordmark.png"
                                    alt="Zapiya"
                                    width={96}
                                    height={30}
                                    className="object-contain object-left w-full h-full"
                                />
                            </div>
                        </Link>

                        <p className="text-[#66615B] text-xs sm:text-sm mt-3 leading-relaxed">
                            100% free ATS resume builder for software engineers, developers, and students. Zero paywalls, no signup required, zero watermarks.
                        </p>

                        {/* Social */}
                        <div className="flex gap-2.5 mt-5">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="w-8 h-8 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#66615B] hover:text-[#D9541E] hover:border-[#D9541E]/40 transition shadow-xs"
                            >
                                <FaLinkedin size={13} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter"
                                className="w-8 h-8 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#66615B] hover:text-[#D9541E] hover:border-[#D9541E]/40 transition shadow-xs"
                            >
                                <FaXTwitter size={13} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="w-8 h-8 rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#66615B] hover:text-[#D9541E] hover:border-[#D9541E]/40 transition shadow-xs"
                            >
                                <FaInstagram size={13} />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <p className="text-[#111111] text-xs font-bold uppercase tracking-wider mb-4">Templates</p>
                        <div className="flex flex-col gap-2.5 text-sm">
                            <Link href="/builder/classic-ats" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Classic ATS (Harvard)</Link>
                            <Link href="/builder/tech-minimal" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Tech Minimal</Link>
                            <Link href="/builder/tech-two-column" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Tech Pro</Link>
                            <Link href="/builder/tech-bold-header" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Tech Bold Header</Link>
                            <Link href="/templates" className="font-semibold text-[#D9541E] hover:text-[#111111] transition-colors">Browse All Templates →</Link>
                        </div>
                    </div>

                    {/* Guides & Resources */}
                    <div>
                        <p className="text-[#111111] text-xs font-bold uppercase tracking-wider mb-4">Guides & Career</p>
                        <div className="flex flex-col gap-2.5 text-sm">
                            <Link href="/guides/ats-resume-guide-2026" className="text-[#66615B] hover:text-[#D9541E] transition-colors">ATS Resume Guide 2026</Link>
                            <Link href="/guides/harvard-resume-format-breakdown" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Harvard Format Breakdown</Link>
                            <Link href="/guides/action-verbs-for-software-engineers" className="text-[#66615B] hover:text-[#D9541E] transition-colors">150+ Action Verbs</Link>
                            <Link href="/guides/single-column-vs-two-column-resumes" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Single vs Two Column</Link>
                            <Link href="/guides" className="font-semibold text-[#D9541E] hover:text-[#111111] transition-colors">Career Knowledge Hub →</Link>
                        </div>
                    </div>

                    {/* Company & Legal */}
                    <div>
                        <p className="text-[#111111] text-xs font-bold uppercase tracking-wider mb-4">Company & Legal</p>
                        <div className="flex flex-col gap-2.5 text-sm">
                            <Link href="/about" className="text-[#66615B] hover:text-[#D9541E] transition-colors">About Zapiya</Link>
                            <Link href="/contact" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Contact & Support</Link>
                            <Link href="/privacy" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Terms of Service</Link>
                            <Link href="/cookies" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Cookie Policy</Link>
                            <Link href="/disclaimer" className="text-[#66615B] hover:text-[#D9541E] transition-colors">Disclaimer</Link>
                            <a href="mailto:support@zapiya.com" className="text-[#D9541E] font-medium hover:underline">support@zapiya.com</a>
                        </div>
                    </div>

                </div>

                {/* Signature Brand Wordmark Display */}
                <div className="my-10 sm:my-14 pt-10 border-t border-[#E5DFD3] flex flex-col items-center justify-center text-center">
                    <Link href="/" className="group block w-full max-w-[280px] sm:max-w-sm md:max-w-md transition-transform duration-300 hover:scale-[1.02]">
                        <Image
                            src="/zapiya-wordmark.png"
                            alt="Zapiya – 100% Free Harvard ATS Resume Builder"
                            width={885}
                            height={273}
                            className="w-full h-auto object-contain filter drop-shadow-2xs opacity-95 group-hover:opacity-100 transition-opacity"
                        />
                    </Link>
                    <p className="mt-3.5 text-xs sm:text-sm text-[#66615B] font-medium tracking-wide">
                        Bura <span className="text-[#111111] font-bold">SAMAY</span> nahi chal raha, bas <span className="font-serif italic text-[#D9541E] font-semibold">Resume</span> barabar nahi hai.
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#66615B]">
                    <p>
                        © {new Date().getFullYear()} Zapiya · Founder: <span className="font-semibold text-[#111111]">Om Vilas Shinde</span>. 100% Free Client-Side ATS Resume Builder.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5 text-[#D9541E] font-medium bg-[#D9541E]/10 border border-[#D9541E]/20 px-2.5 py-1 rounded-md">
                            ● Zero Paywalls Forever
                        </span>
                        <span>Times New Roman Standard</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}
