"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AppNavbar() {
    const pathname = usePathname();
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
            const day = days[now.getDay()];
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? "P.M" : "A.M";
            const displayHours = hours % 12 || 12;
            const displayMinutes = minutes.toString().padStart(2, "0");
            setCurrentTime(`${day} ${displayHours}:${displayMinutes} ${ampm}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const navItems = [
        { name: "ABOUT", href: "/" },
        { name: "PROJECTS", href: "/projects" },
        { name: "CONTACTS", href: "/contacts" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-6 px-8 md:px-12 lg:px-20">
            {/* Left - Dashboard/Time */}
            <div className="text-white uppercase tracking-wider text-xs md:text-sm font-medium">
                DASHBOARD
            </div>
           
            {/* Center - Navigation Items */}
            <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative uppercase tracking-wider text-xs md:text-sm font-medium transition-all ${
                                isActive
                                    ? "text-white"
                                    : "text-white/60 hover:text-white"
                            }`}
                        >
                            {item.name}
                            {isActive && (
                                <span className="absolute -bottom-1 left-0 w-full h-px bg-white" />
                            )}
                        </Link>
                    );
                })}
                
                {/* Logo/Brand */}
                <div className="w-8 h-8 border-2 border-white rounded-sm rotate-45"></div>
                
                {/* Right side nav */}
                <Link
                    href="#contact"
                    aria-label="Navigate to contact section"
                    className="text-white uppercase tracking-wider text-xs md:text-sm font-medium hover:text-white/80 transition-colors"
                >
                    LET'S WORK
                </Link>
            </div>
        </nav>
    );
}