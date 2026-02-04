"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
    const sectionRef = useGSAP(() => {
        gsap.from(".contact-item", {
            scrollTrigger: {
                trigger: ".contact-section",
                start: "top 80%",
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="contact-section max-w-3xl mx-auto px-6 py-20">
            <div className="mb-12">
                <span className="text-sm text-gray-300 uppercase tracking-wider">Contact</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Get In Touch</h2>
            </div>
            
            <div className="prose prose-invert max-w-none mb-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                
                <a 
                    href="mailto:romancaseres929@gmail.com"
                    aria-label="Send email to romancaseres929@gmail.com"
                    className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-purple-400 transition-colors border-b border-gray-700 hover:border-purple-400 pb-1"
                >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    <span>romancaseres929@gmail.com</span>
                </a>
            </div>

            <div className="flex gap-6 pt-8 border-t border-gray-800">
                <a href="mailto:romancaseres929@gmail.com" aria-label="Email" className="contact-item text-gray-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                </a>
                <a href="#" aria-label="GitHub profile" className="contact-item text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" aria-hidden="true" />
                </a>
                <a href="#" aria-label="LinkedIn profile" className="contact-item text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a href="#" aria-label="Twitter profile" className="contact-item text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}

