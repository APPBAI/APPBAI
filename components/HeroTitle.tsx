"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "companies",
  "products",
  "platforms",
  "tools",
  "systems",
  "experiences",
];

export default function HeroTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-display font-light text-[34px] sm:text-5xl md:text-7xl lg:text-[90px] leading-[1.05] tracking-tight max-w-5xl mb-6 md:mb-8 text-black dark:text-white">
      We build{" "}
      <span className="relative inline-block align-bottom">
        {/* Text container — clips the slide animation */}
        <span className="block relative overflow-hidden">
          {/* Invisible sizer for natural width */}
          <span className="invisible">{words[index]}</span>
          {/* Animated word */}
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute left-0 top-0 w-full"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>

        {/* Snake-wave underline — sits below the text, outside overflow-hidden */}
        <span className="absolute left-0 -bottom-[4px] md:-bottom-[6px] w-full h-[6px] md:h-[8px] overflow-hidden pointer-events-none">
          <svg
            className="animate-snake-wave h-full"
            viewBox="0 0 200 8"
            fill="none"
            preserveAspectRatio="none"
            style={{ width: "200%" }}
          >
            <path
              d="M0,4 Q12.5,0 25,4 Q37.5,8 50,4 Q62.5,0 75,4 Q87.5,8 100,4 Q112.5,0 125,4 Q137.5,8 150,4 Q162.5,0 175,4 Q187.5,8 200,4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-black/30 dark:text-white/30"
            />
          </svg>
        </span>
      </span>
      <br className="hidden md:inline" />
      that build the <span className="font-normal italic">future.</span>
    </h1>
  );
}
