"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "Tech Innovations Inc.",
        image: "👩‍💼",
        content: "Roman is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He transformed our application's performance significantly.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "CTO",
        company: "Digital Solutions LLC",
        image: "👨‍💻",
        content: "Working with Roman was a pleasure. He's not just a developer but a true problem solver. His ability to understand complex requirements and translate them into elegant solutions is remarkable.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Design Lead",
        company: "StartupHub",
        image: "👩‍🎨",
        content: "Roman's technical expertise combined with his understanding of user experience makes him an invaluable team member. He brings ideas to life beautifully and efficiently.",
        rating: 5
    },
    {
        name: "David Thompson",
        role: "Engineering Manager",
        company: "Tech Innovations Inc.",
        image: "👨‍🔧",
        content: "Roman is a mentor to junior developers and always willing to share knowledge. His code quality and architectural decisions have significantly improved our codebase.",
        rating: 5
    }
];

export default function Testimonials() {
    const sectionRef = useGSAP(() => {
        gsap.from(".testimonial-card", {
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top 80%",
            },
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)"
        });
    }, []);

    return (
        <section ref={sectionRef} className="testimonials-section max-w-4xl mx-auto px-6 py-20">
            <div className="mb-12">
                <span className="text-sm text-gray-300 uppercase tracking-wider">Testimonials</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">What People Say</h2>
                <p className="text-gray-400 text-lg">
                    What colleagues and clients say about working with me.
                </p>
            </div>

            <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="testimonial-card border-l-4 border-purple-500/30 pl-8 py-6">
                        <Quote className="w-8 h-8 text-purple-400/30 mb-4" />
                        
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                            "{testimonial.content}"
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xl border border-gray-700">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    <p className="text-xs text-gray-300">{testimonial.company}</p>
                                </div>
                            </div>

                            <div className="flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">★</span>
                                ))}
                            </div>
                        </div>
                    </blockquote>
                ))}
            </div>
        </section>
    );
}

