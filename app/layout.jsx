// app/layout.jsx
"use client"

import "./globals.css"
import { AuthProvider } from "@/lib/AuthContext"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <LayoutShell>{children}</LayoutShell>
        </AuthProvider>
      </body>
    </html>
  )
}

function LayoutShell({ children }) {
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