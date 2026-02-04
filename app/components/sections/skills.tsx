"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const frontendSkills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Three.js", level: 75 },
    { name: "GSAP", level: 80 }
];

const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "REST APIs", level: 85 },
    { name: "GraphQL", level: 70 },
    { name: "Redis", level: 70 }
];

const toolsSkills = [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "CI/CD", level: 75 },
    { name: "Testing", level: 80 },
    { name: "Agile", level: 85 }
];

export default function Skills() {
    const sectionRef = useGSAP(() => {
        gsap.from(".skill-item", {
            scrollTrigger: {
                trigger: ".skills-section",
                start: "top 80%",
            },
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });

        gsap.utils.toArray(".skill-bar").forEach((bar: any) => {
            const level = bar.dataset.level;
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: "top 90%",
                },
                width: `${level}%`,
                duration: 1,
                ease: "power2.out"
            });
        });
    }, []);

    return (
        <section ref={sectionRef} className="skills-section max-w-4xl mx-auto px-6 py-20">
            <div className="mb-12">
                <span className="text-sm text-gray-300 uppercase tracking-wider">Skills</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Technologies</h2>
                <p className="text-gray-400 text-lg">
                    A comprehensive overview of my technical expertise across frontend, backend, and development tools.
                </p>
            </div>
            
            <div className="space-y-12">
                {/* Frontend Skills */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-gray-300 border-b border-gray-800 pb-2">Frontend</h3>
                    <div className="space-y-4">
                        {frontendSkills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                                    <span className="text-gray-300 text-xs">{skill.level}%</span>
                                </div>
                                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                                    <div 
                                        className="skill-bar h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                        data-level={skill.level}
                                        style={{ width: 0 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-gray-300 border-b border-gray-800 pb-2">Backend</h3>
                    <div className="space-y-4">
                        {backendSkills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                                    <span className="text-gray-300 text-xs">{skill.level}%</span>
                                </div>
                                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                                    <div 
                                        className="skill-bar h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                        data-level={skill.level}
                                        style={{ width: 0 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools & Others */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-gray-300 border-b border-gray-800 pb-2">Tools & Others</h3>
                    <div className="space-y-4">
                        {toolsSkills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                                    <span className="text-gray-300 text-xs">{skill.level}%</span>
                                </div>
                                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                                    <div 
                                        className="skill-bar h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                        data-level={skill.level}
                                        style={{ width: 0 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

