// app/privacy/page.jsx

export const metadata = {
    title: "Privacy Policy",
    description:
        "Learn how Zapiya collects, uses, and protects your data. We respect your privacy and ensure your information is secure.",
    alternates: {
        canonical: "https://zapiya.com/privacy",
    },
}

export default function Privacy() {
    return (
        <div className="min-h-screen bg-[#0F172A] text-white px-6 py-20 max-w-3xl mx-auto">

            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="text-[#94A3B8] text-sm mb-6">
                Last updated: April 2026
            </p>

            {/* Intro */}
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                At <span className="text-white font-semibold">Zapiya</span>, your privacy is important to us.
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                We collect information that you provide directly, including:
            </p>
            <ul className="list-disc pl-6 text-[#94A3B8] text-sm space-y-2">
                <li>Personal details (name, email)</li>
                <li>Resume content and uploaded data</li>
                <li>Usage data and analytics</li>
            </ul>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Data</h2>
            <ul className="list-disc pl-6 text-[#94A3B8] text-sm space-y-2">
                <li>To generate and improve your resumes</li>
                <li>To personalize your experience</li>
                <li>To improve our services and features</li>
            </ul>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">3. Data Security</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                We implement industry-standard security measures to protect your data.
                However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">4. Data Sharing</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                We do not sell your personal data. Your information is only used to provide our services
                and may be shared with trusted third-party providers for hosting and analytics.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">5. Cookies</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                We use cookies to enhance your experience, track usage, and improve performance.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">6. Your Rights</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                You can request access, correction, or deletion of your data at any time by contacting us.
            </p>

            {/* Section */}
            <h2 className="text-xl font-semibold mt-8 mb-3">7. Changes to This Policy</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page.
            </p>

            {/* Contact */}
            <h2 className="text-xl font-semibold mt-8 mb-3">8. Contact Us</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
                If you have any questions, contact us at:
            </p>

            <p className="text-white text-sm mt-2">
                📧 omradixsolutions@gmail.com
            </p>

        </div>
    )
}