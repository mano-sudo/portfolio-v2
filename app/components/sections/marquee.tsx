"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Marquee() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !trackRef.current) return;

        const ctx = gsap.context(() => {
            const track = trackRef.current!;
            
            // Re-calculate everything on refresh for full responsiveness
            const calculateValues = () => {
                // Start with text peeking from the right (only "Web" or part of it visible)
                const startX = window.innerWidth * 0.85;
                const endX = window.innerWidth - track.scrollWidth;
                return { startX, endX };
            };

            let { startX, endX } = calculateValues();

            gsap.fromTo(track, 
                { x: startX },
                {
                    x: endX,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        // Make scroll duration proportional to content length
                        end: () => `+=${Math.abs(startX - endX) * (window.innerWidth < 768 ? 0.6 : 1)}`,
                        pin: true,
                        scrub: 1, // Smoother scrub
                        invalidateOnRefresh: true,
                        onRefresh: (self) => {
                            // Update values on window resize
                            const vals = calculateValues();
                            startX = vals.startX;
                            endX = vals.endX;
                        }
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-black"
        >
            {/* Smooth gradient masks for the edges to make it look premium */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none hidden md:block" />

            {/* Marquee container - Variable height for mobile/desktop */}
            <div className="h-[35vh] md:h-[60vh] flex items-center justify-center">
                <div
                    ref={trackRef}
                    className="flex items-center whitespace-nowrap will-change-transform px-4 md:px-0"
                >
                    <span className="text-[clamp(3.5rem,14vw,18rem)] font-black text-white leading-none tracking-tighter select-none">
                        Web Dev
                    </span>
                    <span className="text-[clamp(1.5rem,6vw,6rem)] text-white/20 mx-4 sm:mx-10 md:mx-16 select-none font-light italic">
                        &
                    </span>
                    <span className="text-[clamp(3.5rem,14vw,18rem)] font-black text-white leading-none tracking-tighter select-none">
                        App Dev
                    </span>

                    {/* Services list at the end - Responsive padding and font */}
                    <div className="ml-10 sm:ml-20 md:ml-32 pr-10 sm:pr-20 md:pr-40 flex flex-col gap-1 md:gap-2">
                        <span className="text-[10px] sm:text-xs md:text-base text-white/40 font-mono uppercase tracking-[0.2em]">Services</span>
                        <div className="h-px w-8 bg-white/20 mb-1 md:mb-2" />
                        <span className="text-xs sm:text-base md:text-xl text-white/70 font-bold uppercase tracking-tight">Frontend Development</span>
                        <span className="text-xs sm:text-base md:text-xl text-white/70 font-bold uppercase tracking-tight">Backend Systems</span>
                        <span className="text-xs sm:text-base md:text-xl text-white/70 font-bold uppercase tracking-tight">Responsive Design</span>
                        <span className="text-xs sm:text-base md:text-xl text-white/70 font-bold uppercase tracking-tight">API Integration</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
