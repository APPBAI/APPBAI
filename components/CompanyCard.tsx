"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Heart, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CompanyCardProps {
  name: string;
  tagline: string;
  category: string;
  status?: string;
  href: string;
  glowColor: string;
  colorTheme: string;
  features: string[];
  mockupType: "halo" | "offreel";
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
  features,
  mockupType,
  index,
}: CompanyCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // SVG clip-path polygon points for cut top-right corner
  const outerClipPath = "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)";
  const innerClipPath = "polygon(0 0, calc(100% - 31.2px) 0, 100% 31.2px, 100% 100%, 0 100%)";

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
      className="relative"
    >
      {/* Outer wrapper: simulates border with clip-path */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative transition-all duration-700 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-zinc-800 dark:to-zinc-900 shadow-sm hover:shadow-xl"
        style={{
          clipPath: outerClipPath,
          padding: "1.2px",
          background: isHovered 
            ? `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, ${colorTheme}, rgba(120, 120, 120, 0.2))` 
            : undefined
        }}
      >
        {/* Inner card content */}
        <div
          className="relative bg-white dark:bg-zinc-950 p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full min-h-[580px] z-10 transition-colors duration-700"
          style={{
            clipPath: innerClipPath
          }}
        >
          {/* Dynamic Interactive Spotlight */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
            style={{
              background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
            }}
          />

          {/* Decorative Corner Tech Crosshair */}
          <div className="absolute top-2 right-2 w-8 h-8 pointer-events-none flex items-center justify-center z-20">
            <span className="text-[7px] font-mono text-gray-400 dark:text-zinc-600 tracking-wider">
              {isHovered ? "SYS.OK" : "SYS.00"}
            </span>
          </div>

          <div className="relative z-10">
            {/* Card Header Info */}
            <div className="flex items-center justify-between mb-8 pr-6">
              <div className="flex items-center gap-2.5">
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

              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded border border-gray-200 dark:border-zinc-800 flex items-center justify-center bg-white/50 dark:bg-zinc-900/50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-105"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Title & Tagline */}
            <div className="max-w-xl mb-8">
              <h3 className="font-display text-3xl md:text-4xl text-black dark:text-white mb-4 tracking-tight">
                {name}
              </h3>
              <p className="text-gray-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-body">
                {tagline}
              </p>
            </div>
          </div>

          {/* Interactive Abstract Visual Mockup */}
          <div className="relative z-10 w-full h-48 rounded-xl bg-gray-100/50 dark:bg-zinc-950/40 border border-gray-200/60 dark:border-zinc-800/60 overflow-hidden mb-8 flex items-center justify-center transition-all duration-700 group-hover:border-gray-300 dark:group-hover:border-zinc-700">
            {mockupType === "halo" ? (
              // Halo AI Mockup: Elegant radar, core, and floating "stealth overlay" dot
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                {/* Radar Concentric Rings */}
                <div className="absolute w-36 h-36 rounded-full border border-dashed border-blue-500/10 dark:border-blue-400/5 animate-[spin_40s_linear_infinite]" />
                <div className="absolute w-28 h-28 rounded-full border border-blue-500/20 dark:border-blue-400/10 animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute w-20 h-20 rounded-full border border-blue-500/30 dark:border-blue-400/20" />

                {/* Glowing Core */}
                <div className="relative w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/40 dark:border-blue-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                </div>

                {/* Stealth Overlay Indicator (moves away on hover to mimic mouse hover action) */}
                <motion.div
                  animate={{
                    x: isHovered ? 80 : 0,
                    y: isHovered ? -40 : 0,
                    scale: isHovered ? 0.6 : 1,
                    opacity: isHovered ? 0.3 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="absolute w-24 h-12 rounded bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-lg flex items-center gap-2 px-3 pointer-events-none"
                  style={{ transform: "translate(-30px, -45px)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] uppercase tracking-wider font-mono text-gray-500 dark:text-zinc-400">
                    {isHovered ? "Stealth Active" : "Halo Panel"}
                  </span>
                </motion.div>
              </div>
            ) : (
              // OffReel Mockup: Swipe deck & floating double tap heart
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                {/* Animated TikTok Deck */}
                <div className="flex gap-4 items-center">
                  <motion.div
                    animate={{
                      y: isHovered ? -15 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-16 h-28 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-md relative overflow-hidden flex flex-col justify-end p-2 opacity-50"
                  >
                    <div className="w-8 h-1 bg-gray-200 dark:bg-zinc-800 rounded-full mb-1" />
                    <div className="w-12 h-0.5 bg-gray-200 dark:bg-zinc-800 rounded-full" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: isHovered ? -5 : 0,
                      scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-20 h-32 rounded-lg bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 shadow-xl relative overflow-hidden flex flex-col justify-between p-3 z-10"
                  >
                    {/* Media Interface Icons */}
                    <div className="flex justify-between items-start">
                      <Play className="w-3 h-3 text-orange-500 animate-pulse" fill="currentColor" />
                      <div className="w-5 h-2 bg-orange-500/10 rounded-full flex items-center justify-center">
                        <span className="text-[5px] text-orange-500 font-mono">OFF</span>
                      </div>
                    </div>

                    <div className="relative">
                      {/* Heart Animation on Hover */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute -top-12 left-1/2 -translate-x-1/2 text-orange-500"
                          >
                            <Heart className="w-6 h-6 fill-current" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="w-10 h-1.5 bg-gray-200 dark:bg-zinc-800 rounded-full mb-1.5" />
                      <div className="w-14 h-0.5 bg-gray-200 dark:bg-zinc-800 rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: isHovered ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-16 h-28 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-md relative overflow-hidden flex flex-col justify-end p-2 opacity-50"
                  >
                    <div className="w-8 h-1 bg-gray-200 dark:bg-zinc-800 rounded-full mb-1" />
                    <div className="w-12 h-0.5 bg-gray-200 dark:bg-zinc-800 rounded-full" />
                  </motion.div>
                </div>
              </div>
            )}
          </div>

          {/* Key Tech Specifications (Feature List) */}
          <div className="relative z-10 mb-8 border-t border-gray-100 dark:border-zinc-900 pt-6">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-zinc-500 font-mono mb-4">
              Core Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gray-100 dark:bg-zinc-900 flex items-center justify-center border border-gray-200 dark:border-zinc-800">
                    <Check className="w-2.5 h-2.5 text-black dark:text-white" strokeWidth={3} />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-zinc-400 font-body">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="relative z-10 pt-6 border-t border-gray-100 dark:border-zinc-900 flex justify-between items-center">
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-gray-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
              {status === "Coming Soon" ? "Subscribe for updates" : "Access Repository"}
            </span>

            <div
              className="w-2.5 h-2.5 rounded-sm transition-all duration-700 scale-75 group-hover:scale-110 shadow-sm"
              style={{
                backgroundColor: colorTheme,
                boxShadow: isHovered ? `0 0 12px ${colorTheme}` : "none",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
