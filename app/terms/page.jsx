// app/terms/page.jsx

export const metadata = {
    title: "Terms of Use",
    description:
        "Read the terms and conditions for using Zapiya. Understand your rights, responsibilities, and platform usage policies.",
    alternates: {
        canonical: "https://zapiya.com/terms",
    },
}

export default function Terms() {
    return (
        <div className="min-h-screen bg-[#0F172A] text-white px-6 py-20 max-w-3xl mx-auto">

            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

            <p className="text-[#94A3B8] text-sm mb-6">
                Last updated: April 2026
            </p>

            {/* Intro */}
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                By accessing and using <span className="text-white font-semibold">Zapiya</span>,
                you agree to comply with these Terms of Use. Please read them carefully.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Use of Service</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                Zapiya provides tools to create resumes and related content. You agree to use the platform
                only for lawful purposes and in a responsible manner.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">2. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-[#94A3B8] text-sm space-y-2">
                <li>You are responsible for the accuracy of the information you provide</li>
                <li>You must not misuse or attempt to disrupt the platform</li>
                <li>You agree not to upload harmful or illegal content</li>
            </ul>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                All content, design, and branding of Zapiya are owned by us. You may not copy, reproduce,
                or distribute any part of the platform without permission.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">4. Limitation of Liability</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                Zapiya is not responsible for job outcomes, hiring decisions, or career results.
                We provide tools to assist you, but success depends on multiple external factors.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">5. Termination</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                We reserve the right to suspend or terminate access to the platform if these terms are violated.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">6. Changes to Terms</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                We may update these Terms of Use from time to time. Continued use of the platform means
                you accept the updated terms.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">7. Contact</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                If you have any questions about these terms, contact us at:
            </p>

            <p className="text-white text-sm mt-2">
                📧 omradixsolutions@gmail.com
            </p>

        </div>
    )
}