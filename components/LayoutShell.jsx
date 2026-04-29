"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"

export default function LayoutShell({ children }) {
    const pathname = usePathname()
    const isBuilder = pathname?.startsWith("/builder")

    return (
        <>
            {!isBuilder && <Navbar />}
            <main className={!isBuilder ? "pt-16" : ""}>
                {children}
            </main>
            {!isBuilder && <Footer />}
        </>
    )
}