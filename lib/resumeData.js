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
                "Architected microservices migration reducing latency by 45% for 1M+ users",
                "Spearheaded internal UI library adopted by 12 engineering teams",
                "Mentored 5 junior engineers increasing deployment frequency by 30%",
            ],
        },
    ],

    projects: [
        {
            id: "proj_1",
            name: "Lumina Analytics Dashboard",
            techStack: "React, D3.js, Node.js",
            description: "Real-time data visualization platform for enterprise logistics",
            link: "",
            github: "github.com/alex/lumina",
            bullets: [
                "Integrated WebSocket streams handling 50,000+ events/sec with sub-100ms rendering",
            ],
        },
        {
            id: "proj_2",
            name: "Distributed Task Runner",
            techStack: "Go, Redis, gRPC",
            description: "High-throughput task queue for async processing",
            link: "",
            github: "",
            bullets: [
                "Achieved horizontal scalability supporting 500 worker nodes with automated failover",
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