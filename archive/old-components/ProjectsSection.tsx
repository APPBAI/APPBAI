"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { staggerContainer, slideUpSlow } from "@/lib/animations";

const projects = [
    { title: "Neural Interface", category: "AI Research" },
    { title: "Quantum Mesh", category: "Infrastructure" },
    { title: "Adaptive Systems", category: "Platform" },
];

export default function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center py-32 px-8 md:px-16 lg:px-24 bg-black-soft"
        >
            <div className="max-w-[1800px] mx-auto">
                {/* Section header - off-grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24"
                >
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 lg:col-span-6 lg:col-start-7 text-left">
                            <h2 className="font-display text-display-md text-white mb-8 md:mb-12 leading-[0.9] border-l-2 border-white/10 pl-6">
                                Projects
                                <br />
                                in Development
                            </h2>
                            <p className="font-body text-body-lg text-gray-500 max-w-md ml-6 lg:ml-0">
                                We&apos;re building foundational systems that will reshape how technology serves humanity.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Projects grid - rhythmic vertical stack on mobile, asymmetric grid on desktop */}
                <div className="relative w-full">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-12"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={slideUpSlow}
                                style={{
                                    y: index === 1 ? y : 0, // Parallax on middle card only
                                }}
                                className={`w-full max-w-md mx-auto md:max-w-none
                                    ${index === 0 ? "max-w-[90%] ml-auto" : ""} 
                                    ${index === 1 ? "max-w-[90%] mx-auto lg:mt-24" : ""} 
                                    ${index === 2 ? "max-w-[90%] ml-auto" : ""}
                                `}
                            >
                                <ProjectCard {...project} index={index} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom text - fragmented */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="mt-32 grid grid-cols-12 gap-8 text-center lg:text-left"
                >
                    <div className="col-span-12 lg:col-span-4 lg:col-start-2">
                        <p className="font-body text-body-sm text-gray-700 uppercase tracking-wider">
                            Access restricted
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                        <p className="font-body text-body-md text-gray-600 max-w-md mx-auto lg:mx-0">
                            These projects are currently in stealth mode. Early access will be granted to select partners in Q1 2025.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
