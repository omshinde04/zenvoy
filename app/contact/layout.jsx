// app/contact/layout.jsx

export const metadata = {
  title: "Contact & Support | Zapiya",
  description:
    "Get in touch with the Zapiya team. Send inquiries, feature requests, or questions about ATS resume formatting.",
  alternates: {
    canonical: "https://www.zapiya.com/contact",
  },
  openGraph: {
    title: "Contact & Support | Zapiya",
    description: "Get in touch with the Zapiya team for questions or feedback on ATS resume builder.",
    url: "https://www.zapiya.com/contact",
    siteName: "Zapiya",
    type: "website",
  },
}

export default function ContactLayout({ children }) {
  return <>{children}</>
}

