"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface CompanyCardProps {
  name: string;
  tagline: string;
  category: string;
  status?: string;
  href: string;
  glowColor: string;
  colorTheme: string;
  bevelSide: "top-right" | "bottom-left";
  index: number;
}

export default function CompanyCard({
  name,
  tagline,
  category,
  status,
  href,
  glowColor,
  colorTheme,
  bevelSide,
  index,
}: CompanyCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Define clipped polygons (using responsive CSS variable)
  const isTopRight = bevelSide === "top-right";
  const clipPath = isTopRight
    ? "polygon(0 0, calc(100% - var(--bevel-size)) 0, 100% var(--bevel-size), 100% 100%, 0 100%)"
    : "polygon(0 0, 100% 0, 100% 100%, var(--bevel-size) 100%, 0 calc(100% - var(--bevel-size)))";

  // Dynamic values for rotation offsets
  const bgRotate = isTopRight ? 1.8 : -1.8;
  const fgRotate = isTopRight ? -1.2 : 1.2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1.5,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative w-full max-w-[450px] sm:max-w-[520px] lg:max-w-none xl:max-w-[600px] mx-auto min-h-[340px] bevel-card"
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group block relative w-full h-full cursor-pointer select-none"
      >
        {/* Background Layer (Offset/Tilted Outline & Glow) */}
        <motion.div
          animate={{
            rotate: isHovered ? 0 : bgRotate,
            scale: isHovered ? 1.01 : 1.0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0 transition-colors duration-700 bg-gray-200 dark:from-zinc-800 dark:to-zinc-900 rounded-[28px] pointer-events-none"
          style={{
            clipPath: clipPath,
            background: isHovered
              ? `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, ${colorTheme}, rgba(120, 120, 120, 0.25))`
              : undefined,
            backgroundColor: isHovered ? undefined : `${colorTheme}1A` // 10% opacity fallback
          }}
        />

        {/* Foreground Layer (Content Card) */}
        <motion.div
          animate={{
            rotate: isHovered ? 0 : fgRotate,
            y: isHovered ? -4 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative bg-white dark:bg-zinc-950 p-6 sm:p-8 md:p-10 rounded-[27px] border border-gray-200/60 dark:border-zinc-800/80 shadow-sm transition-all duration-700 h-full flex flex-col justify-between"
          style={{
            clipPath: clipPath,
          }}
        >
          {/* Dynamic Interactive Spotlight */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
            style={{
              background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
            }}
          />

          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Card Header Info */}
            <div 
              className="flex items-center justify-between mb-6"
              style={isTopRight ? { paddingRight: "calc(var(--bevel-size) + 8px)" } : undefined}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-zinc-400 font-mono font-medium border border-gray-200 dark:border-zinc-800 px-3 py-1.5 rounded bg-white/50 dark:bg-zinc-900/50">
                  {category}
                </span>
                {status && (
                  <span
                    className={`text-[9px] tracking-[0.15em] font-mono px-2.5 py-1 rounded font-medium border ${
                      status === "Coming Soon"
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                        : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                    }`}
                  >
                    {status}
                  </span>
                )}
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="max-w-xl mb-6">
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-black dark:text-white mb-3 tracking-tight">
                {name}
              </h3>
              <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed font-body">
                {tagline}
              </p>
            </div>

            {/* Subtle Learn More Link */}
            <div className={`flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-500 w-full ${!isTopRight ? "justify-end" : "justify-start"}`}>
              <span>Learn More</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
