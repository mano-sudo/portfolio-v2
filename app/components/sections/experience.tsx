"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, MapPin } from "lucide-react";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
    {
        title: "Junior Developer",
        company: "SOCIA ph",
        location: "Philippines",
        period: "2025 - Present",
        description: "Contributing to the development of enterprise-grade solutions using modern full-stack architectures. Collaborating with cross-functional teams to deliver high-quality code, optimized database schemas, and scalable microservices.",
        achievements: [
            "Actively contributing to production-level codebases as a Junior Developer",
            "Working on scalable solutions within the SOCIA ecosystem using Laravel and Next.js",
            "Collaborating with senior engineers to implement containerized workflows with Docker"
        ],
        tech: ["React", "TypeScript", "Laravel", "Node", "Next", "Postgres", "Docker", "MySQL"]
    },
    {
        title: "Lead Developer (Innovation Award Winner)",
        company: "Synergy 2025 Conference",
        location: "University Tech Showcase",
        period: "2024 - 2025",
        description: "Developed an advanced Water Quality Monitoring System using IoT technology. The project features real-time analysis, mobile app integration, and environmental monitoring with 95% data accuracy.",
        achievements: [
            "Won 'Best Research Paper' at Synergy 2025 Conference",
            "Developed a cross-platform Flutter app for real-time visualization",
            "Implemented REST APIs and alert systems using Firebase",
            "Developed ML algorithms for water quality prediction"
        ],
        tech: ["Flutter", "ESP32", "Firebase", "IoT", "Machine Learning", "REST API"]
    }
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useGSAP(() => {
        const isDesktop = window.innerWidth >= 1024;

        // 1. SPLIT ENTRANCE (Title from Left, Content from Right)
        if (isDesktop) {
            gsap.from(".experience-side-title", {
                x: -300,
                opacity: 0,
                filter: "blur(15px)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 95%",
                    end: "top 30%",
                    scrub: 1,
                }
            });

            gsap.from(".experience-content-wrapper", {
                x: 300,
                opacity: 0,
                filter: "blur(15px)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 95%",
                    end: "top 30%",
                    scrub: 1,
                }
            });

            gsap.from(".experience-divider", {
                scaleY: 0,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 95%",
                    end: "top 30%",
                    scrub: 1,
                }
            });
        }

        // Desktop: Pinned scroll with timeline
        if (isDesktop) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${experiences.length * 200}%`,
                    pin: true,
                    scrub: 1.2,
                    anticipatePin: 1,
                }
            });

            experiences.forEach((_, i) => {
                if (i > 0) {
                    tl.to(".experience-sliding-container", {
                        yPercent: -100 * i,
                        duration: 1,
                        ease: "power2.inOut"
                    });
                    tl.to({}, { duration: 0.5 });
                }
            });
        }
        // Mobile: Normal scroll - no restrictions, both experiences visible
    }, []);

    return (
        <section ref={sectionRef} className="experience-section relative bg-black overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 lg:h-full">
                <div className="flex flex-col lg:flex-row lg:min-h-screen">
                    
                    {/* LEFT SIDE — FIXED TITLE */}
                    <div className="experience-side-title w-full lg:w-1/3 pt-12 lg:pt-0 lg:h-screen lg:flex lg:flex-col lg:justify-center z-20">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/30 mb-2 lg:mb-4 block">Experience</span>
                        <h2 className="text-2xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter italic">
                            Work<br />History
                        </h2>
                        <div className="hidden lg:block w-32 h-1 bg-white/10 mt-12 mb-6" />
                        <p className="hidden lg:block text-white/40 text-lg italic leading-relaxed max-w-xs">
                            Switching focus from professional roles to academic innovation.
                        </p>
                    </div>

                    {/* VERTICAL DIVIDER */}
                    <div className="experience-divider hidden lg:block w-px bg-white/10 mx-12 xl:mx-24 self-stretch z-10" />

                    {/* RIGHT SIDE — SLIDING CONTENT */}
                    <div ref={containerRef} className="experience-content-wrapper w-full lg:w-2/3 relative lg:h-screen lg:overflow-hidden">
                        <div className="experience-sliding-container flex flex-col items-start w-full lg:h-full lg:will-change-transform gap-0 lg:gap-0">
                            {experiences.map((exp, index) => (
                                <article 
                                    key={index} 
                                    className="experience-slide flex flex-col justify-start pt-12 lg:pt-0 lg:justify-center w-full lg:w-full lg:h-full min-h-0 lg:min-h-0 shrink-0 items-start px-6 lg:px-0 pb-8 lg:pb-0"
                                >
                                    <div className="mb-6 lg:mb-8 w-full">
                                        <div className="flex items-center gap-4 text-white/30 font-mono text-[10px] lg:text-sm uppercase tracking-widest mb-4 lg:mb-6">
                                            <span>{exp.period}</span>
                                            <div className="flex-1 h-px bg-white/10" />
                                        </div>
                                        
                                        <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight mb-4 leading-none">
                                            {exp.title}
                                        </h3>
                                        
                                        <div className="flex flex-wrap items-center gap-x-4 lg:gap-x-6 gap-y-2 text-white/50 text-[12px] md:text-lg font-medium">
                                            <span className="flex items-center gap-2 text-white/80">
                                                <Briefcase className="w-4 h-4 lg:w-5 lg:h-5 opacity-50 text-white" />
                                                {exp.company}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <MapPin className="w-3 h-3 lg:w-4 lg:h-4 opacity-50" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-white/60 text-sm md:text-2xl mb-6 lg:mb-12 leading-relaxed italic border-l-4 border-white/20 pl-6 lg:pl-8 max-w-3xl">
                                        {exp.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 w-full">
                                        <div>
                                            <h4 className="text-[10px] lg:text-xs font-mono uppercase tracking-[0.4em] text-white/20 mb-4 lg:mb-6">Key Achievements</h4>
                                            <ul className="space-y-3 lg:space-y-6">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-[11px] md:text-lg text-white/50 flex items-start gap-4">
                                                        <span className="text-white/30 font-bold">/</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-6 lg:mt-0">
                                            <h4 className="text-[10px] lg:text-xs font-mono uppercase tracking-[0.4em] text-white/20 mb-4 lg:mb-6">Technologies</h4>
                                            <div className="flex flex-wrap gap-2 lg:gap-3">
                                                {exp.tech.map((tech, i) => (
                                                    <span key={i} className="text-[10px] px-3 py-1 lg:px-5 lg:py-2 bg-white/[0.04] text-white/60 rounded-full border border-white/10 font-mono uppercase tracking-widest">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
