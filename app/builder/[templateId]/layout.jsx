// app/builder/[templateId]/layout.jsx

const TEMPLATE_TITLES = {
  "classic-ats": {
    title: "Classic ATS Resume Builder – 100% Free Harvard Format",
    desc: "Build a high-scoring single-column Harvard/Jake's ATS resume. 100% free, zero signup, no watermark, universal Times New Roman typography.",
  },
  "tech-minimal": {
    title: "Tech Minimal Resume Builder – 100% Free ATS Template",
    desc: "Clean single-column resume template designed for software engineers and developers. Instant vector PDF download with zero watermarks.",
  },
  "tech-two-column": {
    title: "Tech Pro Resume Builder – Free Two-Column ATS Format",
    desc: "Two-column resume layout tailored for product companies and senior engineers. 100% free with local auto-save.",
  },
  "tech-bold-header": {
    title: "Tech Bold Header Resume Builder – Free ATS Template",
    desc: "High-impact bold header resume template for experienced developers. 100% free vector PDF export.",
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
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | Zapiya`,
      description: meta.desc,
      images: ["/logo.png"],
    },
  }
}

export default function BuilderLayout({ children }) {
  return <>{children}</>
}
