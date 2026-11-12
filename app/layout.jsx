// app/layout.jsx
import "./globals.css"
import LayoutShell from "@/components/LayoutShell"
import ZapiyaTracker from "@/components/ZapiyaTracker"

// ✅ WORLD-CLASS SEO METADATA — 100% FREE ATS RESUME BUILDER
export const metadata = {
  metadataBase: new URL("https://www.zapiya.com"),
  alternates: {
    canonical: "https://www.zapiya.com",
  },
  verification: {
    google: "google4fd98efd21827253",
  },
  title: {
    default: "Zapiya – 100% Free ATS Resume Builder | No Signup, No Watermark",
    template: "%s | Zapiya",
  },
  description:
    "Build high-scoring ATS-friendly resumes 100% free with Zapiya. Zero paywalls, no signup required, no watermarks. Harvard single-column & tech standard formats with instant vector PDF download.",
  keywords: [
    "Zapiya",
    "Zapiya ATS",
    "Zapiya resume builder",
    "free resume builder",
    "100% free resume builder",
    "free ATS resume builder",
    "ATS resume builder without signup",
    "free resume maker no watermark",
    "software engineer resume builder free",
    "developer resume builder",
    "Harvard ATS resume template free",
    "free vector PDF resume maker",
    "Times New Roman resume builder",
    "best free resume builder 2026",
    "resume builder without paywall",
    "free tech resume maker",
    "client-side private resume builder",
    "single column ATS resume",
    "open source resume builder free",
    "ATS friendly resume maker no login"
  ],
  authors: [{ name: "Zapiya Team", url: "https://www.zapiya.com" }],
  creator: "Zapiya",
  publisher: "Zapiya",
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Zapiya – 100% Free ATS Resume Builder | Zero Signup, Zero Watermark",
    description:
      "The truly 100% free ATS resume builder. No subscriptions, no credit card, no sign-up, no watermarks. Export crisp vector PDFs instantly.",
    url: "https://www.zapiya.com",
    siteName: "Zapiya",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zapiya – 100% Free ATS Resume Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapiya – 100% Free ATS Resume Builder | No Signup, Zero Paywall",
    description:
      "Build high-scoring ATS resumes 100% free. Zero paywalls, no signup, no watermarks, instant vector PDF.",
    images: ["/og-image.png"],
    creator: "@zapiya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// ✅ JSON-LD STRUCTURED DATA SCHEMAS FOR GOOGLE RICH RESULTS & BRAND ENTITY RECOGNITION
const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://www.zapiya.com/#webapp",
      "name": "Zapiya ATS Resume Builder",
      "alternateName": ["Zapiya", "Zapiya Resume Builder", "Zapiya ATS", "Zapiya.com"],
      "url": "https://www.zapiya.com",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "disambiguatingDescription": "Zapiya (www.zapiya.com) is a 100% free online ATS resume builder for software engineers, developers, and students, distinct from the Zapya file-sharing tool.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "100% Free Forever with Zero Paywalls and Unlimited Vector PDF Downloads"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "14820",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "100% Free Forever",
        "No Signup or Login Required",
        "Zero Watermarks",
        "ATS-Compliant Layouts (Harvard & Tech Industry Standards)",
        "Times New Roman Standard Typography",
        "Instant High-Resolution Vector PDF Export",
        "100% Client-Side Privacy (Zero Data Storage on Servers)",
        "Local Draft Auto-Save and JSON Backup"
      ]
    },
    {
      "@type": "Brand",
      "@id": "https://www.zapiya.com/#brand",
      "name": "Zapiya",
      "alternateName": ["Zapiya ATS", "Zapiya Resume Builder", "Zapiya.com"],
      "url": "https://www.zapiya.com",
      "logo": "https://www.zapiya.com/logo.png",
      "disambiguatingDescription": "Zapiya is an independent, 100% free ATS resume builder platform, distinct from the Zapya file-sharing mobile app.",
      "sameAs": [
        "https://github.com/omshinde04/zenvoy"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.zapiya.com/#organization",
      "name": "Zapiya",
      "alternateName": ["Zapiya Resume Builder", "Zapiya ATS"],
      "url": "https://www.zapiya.com",
      "disambiguatingDescription": "Zapiya is a privacy-first, 100% free ATS resume builder founded by Om Vilas Shinde, built for developers, engineers, and students.",
      "founder": {
        "@type": "Person",
        "name": "Om Vilas Shinde",
        "jobTitle": "Founder & Lead Engineer",
        "url": "https://www.zapiya.com/about"
      },
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.zapiya.com/logo.png",
        "width": 1024,
        "height": 1024
      },
      "sameAs": [
        "https://github.com/omshinde04/zenvoy"
      ],
      "description": "Zapiya is a privacy-first, 100% free ATS resume builder founded by Om Vilas Shinde, built for developers, engineers, and students."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.zapiya.com/#website",
      "url": "https://www.zapiya.com",
      "name": "Zapiya",
      "alternateName": ["Zapiya ATS Resume Builder", "Zapiya.com"],
      "publisher": {
        "@id": "https://www.zapiya.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.zapiya.com/templates?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500;1,6..72,600&family=Playfair+Display:ital,wght@1,400;1,600;1,700&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <meta name="google-adsense-account" content="ca-pub-7778964423995383" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7778964423995383"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#F3EEE3] text-[#111111] antialiased selection:bg-[#D9541E] selection:text-[#F3EEE3]">
        <ZapiyaTracker />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
