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
            <h2 key={i} className="text-2xl sm:text-3xl font-bold text-[#111111] mt-10 mb-4 tracking-tight">
              {trimmed.replace(/^## /, "")}
            </h2>
          )
        }

        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="text-xl font-bold text-[#111111] mt-8 mb-3 tracking-tight">
              {trimmed.replace(/^### /, "")}
            </h3>
          )
        }

        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={i} className="border-l-4 border-[#D9541E] bg-[#FAF7F2] p-4 rounded-r-lg my-6 text-[#111111] text-sm italic">
              {trimmed.replace(/^> /, "")}
            </blockquote>
          )
        }

        if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").map((line) => line.replace(/^[\*\-]\s+/, ""))
          return (
            <ul key={i} className="space-y-2 my-4 list-disc list-inside text-[#333333] text-sm sm:text-base leading-relaxed">
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
            <ol key={i} className="space-y-2 my-4 list-decimal list-inside text-[#333333] text-sm sm:text-base leading-relaxed">
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
            className="my-4 text-[#333333] text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
            }}
          />
        )
      })
  }

  return (
    <article className="min-h-screen bg-[#F3EEE3] py-16 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#66615B] mb-8 font-medium">
          <Link href="/" className="hover:text-[#D9541E] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-[#D9541E] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#111111] truncate font-semibold">{guide.category}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs mb-4">
            <span className="bg-[#FAF7F2] text-[#D9541E] border border-[#E5DFD3] font-medium px-2.5 py-1 rounded-md">
              {guide.category}
            </span>
            <span className="text-[#DDD6C8]">•</span>
            <span className="text-[#66615B]">{guide.readTime}</span>
            <span className="text-[#DDD6C8]">•</span>
            <span className="text-[#66615B]">{guide.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            {guide.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#66615B] leading-relaxed font-normal border-l-2 border-[#D9541E] pl-4">
            {guide.summary}
          </p>

          {guide.image && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#E5DFD3] shadow-sm">
              <img
                src={guide.image}
                alt={guide.title}
                className="h-64 sm:h-96 w-full object-cover"
                loading="eager"
              />
            </div>
          )}
        </header>

        {/* Article Body */}
        <div className="bg-white border border-[#E5DFD3] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="prose prose-slate max-w-none">
            {renderContent(guide.content)}
          </div>

          {/* Inline CTA */}
          <div className="mt-12 pt-8 border-t border-[#F3EEE3] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#111111] text-[#F3EEE3] p-6 sm:p-7 rounded-xl border border-[#222222]">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D9541E]">Take Action</p>
              <p className="text-[#F3EEE3] font-bold text-sm sm:text-base mt-0.5">
                Build this format right now in Zapiya
              </p>
            </div>
            <Link
              href="/builder/classic-ats"
              className="px-5 py-2.5 bg-[#D9541E] hover:bg-[#c04716] text-[#F3EEE3] text-xs sm:text-sm font-medium rounded-lg transition-colors shadow-xs whitespace-nowrap"
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
        <div className="mt-8 flex justify-between items-center text-sm font-medium">
          <Link href="/guides" className="text-[#D9541E] hover:text-[#111111] transition-colors">
            ← Back to all guides
          </Link>
          <Link href="/templates" className="text-[#66615B] hover:text-[#D9541E] transition-colors">
            Browse ATS Templates →
          </Link>
        </div>

      </div>
    </article>
  )
}

