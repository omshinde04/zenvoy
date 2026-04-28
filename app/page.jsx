"use client"

import Hero from "@/components/public/Hero"
import Segments from "@/components/public/Segments"
import Features from "@/components/public/Features"
import Pricing from "@/components/public/Pricing"
import FAQ from "@/components/public/FAQ"
import CTA from "@/components/public/CTA"

export default function HomePage() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      <Hero />
      <Segments />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}