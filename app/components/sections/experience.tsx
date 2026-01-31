"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
    {
        title: "Senior Full Stack Developer",
        company: "Tech Innovations Inc.",
        location: "San Francisco, CA",
        period: "2022 - Present",
        description: "Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure reducing latency by 40%. Mentored team of 5 junior developers.",
        achievements: [
            "Reduced application load time by 40% through optimization",
            "Led migration to microservices architecture",
            "Implemented CI/CD pipelines reducing deployment time by 60%"
        ],
        tech: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"]
    },
    {
        title: "Full Stack Developer",
        company: "Digital Solutions LLC",
        location: "Remote",
        period: "2020 - 2022",
        description: "Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented responsive designs and optimized performance.",
        achievements: [
            "Built 10+ production applications",
            "Improved user engagement by 35%",
            "Reduced bug reports by 50% through better testing"
        ],
        tech: ["Next.js", "PostgreSQL", "MongoDB", "GraphQL", "Redis"]
    },
    {
        title: "Frontend Developer",
        company: "StartupHub",
        location: "New York, NY",
        period: "2019 - 2020",
        description: "Focused on creating intuitive user interfaces and improving user experience. Worked closely with designers to implement pixel-perfect designs. Optimized frontend performance and accessibility.",
        achievements: [
            "Improved page load speed by 50%",
            "Achieved 95+ Lighthouse score",
            "Implemented accessibility standards (WCAG 2.1)"
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"]
    }
];

export default function Experience() {
    const sectionRef = useGSAP(() => {
        gsap.from(".experience-item", {
            scrollTrigger: {
                trigger: ".experience-section",
                start: "top 80%",
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, []);

    return (
        <section ref={sectionRef} className="experience-section max-w-3xl mx-auto px-6 py-20">
            <div className="mb-12">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Experience</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Work History</h2>
                <p className="text-gray-400 text-lg">
                    A journey through my professional career, highlighting key achievements and technologies I've worked with.
                </p>
            </div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <article key={index} className="experience-item border-l-2 border-gray-800 pl-8 pb-12 last:pb-0">
                        <div className="mb-4">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">{exp.period}</span>
                            <h3 className="text-2xl font-bold mt-2 mb-1">{exp.title}</h3>
                            <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                                <span className="flex items-center gap-1">
                                    <Briefcase className="w-4 h-4" />
                                    {exp.company}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {exp.location}
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {exp.description}
                        </p>

                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">▸</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded border border-gray-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

