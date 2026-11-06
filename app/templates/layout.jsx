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

export default function TemplatesLayout({ children }) {
  return <>{children}</>
}

