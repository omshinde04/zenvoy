// lib/templates.js

export const templates = [

    // =====================================================
    // CLASSIC ATS (Software Engineer Standard)
    // =====================================================

    {
        id: "classic-ats",

        name: "Classic ATS",

        segment: "tech",

        style: "Single Column Standard",

        description:
            "Harvard/Ivy League single-column layout with horizontal section dividers. Proven 100% ATS score.",

        accentColor: "#000000",

        popular: true,

        preview: "Tech_minimal.png",
    },

    // =====================================================
    // TECH MINIMAL
    // =====================================================

    {
        id: "tech-minimal",

        name: "Tech Minimal",

        segment: "tech",

        style: "Single Column",

        description:
            "Clean single column. Perfect for service companies and product startups.",

        accentColor: "#2563EB",

        popular: true,

        // Image inside public/templates
        preview: "Tech_minimal.png",
    },

    // =====================================================
    // TECH PRO
    // =====================================================

    {
        id: "tech-two-column",

        name: "Tech Pro",

        segment: "tech",

        style: "Two Column",

        description:
            "Dark header with sidebar. Built for product companies and FAANG applications.",

        accentColor: "#2563EB",

        popular: false,

        // Image inside public/templates
        preview: "Tech_pro.png",
    },

    // =====================================================
    // TECH BOLD
    // =====================================================

    {
        id: "tech-bold-header",

        name: "Tech Bold",

        segment: "tech",

        style: "Bold Header",

        description:
            "Dark navy header with bold name. Professional and impactful for experienced developers.",

        accentColor: "#2563EB",

        popular: false,

        // Image inside public/templates
        preview: "Tech_bold.png",
    },
]

// =========================================================
// TEMPLATE SEGMENTS
// =========================================================

export const segments = [
    "all",
    "tech",
    "mba",
    "design",
]