// app/about/page.jsx
import Link from "next/link"

export const metadata = {
  title: "About Zapiya | 100% Free, Privacy-First ATS Resume Builder",
  description:
    "Learn about Zapiya's mission: providing honest, 100% free, ATS-compliant resume building tools for developers and students with zero paywalls and zero data harvesting.",
  alternates: {
    canonical: "https://www.zapiya.com/about",
  },
}

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.zapiya.com/about#webpage",
      "name": "About Zapiya ATS Resume Builder",
      "url": "https://www.zapiya.com/about",
      "description": "Learn about Zapiya's mission: providing honest, 100% free, ATS-compliant resume building tools for developers and students with zero paywalls.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Zapiya",
        "url": "https://www.zapiya.com",
        "founder": {
          "@type": "Person",
          "name": "Om Vilas Shinde",
          "jobTitle": "Founder & Lead Engineer",
          "url": "https://www.zapiya.com/about"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.zapiya.com/about#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.zapiya.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.zapiya.com/about"
        }
      ]
    }
  ]
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full mb-4 font-comfortaa">
            About Our Platform
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-comfortaa">
            Building Resumes Should Be <span className="text-indigo-600">100% Free</span>.
          </h1>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Zapiya was founded on a simple principle: Job seekers should never be trapped behind paywalls just to apply for opportunities.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-subtle space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-comfortaa mb-3">
              The Problem with Modern Resume Builders
            </h2>
            <p>
              If you have ever tried building a resume online, you know the painful bait-and-switch: You spend two hours filling in your education, projects, and work experience on a site that promises a &ldquo;free resume maker.&rdquo; But the moment you click download, a modal blocks your screen demanding a credit card for a $24/month recurring subscription.
            </p>
            <p className="mt-3">
              We believe this practice is predatory and counterproductive. Job seekers are already navigating one of the most stressful periods of their professional lives. Charging them to download a PDF they typed themselves is fundamentally wrong.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-comfortaa mb-3">
              Our Mission: Zero Paywalls, Zero Watermarks
            </h2>
            <p>
              Zapiya was built by engineers for engineers, developers, and students. Every template—including our flagship Harvard-standard Classic ATS template—is 100% free forever.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl">
                <span className="text-2xl">⚡</span>
                <h3 className="font-bold text-slate-900 mt-2 text-sm">No Accounts</h3>
                <p className="text-xs text-slate-500 mt-1">Start building immediately without creating a profile or giving away your email.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl">
                <span className="text-2xl">🔒</span>
                <h3 className="font-bold text-slate-900 mt-2 text-sm">100% Private</h3>
                <p className="text-xs text-slate-500 mt-1">Your personal career data stays on your device. We do not sell or harvest resumes.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold text-slate-900 mt-2 text-sm">ATS Optimized</h3>
                <p className="text-xs text-slate-500 mt-1">Engineered strictly to pass Applicant Tracking Systems with high parse scores.</p>
              </div>
            </div>
          </section>

          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-comfortaa mb-3">
              Technical Architecture & Privacy
            </h2>
            <p>
              Zapiya operates primarily client-side in your web browser. Your resume edits are saved directly to your browser&apos;s local storage and can be backed up as an encrypted JSON file on your machine. When you generate a PDF, your browser renders a pure, selectable-text vector PDF directly.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-comfortaa mb-3">
              Brand Identity &amp; Platform Distinction
            </h2>
            <p>
              <strong>Zapiya (www.zapiya.com)</strong> is an independent, specialized online ATS resume builder engineered for software developers, engineers, and students. We are completely independent and distinct from any file-sharing or mobile utility apps with similar names (such as the Zapya P2P file transfer app). Our sole focus is empowering candidates with recruiter-approved, single-column resume templates that score 95+ on enterprise Applicant Tracking Systems (Workday, Greenhouse, Taleo, and Lever).
            </p>
          </section>

          {/* Founder & Leadership (E-E-A-T Transparency) */}
          <section className="pt-6 border-t border-slate-100">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg font-comfortaa shrink-0 shadow-md shadow-indigo-500/20">
                  OS
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-comfortaa">
                      Om Vilas Shinde
                    </h3>
                    <span className="text-[11px] font-semibold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                      Founder & Lead Engineer
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Software engineer and digital tools creator dedicated to building ethical, open web utilities. Zapiya was conceived to ensure that no developer, college graduate, or job seeker ever has to pay a monthly fee or provide credit card details just to download their own resume.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 font-comfortaa">Have feedback or suggestions?</h3>
              <p className="text-xs text-slate-500 mt-0.5">We are always expanding our open templates and guides.</p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition"
            >
              Contact Us →
            </Link>
          </section>

        </div>

      </div>
    </div>
  )
}

