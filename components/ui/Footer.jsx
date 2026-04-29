"use client"

import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="relative bg-[#0F172A] border-t border-[#1E293B] overflow-hidden">

            {/* Glow Effect */}
            <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6366F1] opacity-[0.05] blur-[120px] rounded-full" />

            <div className="relative max-w-6xl mx-auto px-6 py-14">

                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">

                        {/* ✅ LOGO */}
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Zapiya Logo"
                                width={40}
                                height={40}
                                priority
                            />
                            <span className="text-white text-xl font-bold tracking-tight">
                                Zapiya
                            </span>
                        </Link>

                        <p className="text-[#64748B] text-sm mt-3 leading-relaxed">
                            Build job-winning resumes in minutes. AI-powered, ATS-friendly, and designed to make you stand out.
                        </p>

                        {/* Social */}
                        <div className="flex gap-3 mt-5">
                            <a
                                href="https://instagram.com/zapiya"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#64748B] hover:text-white hover:border-[#6366F1] transition"
                            >
                                <FaInstagram size={14} />
                            </a>

                            <a
                                href="https://linkedin.com/company/zapiya"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#64748B] hover:text-white hover:border-[#6366F1] transition"
                            >
                                <FaLinkedin size={14} />
                            </a>

                            <a
                                href="https://twitter.com/zapiya"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#64748B] hover:text-white hover:border-[#6366F1] transition"
                            >
                                <FaXTwitter size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <p className="text-white text-sm font-semibold mb-4">Product</p>
                        <div className="flex flex-col gap-3">
                            <Link href="/templates" className="footer-link">Templates</Link>
                            <Link href="/#features" className="footer-link">Features</Link>
                            <Link href="/#pricing" className="footer-link">Pricing</Link>
                        </div>
                    </div>

                    {/* Segments */}
                    <div>
                        <p className="text-white text-sm font-semibold mb-4">Segments</p>
                        <div className="flex flex-col gap-3">
                            <Link href="/templates?segment=tech" className="footer-link">Tech & Engineering</Link>
                            <Link href="/templates?segment=mba" className="footer-link">MBA & Finance</Link>
                            <Link href="/templates?segment=design" className="footer-link">Design & Creative</Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <p className="text-white text-sm font-semibold mb-4">Company</p>
                        <div className="flex flex-col gap-3">
                            <Link href="/contact" className="footer-link">Contact</Link>
                            <Link href="/support" className="footer-link">Support</Link>
                            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
                            <Link href="/terms" className="footer-link">Terms of Use</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-[#1E293B] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

                    <p className="text-[#475569] text-xs">
                        © 2026 Zapiya. All rights reserved.
                    </p>

                    <p className="text-[#475569] text-xs">
                        Build Smart • Stand Out 🚀
                    </p>

                </div>

            </div>
        </footer>
    )
}