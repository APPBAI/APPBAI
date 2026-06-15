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
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-display font-light text-[34px] sm:text-5xl md:text-7xl lg:text-[90px] leading-[1.15] md:leading-[1.05] tracking-tight max-w-5xl mb-6 md:mb-8 text-black dark:text-white">
      We build{" "}
      <span className="inline-block relative overflow-hidden h-[1.2em] -mb-[0.25em] align-bottom min-w-[190px] sm:min-w-[260px] md:min-w-[380px] lg:min-w-[500px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: "70%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-70%", opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-0 bottom-0 block font-normal italic text-black dark:text-white"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <br className="hidden md:inline" />
      that build the <span className="font-normal italic">future.</span>
    </h1>
  );
}
