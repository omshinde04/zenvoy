"use client"

import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // =====================================================
    // CHECK AUTH ON APP LOAD
    // =====================================================

    useEffect(() => {
        fetchMe()
    }, [])

    // =====================================================
    // GET CURRENT USER
    // =====================================================

    const fetchMe = async () => {

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
                {
                    credentials: "include",
                }
            )

            const data = await res.json()

            if (data.success) {
                setUser(data.user)
            } else {
                setUser(null)
            }

        } catch (error) {

            console.error("FETCH ME ERROR:", error)

            setUser(null)

        } finally {

            setLoading(false)
        }
    }

    // =====================================================
    // LOGIN
    // =====================================================

    const login = async (email, password) => {

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            )

            const data = await res.json()

            if (data.success) {
                setUser(data.user)
            }

            return data

        } catch (error) {

            console.error("LOGIN ERROR:", error)

            return {
                success: false,
                message: "Something went wrong",
            }
        }
    }

    // =====================================================
    // REGISTER
    // =====================================================

    const register = async (name, email, password) => {

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                }
            )

            const data = await res.json()

            // IMPORTANT:
            // DO NOT SET USER HERE
            // REGISTER SHOULD NOT AUTO LOGIN

            return data

        } catch (error) {

            console.error("REGISTER ERROR:", error)

            return {
                success: false,
                message: "Something went wrong",
            }
        }
    }

    // =====================================================
    // LOGOUT
    // =====================================================

    const logout = async () => {

        try {

            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
                {
                    method: "POST",
                    credentials: "include",
                }
            )

            setUser(null)

        } catch (error) {

            console.error("LOGOUT ERROR:", error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)