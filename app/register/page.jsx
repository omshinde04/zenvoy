// app/register/page.jsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/lib/AuthContext"

export default function RegisterPage() {
    const { register } = useAuth()
    const router = useRouter()

    const [form, setForm] = useState({ name: "", email: "", password: "" })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setError("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        const data = await register(form.name, form.email, form.password)

        if (data.success) {
            router.push("/templates")
        } else {
            setError(data.message)
        }

        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">

            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6366F1] opacity-10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/">
                        <span className="text-2xl font-bold">
                            <span className="text-[#6366F1]">Z</span>
                            <span className="text-white">envoy</span>
                        </span>
                    </Link>
                    <p className="text-[#6B7280] text-sm mt-2">
                        Create your free account
                    </p>
                </div>

                {/* Card */}
                <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8">

                    {/* Error */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3 mb-6"
                        >
                            {error}
                        </motion.div>
                    )}

                    <div className="flex flex-col gap-5">

                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#CBD5E1] text-sm font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Rahul Sharma"
                                className="bg-[#0F172A] border border-[#334155] text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#6366F1] transition-colors placeholder-[#475569]"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#CBD5E1] text-sm font-medium">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="rahul@email.com"
                                className="bg-[#0F172A] border border-[#334155] text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#6366F1] transition-colors placeholder-[#475569]"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#CBD5E1] text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Minimum 8 characters"
                                className="bg-[#0F172A] border border-[#334155] text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-[#6366F1] transition-colors placeholder-[#475569]"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-[#6366F1] hover:bg-[#4F46E5] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-lg py-3 transition-colors mt-1"
                        >
                            {loading ? "Creating account..." : "Create Account"}
                        </button>

                    </div>

                    {/* Login link */}
                    <p className="text-center text-[#6B7280] text-sm mt-6">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-[#6366F1] hover:text-[#818CF8] font-medium transition-colors"
                        >
                            Login
                        </Link>
                    </p>

                </div>

                {/* Footer note */}
                <p className="text-center text-[#475569] text-xs mt-6">
                    Free forever. No credit card required.
                </p>

            </motion.div>
        </div>
    )
}