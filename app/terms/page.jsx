// app/terms/page.jsx

export const metadata = {
    title: "Terms of Service | Zapiya",
    description:
        "Read the terms and conditions for using Zapiya. Learn about our 100% free resume building service, intellectual property, and user responsibilities.",
    alternates: {
        canonical: "https://www.zapiya.com/terms",
    },
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 py-16 px-6">
            <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-subtle text-slate-700 leading-relaxed text-sm sm:text-base">

                <div className="border-b border-slate-100 pb-6 mb-8">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider font-comfortaa">
                        Legal Agreement
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 font-comfortaa">
                        Terms of Service
                    </h1>
                    <p className="text-slate-500 text-xs mt-2">
                        Last updated: November 2026
                    </p>
                </div>

                <div className="space-y-6">
                    <p>
                        Welcome to <strong className="text-slate-900">Zapiya</strong>. By accessing or using our website located at <a href="https://www.zapiya.com" className="text-indigo-600 hover:underline">https://www.zapiya.com</a>, you agree to be bound by these Terms of Service.
                    </p>

                    <section>
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            1. Description of Service
                        </h2>
                        <p>
                            Zapiya provides client-side resume formatting, ATS-compliant templating, and vector PDF export tools. Our service is provided completely free of charge (&ldquo;as is&rdquo;) with no subscription fees, mandatory accounts, or payment requirements.
                        </p>
                    </section>

                    <section className="pt-4 border-t border-slate-100">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            2. User Content & Ownership
                        </h2>
                        <p>
                            You retain 100% ownership of all career data, employment history, contact information, and content you input into Zapiya. We do not claim any intellectual property rights over the resume content you create. Because our application functions primarily in your local browser storage, you are responsible for maintaining your own backups (such as exporting a JSON file).
                        </p>
                    </section>

                    <section className="pt-4 border-t border-slate-100">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            3. Acceptable Use
                        </h2>
                        <p>
                            You agree not to use Zapiya for any unlawful purposes, including transmitting malicious scripts, attempting unauthorized access to infrastructure, or automated scraping that impairs the service for other users.
                        </p>
                    </section>

                    <section className="pt-4 border-t border-slate-100">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            4. Disclaimer of Warranties
                        </h2>
                        <p>
                            While our templates are engineered to comply with recognized industry ATS standards, Zapiya does not guarantee employment, interviews, or hiring outcomes. The service is provided without warranties of any kind, either express or implied.
                        </p>
                    </section>

                    <section className="pt-4 border-t border-slate-100">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-comfortaa mb-2">
                            5. Questions & Contact
                        </h2>
                        <p>
                            If you have questions regarding these terms, please contact:
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
