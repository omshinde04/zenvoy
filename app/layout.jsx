// app/layout.jsx
import "./globals.css"
import LayoutShell from "@/components/LayoutShell"

// ✅ SEO METADATA
export const metadata = {
  metadataBase: new URL("https://zapiya.com"),
  verification: {
    google: "google4fd98efd21827253",
  },
  title: {
    default: "Zapiya – Build Smart Resumes",
    template: "%s | Zapiya",
  },

  description:
    "Zapiya is a fast, free, ATS-friendly resume builder for developers and students. Create professional resumes and export instant vector PDFs with zero watermark.",

  keywords: [
    "resume builder",
    "free resume builder",
    "ATS resume",
    "developer resume",
    "Zapiya",
    "resume maker",
  ],

  authors: [{ name: "Zapiya Team" }],
  creator: "Zapiya",
  publisher: "Zapiya",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Zapiya – Build Smart. Stand Out.",
    description:
      "Create professional, ATS-friendly resumes with Zapiya.",
    url: "https://zapiya.com",
    siteName: "Zapiya",
    images: ["/logo.png"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zapiya – Build Smart. Stand Out.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}