// lib/AuthContext.jsx
"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Check if user is logged in on app load
    useEffect(() => {
        fetchMe()
    }, [])

    const fetchMe = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
                { credentials: "include" }
            )
            const data = await res.json()
            if (data.success) setUser(data.user)
            else setUser(null)
        } catch {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    const login = async (email, password) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            }
        )
        const data = await res.json()
        if (data.success) setUser(data.user)
        return data
    }

    const register = async (name, email, password) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ name, email, password }),
            }
        )
        const data = await res.json()
        if (data.success) setUser(data.user)
        return data
    }

    const logout = async () => {
        await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
            { method: "POST", credentials: "include" }
        )
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)