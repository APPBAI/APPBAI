"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInSlow, revealText, staggerContainer } from "@/lib/animations";

export default function NotFound() {
    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-white selection:text-black">
            {/* Background grid pattern matching HeroSection */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                }} />
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full px-8 md:px-16 lg:px-24 max-w-[1200px] text-center"
            >
                {/* Visual Glitch/Editorial Error */}
                <motion.div variants={revealText} className="overflow-hidden mb-4">
                    <span className="font-body text-body-sm text-gray-500 uppercase tracking-[0.3em]">
                        Error Code 404
                    </span>
                </motion.div>

                <motion.div variants={revealText} className="overflow-hidden">
                    <h1 className="font-display text-display-xl lg:text-[14rem] leading-none tracking-tighter text-white italic">
                        Lost in
                    </h1>
                </motion.div>

                <motion.div variants={revealText} className="overflow-hidden mb-12">
                    <h2 className="font-display text-display-xl lg:text-[14rem] leading-none tracking-tighter text-white">
                        space.
                    </h2>
                </motion.div>

                <motion.div variants={fadeInSlow} className="max-w-lg mx-auto mb-12">
                    <p className="font-body text-body-lg text-gray-400 leading-relaxed">
                        The system was unable to locate the objective you requested.
                        It may have been archived or drifted into deep space.
                    </p>
                </motion.div>

                <motion.div variants={fadeInSlow}>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-4 group"
                    >
                        <div className="w-12 h-[1px] bg-white group-hover:w-16 transition-all duration-500" />
                        <span className="font-display text-xl text-white uppercase tracking-widest group-hover:pl-2 transition-all duration-500">
                            Return to Reality
                        </span>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 3, delay: 1 }}
                className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 3, delay: 1.5 }}
                className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px] pointer-events-none"
            />
        </main>
    );
}
