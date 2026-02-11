"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Users, Award, Coffee } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    { icon: Code, label: "Projects Completed", value: 10, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 15, suffix: "+" },
    { icon: Award, label: "Years Experience", value: 1, suffix: "+" },
    { icon: Coffee, label: "Cups of Coffee", value: 1000, suffix: "+" }
];

const REVEAL_TEXT = "WHO I AM?";

export default function Stats() {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!wrapperRef.current) return;

        const ctx = gsap.context(() => {
            const letters = gsap.utils.toArray<HTMLElement>(".reveal-letter");
            const textContainer = wrapperRef.current!.querySelector(".text-fly-container") as HTMLElement;
            const leftHalf = gsap.utils.toArray<HTMLElement>(".book-left");
            const rightHalf = gsap.utils.toArray<HTMLElement>(".book-right");
            const statsContent = wrapperRef.current!.querySelector(".stats-content") as HTMLElement;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".reveal-wrapper",
                    start: "top top",
                    // Increased scroll distance on mobile for better smoothness
                    end: () => window.innerWidth < 768 ? "+=150%" : "+=250%",
                    pin: true,
                    scrub: typeof window !== "undefined" && window.innerWidth < 768 ? 1.5 : 0.8,
                }
            });

            // Container flies from top to center
            tl.fromTo(textContainer,
                { y: "-40vh", opacity: 0 },
                { y: "0vh", opacity: 1, duration: 0.3, ease: "power2.out" },
                0
            );

            // Phase 1: Letters appear one by one (0 → 0.4)
            letters.forEach((letter, i) => {
                tl.fromTo(letter,
                    { opacity: 0, scale: 0.5, filter: "blur(10px)" },
                    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.04, ease: "power2.out" },
                    0.02 + i * 0.04
                );
            });

            // Phase 2: Hold the full text visible (0.4 → 0.5)
            tl.to({}, { duration: 0.1 });

            // Phase 3: Book opening — split from center (0.5 → 0.75)
            tl.to(leftHalf, {
                x: () => -window.innerWidth * 0.6,
                opacity: 0,
                rotateY: 45,
                duration: 0.25,
                stagger: 0.02,
                ease: "power3.in"
            }, 0.5);

            tl.to(rightHalf, {
                x: () => window.innerWidth * 0.6,
                opacity: 0,
                rotateY: -45,
                duration: 0.25,
                stagger: 0.02,
                ease: "power3.in"
            }, 0.5);

            // Phase 4: Stats content fades in (0.7 → 1)
            tl.fromTo(statsContent,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" },
                0.7
            );

            // Stat cards stagger in
            tl.fromTo(".stat-card",
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.15, stagger: 0.05, ease: "power3.out" },
                0.75
            );

            tl.fromTo(".about-text",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.2, ease: "power3.out" },
                0.75
            );

            // Animate stat numbers
            gsap.utils.toArray<HTMLElement>(".stat-number").forEach((stat) => {
                const endValue = parseInt(stat.dataset.value || "0");
                const suffix = stat.dataset.suffix || "";

                gsap.to(stat, {
                    scrollTrigger: {
                        trigger: stat,
                        start: "top 90%",
                    },
                    innerHTML: endValue,
                    duration: 2,
                    ease: "power2.out",
                    snap: { innerHTML: 1 },
                    onUpdate: function () {
                        stat.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)) + suffix;
                    }
                });
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    // Split text into left and right halves
    const midIndex = Math.ceil(REVEAL_TEXT.length / 2);
    const leftLetters = REVEAL_TEXT.slice(0, midIndex).split("");
    const rightLetters = REVEAL_TEXT.slice(midIndex).split("");

    return (
        <div ref={wrapperRef}>
            <div className="reveal-wrapper relative overflow-hidden bg-black">
                {/* Full-screen text reveal */}
                <div className="h-screen flex items-center justify-center" style={{ perspective: "1000px" }}>
                    {/* Reveal text container */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-fly-container flex items-center">
                            {/* Left half */}
                            {leftLetters.map((char, i) => (
                                <span
                                    key={`l-${i}`}
                                    className="reveal-letter book-left inline-block text-[clamp(2.5rem,10vw,10rem)] font-black uppercase text-white select-none"
                                    style={{ transformOrigin: "right center" }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                            {/* Right half */}
                            {rightLetters.map((char, i) => (
                                <span
                                    key={`r-${i}`}
                                    className="reveal-letter book-right inline-block text-[clamp(2.5rem,10vw,10rem)] font-black uppercase text-white select-none"
                                    style={{ transformOrigin: "left center" }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats content (hidden initially, revealed after book opens) */}
                    <div className="stats-content absolute inset-0 flex items-center opacity-0 z-20">
                        <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-44 max-w-[1920px] mx-auto">
                            <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-20 items-start">
                                {/* Left — Who I Am */}
                                <div className="about-text w-full lg:w-5/12 space-y-6">
                                    <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">About</span>
                                    <h2 className="text-[clamp(2rem,5vw,5rem)] font-black uppercase leading-[0.95] text-white">
                                        Who I Am
                                    </h2>
                                    <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-lg">
                                        I&apos;m a Full Stack Developer passionate about building beautiful, functional web applications.
                                        I love turning complex problems into simple, elegant solutions.
                                    </p>
                                    <p className="text-sm sm:text-base text-white/35 leading-relaxed max-w-lg">
                                        With expertise in modern JavaScript frameworks, server-side technologies, and cloud platforms,
                                        I specialize in creating scalable applications that deliver exceptional user experiences.
                                    </p>
                                </div>

                                {/* Right — Staggered Stat Cards */}
                                <div className="w-full lg:w-7/12 grid grid-cols-2 gap-3 sm:gap-4">
                                    {stats.map((stat, index) => {
                                        const Icon = stat.icon;
                                        const isOffset = index % 2 === 0;
                                        return (
                                            <div
                                                key={index}
                                                className={`stat-card ${isOffset ? "md:mt-12" : ""}`}
                                            >
                                                <div className="group bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500 p-5 sm:p-6 md:p-8">
                                                    <Icon className="w-5 h-5 text-white/25 mb-5 group-hover:text-white/50 transition-colors duration-500" />
                                                    <div className="text-3xl sm:text-4xl md:text-5xl font-black leading-none text-white mb-2">
                                                        <span
                                                            className="stat-number"
                                                            data-value={stat.value}
                                                            data-suffix={stat.suffix}
                                                        >
                                                            0{stat.suffix}
                                                        </span>
                                                    </div>
                                                    <p className="text-white/35 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium">{stat.label}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
