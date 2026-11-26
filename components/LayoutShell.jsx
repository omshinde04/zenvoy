"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import ProjectInquiryPopup from "@/components/public/ProjectInquiryPopup"
import MonetagVignette from "@/components/ads/MonetagVignette"

export default function LayoutShell({ children }) {
    const pathname = usePathname()
    const isBuilder = pathname?.startsWith("/builder")
    const isProjectsPage = pathname === "/college-projects"

    return (
        <>
            <MonetagVignette />
            {!isBuilder && <Navbar />}
            <main className={!isBuilder ? "pt-16" : ""}>
                {children}
            </main>
            {!isProjectsPage && <ProjectInquiryPopup />}
            {!isBuilder && <Footer />}
        </>
    )
}