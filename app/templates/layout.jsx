// app/templates/layout.jsx

export const metadata = {
  title: "100% Free ATS Resume Templates for Developers & Engineers",
  description:
    "Explore proven, 100% free ATS-compliant resume templates. Harvard single-column layout, Tech Minimal, and Tech Pro formats with Times New Roman typography and instant vector PDF export.",
  alternates: {
    canonical: "https://www.zapiya.com/templates",
  },
  openGraph: {
    title: "100% Free ATS Resume Templates – Zapiya",
    description:
      "Explore proven, 100% free ATS-compliant resume templates. Zero signup, no watermarks, instant vector PDF.",
    url: "https://www.zapiya.com/templates",
    siteName: "Zapiya",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "100% Free ATS Resume Templates – Zapiya",
    description:
      "Harvard single-column and developer resume templates. 100% free with instant vector PDF download.",
    images: ["/logo.png"],
  },
}

const templatesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.zapiya.com/templates#collection",
      "name": "100% Free ATS Resume Templates Gallery",
      "url": "https://www.zapiya.com/templates",
      "description": "High-scoring, ATS-compliant resume templates engineered for software engineers, product designers, and university students.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Classic ATS (Harvard Format)",
            "url": "https://www.zapiya.com/builder/classic-ats",
            "description": "The gold-standard single-column Harvard layout with Times New Roman typography. 99.4% ATS parsing success rate.",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tech Minimal",
            "url": "https://www.zapiya.com/builder/tech-minimal",
            "description": "Modern minimalist single-column format tailored for software engineers and full-stack developers.",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tech Pro (Two Column)",
            "url": "https://www.zapiya.com/builder/tech-two-column",
            "description": "Two-column resume layout tailored for product companies, technical architects, and senior developers.",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Tech Bold Header",
            "url": "https://www.zapiya.com/builder/tech-bold-header",
            "description": "Prominent header resume template for experienced developers and technical leads.",
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.zapiya.com/templates#breadcrumb",
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
      ],
    },
  ],
}

export default function TemplatesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(templatesJsonLd) }}
      />
      {children}
    </>
  )
}

