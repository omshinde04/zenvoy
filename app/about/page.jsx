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
import { FaLinkedin, FaInstagram } from "react-icons/fa6"

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
          "sameAs": [
            "https://www.linkedin.com/in/om-shinde-892a2532a",
            "https://www.instagram.com/_omm.46_",
            "https://github.com/omshinde04"
          ]
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
    <div className="min-h-screen bg-[#F3EEE3] pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* HERO SECTION: Obsidian & Terracotta Two-Font Header */}
      <div className="relative overflow-hidden bg-[#111111] px-6 pt-20 pb-28 text-[#F3EEE3] border-b border-[#222222]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#333333] bg-[#1A1A1A] px-4 py-1 text-xs font-medium text-[#A09A90] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D9541E]" />
            <span>Mission-Driven · 100% Free Forever · Privacy First</span>
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-[#F3EEE3]">
            We Believe Candidate Tools Should Be{" "}
            <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
              100% Free.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#A09A90] max-w-2xl mx-auto leading-relaxed">
            Zapiya was founded to eradicate predatory subscription paywalls, protect job seeker privacy, and guarantee recruiter-approved ATS resumes for all applicants worldwide.
          </p>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-14 relative z-10 space-y-12">

        {/* HERO IMAGE SHOWCASE WITH TRUST PILLS */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E5DFD3] bg-white p-3 shadow-sm">
          <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Engineering and Career Collaboration"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/25 to-transparent" />

            {/* Overlay Trust Badges */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-white">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#111111]/85 backdrop-blur-md px-3 py-1 border border-white/10">
                <FaShieldAlt className="text-[#D9541E]" />
                Zero Paywalls Guaranteed
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#111111]/85 backdrop-blur-md px-3 py-1 border border-white/10">
                <FaLock className="text-[#D9541E]" />
                100% Client-Side Privacy
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#111111]/85 backdrop-blur-md px-3 py-1 border border-white/10">
                <FaAward className="text-[#D9541E]" />
                Harvard Standard ATS
              </span>
            </div>
          </div>
        </div>

        {/* 4 CORE METRIC MILESTONES */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-xl border border-[#E5DFD3] bg-white p-5 text-center shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#111111]">$0</span>
            <span className="mt-1 block text-xs font-bold text-[#111111]">Always Free</span>
            <span className="mt-0.5 block text-[11px] text-[#66615B]">Zero subscriptions or paywalls</span>
          </div>

          <div className="rounded-xl border border-[#E5DFD3] bg-white p-5 text-center shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#D9541E]">0</span>
            <span className="mt-1 block text-xs font-bold text-[#111111]">Accounts Required</span>
            <span className="mt-0.5 block text-[11px] text-[#66615B]">Instant access, no email signup</span>
          </div>

          <div className="rounded-xl border border-[#E5DFD3] bg-white p-5 text-center shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#111111]">100%</span>
            <span className="mt-1 block text-xs font-bold text-[#111111]">Client-Side Private</span>
            <span className="mt-0.5 block text-[11px] text-[#66615B]">Data stays in your browser</span>
          </div>

          <div className="rounded-xl border border-[#E5DFD3] bg-white p-5 text-center shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#D9541E]">99.4%</span>
            <span className="mt-1 block text-xs font-bold text-[#111111]">ATS Pass Rate</span>
            <span className="mt-0.5 block text-[11px] text-[#66615B]">Workday &amp; Greenhouse tested</span>
          </div>
        </div>

        {/* THE ORIGIN STORY: THE PROBLEM WE SET OUT TO DESTROY */}
        <div className="rounded-2xl border border-[#E5DFD3] bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-[#444444] leading-relaxed text-sm sm:text-base">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D9541E]">
                <span>The Honest Truth</span>
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-tight">
                The Paywall Trap That Plagues Modern Job Seekers
              </h2>

              <p>
                If you have ever tried building a resume online, you know the painful bait-and-switch: You discover a sleek platform advertising a &ldquo;free resume maker.&rdquo; You spend two hours meticulously detailing your education, technical projects, and work experience.
              </p>

              <p>
                Then you click download. A popup blocks your screen demanding a credit card for a <strong>$24/month recurring subscription</strong>. If you decline, your only alternative is a blurry thumbnail stamped with a giant watermark.
              </p>

              <p className="border-l-4 border-[#D9541E] bg-[#FAF7F2] p-4 rounded-r-lg text-xs sm:text-sm text-[#111111] font-medium italic">
                &ldquo;We believe this practice is predatory. Job seekers are already navigating stressful transitions. Charging them to download words they typed themselves is fundamentally wrong.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-5 relative overflow-hidden rounded-xl h-64 sm:h-80 w-full bg-[#FAF7F2] shadow-xs">
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
            <span className="text-xs font-medium text-[#66615B] bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1 rounded-md">
              Engineering Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mt-3">
              Our 4 Pillars of{" "}
              <span className="font-cursive italic font-normal text-[#D9541E] text-[1.12em]">
                Product Integrity
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group overflow-hidden rounded-xl border border-[#E5DFD3] bg-white p-6 shadow-xs transition hover:border-[#D9541E]/50 hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden rounded-lg mb-4 bg-[#FAF7F2]">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="Zero Paywalls"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#D9541E]/10 text-[#D9541E] text-xs font-bold">
                  ✓
                </span>
                <h3 className="text-base font-bold text-[#111111]">Zero Paywalls &amp; Zero Watermarks</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[#66615B] leading-relaxed">
                Full-resolution vector PDF export is always 100% free with zero paywalls, zero trial gimmicks, and zero unsightly watermarks on your documents.
              </p>
            </div>

            <div className="group overflow-hidden rounded-xl border border-[#E5DFD3] bg-white p-6 shadow-xs transition hover:border-[#D9541E]/50 hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden rounded-lg mb-4 bg-[#FAF7F2]">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
                  alt="Client Side Privacy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#111111] text-[#F3EEE3] text-xs font-bold">
                  🔒
                </span>
                <h3 className="text-base font-bold text-[#111111]">100% Client-Side Privacy</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[#66615B] leading-relaxed">
                Your career history lives exclusively in your browser&apos;s LocalStorage. We never harvest, store, or sell your resumes to recruiters or third-party brokers.
              </p>
            </div>

            <div className="group overflow-hidden rounded-xl border border-[#E5DFD3] bg-white p-6 shadow-xs transition hover:border-[#D9541E]/50 hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden rounded-lg mb-4 bg-[#FAF7F2]">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
                  alt="Harvard ATS Standard"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#D9541E]/10 text-[#D9541E] text-xs font-bold">
                  🏛️
                </span>
                <h3 className="text-base font-bold text-[#111111]">Harvard Single-Column Standard</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[#66615B] leading-relaxed">
                Engineered strictly around the Ivy League single-column architecture, preventing text-merging errors common to multi-column and graphic templates.
              </p>
            </div>

            <div className="group overflow-hidden rounded-xl border border-[#E5DFD3] bg-white p-6 shadow-xs transition hover:border-[#D9541E]/50 hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden rounded-lg mb-4 bg-[#FAF7F2]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  alt="Pure Vector Rendering"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#111111] text-[#F3EEE3] text-xs font-bold">
                  ⚡
                </span>
                <h3 className="text-base font-bold text-[#111111]">Pure Vector PDF Generation</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[#66615B] leading-relaxed">
                Exported documents use digital vector typography with searchable text layers, ensuring automated OCR scanners parse your credentials with 100% fidelity.
              </p>
            </div>
          </div>
        </div>

        {/* TECHNICAL ARCHITECTURE */}
        <div className="rounded-2xl border border-[#E5DFD3] bg-white p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-[#D9541E] text-xs font-bold uppercase tracking-wider">
            <FaCode className="text-sm" />
            <span>Modern Web Stack</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
            How Zapiya Works Under the Hood
          </h3>
          <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed">
            Zapiya operates primarily on the client side using Next.js 16 and modern Web Standards. Your edits are continuously auto-saved in local browser memory and can be backed up as an encrypted JSON snapshot. PDF generation uses pure client-side vector synthesis, converting standard HTML DOM structures into ISO-standard vector PDFs without uploading your personal documents to any external server.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-medium text-[#111111]">
            <span className="rounded-md bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1">Next.js 16</span>
            <span className="rounded-md bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1">React 19</span>
            <span className="rounded-md bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1">Turbopack</span>
            <span className="rounded-md bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1">Tailwind CSS</span>
            <span className="rounded-md bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1">jsPDF Vector Engine</span>
            <span className="rounded-md bg-[#FAF7F2] border border-[#E5DFD3] px-3 py-1">Zero Third-Party Trackers</span>
          </div>
        </div>

        {/* BRAND IDENTITY & INDEPENDENCE NOTICE */}
        <div className="rounded-xl border border-[#E5DFD3] bg-[#FAF7F2] p-6 text-xs text-[#66615B] leading-relaxed">
          <strong className="text-[#111111] font-bold block mb-1">Brand Identity &amp; Platform Distinction:</strong>
          <strong>Zapiya (www.zapiya.com)</strong> is an independent, specialized online ATS resume builder engineered for software developers, engineers, and students. We are completely independent and distinct from any file-sharing or mobile utility apps with similar names (such as the Zapya P2P file transfer app). Our sole focus is empowering candidates with recruiter-approved, single-column resume templates that score 95+ on enterprise Applicant Tracking Systems (Workday, Greenhouse, Taleo, and Lever).
        </div>

        {/* FOUNDER & LEADERSHIP SPOTLIGHT (E-E-A-T) */}
        <div className="rounded-2xl border border-[#E5DFD3] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-xl font-bold text-[#F3EEE3] shadow-xs">
              OS
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg font-bold text-[#111111]">
                  Om Vilas Shinde
                </h3>
                <span className="rounded-md bg-[#D9541E]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#D9541E] border border-[#D9541E]/20">
                  Founder &amp; Lead Engineer
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed">
                Software engineer and open-web advocate based in Pune, Maharashtra, India. Zapiya was created with a clear promise: to ensure no developer, college graduate, or job seeker ever has to pay a fee or enter credit card details just to download their own resume.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/om-shinde-892a2532a"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#D9541E] bg-[#FAF7F2] border border-[#E5DFD3] hover:border-[#D9541E]/40 px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                >
                  <FaLinkedin className="text-sm text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://www.instagram.com/_omm.46_"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#D9541E] bg-[#FAF7F2] border border-[#E5DFD3] hover:border-[#D9541E]/40 px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                >
                  <FaInstagram className="text-sm text-[#E4405F]" />
                  <span>@_omm.46_</span>
                </a>
                <a
                  href="mailto:omshinde0484@gmail.com"
                  className="text-xs font-semibold text-[#D9541E] hover:underline"
                >
                  omshinde0484@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION BANNER */}
        <div className="relative overflow-hidden rounded-2xl bg-[#111111] border border-[#222222] p-8 sm:p-12 text-[#F3EEE3] shadow-xl">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1A1A1A] border border-[#333333] px-3 py-1 text-xs font-medium text-[#A09A90]">
                <FaHeart className="text-[#D9541E] text-xs" />
                Build for Free Today
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3EEE3]">
                Start Building Your Resume on Classic ATS
              </h3>
              <p className="text-xs sm:text-sm text-[#A09A90] leading-relaxed">
                No account, no credit card, and zero paywalls. Create, format, and download your Harvard ATS resume in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/builder/classic-ats"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D9541E] hover:bg-[#c04716] px-6 py-3.5 text-xs sm:text-sm font-medium text-[#F3EEE3] shadow-xs transition-colors"
              >
                <span>Build Resume Free</span>
                <FaArrowRight className="text-xs" />
              </Link>

              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#333333] bg-[#1A1A1A] hover:bg-[#222222] px-5 py-3.5 text-xs sm:text-sm font-medium text-[#F3EEE3] transition-colors"
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
