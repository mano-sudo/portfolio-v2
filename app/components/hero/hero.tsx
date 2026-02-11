"use client";

export default function Hero() {
    return (
        <section className="w-full min-h-screen flex items-center py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="w-full px-4 sm:px-6 md:pl-12 lg:pl-20 max-w-[1920px] mx-auto relative">
                <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                    <div className="group relative inline-block overflow-hidden px-4 sm:px-6 md:px-8">
                        {/* reveal panel (opens to the right) */}
                        <div className="pointer-events-none absolute inset-0 origin-left scale-x-0 opacity-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:opacity-100 will-change-[transform,opacity]">
                            <div className="absolute inset-0 bg-white/10" />
                            <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0" />
                            {/* leading edge */}
                            <div className="absolute right-0 top-0 h-full w-px bg-white/60" />
                        </div>
                        {/* subtle top shine */}
                        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />

                        {/* lightweight glow (small area, cheaper than huge blur-3xl) */}
                        <div className="pointer-events-none absolute -inset-2 sm:-inset-3 md:-inset-4 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 will-change-[opacity]">
                            <div className="absolute inset-0 rounded-md bg-white/10 blur-xl" />
                        </div>

                        <div className="relative text-[clamp(3.5rem,11vw,12rem)] font-black uppercase leading-[0.9] sm:leading-none select-none transition-[letter-spacing,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 sm:group-hover:translate-x-2 md:group-hover:translate-x-3 group-hover:tracking-[0.03em] sm:group-hover:tracking-[0.04em] md:group-hover:tracking-[0.06em] will-change-transform">
                            {/* outline layer - visible by default for extra visibility */}
                            <span
                                className="absolute inset-0 opacity-30 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0"
                                style={{
                                    WebkitTextStroke: "2px #ffffff",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent",
                                }}
                            >
                                FULL
                            </span>
                            {/* solid layer - visible by default */}
                            <span className="opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-white">
                                FULL
                            </span>
                        </div>
                    </div>
                    <div className="group relative inline-block overflow-hidden px-4 sm:px-6 md:px-8">
                        {/* reveal panel (opens to the right) */}
                        <div className="pointer-events-none absolute inset-0 origin-left scale-x-0 opacity-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:opacity-100 will-change-[transform,opacity]">
                            <div className="absolute inset-0 bg-white/10" />
                            <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0" />
                            {/* leading edge */}
                            <div className="absolute right-0 top-0 h-full w-px bg-white/60" />
                        </div>
                        {/* subtle top shine */}
                        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />

                        {/* lightweight glow (small area, cheaper than huge blur-3xl) */}
                        <div className="pointer-events-none absolute -inset-2 sm:-inset-3 md:-inset-4 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 will-change-[opacity]">
                            <div className="absolute inset-0 rounded-md bg-white/10 blur-xl" />
                        </div>

                        <div className="relative text-[clamp(3.5rem,11vw,12rem)] font-black uppercase leading-[0.9] sm:leading-none select-none transition-[letter-spacing,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 sm:group-hover:translate-x-2 md:group-hover:translate-x-3 group-hover:tracking-[0.03em] sm:group-hover:tracking-[0.04em] md:group-hover:tracking-[0.06em] will-change-transform">
                            {/* outline layer - visible by default for extra visibility */}
                            <span
                                className="absolute inset-0 opacity-30 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0"
                                style={{
                                    WebkitTextStroke: "2px #ffffff",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent",
                                }}
                            >
                                STACK
                            </span>
                            {/* solid layer - visible by default */}
                            <span className="opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-white">
                                STACK
                            </span>
                        </div>
                    </div>
                    <div className="hidden xl:block absolute xl:top-[calc((3.5rem*0.9)_+_0.25rem_+_3.5rem_+_0.25rem)] xl:right-20 font-mono text-sm leading-relaxed">
                        <div className="text-purple-400">const <span className="text-blue-400">identity</span> = &#123;</div>
                        <div className="pl-4 text-gray-300">
                            name: <span className="text-emerald-400">"Roman Caseres"</span>,
                        </div>
                        <div className="text-purple-400">&#125;;</div>

                        <div className="mt-2 text-purple-400">
                            const <span className="text-blue-400">stack</span> = &#123;
                        </div>
                        <div className="pl-4 text-gray-300">
                            frontend: <span className="text-amber-400">["React", "TypeScript", "Tailwind"]</span>,
                        </div>
                        <div className="pl-4 text-gray-300">
                            backend: <span className="text-amber-400">["Laravel", "PHP", "MySQL"]</span>,
                        </div>
                        <div className="pl-4 text-gray-300">
                            tools: <span className="text-amber-400">["Git", "Vite", "Figma"]</span>,
                        </div>
                        <div className="text-purple-400">&#125;;</div>
                    </div>
                    <h1 className="text-[clamp(3.5rem,11vw,12rem)] font-black uppercase leading-[0.9] sm:leading-none text-gray-400 px-4 sm:px-6 md:px-8">
                        <span className="sr-only">Full Stack </span>DEVELOPER
                    </h1>

                    {/* Description & CTA — visible only when code snippet is hidden */}
                    <div className="xl:hidden mt-6 sm:mt-8 px-4 sm:px-6 md:px-8 space-y-6">
                        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
                            Passionate full-stack developer crafting modern, performant, and visually stunning web experiences from concept to deployment.
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            <a
                                href="#contacts"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-sm sm:text-base rounded-md hover:bg-gray-200 transition-colors duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                                Contact Me
                            </a>
                            <a
                                href="https://github.com/mano-sudo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold text-sm sm:text-base rounded-md hover:bg-white/10 transition-colors duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
