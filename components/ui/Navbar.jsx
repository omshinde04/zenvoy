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
                    ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                    : "bg-white/60 backdrop-blur-md border-b border-slate-200/40"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo & Brand Identity */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center p-1.5 transition-transform duration-200 group-hover:scale-105 shadow-sm ring-1 ring-slate-900/10">
                        <Image
                            src="/logo.png"
                            alt="Zapiya Logo"
                            width={22}
                            height={22}
                            className="object-contain filter invert brightness-0"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-slate-900 text-lg font-bold tracking-tight font-sans">
                            Zapiya
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            100% Free
                        </span>
                    </div>
                </Link>

                {/* Floating Centered Pill Navigation (Linear/Raycast Style) */}
                <div className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-xs font-medium text-slate-600 hover:text-slate-900 px-3.5 py-1.5 rounded-full hover:bg-white hover:shadow-xs transition-all duration-150"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Premium Obsidian Magnetic CTA Button */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/templates"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 text-xs font-semibold shadow-sm ring-1 ring-slate-900/10 transition-all duration-200 hover:shadow-md hover:ring-slate-900/20 active:scale-95"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                        </span>
                        <span className="tracking-tight">Build Free Resume</span>
                        <span className="text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white">
                            →
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition"
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
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 flex flex-col gap-3 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    handleNavClick(e, link.href)
                                }}
                                className="text-slate-700 hover:text-indigo-600 font-medium text-sm py-2 px-3 rounded-lg hover:bg-slate-50 transition"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-2">
                            <Link
                                href="/templates"
                                onClick={() => setMenuOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white text-xs font-semibold px-4 py-3 text-center shadow-md hover:bg-slate-800 transition"
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
