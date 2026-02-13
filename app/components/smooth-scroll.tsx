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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
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

    // Handle scrollbar dragging - detect when user drags scrollbar
    let isDraggingScrollbar = false;
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const scrollDelta = Math.abs(currentScrollTop - lastScrollTop);
      
      // If scroll change is large, likely scrollbar dragging
      if (scrollDelta > 10) {
        isDraggingScrollbar = true;
        lenis.scrollTo(currentScrollTop, { immediate: true });
        ScrollTrigger.update();
        
        setTimeout(() => {
          isDraggingScrollbar = false;
        }, 100);
      }
      
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Refresh ScrollTrigger after Lenis is initialized and on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    
    // Wait a bit for everything to initialize
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
      delete (window as any).lenis;
      ScrollTrigger.refresh();
    };
  }, []);

  return children;
}


