"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const education = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Technology",
        period: "2015 - 2019",
        description: "Specialized in Software Engineering and Web Development. Graduated with honors.",
        achievements: [
            "Dean's List - 3 semesters",
            "Senior Project: E-Commerce Platform",
            "Relevant Coursework: Data Structures, Algorithms, Database Systems"
        ]
    },
    {
        degree: "Full Stack Web Development Bootcamp",
        institution: "Tech Academy",
        period: "2019",
        description: "Intensive 6-month program covering modern web development technologies and best practices.",
        achievements: [
            "Top 10% of cohort",
            "Built 5 full-stack projects",
            "MERN Stack specialization"
        ]
    }
];

const certifications = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { name: "React Developer Certification", issuer: "Meta", year: "2022" },
    { name: "Node.js Certified Developer", issuer: "OpenJS Foundation", year: "2021" }
];

export default function Education() {
    const sectionRef = useGSAP(() => {
        gsap.from(".education-item", {
            scrollTrigger: {
                trigger: ".education-section",
                start: "top 80%",
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
        });

        gsap.from(".cert-item", {
            scrollTrigger: {
                trigger: ".education-section",
                start: "top 80%",
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
    }, []);

    return (
        <section ref={sectionRef} className="education-section max-w-3xl mx-auto px-6 py-20">
            <div className="mb-12">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Education</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Education & Certifications</h2>
                <p className="text-gray-400 text-lg">
                    Academic background and professional certifications that shape my expertise.
                </p>
            </div>

            <div className="space-y-12 mb-16">
                {education.map((edu, index) => (
                    <article key={index} className="education-item border-l-2 border-gray-800 pl-8">
                        <div className="mb-4">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">{edu.period}</span>
                            <h3 className="text-2xl font-bold mt-2 mb-1">{edu.degree}</h3>
                            <p className="text-purple-400 mb-3">{edu.institution}</p>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                        <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                    <Award className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>

            <div>
                <h3 className="text-xl font-bold mb-8 border-b border-gray-800 pb-2">Certifications</h3>
                <div className="space-y-4">
                    {certifications.map((cert, index) => (
                        <div key={index} className="cert-item border-l-2 border-gray-800 pl-6 py-2">
                            <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                            <p className="text-xs text-gray-400">{cert.issuer} • {cert.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

