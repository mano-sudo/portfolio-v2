"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

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
        featured: true,
        year: "2024",
        image: "/images/projects/ecommerce.jpg"
    },
    {
        title: "Task Management App",
        description: "Real-time collaborative task management application with team features, drag-and-drop functionality, and instant notifications. Supports multiple workspaces and role-based access control.",
        tech: ["Next.js", "MongoDB", "Socket.io", "Redis"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: true,
        year: "2024",
        image: "/images/projects/taskapp.jpg"
    },
    {
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website featuring Three.js 3D animations, GSAP scroll animations, and smooth transitions. Built with performance and SEO optimization in mind.",
        tech: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: false,
        year: "2023",
        image: "/images/projects/portfolio.jpg"
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media management with real-time metrics, content scheduling, and engagement tracking across multiple platforms.",
        tech: ["React", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: false,
        year: "2023",
        image: "/images/projects/dashboard.jpg"
    },
    {
        title: "Weather Forecast App",
        description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features offline support and push notifications.",
        tech: ["Next.js", "TypeScript", "OpenWeather API", "PWA"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: false,
        year: "2023",
        image: "/images/projects/weather.jpg"
    },
    {
        title: "Blog CMS Platform",
        description: "Content management system for bloggers with markdown support, SEO tools, analytics, and customizable themes. Includes comment system and social sharing.",
        tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
        github: "https://github.com",
        live: "https://demo.com",
        featured: false,
        year: "2022",
        image: "/images/projects/blog.jpg"
    }
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useGSAP(() => {
        const isDesktop = window.innerWidth >= 1024;

        // Entrance animation
        if (isDesktop) {
            gsap.from(".projects-header", {
                y: 50,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                }
            });
        }

        // Desktop: Pinned scroll with stacked images and content sliding from left
        if (isDesktop) {
            const itemStackDistance = 30;
            const itemScale = 0.03;
            const baseScale = 0.85;

            // Set initial states - all images visible and stacked
            projects.forEach((_, i) => {
                if (i === 0) {
                    // First project content - visible
                    gsap.set(`.project-content-${i}`, { x: 0, opacity: 1 });
                    gsap.set(`.project-card-${i}`, { opacity: 1 });
                } else {
                    // Other projects content - hidden
                    gsap.set(`.project-content-${i}`, { x: -100, opacity: 0 });
                    gsap.set(`.project-card-${i}`, { opacity: 0 });
                }

                // All images start stacked - visible with offsets
                const scale = baseScale + i * itemScale;
                const yOffset = i * itemStackDistance;
                const xOffset = i * 15;
                const opacity = Math.max(0.3, 1 - (i * 0.15));

                gsap.set(`.project-image-${i}`, {
                    opacity: opacity,
                    scale: scale,
                    x: xOffset,
                    y: yOffset,
                    zIndex: projects.length - i,
                    filter: i > 0 ? `blur(${i * 2}px)` : 'blur(0px)'
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${(projects.length - 1) * 100}%`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                }
            });

            // Animate transitions between projects
            projects.forEach((_, i) => {
                if (i > 0) {
                    const position = i - 1;
                    
                    // Hide previous card
                    tl.to(`.project-card-${i - 1}`, {
                        opacity: 0,
                        duration: 0.8,
                        ease: "power1.inOut"
                    }, position);

                    // Show current card
                    tl.to(`.project-card-${i}`, {
                        opacity: 1,
                        duration: 0.8,
                        ease: "power1.inOut"
                    }, position);

                    // Slide previous content out to left
                    tl.to(`.project-content-${i - 1}`, {
                        x: -100,
                        opacity: 0,
                        duration: 1,
                        ease: "power1.inOut"
                    }, position);

                    // Slide new content in from left
                    tl.to(`.project-content-${i}`, {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power1.inOut"
                    }, position);

                    // Move previous image up and back in stack
                    const prevScale = baseScale + (i - 1) * itemScale;
                    const prevY = (i - 1) * itemStackDistance - 50;
                    const prevX = (i - 1) * 15 + 20;
                    const prevOpacity = Math.max(0.2, 1 - ((i - 1) * 0.15 + 0.2));
                    const prevBlur = (i - 1) * 2 + 3;

                    tl.to(`.project-image-${i - 1}`, {
                        opacity: prevOpacity,
                        scale: prevScale,
                        x: prevX,
                        y: prevY,
                        zIndex: projects.length - i,
                        filter: `blur(${prevBlur}px)`,
                        duration: 1,
                        ease: "power1.inOut"
                    }, position);

                    // Bring new image to front of stack
                    tl.to(`.project-image-${i}`, {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        zIndex: projects.length,
                        filter: 'blur(0px)',
                        duration: 1,
                        ease: "power1.inOut"
                    }, position);

                    // Update images behind the new front image
                    for (let j = i + 1; j < projects.length; j++) {
                        const behindScale = baseScale + (j - i) * itemScale;
                        const behindY = (j - i) * itemStackDistance;
                        const behindX = (j - i) * 15;
                        const behindOpacity = Math.max(0.3, 1 - ((j - i) * 0.15));
                        const behindBlur = (j - i) * 2;

                        tl.to(`.project-image-${j}`, {
                            opacity: behindOpacity,
                            scale: behindScale,
                            x: behindX,
                            y: behindY,
                            zIndex: projects.length - (j - i),
                            filter: `blur(${behindBlur}px)`,
                            duration: 1,
                            ease: "power1.inOut"
                        }, position);
                    }
                }
            });
        }
        // Mobile: Normal scroll
    }, []);

    return (
        <section ref={sectionRef} className="projects-section relative bg-black overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                {/* Header */}
                <div className="projects-header pt-12 lg:pt-20 pb-8 lg:pb-12">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/30 mb-2 lg:mb-4 block">Projects</span>
                    <h2 className="text-2xl md:text-5xl lg:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter italic mb-4">
                        Featured<br className="lg:hidden" /> <span className="lg:block">Work</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-lg italic leading-relaxed max-w-2xl lg:max-w-xl">
                        A collection of projects showcasing full-stack development and modern design.
                    </p>
                </div>

                {/* Projects Container - One at a time */}
                <div ref={containerRef} className="projects-content-wrapper relative lg:h-[calc(100vh-300px)] lg:overflow-hidden">
                    <div className="projects-sliding-container relative w-full lg:h-full">
                        {projects.map((project, index) => (
                            <article 
                                key={index} 
                                className={`project-card project-card-${index} relative lg:absolute inset-0 flex flex-col lg:flex-row gap-8 lg:gap-12 w-full lg:h-full min-h-[600px] lg:min-h-0 items-start lg:items-center pb-12 lg:pb-8`}
                            >
                                {/* Content Section - LEFT SIDE */}
                                <div className={`project-content project-content-${index} w-full lg:w-1/2 flex flex-col justify-center z-10 relative ${index === 0 ? 'lg:opacity-100' : 'lg:opacity-0'}`}>
                                    <div className="mb-6">
                                        <div className="flex items-center gap-4 text-white/30 font-mono text-[10px] lg:text-sm uppercase tracking-widest mb-4">
                                            <span>{project.year}</span>
                                            {project.featured && (
                                                <>
                                                    <div className="flex-1 h-px bg-white/10" />
                                                    <span className="text-white/40">Featured</span>
                                                </>
                                            )}
                                        </div>
                                        
                                        <h3 className="text-3xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-none">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-white/60 text-sm md:text-lg lg:text-xl mb-8 leading-relaxed italic border-l-4 border-white/20 pl-6">
                                        {project.description}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-[10px] lg:text-xs font-mono uppercase tracking-[0.4em] text-white/20 mb-4">Technologies</h4>
                                        <div className="flex flex-wrap gap-2 lg:gap-3">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="text-[10px] px-3 py-1 lg:px-4 lg:py-2 bg-white/4 text-white/60 rounded-full border border-white/10 font-mono uppercase tracking-widest">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-4 lg:gap-6">
                                        <a 
                                            href={project.github} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} source code on GitHub`}
                                            className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                                                <Github className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="text-sm font-medium uppercase tracking-wider">Code</span>
                                        </a>
                                        <a 
                                            href={project.live} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} live demo`}
                                            className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                                                <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="text-sm font-medium uppercase tracking-wider">Live</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Image Section - RIGHT SIDE - Stacked */}
                                <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[85%] lg:mb-8">
                                    <div 
                                        className={`project-image project-image-${index} absolute top-0 left-0 w-full h-full overflow-hidden rounded-sm border border-white/10 bg-white/5`}
                                        style={{
                                            transformOrigin: 'top center',
                                            willChange: 'transform, filter, opacity',
                                            backfaceVisibility: 'hidden'
                                        }}
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover opacity-90"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
