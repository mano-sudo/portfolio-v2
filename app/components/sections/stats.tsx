"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Users, Award, Coffee } from "lucide-react";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    { icon: Code, label: "Projects Completed", value: 50, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 30, suffix: "+" },
    { icon: Award, label: "Years Experience", value: 5, suffix: "+" },
    { icon: Coffee, label: "Cups of Coffee", value: 1000, suffix: "+" }
];

export default function Stats() {
    const sectionRef = useGSAP(() => {
        gsap.from(".stat-item", {
            scrollTrigger: {
                trigger: ".stats-section",
                start: "top 80%",
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
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
                onUpdate: function() {
                    stat.innerHTML = Math.ceil(this.targets()[0].innerHTML) + suffix;
                }
            });
        });
    }, []);

    return (
        <section ref={sectionRef} className="stats-section max-w-4xl mx-auto px-6 py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-800 pb-12">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="stat-item">
                            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all text-center group">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-4 group-hover:bg-purple-500/20 transition-colors">
                                    <Icon className="w-8 h-8 text-purple-400" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    <span 
                                        className="stat-number"
                                        data-value={stat.value}
                                        data-suffix={stat.suffix}
                                    >
                                        0{stat.suffix}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

