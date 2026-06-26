"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

// Module-level variable persists during client-side navigation but resets on refresh.
// This perfectly matches the requirement: "appear once... unless user explicitly refreshes".
let hasSeenPopup = false;

export default function ChristmasPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"visual" | "selection" | "team-code">(
    "visual",
  );
  const [teamCode, setTeamCode] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (hasSeenPopup) return;

    // Trigger popup after a slight delay
    const timer = setTimeout(() => {
      setIsOpen(true);
      triggerConfetti();
      hasSeenPopup = true;
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleVisitor = () => {
    router.push("/christmas?type=visitor");
  };

  const handleTeamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (teamCode.toUpperCase() === "BAI2025") {
      router.push("/christmas?type=team");
    } else {
      setError(true);
      setTimeout(() => setError(false), 500); // Reset for shake effect
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative w-full max-w-lg bg-black border border-white/20 p-8 md:p-12 overflow-hidden shadow-2xl"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-green-500 to-red-500" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />

            {/* Title */}
            <div className="text-center mb-10 relative z-10">
              <motion.h2
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="font-display text-4xl md:text-5xl text-white mb-2 tracking-tight"
              >
                <span className="text-red-500">Merry</span>{" "}
                <span className="text-green-500">Christmas!</span>
              </motion.h2>
              <p className="font-body text-gray-400">
                We have a special surprise for you.
              </p>
            </div>

            {/* Selection Step */}
            {step === "visual" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleVisitor}
                  className="p-6 border border-white/10 hover:border-white/50 bg-white/5 hover:bg-white/10 transition-all group flex flex-col items-center gap-4 py-8"
                >
                  <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all">
                    🎁
                  </span>
                  <span className="font-display text-xl text-white">
                    I&apos;m a Visitor
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    Just Exploring
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep("team-code")}
                  className="p-6 border border-white/10 hover:border-red-500/50 bg-white/5 hover:bg-red-500/10 transition-all group flex flex-col items-center gap-4 py-8"
                >
                  <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all">
                    🚀
                  </span>
                  <span className="font-display text-xl text-white">
                    Team Member
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    Access Required
                  </span>
                </motion.button>
              </div>
            )}

            {/* Team Code Step */}
            {step === "team-code" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative z-10"
              >
                <form
                  onSubmit={handleTeamSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="relative">
                    <motion.input
                      autoFocus
                      type="text"
                      value={teamCode}
                      onChange={(e) => {
                        setStep("team-code");
                        setTeamCode(e.target.value);
                      }}
                      placeholder="Enter Access Code"
                      animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                      className={`w-full bg-black/50 border ${error ? "border-red-500" : "border-gray-700 focus:border-white"} p-4 text-center text-white font-mono text-lg outline-none transition-colors`}
                    />
                    {/* <p className="text-center text-xs text-gray-500 mt-2">Try: BAI2025</p> */}
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep("visual")}
                      className="flex-1 py-3 text-gray-400 hover:text-white transition-colors font-body text-sm"
                    >
                      Back
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-[2] bg-white text-black font-display font-bold py-3 uppercase tracking-wider hover:bg-gray-200 transition-colors"
                    >
                      Unlock
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
