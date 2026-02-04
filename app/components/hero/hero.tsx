"use client";

export default function Hero() {
    return (
        <section className="w-full min-h-screen flex items-center py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="w-full px-4 sm:px-6 md:pl-12 lg:pl-20 max-w-[1920px] mx-auto">
                <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                    <div className="group relative inline-block overflow-hidden px-2 sm:px-3 md:px-4">
                        {/* reveal panel (opens to the right) */}
                        <div className="pointer-events-none absolute inset-0 origin-left scale-x-0 opacity-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:opacity-100 will-change-[transform,opacity]">
                            <div className="absolute inset-0 bg-[#ff9ffc10]" />
                            <div className="absolute inset-0 bg-linear-to-r from-[#FF9FFC]/0 via-[#FF9FFC]/20 to-[#FF9FFC]/0" />
                            {/* neon leading edge */}
                            <div className="absolute right-0 top-0 h-full w-px bg-[#FF9FFC]/60" />
                        </div>
                        {/* subtle top shine */}
                        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-[#FF9FFC]/35 to-transparent opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />

                        {/* lightweight glow (small area, cheaper than huge blur-3xl) */}
                        <div className="pointer-events-none absolute -inset-2 sm:-inset-3 md:-inset-4 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 will-change-[opacity]">
                            <div className="absolute inset-0 rounded-md bg-[#FF9FFC]/10 blur-xl" />
                        </div>

                        <div className="relative text-[3.5rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[15rem] font-black uppercase leading-[0.9] sm:leading-none select-none transition-[letter-spacing,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 sm:group-hover:translate-x-2 md:group-hover:translate-x-3 group-hover:tracking-[0.03em] sm:group-hover:tracking-[0.04em] md:group-hover:tracking-[0.06em] will-change-transform">
                            {/* outline layer */}
                            <span
                                className="absolute inset-0 opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0"
                                style={{
                                    WebkitTextStroke: "1px #FF9FFC",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent",
                                }}
                            >
                                FULL
                            </span>
                            {/* solid layer */}
                            <span className="opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 text-[#FF9FFC]">
                                FULL
                            </span>
                        </div>
                    </div>
                    <div className="group relative inline-block overflow-hidden px-2 sm:px-3 md:px-4">
                        {/* reveal panel (opens to the right) */}
                        <div className="pointer-events-none absolute inset-0 origin-left scale-x-0 opacity-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:opacity-100 will-change-[transform,opacity]">
                            <div className="absolute inset-0 bg-[#ff9ffc10]" />
                            <div className="absolute inset-0 bg-linear-to-r from-[#FF9FFC]/0 via-[#FF9FFC]/20 to-[#FF9FFC]/0" />
                            {/* neon leading edge */}
                            <div className="absolute right-0 top-0 h-full w-px bg-[#FF9FFC]/60" />
                        </div>
                        {/* subtle top shine */}
                        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-[#FF9FFC]/35 to-transparent opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />

                        {/* lightweight glow */}
                        <div className="pointer-events-none absolute -inset-2 sm:-inset-3 md:-inset-4 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 will-change-[opacity]">
                            <div className="absolute inset-0 rounded-md bg-[#FF9FFC]/10 blur-xl" />
                        </div>

                        <div className="relative text-[3.5rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[15rem] font-black uppercase leading-[0.9] sm:leading-none select-none transition-[letter-spacing,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 sm:group-hover:translate-x-2 md:group-hover:translate-x-3 group-hover:tracking-[0.03em] sm:group-hover:tracking-[0.04em] md:group-hover:tracking-[0.06em] will-change-transform">
                            {/* outline layer */}
                            <span
                                className="absolute inset-0 opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0"
                                style={{
                                    WebkitTextStroke: "1px #FF9FFC",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent",
                                }}
                            >
                                STACK
                            </span>
                            {/* solid layer */}
                            <span className="opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 text-[#FF9FFC]">
                                STACK
                            </span>
                        </div>
                    </div>
                    <h1 className="text-[3.5rem] xs:text-[4.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[15rem] font-black uppercase leading-[0.9] sm:leading-none text-[#FF9FFC] px-2 sm:px-3 md:px-4">
                        <span className="sr-only">Full Stack </span>DEVELOPER
                    </h1>
                </div>
            </div>
        </section>
    );
}
