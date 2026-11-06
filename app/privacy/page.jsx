// app/privacy/page.jsx

export const metadata = {
    title: "Privacy Policy | Zapiya",
    description:
        "Learn how Zapiya collects, uses, and safeguards your data. We maintain a strict client-side privacy model and disclose all cookie, advertising, and analytics policies.",
    alternates: {
        canonical: "https://www.zapiya.com/privacy",
    },
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 py-16 px-6">
            <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-subtle text-slate-700 leading-relaxed text-sm sm:text-base">

                <div className="border-b border-slate-100 pb-6 mb-8">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider font-comfortaa">
                        Legal Transparency
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 font-comfortaa">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 text-xs mt-2">
                        Effective Date: November 6, 2026 • Last updated: November 2026
                    </p>
                </div>

                <div className="space-y-6">
                    <p>
                        At <strong className="text-slate-900">Zapiya</strong> (accessible from <a href="https://www.zapiya.com" className="text-indigo-600 hover:underline">https://www.zapiya.com</a>), one of our primary priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Zapiya and how we use it.
                    </p>

                    <section>
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            1. Client-Side Resume Architecture (Zero Data Harvesting)
                        </h2>
                        <p>
                            Zapiya is fundamentally designed as a privacy-first web application. Unlike traditional resume services that upload your personal documents to centralized databases:
                        </p>
                        <ul className="list-disc pl-5 space-y-1.5 mt-2 text-slate-600">
                            <li>Your resume content (contact info, work history, education) is processed locally within your web browser.</li>
                            <li>Drafts are saved directly to your browser&apos;s local storage (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs text-slate-800">localStorage</code>) and are not transmitted to or stored on our servers.</li>
                            <li>You can export a local JSON backup of your resume directly to your personal device anytime.</li>
                        </ul>
                    </section>

                    <section className="pt-4 border-t border-slate-100">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            2. Cookies and Web Beacons
                        </h2>
                        <p>
                            Like any other website, Zapiya uses &ldquo;cookies&rdquo;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
                        </p>
                    </section>

                    <section className="pt-4 border-t border-slate-100">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            3. Google AdSense, DoubleClick DART Cookie & Advertising Partners
                        </h2>
                        <p>
                            Google is one of our primary third-party vendors. Google uses cookies, including the DoubleClick DART cookie and Google AdSense technologies, to serve personalized and non-personalized advertisements to visitors based on their visit to www.zapiya.com and other websites across the Internet.
                        </p>
                        <p className="mt-2">
                            Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">https://policies.google.com/technologies/ads</a>.
                        </p>
                        <p className="mt-2">
                            Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Zapiya, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                        </p>
                        <p className="mt-2 text-xs text-slate-500">
                            Note that Zapiya has no access to or control over these cookies that are used by third-party advertisers.
                        </p>
                    </section>

                    <section className="pt-4 border-t border-slate-100">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            4. Third-Party Privacy Policies
                        </h2>
                        <p>
                            Zapiya&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                        </p>
                        <p className="mt-2">
                            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
                        </p>
                    </section>

                    <section className="pt-4 border-t border-slate-100">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            5. GDPR Data Protection Rights & CCPA Privacy Rights
                        </h2>
                        <p>
                            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the right to access, rectification, erasure, restrict processing, object to processing, and data portability.
                        </p>
                    </section>

                    <section className="pt-4 border-t border-slate-100">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            6. Contact Information
                        </h2>
                        <p>
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us:
                        </p>
                        <p className="mt-2 font-medium text-slate-900">
                            Email: <a href="mailto:support@zapiya.com" className="text-indigo-600 hover:underline">support@zapiya.com</a>
                        </p>
                    </section>
                </div>

            </div>
        </div>
    )
}
