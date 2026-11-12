"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import { FaArrowRight, FaStar, FaCheck } from "react-icons/fa"

export default function Navbar() {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Templates", href: "/templates", badge: "Harvard Spec" },
        { name: "Guides", href: "/guides" },
        { name: "Pricing", href: "/#pricing", badge: "Free" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    const handleNavClick = (e, href) => {
        if (href === "/" || href === "/#home") {
            if (window.location.pathname === "/") {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
                return
            }
        }
        if (!href.startsWith("/#")) return
        const anchor = href.replace("/", "")

        if (window.location.pathname === "/") {
            e.preventDefault()
            const el = document.querySelector(anchor)
            if (el) el.scrollIntoView({ behavior: "smooth" })
        }
    }

    // Scroll listener for glassmorphism navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Smooth anchor navigation from hash on load
    useEffect(() => {
        const hash = window.location.hash
        if (hash === "#home") {
            window.scrollTo({ top: 0 })
        } else if (hash) {
            setTimeout(() => {
                const el = document.querySelector(hash)
                if (el) el.scrollIntoView({ behavior: "smooth" })
            }, 120)
        }
    }, [])

    // Prevent body scrolling when mobile drawer is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [menuOpen])

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
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

                    {/* Floating Centered Pill Navigation (Desktop) */}
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

                    {/* Obsidian / Terracotta CTA Button (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/builder/classic-ats"
                            className="group inline-flex items-center gap-2 rounded-full bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] px-5 py-2 text-xs font-medium transition-colors shadow-xs"
                        >
                            <span>Build Free Resume</span>
                            <span className="text-[#F3EEE3]/70 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-white">
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden text-[#111111] p-2.5 rounded-full bg-white/70 border border-[#E5DFD3] hover:bg-[#111111] hover:text-white transition-all shadow-2xs"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open mobile menu"
                    >
                        <HiMenu size={20} />
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer (Right-to-Left Slide-over Panel with Backdrop) */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* 1. Dark Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 bg-[#111111]/50 backdrop-blur-sm z-50 md:hidden"
                            aria-hidden="true"
                        />

                        {/* 2. Slide-Over Panel (Right to Left) */}
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 280 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-[#FAF7F2] border-l border-[#E5DFD3] shadow-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto md:hidden"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile Navigation"
                        >
                            {/* Panel Header */}
                            <div>
                                <div className="flex items-center justify-between pb-6 border-b border-[#E5DFD3]">
                                    <Link
                                        href="/"
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center gap-2.5"
                                    >
                                        <div className="w-8 h-8 rounded-xl bg-[#111111] flex items-center justify-center p-1.5 shadow-xs">
                                            <Image
                                                src="/logo.png"
                                                alt="Zapiya Logo"
                                                width={20}
                                                height={20}
                                                className="object-contain filter invert brightness-0"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#111111] text-base font-bold tracking-tight">
                                                Zapiya
                                            </span>
                                            <span className="text-[10px] font-semibold text-[#D9541E] bg-[#D9541E]/10 border border-[#D9541E]/20 px-2 py-0.5 rounded-md">
                                                100% Free
                                            </span>
                                        </div>
                                    </Link>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setMenuOpen(false)}
                                        className="w-9 h-9 rounded-full bg-white border border-[#E5DFD3] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all shadow-2xs"
                                        aria-label="Close mobile menu"
                                    >
                                        <HiX size={18} />
                                    </button>
                                </div>

                                {/* Navigation Links with Staggered Visual Feel */}
                                <nav className="py-6 flex flex-col gap-1.5">
                                    {navLinks.map((link, idx) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: 16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.08 + idx * 0.04, duration: 0.25 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={(e) => {
                                                    setMenuOpen(false)
                                                    handleNavClick(e, link.href)
                                                }}
                                                className="group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#111111] hover:bg-[#F3EEE3] hover:text-[#D9541E] transition-all"
                                            >
                                                <span>{link.name}</span>
                                                <div className="flex items-center gap-2">
                                                    {link.badge && (
                                                        <span className="text-[10px] font-medium text-[#66615B] bg-[#EAE4D7] px-2 py-0.5 rounded-full group-hover:bg-[#D9541E]/10 group-hover:text-[#D9541E] transition-colors">
                                                            {link.badge}
                                                        </span>
                                                    )}
                                                    <FaArrowRight className="text-xs text-[#DDD6C8] group-hover:text-[#D9541E] group-hover:translate-x-0.5 transition-all" />
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>

                            {/* Panel Footer / Action Button & Brand Proof */}
                            <div className="pt-6 border-t border-[#E5DFD3] space-y-4">
                                <Link
                                    href="/builder/classic-ats"
                                    onClick={() => setMenuOpen(false)}
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] hover:bg-[#D9541E] text-[#FAF7F2] text-sm font-semibold px-5 py-3.5 text-center shadow-md shadow-black/10 transition-colors"
                                >
                                    <span>Build Free Resume</span>
                                    <FaArrowRight className="text-xs" />
                                </Link>

                                {/* Micro Trust Signals */}
                                <div className="space-y-1.5 pt-1 text-[11px] text-[#66615B]">
                                    <p className="flex items-center gap-1.5 font-medium text-[#111111]">
                                        <FaCheck className="text-[#D9541E] text-[10px]" /> 100% Free • No Login Required
                                    </p>
                                    <p className="flex items-center gap-1.5 font-medium text-[#111111]">
                                        <FaCheck className="text-[#D9541E] text-[10px]" /> Single-Column Harvard Standard
                                    </p>
                                </div>

                                <p className="text-[10px] text-[#8C867D] pt-2">
                                    Zapiya © 2026 • Client-Side Private
                                </p>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
