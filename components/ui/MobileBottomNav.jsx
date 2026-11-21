// components/ui/MobileBottomNav.jsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  FaHome,
  FaLayerGroup,
  FaBolt,
  FaGraduationCap,
  FaBookOpen,
} from "react-icons/fa"

export default function MobileBottomNav() {
  const pathname = usePathname()

  // Define the 5 primary mobile app tabs
  const tabs = [
    {
      name: "Home",
      href: "/",
      icon: FaHome,
      exact: true,
    },
    {
      name: "Templates",
      href: "/templates",
      icon: FaLayerGroup,
    },
    {
      name: "Builder",
      href: "/builder/classic-ats",
      icon: FaBolt,
      isCenterAction: true,
    },
    {
      name: "Projects",
      href: "/college-projects",
      icon: FaGraduationCap,
      badge: "2026",
    },
    {
      name: "Guides",
      href: "/guides",
      icon: FaBookOpen,
    },
  ]

  const isTabActive = (tab) => {
    if (tab.exact) {
      return pathname === tab.href
    }
    return pathname.startsWith(tab.href)
  }

  // If inside the builder editor screen, adjust to avoid covering builder controls
  const isBuilder = pathname?.startsWith("/builder")

  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-xl border-t border-[#E5DFD3] shadow-[0_-4px_20px_rgba(17,17,17,0.06)] pb-[max(env(safe-area-inset-bottom),8px)] pt-2 transition-transform duration-200 ${
        isBuilder ? "hidden" : "block"
      }`}
      aria-label="Mobile Bottom Navigation"
    >
      <div className="max-w-md mx-auto px-4 flex items-center justify-between">
        {tabs.map((tab) => {
          const active = isTabActive(tab)
          const Icon = tab.icon

          if (tab.isCenterAction) {
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className="relative -top-3 flex flex-col items-center group focus:outline-none"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-200 active:scale-95 ${
                    active
                      ? "bg-[#D9541E] shadow-[#D9541E]/40"
                      : "bg-[#111111] group-hover:bg-[#D9541E] shadow-black/20"
                  }`}
                >
                  <Icon className="text-base text-white" />
                </div>
                <span
                  className={`text-[10px] font-bold mt-1 tracking-tight transition-colors ${
                    active ? "text-[#D9541E]" : "text-[#111111]"
                  }`}
                >
                  {tab.name}
                </span>
              </Link>
            )
          }

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className="relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-colors focus:outline-none"
            >
              <div className="relative flex items-center justify-center">
                <Icon
                  className={`text-lg transition-colors duration-150 ${
                    active ? "text-[#D9541E]" : "text-[#66615B]"
                  }`}
                />
                {tab.badge && (
                  <span className="absolute -top-1 -right-3 px-1 py-0.2 bg-[#D9541E] text-white text-[8px] font-bold rounded-full">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] font-semibold mt-1 tracking-tight transition-colors ${
                  active ? "text-[#D9541E]" : "text-[#66615B]"
                }`}
              >
                {tab.name}
              </span>
              {active && (
                <motion.span
                  layoutId="activeBottomTab"
                  className="w-1 h-1 rounded-full bg-[#D9541E] mt-0.5"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
