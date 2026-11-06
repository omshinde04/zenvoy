"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBolt } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)

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
        const hash = window.location.hash
        if (hash) {
            setTimeout(() => {
                const el = document.querySelector(hash)
                if (el) el.scrollIntoView({ behavior: "smooth" })
            }, 120)
        }
    }, [])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center shadow-sm p-1.5 transition group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="Zapiya Logo"
                            width={32}
                            height={32}
                            className="object-contain filter invert brightness-0"
                        />
                    </div>
                    <span className="text-slate-900 text-xl font-bold tracking-tight font-comfortaa">
                        Zapiya
                    </span>
                    <span className="hidden sm:inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full ml-1 font-comfortaa">
                        100% Free
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors py-1 relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 transition-all duration-200 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Right CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/templates"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold px-4.5 py-2.5 rounded-xl shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/30 font-comfortaa"
                    >
                        <FaBolt className="text-xs text-amber-300" />
                        Build Free Resume →
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition"
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
                        className="md:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    handleNavClick(e, link.href)
                                }}
                                className="text-slate-700 hover:text-indigo-600 font-medium text-base py-1.5"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-2">
                            <Link
                                href="/templates"
                                onClick={() => setMenuOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold px-4 py-3 rounded-xl text-center shadow-md font-comfortaa"
                            >
                                <FaBolt className="text-xs text-amber-300" />
                                Build Free Resume →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
