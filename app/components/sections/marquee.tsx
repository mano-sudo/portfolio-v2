"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Marquee() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackTopRef = useRef<HTMLDivElement>(null);
    const trackBottomRef = useRef<HTMLDivElement>(null);
    const mobileRow1Ref = useRef<HTMLDivElement>(null);
    const mobileRow2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;

            if (isMobile) {
                // MOBILE STYLE: Split rows moving in opposite directions (Parallax)
                // No heavy pinning, just scroll-triggered movement
                gsap.to(mobileRow1Ref.current, {
                    x: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                gsap.to(mobileRow2Ref.current, {
                    x: 100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                // Services fade in
                gsap.from(".mobile-service-item", {
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".mobile-services-grid",
                        start: "top 85%",
                    }
                });

            } else {
                // DESKTOP STYLE: Two horizontal marquees pinned, opposite directions
                const trackTop = trackTopRef.current!;
                const trackBottom = trackBottomRef.current!;

                const calculateValues = (trackEl: HTMLDivElement) => {
                    // Start slightly offscreen for a cleaner first frame
                    const startX = window.innerWidth * 0.25;
                    // Don't force the entire track to pass; keeps composition readable
                    const endX = -(trackEl.scrollWidth - window.innerWidth * 0.85);
                    return { startX, endX };
                };

                const getTop = () => calculateValues(trackTop);
                const getBottom = () => calculateValues(trackBottom);

                // Single ScrollTrigger drives both rows (prevents pin/desync issues)
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        // Start as soon as the section begins to enter the viewport
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.12,
                        invalidateOnRefresh: true,
                    },
                });

                // Top row: right -> left
                tl.fromTo(
                    trackTop,
                    { x: () => getTop().startX },
                    { x: () => getTop().endX, ease: "none" },
                    0
                );

                // Bottom row: left -> right
                tl.fromTo(
                    trackBottom,
                    { x: () => getBottom().endX },
                    { x: () => getBottom().startX, ease: "none" },
                    0
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-24"
        >
            {/* DESKTOP VIEW */}
            <div className="hidden md:flex items-center overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
                
                <div className="w-full flex flex-col justify-center gap-12 lg:gap-14">
                    {/* Row 1 (right -> left) */}
                    <div
                        ref={trackTopRef}
                        className="flex items-center whitespace-nowrap will-change-transform"
                    >
                        <span className="text-[clamp(6rem,12vw,14rem)] font-black text-white leading-[0.9] tracking-tighter select-none">
                            Web Dev
                        </span>
                        <span className="text-[clamp(3rem,5vw,5rem)] text-white/20 mx-14 select-none font-light italic">
                            &
                        </span>
                        <span className="text-[clamp(6rem,12vw,14rem)] font-black text-white leading-[0.9] tracking-tighter select-none">
                            App Dev
                        </span>

                        <div className="ml-24 pr-32 flex flex-col gap-2">
                            <span className="text-base text-white/40 font-mono uppercase tracking-[0.2em]">Services</span>
                            <div className="h-px w-8 bg-white/20 mb-2" />
                            <span className="text-xl text-white/70 font-bold uppercase tracking-tight">Frontend Development</span>
                            <span className="text-xl text-white/70 font-bold uppercase tracking-tight">Backend Systems</span>
                            <span className="text-xl text-white/70 font-bold uppercase tracking-tight">Responsive Design</span>
                            <span className="text-xl text-white/70 font-bold uppercase tracking-tight">API Integration</span>
                        </div>
                    </div>

                
                </div>
            </div>

            {/* MOBILE VIEW - Redesigned for vertical screens */}
            <div className="md:hidden px-6 flex flex-col gap-12">
                <div className="space-y-2">
                    <div ref={mobileRow1Ref} className="whitespace-nowrap translate-x-12">
                        <span className="text-7xl font-black text-white uppercase leading-none tracking-tighter">
                            Web Dev
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-3xl font-light italic text-white/30">&</span>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <div ref={mobileRow2Ref} className="whitespace-nowrap -translate-x-12 flex justify-end">
                        <span className="text-7xl font-black text-white uppercase leading-none tracking-tighter">
                            App Dev
                        </span>
                    </div>
                </div>

                <div className="mobile-services-grid grid grid-cols-1 gap-4 pt-8">
                    <span className="text-[10px] text-white/30 font-mono uppercase tracking-[0.3em] mb-2">Expertise</span>
                    {[
                        "Frontend Development",
                        "Backend Systems",
                        "Responsive Design",
                        "API Integration",
                        "Database Architecture"
                    ].map((service, i) => (
                        <div key={i} className="mobile-service-item flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <span className="text-lg text-white/60 font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                                {service}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
