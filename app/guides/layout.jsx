// app/guides/layout.jsx
import { guides } from "@/lib/guidesData"

export const metadata = {
  title: "ATS Resume Guides & Developer Career Advice | Zapiya",
  description:
    "Expert technical guides on creating ATS-compliant resumes, Harvard single-column layouts, action verbs for developers, and recruiter screening benchmarks.",
  alternates: {
    canonical: "https://www.zapiya.com/guides",
  },
  openGraph: {
    title: "ATS Resume Guides & Developer Career Advice | Zapiya",
    description:
      "Expert technical guides on creating ATS-compliant resumes, Harvard formats, and action verbs for developers.",
    url: "https://www.zapiya.com/guides",
    siteName: "Zapiya",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATS Resume Guides & Developer Career Advice | Zapiya",
    description:
      "Expert technical guides on creating ATS-compliant resumes, Harvard formats, and action verbs for developers.",
    images: ["/logo.png"],
  },
}

const guidesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.zapiya.com/guides#collection",
      "name": "ATS Resume Guides & Developer Career Advice Hub",
      "url": "https://www.zapiya.com/guides",
      "description":
        "Expert technical guides on creating ATS-compliant resumes, Harvard single-column layouts, action verbs for developers, and recruiter screening benchmarks.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": guides.map((g, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": g.title,
          "url": `https://www.zapiya.com/guides/${g.slug}`,
          "description": g.summary,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.zapiya.com/guides#breadcrumb",
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
          "name": "Guides",
          "item": "https://www.zapiya.com/guides",
        },
      ],
    },
  ],
}

export default function GuidesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesJsonLd) }}
      />
      {children}
    </>
  )
}
