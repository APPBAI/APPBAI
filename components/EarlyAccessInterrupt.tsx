"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function EarlyAccessInterrupt() {
    const [isDismissed, setIsDismissed] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    if (isDismissed) return null;

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-8 bg-black overflow-hidden"
        >
            <motion.div
                style={{ scale, opacity }}
                className="relative max-w-4xl w-full"
            >
                {/* Disruptive frame */}
                <div className="relative border border-white/10 p-8 md:p-12 lg:p-20">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-white" />
                    <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-white" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-white" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-white" />

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center"
                    >
                        <h2 className="font-display text-[clamp(2rem,6vw,4rem)] md:text-display-md text-white mb-6 md:mb-8 leading-tight">
                            Request
                            <br />
                            Early Access
                        </h2>

                        <p className="font-body text-body-md md:text-body-lg text-gray-400 mb-8 md:mb-12 max-w-lg mx-auto px-4">
                            Join a select group of partners shaping the future of intelligent systems.
                        </p>

                        {/* Minimal form */}
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md md:max-w-xl mx-auto mb-8 w-full">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 bg-transparent border border-gray-700 px-6 py-4 text-white font-body text-body-md focus:border-white focus:outline-none transition-colors duration-500 w-full text-center sm:text-left"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                                className="px-8 py-4 bg-white text-black font-display font-semibold text-body-md hover:bg-gray-100 transition-colors duration-500 w-full sm:w-auto whitespace-nowrap"
                            >
                                Request Access
                            </motion.button>
                        </div>

                        {/* Dismiss */}
                        <button
                            onClick={() => setIsDismissed(true)}
                            className="font-body text-body-sm text-gray-600 hover:text-gray-400 transition-colors duration-500 uppercase tracking-wider"
                        >
                            Continue Browsing
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
