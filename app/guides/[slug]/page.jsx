// app/guides/[slug]/page.jsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { guides } from "@/lib/guidesData"
import AdSlot from "@/components/ads/AdSlot"

export async function generateStaticParams() {
  return guides.map((g) => ({
    slug: g.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)

  if (!guide) {
    return { title: "Guide Not Found" }
  }

  const canonicalUrl = `https://www.zapiya.com/guides/${slug}`

  return {
    title: `${guide.title} | Zapiya Guides`,
    description: guide.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${guide.title} | Zapiya Guides`,
      description: guide.summary,
      url: canonicalUrl,
      siteName: "Zapiya",
      type: "article",
      publishedTime: "2026-11-01T00:00:00.000Z",
      authors: [guide.author],
    },
  }
}

export default async function GuideDetailPage({ params }) {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)

  if (!guide) {
    notFound()
  }

  const canonicalUrl = `https://www.zapiya.com/guides/${slug}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${canonicalUrl}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        "headline": guide.title,
        "description": guide.summary,
        "inLanguage": "en-US",
        "mainEntityOfPage": canonicalUrl,
        "datePublished": "2026-11-01T00:00:00.000Z",
        "dateModified": "2026-11-06T00:00:00.000Z",
        "author": {
          "@type": "Organization",
          "name": guide.author || "Zapiya Career Research Team",
          "url": "https://www.zapiya.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zapiya",
          "url": "https://www.zapiya.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.zapiya.com/logo.png",
          },
        },
        "image": "https://www.zapiya.com/logo.png",
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
            "name": "Career Guides",
            "item": "https://www.zapiya.com/guides",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": guide.title,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  }

  // Simple clean markdown parser for headings and lists
  const renderContent = (raw) => {
    return raw
      .trim()
      .split("\n\n")
      .map((block, i) => {
        const trimmed = block.trim()

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl sm:text-3xl font-bold text-slate-900 mt-10 mb-4 font-comfortaa">
              {trimmed.replace(/^## /, "")}
            </h2>
          )
        }

        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="text-xl font-bold text-slate-900 mt-8 mb-3 font-comfortaa">
              {trimmed.replace(/^### /, "")}
            </h3>
          )
        }

        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={i} className="border-l-4 border-indigo-500 bg-indigo-50/60 p-4 rounded-r-xl my-6 text-slate-800 text-sm italic">
              {trimmed.replace(/^> /, "")}
            </blockquote>
          )
        }

        if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").map((line) => line.replace(/^[\*\-]\s+/, ""))
          return (
            <ul key={i} className="space-y-2 my-4 list-disc list-inside text-slate-700 text-sm sm:text-base leading-relaxed">
              {items.map((item, j) => (
                <li key={j}>
                  <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </li>
              ))}
            </ul>
          )
        }

        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s+/, ""))
          return (
            <ol key={i} className="space-y-2 my-4 list-decimal list-inside text-slate-700 text-sm sm:text-base leading-relaxed">
              {items.map((item, j) => (
                <li key={j}>
                  <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </li>
              ))}
            </ol>
          )
        }

        return (
          <p
            key={i}
            className="my-4 text-slate-700 text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
            }}
          />
        )
      })
  }

  return (
    <article className="min-h-screen bg-slate-50/50 py-16 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-indigo-600">Guides</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate">{guide.category}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs mb-4">
            <span className="bg-indigo-50 text-indigo-600 font-semibold px-2.5 py-1 rounded-md">
              {guide.category}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{guide.readTime}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{guide.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-comfortaa">
            {guide.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal border-l-2 border-indigo-200 pl-4">
            {guide.summary}
          </p>
        </header>

        {/* Article Body */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-subtle">
          <div className="prose prose-slate max-w-none">
            {renderContent(guide.content)}
          </div>

          {/* Inline CTA */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50/70 p-6 rounded-2xl">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-indigo-600">Take Action</p>
              <p className="text-slate-900 font-bold text-sm sm:text-base mt-0.5">
                Build this format right now in Zapiya
              </p>
            </div>
            <Link
              href="/templates"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition shadow-sm whitespace-nowrap"
            >
              Start Free Resume →
            </Link>
          </div>
        </div>

        {/* Contextual Policy-Compliant AdSense Slot */}
        <AdSlot
          slot="8204918234"
          format="auto"
          responsive="true"
          className="my-8"
        />

        {/* Footer Navigation */}
        <div className="mt-8 flex justify-between items-center text-sm font-semibold">
          <Link href="/guides" className="text-indigo-600 hover:text-indigo-700">
            ← Back to all guides
          </Link>
          <Link href="/templates" className="text-slate-600 hover:text-indigo-600">
            Browse ATS Templates →
          </Link>
        </div>

      </div>
    </article>
  )
}

