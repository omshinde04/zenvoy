// app/builder/[templateId]/layout.jsx

const TEMPLATE_TITLES = {
  "classic-ats": {
    title: "Classic ATS Resume Builder – Free Harvard Format (100% Free, No Signup)",
    desc: "Build a high-scoring single-column Harvard/Jake's ATS resume on Zapiya. 100% free, zero signup, no watermark, universal Times New Roman typography, and 1-click vector PDF download.",
  },
  "tech-minimal": {
    title: "Tech Minimal Resume Builder – Free Software Engineer ATS Template",
    desc: "Clean single-column resume template designed for software engineers and full-stack developers. Instant vector PDF download with zero watermarks on Zapiya.",
  },
  "tech-two-column": {
    title: "Tech Pro Resume Builder – Free Two-Column ATS Format",
    desc: "Two-column resume layout tailored for product companies, technical architects, and senior engineers. 100% free with local auto-save on Zapiya.",
  },
  "tech-bold-header": {
    title: "Tech Bold Header Resume Builder – Free Developer ATS Template",
    desc: "High-impact bold header resume template for experienced developers and tech leaders. 100% free vector PDF export on Zapiya.",
  },
}

export async function generateMetadata({ params }) {
  const { templateId } = await params
  const meta = TEMPLATE_TITLES[templateId] || {
    title: "100% Free ATS Resume Builder",
    desc: "Create clean, ATS-compliant resumes in minutes with zero signup and instant vector PDF export on Zapiya.",
  }

  const canonicalUrl = `https://www.zapiya.com/builder/${templateId || "classic-ats"}`

  return {
    title: meta.title,
    description: meta.desc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${meta.title} | Zapiya`,
      description: meta.desc,
      url: canonicalUrl,
      siteName: "Zapiya",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${meta.title} – Zapiya ATS Resume Builder`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | Zapiya`,
      description: meta.desc,
      images: ["/og-image.png"],
    },
  }
}

export default async function BuilderLayout({ children, params }) {
  const { templateId } = await params
  const meta = TEMPLATE_TITLES[templateId] || {
    title: "Classic ATS Resume Builder",
    desc: "100% Free ATS Resume Builder",
  }

  const canonicalUrl = `https://www.zapiya.com/builder/${templateId || "classic-ats"}`

  const builderJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${canonicalUrl}#app`,
        "name": meta.title,
        "url": canonicalUrl,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "featureList": [
          "100% Free Vector PDF Export",
          "Zero Watermarks",
          "No Signup Required",
          "ATS Single-Column Format",
          "Local Browser Auto-Save",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.zapiya.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Templates",
            "item": "https://www.zapiya.com/templates",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": meta.title,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(builderJsonLd) }}
      />
      {children}
    </>
  )
}

