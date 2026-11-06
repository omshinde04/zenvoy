// app/page.jsx
import Hero from "@/components/public/Hero"
import Segments from "@/components/public/Segments"
import Features from "@/components/public/Features"
import Pricing from "@/components/public/Pricing"
import FAQ from "@/components/public/FAQ"
import CTA from "@/components/public/CTA"
import { faqs } from "@/lib/faqData"

export const metadata = {
  title: "Zapiya – #1 Free ATS Resume Builder | Zero Signup, 100% Free Forever",
  description:
    "Build high-scoring ATS resumes 100% free with Zapiya. Zero paywalls, no signup required, no watermarks. Harvard single-column & tech standard formats with instant vector PDF download.",
  alternates: {
    canonical: "https://www.zapiya.com",
  },
}

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }

  return (
    <div className="bg-[#0F172A] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Segments />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}
