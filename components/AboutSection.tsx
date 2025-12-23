"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInSlow, staggerContainer, slideUpSlow } from "@/lib/animations";

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen py-32 px-8 md:px-16 lg:px-24 bg-black-soft overflow-hidden"
        >
            {/* Background accent */}
            <motion.div
                style={{ y }}
                className="absolute top-1/2 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-[1800px] mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-12 gap-8 lg:gap-16"
                >
                    {/* Left side - Philosophy */}
                    <motion.div
                        variants={slideUpSlow}
                        className="col-span-12 lg:col-span-6"
                    >
                        <div className="flex flex-col space-y-4 md:space-y-6 mb-12 md:mb-16">
                            <h2 className="font-display text-display-md text-white leading-[0.85] text-left">
                                Purpose
                            </h2>
                            <h2 className="font-display text-display-md text-white leading-[0.85] text-center italic opacity-50">
                                meets
                            </h2>
                            <h2 className="font-display text-display-md text-white leading-[0.85] text-right pr-4 md:pr-12">
                                passion
                            </h2>
                        </div>

                        <div className="space-y-6 md:space-y-8 text-gray-400 font-body text-body-md md:text-body-lg leading-relaxed text-left lg:max-w-xl mx-auto lg:mx-0 px-4 md:px-0">
                            <p className="border-l border-white/10 pl-6 py-2">
                                APPBAI unites innovation with real-world impact.
                            </p>
                            <p className="pl-6 py-2">
                                Guided by <span className="text-white font-semibold">Ikigai</span> — the balance of what we love, what we&apos;re good at, what the world needs, and what sustains us.
                            </p>
                            <p className="pl-6 py-2">
                                We build applications that address real challenges, empower people, and inspire progress.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right side - Ikigai Diagram */}
                    <motion.div
                        variants={fadeInSlow}
                        className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-center justify-center mt-12 lg:mt-0"
                    >
                        <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-md aspect-square">
                            {/* Ikigai circles */}
                            <svg viewBox="0 0 400 400" className="w-full h-full">
                                {/* Top circle - What you love */}
                                <circle
                                    cx="200"
                                    cy="140"
                                    r="100"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1"
                                    opacity="0.2"
                                />
                                <text
                                    x="200"
                                    y="80"
                                    textAnchor="middle"
                                    className="fill-gray-500 text-xs font-body"
                                >
                                    What you love
                                </text>

                                {/* Right circle - What you're good at */}
                                <circle
                                    cx="260"
                                    cy="200"
                                    r="100"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1"
                                    opacity="0.2"
                                />
                                <text
                                    x="330"
                                    y="205"
                                    textAnchor="middle"
                                    className="fill-gray-500 text-xs font-body"
                                >
                                    What you're
                                </text>
                                <text
                                    x="330"
                                    y="220"
                                    textAnchor="middle"
                                    className="fill-gray-500 text-xs font-body"
                                >
                                    good at
                                </text>

                                {/* Bottom circle - What the world needs */}
                                <circle
                                    cx="200"
                                    cy="260"
                                    r="100"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1"
                                    opacity="0.2"
                                />
                                <text
                                    x="200"
                                    y="335"
                                    textAnchor="middle"
                                    className="fill-gray-500 text-xs font-body"
                                >
                                    What the world needs
                                </text>

                                {/* Left circle - What you can be paid for */}
                                <circle
                                    cx="140"
                                    cy="200"
                                    r="100"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1"
                                    opacity="0.2"
                                />
                                <text
                                    x="70"
                                    y="205"
                                    textAnchor="middle"
                                    className="fill-gray-500 text-xs font-body"
                                >
                                    What sustains
                                </text>
                                <text
                                    x="70"
                                    y="220"
                                    textAnchor="middle"
                                    className="fill-gray-500 text-xs font-body"
                                >
                                    you
                                </text>

                                {/* Center - Ikigai */}
                                <circle
                                    cx="200"
                                    cy="200"
                                    r="40"
                                    fill="white"
                                    opacity="0.05"
                                />
                                <text
                                    x="200"
                                    y="205"
                                    textAnchor="middle"
                                    className="fill-white text-sm font-display font-semibold"
                                >
                                    IKIGAI
                                </text>
                            </svg>
                        </div>
                    </motion.div>

                    {/* Bottom - Statement */}
                    <motion.div
                        variants={slideUpSlow}
                        className="col-span-12 lg:col-span-8 lg:col-start-3 mt-12 md:mt-16 text-center px-4"
                    >
                        <p className="font-display text-[clamp(1.5rem,4vw,2.5rem)] md:text-display-sm text-white leading-tight">
                            Technology is not only about code.
                            <br />
                            <span className="text-gray-600">It is about purpose.</span>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
