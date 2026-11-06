// app/guides/page.jsx
import Link from "next/link"
import { guides } from "@/lib/guidesData"

export const metadata = {
  title: "ATS Resume Guides & Developer Career Advice",
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
  },
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-slate-50/60 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full mb-4 font-comfortaa">
            Career & ATS Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-comfortaa">
            Resume Guides & <span className="text-indigo-600">ATS Insights</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Written by engineers and career researchers. Everything you need to craft high-scoring, recruiter-approved resumes that bypass automated filters.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="bg-white border border-slate-200/80 rounded-2xl p-7 flex flex-col justify-between shadow-subtle hover:shadow-hover hover:border-indigo-300 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="bg-indigo-50 text-indigo-600 font-semibold px-2.5 py-1 rounded-md">
                    {guide.category}
                  </span>
                  <span className="text-slate-400 font-medium">{guide.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  <Link href={`/guides/${guide.slug}`}>
                    {guide.title}
                  </Link>
                </h2>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {guide.summary}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{guide.date}</span>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Read Full Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl shadow-indigo-500/10">
          <h2 className="text-2xl sm:text-3xl font-bold font-comfortaa">
            Ready to Build Your Free ATS Resume?
          </h2>
          <p className="mt-3 text-indigo-100 text-sm max-w-lg mx-auto">
            Put these guidelines into practice with our 100% free, zero-signup Harvard standard resume builder.
          </p>
          <div className="mt-8">
            <Link
              href="/templates"
              className="inline-block px-7 py-3.5 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-slate-50 transition shadow-md"
            >
              Start Building — 100% Free →
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

