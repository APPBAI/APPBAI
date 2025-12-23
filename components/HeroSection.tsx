"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInSlow, revealText, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax effects with different speeds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center lg:justify-start overflow-hidden bg-black-soft"
        >
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                }} />
            </div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 w-full px-8 md:px-16 lg:px-24 max-w-[1800px]"
            >
                {/* Asymmetric layout with intentional positioning */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-12 gap-8"
                >
                    {/* Main headline - asymmetrical editorial layout */}
                    <div className="col-span-12 lg:col-span-10 lg:col-start-2 break-words overflow-visible space-y-2 md:space-y-4">
                        <motion.div variants={revealText} className="overflow-hidden">
                            <h1 className="font-display text-display-xl leading-[0.85] tracking-tighter text-white text-left italic">
                                Building
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={revealText}
                            className="overflow-hidden mt-2"
                            style={{ y: y1 }}
                        >
                            <h1 className="font-display text-display-xl leading-[0.85] tracking-tighter text-white text-right pr-4 lg:pr-0 lg:ml-[15%]">
                                technology
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={revealText}
                            className="overflow-hidden mt-2"
                            style={{ y: y2 }}
                        >
                            <h1 className="font-display text-display-xl leading-[0.85] tracking-tighter text-white text-left pl-8 lg:pl-0 lg:ml-[10%]">
                                that helps
                            </h1>
                        </motion.div>

                        <motion.div variants={revealText} className="overflow-hidden mt-2">
                            <h1 className="font-display text-display-xl leading-[0.85] tracking-tighter text-white text-center lg:text-left lg:ml-[25%]">
                                society
                            </h1>
                        </motion.div>
                    </div>

                    {/* Subtext - minimal, off-grid */}
                    <motion.div
                        variants={fadeInSlow}
                        className="col-span-12 lg:col-span-4 lg:col-start-9 mt-12 lg:mt-32 text-center lg:text-left"
                    >
                        <p className="font-body text-body-lg text-gray-400 leading-relaxed mx-auto lg:mx-0 max-w-md lg:max-w-none">
                            APPBAI is designing the next generation of intelligent systems.
                            <br />
                            <br />
                            Coming 2025.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    variants={fadeInSlow}
                    className="hidden md:block absolute bottom-12 left-8 md:left-16 lg:left-24"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-[1px] h-16 bg-gray-600" />
                        <span className="font-body text-body-sm text-gray-600 uppercase tracking-wider rotate-90 origin-left translate-y-8">
                            Scroll
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
