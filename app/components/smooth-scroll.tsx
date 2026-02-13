"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Ensure body and html can scroll and hide scrollbars
    document.documentElement.style.overflowY = 'auto';
    document.documentElement.style.setProperty('scrollbar-width', 'none');
    document.documentElement.style.setProperty('-ms-overflow-style', 'none');
    document.body.style.overflowY = 'auto';
    document.body.style.setProperty('scrollbar-width', 'none');
    document.body.style.setProperty('-ms-overflow-style', 'none');

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5, // Smooth touch scrolling on mobile/tablet
      infinite: false,
    });

    // Store Lenis instance globally for ScrollTrigger
    (window as any).lenis = lenis;

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    let rafId: number | null = null;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    
    // Initial refresh with delay to ensure everything is loaded
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
      delete (window as any).lenis;
      document.documentElement.style.overflowY = '';
      document.body.style.overflowY = '';
      ScrollTrigger.refresh();
    };
  }, []);

  return children;
}


