// app/cookies/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Zapiya",
  description:
    "Learn how Zapiya uses cookies, browser local storage, and advertising technologies like Google AdSense. Understand your choices and how to manage cookies.",
  alternates: {
    canonical: "https://www.zapiya.com/cookies",
  },
  openGraph: {
    title: "Cookie Policy – Zapiya",
    description:
      "Detailed disclosure of cookies, local storage, and advertising technologies on Zapiya.",
    url: "https://www.zapiya.com/cookies",
    siteName: "Zapiya",
    type: "website",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-subtle text-slate-700 leading-relaxed text-sm sm:text-base">
        
        {/* Header */}
        <div className="border-b border-slate-100 pb-6 mb-8">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider font-comfortaa">
            Compliance & Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 font-comfortaa">
            Cookie Policy
          </h1>
          <p className="text-slate-500 text-xs mt-2">
            Last Updated: November 2026 • Compliant with EU ePrivacy Directive & Google AdSense Publisher Policies
          </p>
        </div>

        <div className="space-y-6">
          <p>
            This Cookie Policy explains how <strong className="text-slate-900">Zapiya</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies, local browser storage, and similar technologies when you visit our website at <Link href="/" className="text-indigo-600 hover:underline">https://www.zapiya.com</Link>.
          </p>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
              1. What Are Cookies and Local Storage?
            </h2>
            <p>
              Cookies are small text files placed on your computer or mobile device by websites you visit. They are widely used to make websites work efficiently, remember your preferences, and provide analytical reporting.
            </p>
            <p className="mt-2">
              In addition to standard cookies, Zapiya utilizes modern HTML5 Web Storage (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs text-slate-800">localStorage</code>) to enable our client-side resume builder to function seamlessly without requiring a user account or transmitting your confidential career history to external servers.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
              2. Categories of Technologies We Use
            </h2>
            <div className="space-y-4 mt-3">
              
              <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl">
                <h3 className="font-bold text-slate-900 text-sm">A. Essential Local Storage (Zero Cloud Upload)</h3>
                <p className="text-xs text-slate-600 mt-1">
                  We use your browser&apos;s local storage to automatically save your resume draft as you type. This data never leaves your computer or browser and is never stored on our servers. You can clear this data at any time through your browser settings or by resetting your resume in the editor.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl">
                <h3 className="font-bold text-slate-900 text-sm">B. Privacy-Preserving Telemetry & Performance</h3>
                <p className="text-xs text-slate-600 mt-1">
                  We use lightweight, privacy-friendly telemetry beacons via our parent discovery network (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs text-slate-800">gaavconnect.in</code>) to track aggregate platform usage (e.g. daily page views, PDF downloads, and popular resume templates). These metrics do not collect personally identifiable information (PII) and never log the text inside your resume.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl">
                <h3 className="font-bold text-slate-900 text-sm">C. Third-Party Advertising (Google AdSense)</h3>
                <p className="text-xs text-slate-600 mt-1">
                  To keep Zapiya 100% free with zero paywalls, we display advertisements provided by trusted third-party advertising networks, primarily <strong>Google AdSense</strong>. Google uses cookies, including the DoubleClick DART cookie, to serve ads to users based on their visits to Zapiya and other sites on the Internet.
                </p>
              </div>

            </div>
          </section>

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
              3. Google DoubleClick DART Cookie & Personalization
            </h2>
            <p>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our sites and/or other sites on the Internet.
            </p>
            <p className="mt-2">
              Users may opt out of personalized advertising by visiting:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-slate-600 text-xs sm:text-sm">
              <li>
                <strong>Google Ads Settings:</strong>{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  https://adssettings.google.com
                </a>
              </li>
              <li>
                <strong>AboutAds (Digital Advertising Alliance):</strong>{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  https://www.aboutads.info/choices/
                </a>
              </li>
              <li>
                <strong>Network Advertising Initiative (NAI):</strong>{" "}
                <a
                  href="https://optout.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  https://optout.networkadvertising.org/
                </a>
              </li>
            </ul>
          </section>

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
              4. How to Control and Manage Cookies in Your Browser
            </h2>
            <p>
              Most modern web browsers allow you to manage your cookie preferences. You can configure your browser to refuse cookies, delete specific cookies, or notify you when a cookie is set:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-600 text-xs sm:text-sm">
              <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Third-party cookies</li>
              <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Enhanced Tracking Protection</li>
              <li><strong>Apple Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and Site Permissions</li>
            </ul>
            <p className="mt-2 text-xs text-slate-500">
              Please note that disabling cookies or local storage will not affect resume vector PDF generation, but your draft will not automatically persist across page refreshes.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about our use of cookies or this policy, please reach out to our team at:
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
