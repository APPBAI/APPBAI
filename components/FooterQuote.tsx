"use client";

import { useState, useEffect } from "react";

const quotes = [
  "Sustainability is not a feature, it is the foundation.",
  '"For we live by faith not by sight"',
];

export default function FooterQuote() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 60;
  const deletingSpeed = 40;
  const pauseTime = 3000;

  useEffect(() => {
    const currentQuote = quotes[index];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentQuote.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % quotes.length);
        }
      }, deletingSpeed);
    } else {
      if (text.length === currentQuote.length) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timer = setTimeout(() => {
          setText(currentQuote.substring(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <div className="relative h-14 md:h-8 mt-3">
      <p
        className={`text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light font-body ${index === 1 ? "italic" : ""}`}
      >
        {text}
        <span className="animate-pulse ml-[2px]">|</span>
      </p>
    </div>
  );
}
