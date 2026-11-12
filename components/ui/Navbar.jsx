"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "Templates", href: "/templates" },
        { name: "Guides", href: "/guides" },
        { name: "Pricing", href: "/#pricing" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    const handleNavClick = (e, href) => {
        if (!href.startsWith("/#")) return
        const anchor = href.replace("/", "")

        if (window.location.pathname === "/") {
            e.preventDefault()
            const el = document.querySelector(anchor)
            if (el) el.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            setTimeout(() => {
                const el = document.querySelector(hash)
                if (el) el.scrollIntoView({ behavior: "smooth" })
            }, 120)
        }
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
                scrolled
                    ? "bg-[#F3EEE3]/95 backdrop-blur-xl border-b border-[#E5DFD3] shadow-[0_2px_12px_rgba(17,17,17,0.04)]"
                    : "bg-[#F3EEE3]/80 backdrop-blur-md border-b border-[#E5DFD3]/80"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo & Brand Identity */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-xl bg-[#111111] flex items-center justify-center p-1.5 transition-transform duration-200 group-hover:scale-105 shadow-xs">
                        <Image
                            src="/logo.png"
                            alt="Zapiya Logo"
                            width={22}
                            height={22}
                            className="object-contain filter invert brightness-0"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#111111] text-lg font-bold tracking-tight font-sans">
                            Zapiya
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/25 px-2.5 py-0.5 rounded-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
                            100% Free
                        </span>
                    </div>
                </Link>

                {/* Floating Centered Pill Navigation (Warm Luxury Palette) */}
                <div className="hidden md:flex items-center gap-1 bg-[#EAE4D7]/70 p-1 rounded-full border border-[#DDD6C8] backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-xs font-medium text-[#66615B] hover:text-[#111111] px-3.5 py-1.5 rounded-full hover:bg-[#F3EEE3] hover:shadow-xs transition-all duration-150"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Obsidian / Terracotta CTA Button */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/templates"
                        className="group inline-flex items-center gap-2 rounded-lg bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] px-4 py-2 text-xs font-medium transition-colors shadow-xs"
                    >
                        <span>Build Free Resume</span>
                        <span className="text-[#F3EEE3]/70 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-white">
                            →
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[#111111] p-2 rounded-xl hover:bg-[#EAE4D7] transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#F3EEE3] border-b border-[#E5DFD3] px-6 py-6 flex flex-col gap-3 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    handleNavClick(e, link.href)
                                }}
                                className="text-[#111111] hover:text-[#D9541E] font-medium text-sm py-2 px-3 rounded-lg hover:bg-[#EAE4D7] transition"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-2">
                            <Link
                                href="/templates"
                                onClick={() => setMenuOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] text-xs font-medium px-4 py-3 text-center shadow-xs transition"
                            >
                                <span>Build Free Resume</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
