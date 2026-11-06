// app/layout.jsx
import "./globals.css"
import LayoutShell from "@/components/LayoutShell"

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
    "Zapiya resume builder",
    "Zapiya",
    "best free resume builder 2026",
    "resume builder without paywall",
    "free tech resume maker",
    "client-side private resume builder",
    "single column ATS resume"
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
        url: "/logo.png",
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
    images: ["/logo.png"],
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

// ✅ JSON-LD STRUCTURED DATA SCHEMAS FOR GOOGLE RICH RESULTS
const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://www.zapiya.com/#webapp",
      "name": "Zapiya Resume Builder",
      "url": "https://www.zapiya.com",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
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
      "@type": "Organization",
      "@id": "https://www.zapiya.com/#organization",
      "name": "Zapiya",
      "url": "https://www.zapiya.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.zapiya.com/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "Zapiya is a privacy-first, 100% free ATS resume builder built for developers, engineers, and students."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.zapiya.com/#website",
      "url": "https://www.zapiya.com",
      "name": "Zapiya",
      "publisher": {
        "@id": "https://www.zapiya.com/#organization"
      }
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
