"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
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

export default function Stats() {
    const sectionRef = useGSAP(() => {
        gsap.from(".about-text", {
            scrollTrigger: {
                trigger: ".stats-about-section",
                start: "top 80%",
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from(".stat-card", {
            scrollTrigger: {
                trigger: ".stats-about-section",
                start: "top 75%",
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out"
        });

        // Animate numbers
        gsap.utils.toArray(".stat-number").forEach((stat: any) => {
            const endValue = parseInt(stat.dataset.value);
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
                    stat.innerHTML = Math.ceil(this.targets()[0].innerHTML) + suffix;
                }
            });
        });
    }, []);

    return (
        <section ref={sectionRef} className="stats-about-section w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-44 py-20 sm:py-28 max-w-[1920px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 items-start">
                {/* Left — Who I Am */}
                <div className="about-text w-full lg:w-5/12 lg:sticky lg:top-32 space-y-6">
                    <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">About</span>
                    <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-[0.95] text-white">
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
    );
}
