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
        title: "Attendance Monitoring System",
        description: "A web-based attendance monitoring system built with PHP, MySQL, Bootstrap, and JavaScript. Enables real-time logging of employee time-in/out, automated attendance tracking, and report generation. Features an intuitive admin dashboard for employee and schedule management, with a responsive UI and efficient backend integration for streamlined workforce monitoring.",
        tech: ["html", "css", "php", "mysql", "bootstrap", "javascript"],
        github: "https://github.com/mano-sudo/AMS",
        live: "https://ams.manosudo.com",
        featured: true,
        year: "2024",
        image: "/images/AMS.png"
    },
    {
        title: "OutfitHaven: Responsive E-Commerce Platform",
        description: "A Web-Based E-Commerce Platform for Local Fashion Brands in the Philippines Fashion Depot is a modern web-based e-commerce system built with React, Tailwind CSS, PHP, and MySQL, designed to showcase and support Philippine local fashion brands. The platform offers a smooth and dynamic shopping experience, enabling customers to browse collections in real-time, securely place orders, and engage directly with their favorite local designers.",
        tech: ["react", "tailwind", "Node.js", "mongoDB"],
        github: "https://github.com/mano-sudo/OutfitHaven",
        live: "https://outfithat.manosudo.com",
        featured: true,
        year: "2024",
        image: "/images/otf.png"
    },
    {
        title: "Burger Ka Samen Ordering System",
        description: "A full-stack burger ordering system built with PHP, MySQL, Tailwind CSS, and JavaScript. Supports customer ordering with cart and checkout features, and includes an admin dashboard for managing products, orders, and users. Designed with a responsive UI and efficient backend.",
        tech: ["html", "css", "php", "mysql", "tailwind", "javascript"],
        github: "https://github.com/mano-sudo/Ordering-System",
        live: "https://ordering.manosudo.com",
        featured: false,
        year: "2023",
        image: "/images/bks.png"
    },
   
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useGSAP(() => {
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
            // Initial state: hide everything on desktop only
            gsap.set(".projects-header", { opacity: 0, y: 20 });
            gsap.set(".projects-content-wrapper", { opacity: 0 });
            gsap.set(".featured-work-title", { opacity: 0, scale: 0.5, filter: "blur(20px)" });
            gsap.set(".featured-work-title-left", { x: 0, opacity: 1 });
            gsap.set(".featured-work-title-right", { x: 0, opacity: 1 });

            // Combined timeline for title emergence, split, and projects reveal
            // Will be extended to include projects scroll
            const transitionTl = gsap.timeline();

            // Phase 1: Show "Featured Work" title emerging from blackhole
            transitionTl.to(".featured-work-title", {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.5,
                ease: "power2.out"
            });

            // Phase 2: Hold title visible
            transitionTl.to({}, { duration: 0.3 });

            // Phase 3: Split the title in half
            transitionTl.to(".featured-work-title-left", {
                x: -window.innerWidth * 1.5,
                opacity: 0,
                duration: 0.4,
                ease: "power3.in"
            });

            transitionTl.to(".featured-work-title-right", {
                x: window.innerWidth * 1.5,
                opacity: 0,
                duration: 0.4,
                ease: "power3.in"
            }, "<");

            // Hide title container
            transitionTl.to(".featured-work-title", {
                opacity: 0,
                duration: 0.2,
                ease: "power1.in"
            }, "-=0.3");

            // Phase 4: Show projects content after title splits
            transitionTl.to(".projects-header", {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.2");

            transitionTl.to(".projects-content-wrapper", {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }, "<");

            // Show first project card and content
            transitionTl.to(".project-card-0", {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }, "<");

            transitionTl.to(".project-content-0", {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }, "<");

            // Ensure title overlay is completely hidden at the end
            transitionTl.set(".featured-work-title", {
                display: "none",
                pointerEvents: "none"
            });

            // Desktop: Pinned scroll with stacked images and content sliding from left
            const itemStackDistance = 30;
            const itemScale = 0.03;
            const baseScale = 0.85;

            // Set initial states - all images visible and stacked
            projects.forEach((_, i) => {
                if (i === 0) {
                    // First project content - visible (will be shown after transition)
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

            // Create ScrollTrigger for the combined timeline
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${200 + (projects.length - 1) * 100}%`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                animation: transitionTl
            });

            // Projects scroll animation - add to transition timeline after transition
            const tl = transitionTl;
            
            // Add projects scroll animations after transition completes
            // Position them to start after the transition (at position 2.0 in timeline)

            // Animate transitions between projects
            // Start after transition (position 2.0) + project index
            projects.forEach((_, i) => {
                if (i > 0) {
                    const position = 2.0 + (i - 1);
                    
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
        } else {
            // Mobile & Tablet: Simple configuration - no animations, just show projects
            gsap.set(".featured-work-title", { display: "none" });
            
            // Make sure all projects are visible and in normal flow - no animations
            projects.forEach((_, i) => {
                gsap.set(`.project-card-${i}`, { 
                    opacity: 1,
                    position: "relative",
                    display: "block",
                    y: 0
                });
                gsap.set(`.project-content-${i}`, { 
                    opacity: 1,
                    x: 0,
                    y: 0
                });
                gsap.set(`.project-image-${i}`, {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                    position: "relative"
                });
            });
        }
    }, []);

    return (
        <section ref={sectionRef} className="projects-section relative bg-black overflow-hidden">
            {/* Featured Work Title - Split Animation */}
            <div className="featured-work-title fixed inset-0 z-10000 flex items-center justify-center pointer-events-none opacity-0">
                <h2 className="text-7xl lg:text-9xl font-black text-white uppercase leading-[0.9] tracking-tighter italic relative">
                    <span className="featured-work-title-left inline-block">Featured</span>
                    <span className="featured-work-title-right inline-block ml-4">Work</span>
                </h2>
            </div>

            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                {/* Header - Only visible on mobile/tablet, hidden on desktop */}
                <div className="projects-header pt-12 lg:pt-20 pb-8 lg:pb-12 lg:hidden">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/30 mb-2 lg:mb-4 block">Projects</span>
                    <h2 className="text-2xl md:text-5xl lg:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter italic mb-4">
                        Featured<br className="lg:hidden" /> <span className="lg:block">Work</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-lg italic leading-relaxed max-w-2xl lg:max-w-xl">
                        A collection of projects showcasing full-stack development and modern design.
                    </p>
                </div>

                {/* Projects Container - Desktop: pinned scroll, Mobile/Tablet: simple normal scroll */}
                <div ref={containerRef} className="projects-content-wrapper relative lg:h-screen lg:overflow-hidden z-10 lg:flex lg:items-center">
                    <div className="projects-sliding-container relative w-full lg:h-full lg:flex lg:items-center flex flex-col lg:flex-row gap-0 lg:gap-0">
                        {projects.map((project, index) => (
                            <article 
                                key={index} 
                                className={`project-card project-card-${index} relative lg:absolute inset-0 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 w-full lg:h-full min-h-[500px] md:min-h-[600px] lg:min-h-0 items-start lg:items-center justify-start lg:justify-center pb-8 md:pb-12 lg:pb-0 mb-16 md:mb-20 lg:mb-0`}
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
                                    
                                    <div className="flex flex-wrap gap-6 mb-5 md:gap-8 lg:gap-6">
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

                                {/* Image Section - RIGHT SIDE - Stacked on desktop, normal on mobile/tablet */}
                                <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] lg:max-h-[80vh]">
                                    <div 
                                        className={`project-image project-image-${index} relative lg:absolute top-0 left-0 w-full h-full overflow-hidden rounded-sm border border-white/10 bg-white/5`}
                                        style={{
                                            transformOrigin: 'center center',
                                            willChange: 'transform, filter, opacity',
                                            backfaceVisibility: 'hidden'
                                        }}
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain opacity-90"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
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
