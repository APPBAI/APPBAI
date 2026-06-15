"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PartnerCTA() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:px-24 py-20 md:py-32 max-w-[1400px] mx-auto overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Framed container */}
        <div className="relative border border-gray-200 dark:border-gray-800 p-10 md:p-16 lg:p-24 rounded-2xl bg-gray-50 dark:bg-black-medium transition-colors">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 md:w-14 md:h-14 border-t-2 border-l-2 border-black dark:border-white rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-10 h-10 md:w-14 md:h-14 border-t-2 border-r-2 border-black dark:border-white rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-10 h-10 md:w-14 md:h-14 border-b-2 border-l-2 border-black dark:border-white rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-10 h-10 md:w-14 md:h-14 border-b-2 border-r-2 border-black dark:border-white rounded-br-2xl" />

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
              Work with Us
            </p>

            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-black dark:text-white mb-6 md:mb-8 tracking-tight leading-tight">
              Partner with
              <br />
              APPBAI
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed font-body mb-10 md:mb-14 max-w-lg mx-auto">
              Whether you&apos;re interested in collaborating, investing, or
              exploring how our companies can serve your needs — we&apos;d love
              to hear from you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@appbai.com"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-display font-medium text-sm tracking-wide hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-500 rounded-lg"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
              <a
                href="https://x.com/apbbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-700 text-black dark:text-white font-display font-medium text-sm tracking-wide hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-500 rounded-lg"
              >
                Follow our Journey
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
