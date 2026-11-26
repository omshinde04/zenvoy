"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Monetag Safe Vignette Banner (Zone: 12354363)
 * - Compliant with Better Ads Standards.
 * - Safely loads on public navigation pages (Home, Guides, Templates, About, Contact).
 * - Excluded inside the interactive resume builder (/builder) so typing, editing, and PDF downloads remain 100% clean and uninterrupted.
 */
export default function MonetagVignette() {
  const pathname = usePathname()
  const isBuilder = pathname?.startsWith("/builder")

  useEffect(() => {
    // Keep builder editing 100% distraction-free
    if (isBuilder) return

    // Prevent duplicate script loading
    if (document.querySelector('script[data-zone="12354363"]')) return

    try {
      const script = document.createElement("script")
      script.dataset.zone = "12354363"
      script.src = "https://n6wxm.com/vignette.min.js"
      script.async = true
      document.body.appendChild(script)
    } catch {
      // Ignore injection error
    }
  }, [isBuilder])

  return null
}
