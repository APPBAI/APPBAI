"use client";

import { motion } from "framer-motion";
import { blurReveal, scaleOnHover } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  category: string;
  index: number;
}

export default function ProjectCard({
  title,
  category,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={scaleOnHover}
      initial="initial"
      whileHover="hover"
      className="relative group cursor-not-allowed"
    >
      {/* Card container */}
      <motion.div
        variants={blurReveal}
        initial="locked"
        whileHover="hover"
        className="relative aspect-[3/4] sm:aspect-square md:aspect-[4/5] bg-black-medium border border-gray-800 rounded-sm overflow-hidden group-hover:border-gray-700 transition-colors duration-700"
      >
        {/* Subtle grain/texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at ${30 + index * 20}% ${40 + index * 15}%, #ffffff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative h-full p-8 flex flex-col justify-between">
          <div>
            <span className="font-body text-body-sm text-gray-600 uppercase tracking-wider">
              {category}
            </span>
          </div>

          <div>
            <h3 className="font-display text-display-sm text-white mb-4">
              {title}
            </h3>

            {/* Lock indicator */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-gray-600 rounded-sm flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <span className="font-body text-body-sm text-gray-600">
                In Development
              </span>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-1200" />
      </motion.div>
    </motion.div>
  );
}
