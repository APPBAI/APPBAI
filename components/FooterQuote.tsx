"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
  "Sustainability is not a feature, it is the foundation.",
  '"For we live by faith not by sight"',
];

export default function FooterQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-14 md:h-8 mt-3">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className={`text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light font-body absolute inset-0 ${index === 1 ? "italic" : ""}`}
        >
          {quotes[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
