"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import MobileBottomNav from "@/components/ui/MobileBottomNav"
import ProjectInquiryPopup from "@/components/public/ProjectInquiryPopup"

export default function LayoutShell({ children }) {
    const pathname = usePathname()
    const isBuilder = pathname?.startsWith("/builder")
    const isProjectsPage = pathname === "/college-projects"

    return (
        <>
            {!isBuilder && <Navbar />}
            <main className={!isBuilder ? "pt-16 pb-20 md:pb-0" : ""}>
                {children}
            </main>
            {!isProjectsPage && <ProjectInquiryPopup />}
            <MobileBottomNav />
            {!isBuilder && <Footer />}
        </>
    )
}