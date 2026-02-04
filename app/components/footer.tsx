"use client";

import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-800 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Roman Caseres. All rights reserved.
                        </p>
                        <p className="text-gray-300 text-xs mt-1">
                            Built with Next.js, Three.js, and GSAP
                        </p>
                    </div>
                    
                    <div className="flex gap-4">
                        <a 
                            href="mailto:romancaseres929@gmail.com"
                            className="p-2 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
                        </a>
                        <a 
                            href="#"
                            className="p-2 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                        </a>
                        <a 
                            href="#"
                            className="p-2 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                        </a>
                        <a 
                            href="#"
                            className="p-2 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

