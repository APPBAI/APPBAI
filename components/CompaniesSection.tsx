"use client";

import { motion } from "framer-motion";
import CompanyCard from "./CompanyCard";

const companies = [
  {
    name: "Halo AI",
    tagline:
      "An undetectable AI desktop assistant built for high-stakes environments — meetings, interviews, and live sessions. With stealth-mode screen overlay and a shift-to-hover command that instantly clears your workspace, Halo keeps you sharp without raising suspicion.",
    category: "Desktop AI",
    status: "Coming Soon",
    href: "#", // TODO: Replace with real external URL
    glowColor: "rgba(59, 130, 246, 0.12)",
    colorTheme: "#3b82f6",
    bevelSide: "top-right" as const
  },
  {
    name: "OffReel",
    tagline:
      "An open-source media player that brings the feel of online content discovery to your offline library. Swipe through your videos in a TikTok-style feed, double-tap to favorite, and instantly filter by mood, length, or format — no internet required.",
    category: "Media & Creative",
    status: "Open Source",
    href: "#", // TODO: Replace with real external URL
    accentClass: "glow-offreel",
    glowColor: "rgba(249, 115, 22, 0.12)",
    colorTheme: "#f97316",
    bevelSide: "bottom-left" as const
  },
];

export default function CompaniesSection() {
  return (
    <section
      id="companies"
      className="px-6 md:px-12 lg:px-24 py-20 md:py-32 max-w-[1400px] mx-auto"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 md:mb-20"
      >
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-body">
          Our Companies
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-black dark:text-white tracking-tight">
            What we&apos;re building.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm leading-relaxed font-body">
            Each product operates independently, united by a shared commitment
            to solving real friction with focused, high-performance software.
          </p>
        </div>
      </motion.div>

      {/* Company cards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {companies.map((company, index) => (
          <CompanyCard key={company.name} {...company} index={index} />
        ))}
      </div>
    </section>
  );
}
