"use client";

import { motion } from "framer-motion";
import { Bot, Video } from "lucide-react";
import CompanyCard from "./CompanyCard";

const companies = [
  {
    name: "Halo AI",
    tagline:
      "An intelligent AI assistant with vision capabilities — designed to see, understand, and help.",
    category: "Artificial Intelligence",
    href: "#", // TODO: Replace with real external URL
    accentClass: "glow-halo",
    icon: (
      <div className="w-14 h-14 rounded-xl bg-halo-glow border border-halo/20 flex items-center justify-center">
        <Bot className="w-7 h-7 text-halo" strokeWidth={1.5} />
      </div>
    ),
  },
  {
    name: "OffReel",
    tagline:
      "A creative video and gallery platform — capture, curate, and share your visual stories.",
    category: "Media & Creative",
    href: "#", // TODO: Replace with real external URL
    accentClass: "glow-offreel",
    icon: (
      <div className="w-14 h-14 rounded-xl bg-offreel-glow border border-offreel/20 flex items-center justify-center">
        <Video className="w-7 h-7 text-offreel" strokeWidth={1.5} />
      </div>
    ),
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
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
          Our Companies
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-black dark:text-white tracking-tight">
            The APPBAI Portfolio
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm leading-relaxed font-body">
            Each company operates independently, united by a shared commitment
            to building technology that serves real human needs.
          </p>
        </div>
      </motion.div>

      {/* Company cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {companies.map((company, index) => (
          <CompanyCard key={company.name} {...company} index={index} />
        ))}
      </div>
    </section>
  );
}
