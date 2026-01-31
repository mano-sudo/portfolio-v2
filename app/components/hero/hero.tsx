"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import FloatingIcons from "./floating-icons";

export default function Hero() {
    const [currentTime, setCurrentTime] = useState("");
    const [weather, setWeather] = useState("DAMN CLOUDY, 25°");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? "P.M" : "A.M";
            const displayHours = hours % 12 || 12;
            const displayMinutes = minutes.toString().padStart(2, "0");
            setCurrentTime(`${displayHours}:${displayMinutes} ${ampm}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const heroRef = useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.from(".hero-name", {
            opacity: 0,
            y: 10,
            duration: 0.6,
            ease: "power2.out"
        })
        .from(".hero-title-line", {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.3")
        .from(".hero-side-info", {
            opacity: 0,
            x: -20,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5")
        .from(".hero-side-info-right", {
            opacity: 0,
            x: 20,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.8");
    }, []);

    return (
        <section className="w-full min-h-screen flex items-center justify-center relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:py-20 overflow-hidden" style={{ isolation: 'isolate' }}>
            <div ref={heroRef} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
                <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-6 items-center">
                    {/* Left Side Info - Hidden on mobile */}
                    <div className="hidden md:block col-span-2 hero-side-info">
                        <div className="space-y-2 text-white uppercase tracking-wider text-xs md:text-sm">
                            <p>{currentTime || "8:32 A.M"}</p>
                            <p className="text-white/80">{weather}</p>
                        </div>
                    </div>

                    {/* Center - Main Title */}
                    <div className="col-span-12 md:col-span-8 text-center">
                        <div className="mb-3 sm:mb-4 md:mb-6">
                            <p className="hero-name text-white/60 uppercase tracking-wider text-[10px] sm:text-xs md:text-sm">Roman Caseres</p>
                        </div>
                        <h1 className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black uppercase tracking-tight leading-none">
                            <div className="hero-title-line">FULL STACK</div>
                            <div className="hero-title-line">DEVELOPER</div>
                        </h1>
                    </div>

                    {/* Right Side Info - Hidden on mobile */}
                    <div className="hidden md:block col-span-2 hero-side-info-right text-right">
                        <div className="space-y-2 text-white uppercase tracking-wider text-xs md:text-sm">
                            <p className="text-white/80">VISIBILITY 6 MI</p>
                            <p className="text-white/80">WINDS ENE 8 MPH</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 overflow-hidden z-20" style={{ clipPath: 'inset(0)', willChange: 'transform' }}>
                <FloatingIcons />
            </div>
        </section>
    );
}
