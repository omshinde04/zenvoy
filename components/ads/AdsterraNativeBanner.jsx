"use client"

import { useEffect, useRef } from "react"

/**
 * Adsterra Native Banner (Safe, Non-Intrusive Sponsored Cards for zapiya.com)
 * Script: https://bauval.org/21/c06338512fd4e4c387ee687557c2168c
 * Container: container-c06338512fd4e4c387ee687557c2168c
 */
export default function AdsterraNativeBanner({ className = "" }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    // Prevent duplicate script loading
    if (containerRef.current.querySelector("script[data-adsterra-native]")) return

    const script = document.createElement("script")
    script.src = "https://bauval.org/21/c06338512fd4e4c387ee687557c2168c"
    script.async = true
    script.setAttribute("fetchpriority", "high")
    script.setAttribute("data-cfasync", "false")
    script.setAttribute("data-adsterra-native", "true")

    containerRef.current.appendChild(script)
  }, [])

  return (
    <div className={`my-8 flex flex-col items-center justify-center overflow-hidden text-center ${className}`}>
      <div className="flex items-center gap-2 mb-2 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]/40" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C867D]">
          Sponsored Resources
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]/40" />
      </div>
      <div
        ref={containerRef}
        className="w-full max-w-4xl mx-auto flex justify-center items-center min-h-[120px] rounded-2xl border border-[#E5DFD3] bg-[#FAF7F2] p-4 shadow-xs"
      >
        <div id="container-c06338512fd4e4c387ee687557c2168c" className="w-full"></div>
      </div>
    </div>
  )
}
