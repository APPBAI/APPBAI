"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function BrandSignature() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax layers
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-8 bg-black overflow-hidden"
        >
            {/* Layered typography */}
            <div className="relative w-full max-w-[1800px]">
                {/* Background layer */}
                <motion.div
                    style={{ y: y2, scale }}
                    className="absolute inset-0 flex items-center justify-center opacity-5"
                >
                    <h2 className="font-display text-[20vw] text-white font-bold leading-none">
                        APPBAI
                    </h2>
                </motion.div>

                {/* Foreground layer */}
                <motion.div
                    style={{ y: y1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 text-center"
                >
                    <div className="flex justify-center mb-8 md:mb-12">
                        <Image
                            src="/appbai-logo.png"
                            alt="APPBAI"
                            width={128}
                            height={128}
                            className="h-16 md:h-24 lg:h-32 w-auto object-contain"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto px-4">
                        <div className="text-center md:text-left">
                            <h3 className="font-display text-display-sm text-white mb-3 md:mb-4">
                                01
                            </h3>
                            <p className="font-body text-body-sm md:text-body-md text-gray-500">
                                Intelligent systems designed with intention and care
                            </p>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="font-display text-display-sm text-white mb-3 md:mb-4">
                                02
                            </h3>
                            <p className="font-body text-body-sm md:text-body-md text-gray-500">
                                Technology that amplifies human potential
                            </p>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="font-display text-display-sm text-white mb-3 md:mb-4">
                                03
                            </h3>
                            <p className="font-body text-body-sm md:text-body-md text-gray-500">
                                Building for the next generation of society
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute bottom-8 md:bottom-12 left-0 right-0 px-8 md:px-16 lg:px-24"
            >
                <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 border-t border-gray-900 pt-6 md:pt-8">
                    <p className="font-body text-body-sm text-gray-700 text-center md:text-left">
                        © 2025 APPBAI. All rights reserved.
                    </p>
                    <div className="flex gap-6 md:gap-8">
                        <a href="https://x.com/appbai" className="font-body text-body-sm text-gray-700 hover:text-white transition-colors duration-500">
                            Twitter
                        </a>
                        <a href="https://www.linkedin.com/company/appbai/" className="font-body text-body-sm text-gray-700 hover:text-white transition-colors duration-500">
                            LinkedIn
                        </a>
                        <a href="https://github.com/APPBAI" className="font-body text-body-sm text-gray-700 hover:text-white transition-colors duration-500">
                            GitHub
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
