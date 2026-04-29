"use client"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/lib/AuthContext"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiHome, HiSparkles } from "react-icons/hi"
import { FaLayerGroup } from "react-icons/fa"
import { LuLayoutTemplate } from "react-icons/lu"

export default function Navbar() {
    const { user, logout } = useAuth()
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogout = async () => {
        await logout()
        router.push("/")
    }

    // ✅ FINAL NAV LINKS
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

        // If already on home → scroll directly
        if (window.location.pathname === "/") {
            const el = document.querySelector(href)
            if (el) el.scrollIntoView({ behavior: "smooth" })
        } else {
            // Navigate to home with hash
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

                {/* Right */}
                <div className="hidden md:flex items-center gap-3">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-[#94A3B8]">
                                Hey{" "}
                                <span className="text-white font-medium">
                                    {user.name.split(" ")[0]}
                                </span>
                            </span>

                            <button
                                onClick={handleLogout}
                                className="text-sm px-4 py-1.5 rounded-lg border border-[#334155] hover:border-[#6366F1] text-[#94A3B8] hover:text-white transition"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="text-sm text-[#94A3B8] hover:text-white px-4 py-1.5">
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="text-sm bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-5 py-2 rounded-lg shadow-lg shadow-[#6366F1]/20"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-[#94A3B8]"
                    onClick={() => setMenuOpen(!menuOpen)}
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

                        {user ? (
                            <button onClick={handleLogout} className="text-red-400 text-left text-sm">
                                Logout
                            </button>
                        ) : (
                            <div className="flex flex-col gap-3 pt-3">
                                <Link href="/login" className="text-[#94A3B8] text-sm">
                                    Login
                                </Link>
                                <Link href="/register" className="bg-[#6366F1] text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}