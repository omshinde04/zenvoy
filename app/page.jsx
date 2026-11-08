// app/page.jsx
import Hero from "@/components/public/Hero"
import Segments from "@/components/public/Segments"
import Features from "@/components/public/Features"
import Pricing from "@/components/public/Pricing"
import FAQ from "@/components/public/FAQ"
import CTA from "@/components/public/CTA"
import GuidesPreview from "@/components/public/GuidesPreview"
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
  const homeSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://www.zapiya.com/#app",
        "name": "Zapiya ATS Resume Builder",
        "url": "https://www.zapiya.com",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires modern HTML5 web browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "100% Free Forever with Zero Paywalls, No Account Required, and Unlimited Vector PDF Downloads",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "14820",
          "bestRating": "5",
          "worstRating": "1",
        },
        "featureList": [
          "100% Free Forever",
          "No Signup or Login Required",
          "Zero Watermarks",
          "Single-Column Harvard ATS Standard Layouts",
          "Times New Roman Recruiter-Approved Typography",
          "Instant Vector PDF Export with Selectable Text",
          "100% Private Client-Side In-Browser Storage",
          "JSON Backup & Offline Draft Restore",
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://www.zapiya.com/#howto",
        "name": "How to Build a High-Scoring ATS Resume for Free",
        "description": "Step-by-step instructions to create an ATS-compliant resume and export a clean vector PDF in under 5 minutes without creating an account.",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0",
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Choose a Single-Column ATS Template",
            "text": "Select a battle-tested template like the Harvard Classic ATS or Tech Minimal layout to guarantee 99%+ parsing success across Workday, Greenhouse, and Taleo.",
            "url": "https://www.zapiya.com/templates",
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Write Experience with Quantifiable Metrics",
            "text": "Apply Google's X-Y-Z formula: Accomplished [X] as measured by [Y], by doing [Z]. Integrate strong technical action verbs.",
            "url": "https://www.zapiya.com/builder/classic-ats",
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Categorize Technical Skills Clearly",
            "text": "Group skills objectively under Languages, Frameworks, Databases, and Tools. Omit graphic skill bars that confuse automated parsers.",
            "url": "https://www.zapiya.com/builder/classic-ats",
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Export High-Resolution Vector PDF",
            "text": "Generate a crisp vector PDF directly within your browser. 100% free with selectable text, zero watermarks, and zero paywalls.",
            "url": "https://www.zapiya.com/builder/classic-ats",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.zapiya.com/#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  }

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemas) }}
      />
      <Hero />
      <Segments />
      <Features />
      <GuidesPreview />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}
