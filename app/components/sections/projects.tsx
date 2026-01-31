"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution featuring secure payment processing, inventory management, and a comprehensive admin dashboard. Built with modern web technologies for optimal performance and scalability.",
        tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Stripe API"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: true
    },
    {
        title: "Task Management App",
        description: "Real-time collaborative task management application with team features, drag-and-drop functionality, and instant notifications. Supports multiple workspaces and role-based access control.",
        tech: ["Next.js", "MongoDB", "Socket.io", "Redis"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: true
    },
    {
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website featuring Three.js 3D animations, GSAP scroll animations, and smooth transitions. Built with performance and SEO optimization in mind.",
        tech: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: false
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media management with real-time metrics, content scheduling, and engagement tracking across multiple platforms.",
        tech: ["React", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: false
    },
    {
        title: "Weather Forecast App",
        description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features offline support and push notifications.",
        tech: ["Next.js", "TypeScript", "OpenWeather API", "PWA"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: false
    },
    {
        title: "Blog CMS Platform",
        description: "Content management system for bloggers with markdown support, SEO tools, analytics, and customizable themes. Includes comment system and social sharing.",
        tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: false
    }
];

export default function Projects() {
    const sectionRef = useGSAP(() => {
        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: ".projects-section",
                start: "top 80%",
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
        });
    }, []);

    return (
        <section ref={sectionRef} className="projects-section max-w-4xl mx-auto px-6 py-20">
            <div className="mb-12">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Featured Work</h2>
                <p className="text-gray-400 text-lg">
                    A collection of projects showcasing my skills in full-stack development, modern frameworks, and user experience design.
                </p>
            </div>
            
            {/* Blog-style project list */}
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <article key={index} className="project-card group border-b border-gray-800 pb-12 last:border-b-0">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.featured && (
                                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full ml-4">Featured</span>
                                    )}
                                </div>
                                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded border border-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-4">
                                    <a 
                                        href={project.github} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-2"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>View Code</span>
                                    </a>
                                    <a 
                                        href={project.live} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-2"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

