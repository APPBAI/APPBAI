"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface CompanyCardProps {
  name: string;
  tagline: string;
  category: string;
  href: string;
  accentClass: string;
  icon: React.ReactNode;
  index: number;
}

export default function CompanyCard({
  name,
  tagline,
  category,
  href,
  accentClass,
  icon,
  index,
}: CompanyCardProps) {
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
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`card-glass card-shimmer ${accentClass} block p-8 md:p-10 lg:p-12 rounded-2xl group`}
      >
        {/* Category badge */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500 font-body border border-gray-200 dark:border-gray-800 px-3 py-1.5 rounded-full">
            {category}
          </span>
          <ArrowUpRight
            className="w-5 h-5 text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </div>

        {/* Icon */}
        <div className="mb-6 md:mb-8">
          {icon}
        </div>

        {/* Name */}
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-black dark:text-white mb-3 md:mb-4 tracking-tight">
          {name}
        </h3>

        {/* Tagline */}
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed font-body max-w-md">
          {tagline}
        </p>

        {/* Bottom accent line */}
        <div className="mt-8 md:mt-10 pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
          <span className="text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-gray-600 font-body group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
            Learn More
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
