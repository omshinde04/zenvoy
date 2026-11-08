// app/about/page.jsx
import Link from "next/link"
import {
  FaShieldAlt,
  FaBolt,
  FaLock,
  FaCheckCircle,
  FaArrowRight,
  FaAward,
  FaCode,
  FaHeart,
} from "react-icons/fa"

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
      "description":
        "Learn about Zapiya's mission: providing honest, 100% free, ATS-compliant resume building tools for developers and students with zero paywalls.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Zapiya",
        "url": "https://www.zapiya.com",
        "founder": {
          "@type": "Person",
          "name": "Om Vilas Shinde",
          "jobTitle": "Founder & Lead Engineer",
          "url": "https://www.zapiya.com/about",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.zapiya.com/about#breadcrumb",
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
          "name": "About",
          "item": "https://www.zapiya.com/about",
        },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 pt-20 pb-28 text-white shadow-xl shadow-indigo-950/20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold text-indigo-300 shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Mission-Driven · 100% Free Forever · Privacy First</span>
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
            We Believe Candidate Tools Should Be{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
              100% Free.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Zapiya was founded to eradicate predatory subscription paywalls, protect job seeker privacy, and guarantee recruiter-approved ATS resumes for all applicants worldwide.
          </p>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-14 relative z-10 space-y-12">

        {/* HERO IMAGE SHOWCASE WITH TRUST PILLS */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-xl shadow-slate-900/[0.05]">
          <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Engineering and Career Collaboration"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            {/* Overlay Trust Badges */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-white">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 ring-1 ring-white/20">
                <FaShieldAlt className="text-emerald-400" />
                Zero Paywalls Guaranteed
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 ring-1 ring-white/20">
                <FaLock className="text-indigo-400" />
                100% Client-Side Privacy
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 ring-1 ring-white/20">
                <FaAward className="text-amber-400" />
                Harvard Standard ATS
              </span>
            </div>
          </div>
        </div>

        {/* 4 CORE METRIC MILESTONES */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 text-center shadow-xs">
            <span className="text-3xl sm:text-4xl font-black text-indigo-600">$0</span>
            <span className="mt-1 block text-xs font-bold text-slate-900">Always Free</span>
            <span className="mt-0.5 block text-[11px] text-slate-500">Zero subscriptions or hidden paywalls</span>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 text-center shadow-xs">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600">0</span>
            <span className="mt-1 block text-xs font-bold text-slate-900">Accounts Required</span>
            <span className="mt-0.5 block text-[11px] text-slate-500">Immediate access with no email signup</span>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 text-center shadow-xs">
            <span className="text-3xl sm:text-4xl font-black text-violet-600">100%</span>
            <span className="mt-1 block text-xs font-bold text-slate-900">Client-Side Private</span>
            <span className="mt-0.5 block text-[11px] text-slate-500">Resume data stays in your browser</span>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 text-center shadow-xs">
            <span className="text-3xl sm:text-4xl font-black text-amber-500">99.4%</span>
            <span className="mt-1 block text-xs font-bold text-slate-900">ATS Pass Rate</span>
            <span className="mt-0.5 block text-[11px] text-slate-500">Workday &amp; Greenhouse benchmark</span>
          </div>
        </div>

        {/* THE ORIGIN STORY: THE PROBLEM WE SET OUT TO DESTROY */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600">
                <span>The Honest Truth</span>
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                The Paywall Trap That Plagues Modern Job Seekers
              </h2>

              <p>
                If you have ever tried building a resume online, you know the painful bait-and-switch: You discover a sleek platform advertising a &ldquo;free resume maker.&rdquo; You spend two hours meticulously detailing your education, technical projects, and work experience.
              </p>

              <p>
                Then you click download. A popup blocks your screen demanding a credit card for a <strong>$24/month recurring subscription</strong>. If you decline, your only alternative is a blurry thumbnail stamped with a giant watermark.
              </p>

              <p className="border-l-4 border-indigo-500 bg-indigo-50/60 p-3.5 rounded-r-xl text-xs sm:text-sm text-indigo-950 font-medium italic">
                &ldquo;We believe this practice is predatory. Job seekers are already navigating stressful transitions. Charging them to download words they typed themselves is fundamentally wrong.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-5 relative overflow-hidden rounded-2xl h-64 sm:h-80 w-full bg-slate-100 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
                alt="Ethical and Transparent Tech Tools"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 4 PILLARS OF PRODUCT INTEGRITY */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Engineering Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Our 4 Pillars of Product Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="Zero Paywalls"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 text-sm font-bold">
                  ✓
                </span>
                <h3 className="text-base font-bold text-slate-900">Zero Paywalls &amp; Zero Watermarks</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full-resolution vector PDF export is always 100% free with zero paywalls, zero trial gimmicks, and zero unsightly watermarks on your documents.
              </p>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
                  alt="Client Side Privacy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-sm font-bold">
                  🔒
                </span>
                <h3 className="text-base font-bold text-slate-900">100% Client-Side Privacy</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your career history lives exclusively in your browser&apos;s LocalStorage. We never harvest, store, or sell your resumes to recruiters or third-party brokers.
              </p>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
                  alt="Harvard ATS Standard"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-violet-50 text-violet-600 text-sm font-bold">
                  🏛️
                </span>
                <h3 className="text-base font-bold text-slate-900">Harvard Single-Column Standard</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engineered strictly around the Ivy League single-column architecture, preventing text-merging errors common to multi-column and graphic templates.
              </p>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  alt="Pure Vector Rendering"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-50 text-amber-600 text-sm font-bold">
                  ⚡
                </span>
                <h3 className="text-base font-bold text-slate-900">Pure Vector PDF Generation</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Exported documents use digital vector typography with searchable text layers, ensuring automated OCR scanners parse your credentials with 100% fidelity.
              </p>
            </div>
          </div>
        </div>

        {/* TECHNICAL ARCHITECTURE */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider">
            <FaCode className="text-sm" />
            <span>Modern Web Stack</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            How Zapiya Works Under the Hood
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Zapiya operates primarily on the client side using Next.js 16 and modern Web Standards. Your edits are continuously auto-saved in local browser memory and can be backed up as an encrypted JSON snapshot. PDF generation uses pure client-side vector synthesis, converting standard HTML DOM structures into ISO-standard vector PDFs without uploading your personal documents to any external server.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-bold text-slate-700">
            <span className="rounded-lg bg-slate-100 px-3 py-1.5">Next.js 16</span>
            <span className="rounded-lg bg-slate-100 px-3 py-1.5">React 19</span>
            <span className="rounded-lg bg-slate-100 px-3 py-1.5">Turbopack</span>
            <span className="rounded-lg bg-slate-100 px-3 py-1.5">Tailwind CSS</span>
            <span className="rounded-lg bg-slate-100 px-3 py-1.5">jsPDF Vector Engine</span>
            <span className="rounded-lg bg-slate-100 px-3 py-1.5">Zero Third-Party Trackers</span>
          </div>
        </div>

        {/* BRAND IDENTITY & INDEPENDENCE NOTICE */}
        <div className="rounded-2xl border border-slate-200 bg-slate-100/70 p-6 text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-900 font-bold block mb-1">Brand Identity &amp; Platform Distinction:</strong>
          <strong>Zapiya (www.zapiya.com)</strong> is an independent, specialized online ATS resume builder engineered for software developers, engineers, and students. We are completely independent and distinct from any file-sharing or mobile utility apps with similar names (such as the Zapya P2P file transfer app). Our sole focus is empowering candidates with recruiter-approved, single-column resume templates that score 95+ on enterprise Applicant Tracking Systems (Workday, Greenhouse, Taleo, and Lever).
        </div>

        {/* FOUNDER & LEADERSHIP SPOTLIGHT (E-E-A-T) */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-xl font-black text-white shadow-lg shadow-indigo-500/25">
              OS
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg font-black text-slate-900">
                  Om Vilas Shinde
                </h3>
                <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-indigo-700 border border-indigo-200">
                  Founder &amp; Lead Engineer
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Software engineer and open-web advocate dedicated to building accessible, ethical digital utilities. Zapiya was created with a clear promise: to ensure no developer, college graduate, or job seeker ever has to pay a fee or enter credit card details just to download their own resume.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION BANNER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-violet-950 p-8 sm:p-12 text-white shadow-xl shadow-indigo-950/20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-bold text-indigo-300 ring-1 ring-indigo-500/40">
                <FaHeart className="text-rose-400 text-xs" />
                Build for Free Today
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Start Building Your Resume on Classic ATS
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No account, no credit card, and zero paywalls. Create, format, and download your Harvard ATS resume in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/builder/classic-ats"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:from-indigo-400 hover:to-violet-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Build Resume Free</span>
                <FaArrowRight className="text-xs" />
              </Link>

              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/80 px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-200 transition hover:bg-slate-700"
              >
                <span>Explore ATS Guides</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
