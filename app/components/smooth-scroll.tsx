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
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
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

    // Handle scrollbar dragging - sync Lenis when scrollbar is used
    let scrollbarTimeout: NodeJS.Timeout;
    let lastNativeScroll = window.scrollY;
    let isScrollbarDrag = false;

    const handleNativeScroll = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - lastNativeScroll);
      
      // Detect scrollbar dragging (large jumps in scroll position)
      if (delta > 5 && !isScrollbarDrag) {
        isScrollbarDrag = true;
        // Immediately sync Lenis to native scroll position
        lenis.scrollTo(currentScroll, { immediate: true });
        ScrollTrigger.update();
      }
      
      lastNativeScroll = currentScroll;
      
      // Reset scrollbar drag flag after a delay
      clearTimeout(scrollbarTimeout);
      scrollbarTimeout = setTimeout(() => {
        isScrollbarDrag = false;
      }, 200);
    };

    // Listen for native scroll events (from scrollbar)
    window.addEventListener("scroll", handleNativeScroll, { passive: true, capture: true });

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
      window.removeEventListener("scroll", handleNativeScroll, { capture: true } as any);
      clearTimeout(scrollbarTimeout);
      lenis.destroy();
      delete (window as any).lenis;
      ScrollTrigger.refresh();
    };
  }, []);

  return children;
}


