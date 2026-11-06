// app/disclaimer/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Disclaimer & Editorial Standards | Zapiya",
  description:
    "Review Zapiya's official disclaimer, non-affiliation notice, recruitment advisory disclaimer, and advertising disclosure per Google AdSense and FTC standards.",
  alternates: {
    canonical: "https://www.zapiya.com/disclaimer",
  },
  openGraph: {
    title: "Disclaimer – Zapiya",
    description:
      "Important legal disclaimers, trademark notices, and third-party advertising disclosures for Zapiya.",
    url: "https://www.zapiya.com/disclaimer",
    siteName: "Zapiya",
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-subtle text-slate-700 leading-relaxed text-sm sm:text-base">
        
        {/* Header */}
        <div className="border-b border-slate-100 pb-6 mb-8">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider font-comfortaa">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 font-comfortaa">
            Disclaimer
          </h1>
          <p className="text-slate-500 text-xs mt-2">
            Last Updated: November 2026 • Full Transparency Notice
          </p>
        </div>

        <div className="space-y-6">
          <p>
            The information and tools provided by <strong className="text-slate-900">Zapiya</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) on <Link href="/" className="text-indigo-600 hover:underline">https://www.zapiya.com</Link> are provided for general educational, career development, and document-formatting purposes only.
          </p>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
              1. Non-Affiliation and Trademark Notice
            </h2>
            <p>
              Zapiya is an independent open platform. All product names, logos, brands, trademarks, and registered trademarks mentioned on this website (including but not limited to <em>Harvard University, Workday, Greenhouse, Lever, Taleo, iCIMS, Google, Amazon, Microsoft, Apple, and Meta</em>) are the property of their respective owners.
            </p>
            <p className="mt-2 text-slate-600">
              The use of these names, trademarks, and brands does not imply endorsement, sponsorship, or affiliation. Reference to the &ldquo;Harvard Format&rdquo; refers colloquially to the widely adopted single-column layout structure popularized by university career offices, not an official endorsement by Harvard University.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
              2. Employment & Hiring Outcomes Disclaimer
            </h2>
            <p>
              While our resume templates and ATS guides are engineered following strict industry best practices, <strong>Zapiya does not guarantee job interviews, offers, or employment outcomes</strong>. 
            </p>
            <p className="mt-2">
              Hiring decisions depend entirely on employer criteria, candidate qualifications, interview performance, and market conditions beyond our control. Users are solely responsible for ensuring the factual accuracy, truthfulness, and representation of qualifications on their resumes.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
              3. Advertising & Sponsored Content Disclosure
            </h2>
            <p>
              To maintain Zapiya as a 100% free tool with zero paywalls and zero watermarks, this site may display online advertisements served by third-party advertising networks, such as <strong>Google AdSense</strong>.
            </p>
            <p className="mt-2">
              Advertisements are clearly separated from core application tools. We do not personally endorse the specific third-party products, services, or claims advertised in banner placements. Please review our <Link href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link> and <Link href="/cookies" className="text-indigo-600 hover:underline">Cookie Policy</Link> for details on advertising cookies and opt-out options.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
              4. Accuracy and Technical Content
            </h2>
            <p>
              Our career articles and ATS parsing guides are written with rigorous care by engineers and researchers. However, recruitment technologies evolve continuously. Zapiya makes no representations or warranties regarding the completeness or current accuracy of all third-party ATS algorithmic specifications.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
              5. Contact Information
            </h2>
            <p>
              If you require further information or have questions regarding our site disclaimer, please contact us at:
            </p>
            <p className="mt-2 font-medium text-slate-900">
              Email:{" "}
              <a href="mailto:support@zapiya.com" className="text-indigo-600 hover:underline">
                support@zapiya.com
              </a>
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}

