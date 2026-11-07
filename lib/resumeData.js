// lib/resumeData.js

export const defaultResumeData = {
    personal: {
        name: "Alexander Chase",
        role: "Senior Systems Architect",
        email: "alex.chase@example.com",
        phone: "+91 98765 43210",
        location: "Mumbai, Maharashtra",
        linkedin: "linkedin.com/in/alexchase",
        github: "github.com/alexchase",
        portfolio: "alexchase.design",
    },

    summary: "Passionate software engineer with 3+ years building scalable systems and leading cross-functional teams.",

    skills: {
        languages: ["JavaScript", "Python", "TypeScript", "SQL"],
        frameworks: ["React", "Node.js", "Next.js", "FastAPI"],
        tools: ["Docker", "AWS", "Git", "Figma"],
        other: [],
    },

    experience: [
        {
            id: "exp_1",
            role: "Senior Software Engineer",
            company: "TechNova Solutions",
            location: "Mumbai, MH",
            startDate: "Jan 2022",
            endDate: "Present",
            current: true,
            bullets: [
                "Architected microservices migration reducing latency by 45% for 1M+ active users",
                "Spearheaded internal UI component library adopted by 12 cross-functional engineering teams",
                "Mentored 5 junior engineers and automated CI/CD pipelines increasing deployment frequency by 30%",
                "Engineered Redis caching layer decreasing database query loads by 60%",
            ],
        },
        {
            id: "exp_2",
            role: "Software Engineer",
            company: "Apex Cloud Systems",
            location: "Bangalore, India",
            startDate: "June 2019",
            endDate: "Dec 2021",
            current: false,
            bullets: [
                "Developed scalable REST APIs using Node.js, TypeScript, and PostgreSQL serving 500k+ requests/day",
                "Implemented secure OAuth2 authentication and role-based access control across enterprise apps",
                "Collaborated with product designers to build responsive, accessible web interfaces in React",
            ],
        },
    ],

    projects: [
        {
            id: "proj_1",
            name: "Lumina Analytics Dashboard",
            link: "live",
            bullets: [
                "Integrated WebSocket streams handling 50,000+ events/sec with sub-100ms dashboard rendering",
                "Constructed dynamic charts and heatmaps using **React** and **D3.js** enabling real-time anomaly detection",
                "Optimized rendering pipeline reducing client memory overhead by 35% on low-spec hardware",
            ],
        },
        {
            id: "proj_2",
            name: "Distributed Task Runner",
            link: "https://github.com/alexchase/task-runner",
            bullets: [
                "Achieved horizontal scalability supporting 500 concurrent worker nodes with automated failover",
                "Engineered persistent task queuing and exponential backoff retry algorithms using **Go** and **Redis**",
                "Built gRPC streaming interface delivering sub-5ms inter-service message latency",
            ],
        },
    ],

    education: [
        {
            id: "edu_1",
            degree: "M.S. in Computer Science",
            institution: "Stanford University",
            location: "Stanford, CA",
            startYear: "2017",
            endYear: "2019",
            cgpa: "3.9/4.0",
        },
        {
            id: "edu_2",
            degree: "B.S. in Software Engineering",
            institution: "University of California, Berkeley",
            location: "Berkeley, CA",
            startYear: "2013",
            endYear: "2017",
            cgpa: "3.8/4.0",
        },
    ],

    achievements: [
        "Awarded Engineer of the Year at TechNova for cloud infrastructure contributions",
        "Top 5% contributor to OpenSource FluxGrid project — 2k GitHub stars",
        "First place at National Collegiate Hackathon 2017, Data Security track",
    ],

    certifications: [
        {
            id: "cert_1",
            name: "AWS Solutions Architect",
            issuer: "Amazon",
            year: "2022",
            link: "",
        },
    ],

    // MBA specific fields
    leadership: [
        {
            id: "lead_1",
            role: "President",
            organization: "Tech Entrepreneurship Club",
            startDate: "2022",
            endDate: "2023",
            bullets: ["Led 30 member team organizing 5 national events"],
        },
    ],

    // Design specific fields
    toolsProficiency: ["Figma", "Adobe XD", "Illustrator", "After Effects", "Blender"],
}


// =========================================================
// OM SHINDE - SOFTWARE ENGINEER PRESET
// =========================================================
export const omShindeResumeData = {
    personal: {
        name: "Om Vilas Shinde",
        role: "Software Engineer",
        email: "omshinde0412@gmail.com",
        phone: "+91 9373545169",
        location: "Pune, India",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        portfolio: "https://portfolio.dev",
    },

    summary: "Software Engineer experienced in building scalable full-stack applications using React, Node.js, and PostgreSQL. Skilled in secure REST APIs, backend development, performance optimization, and real-time systems using WebSockets and Redis.",

    education: [
        {
            id: "edu_1",
            degree: "M.Sc. in CA",
            institution: "Dr. D. Y. Patil College, Pimpri Chinchwad",
            startYear: "2024",
            endYear: "2026",
            cgpa: "SGPA : 9.09",
        },
        {
            id: "edu_2",
            degree: "B.Sc. in Computer Science",
            institution: "KTHM College, Nashik",
            startYear: "2021",
            endYear: "2024",
            cgpa: "SGPA: 7.01",
        },
    ],

    experience: [
        {
            id: "exp_1",
            role: "Junior Full Stack Developer",
            company: "Blocsys Technology",
            startDate: "3-July–2026",
            endDate: "30-Oct-2026",
            current: false,
            bullets: [
                "Developed an HMS using Next.js, TypeScript, and NestJS.",
                "Integrated REST APIs and managed databases using Prisma.",
                "Contributed to AWS deployment, debugging, and performance optimization.",
                "Managed database operations using Prisma ORM.",
                "Collaborated on end-to-end feature development, testing, and application maintenance.",
            ],
        },
        {
            id: "exp_2",
            role: "Full Stack Developer Intern",
            company: "Assured Business Corporation",
            startDate: "Jan-2026",
            endDate: "June-2026",
            current: false,
            bullets: [
                "Developed full-stack applications using React.js and Node.js.",
                "Integrated REST APIs and worked on authentication, databases, and debugging.",
                "Assisted in developing reusable components and improving application functionality through testing and bug fixes.",
                "Developed reusable UI components and resolved bugs to improve application reliability.",
            ],
        },
    ],

    skills: {
        languages: ["Java", "Python", "JavaScript", "C"],
        backend: ["Node.js", "Express.js", "Fastify", "REST APIs", "JWT Authentication", "OAuth", "Redis"],
        frontend: ["React.js", "Next.js", "Redux"],
        databases: ["PostgreSQL", "MySQL", "MongoDB"],
        ai: ["Machine Learning", "AI Models", "Retrieval-Augmented Generation (RAG)", "Vector Embeddings", "Semantic Search"],
        tools: ["Git", "GitHub", "Vercel", "Docker (Basics)", "AWS"],
        other: [],
    },

    projects: [
        {
            id: "proj_1",
            name: "2 . Phishing Detection System",
            link: "live",
            bullets: [
                "Built a full-stack phishing detection system using **React.js**, **Node.js**, and **Python ML**",
                "Integrated REST APIs connecting frontend, backend, and ML services",
                "Implemented real-time detection of malicious URLs and email threats",
                "Designed responsive UI for threat visualization and monitoring",
                "Ensured secure data handling with optimized backend performance",
            ],
        },
        {
            id: "proj_2",
            name: "3 . Zapiya – AI Agent Platform",
            link: "",
            bullets: [
                "Built a full-stack AI agent platform using **Node.js**, **Fastify**, **Next.js**, **PostgreSQL**, and **Redis**",
                "Implemented real-time streaming chat for low-latency conversational experience",
                "Developed RAG pipeline for context-aware AI responses using external knowledge",
                "Designed hybrid search combining keyword and semantic vector search",
            ],
        },
    ],

    achievements: [],
    certifications: [],
}
