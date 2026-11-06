"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiHome, HiSparkles } from "react-icons/hi"
import { FaLayerGroup, FaBolt } from "react-icons/fa"
import { LuLayoutTemplate } from "react-icons/lu"

export default function Navbar() {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)

    // ✅ NAV LINKS
    const navLinks = [
        { name: "Home", href: "#home", icon: <HiHome /> },
        { name: "Features", href: "#features", icon: <HiSparkles /> },
        { name: "Templates", href: "/templates", icon: <LuLayoutTemplate /> },
        { name: "Pricing", href: "#pricing", icon: <FaLayerGroup /> },
    ]

    // 🔥 UNIVERSAL NAV HANDLER
    const handleNavClick = (e, href) => {
        if (!href.startsWith("#")) return

        e.preventDefault()

        if (window.location.pathname === "/") {
            const el = document.querySelector(href)
            if (el) el.scrollIntoView({ behavior: "smooth" })
        } else {
            router.push(`/${href}`)
        }
    }

    // 🔥 HANDLE SCROLL AFTER ROUTE CHANGE
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/70 backdrop-blur-xl border-b border-[#1E293B]">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Zapiya Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <span className="text-white text-xl font-bold tracking-tight">
                        Zapiya
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="group relative flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-white transition"
                        >
                            <span className="text-base opacity-80 group-hover:opacity-100">
                                {link.icon}
                            </span>

                            {link.name}

                            {/* underline */}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#6366F1] transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Right CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/templates"
                        className="flex items-center gap-2 text-sm bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-5 py-2 rounded-lg shadow-lg shadow-[#6366F1]/20 transition"
                    >
                        <FaBolt className="text-xs" />
                        Start Building →
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-[#94A3B8] p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0F172A] border-b border-[#1E293B] px-6 py-6 flex flex-col gap-5"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    handleNavClick(e, link.href)
                                }}
                                className="flex items-center gap-3 text-[#94A3B8] hover:text-white text-sm"
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-2">
                            <Link
                                href="/templates"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-center gap-2 bg-[#6366F1] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center"
                            >
                                <FaBolt className="text-xs" />
                                Start Building →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
