"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function EarlyAccessInterrupt() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [isDismissed, setIsDismissed] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit clicked:", email); // Helpful for user debugging

        if (!email || !email.includes("@")) {
            setStatus("error");
            setMessage("Please enter a valid email address.");
            return;
        }

        setStatus("loading");
        setMessage("");

        try {
            const response = await fetch("/api/early-access", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage("Thank you. You've been added to our waitlist.");
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setMessage("Connection error. Please check your internet.");
        }
    };

    if (isDismissed) return null;

    return (
        <section
            ref={containerRef}
            id="early-access"
            className="relative min-h-screen flex items-center justify-center py-32 px-8 bg-black overflow-hidden"
        >
            <motion.div
                style={{ scale, opacity }}
                className="relative max-w-4xl w-full z-10"
            >
                {/* Disruptive frame */}
                <div className="relative border border-white/10 p-8 md:p-12 lg:p-20 bg-black/40 backdrop-blur-sm">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-white" />
                    <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-white" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-white" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-white" />

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center"
                    >
                        <h2 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] md:text-display-md text-white mb-6 md:mb-8 leading-tight tracking-tighter">
                            Request
                            <br />
                            Early Access
                        </h2>

                        <p className="font-body text-body-md md:text-body-lg text-gray-400 mb-8 md:mb-12 max-w-lg mx-auto px-4">
                            Join a select group of partners shaping the future of intelligent systems.
                        </p>

                        {/* Minimal form */}
                        <form onSubmit={handleSubmit} className="relative z-20">
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md md:max-w-xl mx-auto mb-6 w-full group">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    disabled={status === "loading" || status === "success"}
                                    className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-white font-body text-body-md focus:border-white focus:outline-none transition-all duration-300 w-full text-center sm:text-left disabled:opacity-30 placeholder:text-gray-600"
                                    required
                                />
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={status === "loading" || status === "success"}
                                    className="px-10 py-4 bg-white text-black font-display font-bold text-body-md transition-all duration-300 w-full sm:w-auto whitespace-nowrap disabled:bg-white/20 disabled:text-white/40 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {status === "loading" ? (
                                        <span className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" />
                                            <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </span>
                                    ) : (
                                        "Request Access"
                                    )}
                                </motion.button>
                            </div>

                            {/* Status Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: message ? 1 : 0, y: message ? 0 : 10 }}
                                className={`font-body text-body-sm mb-8 flex justify-center items-center gap-2 ${status === "error" ? "text-red-400" : "text-green-400"
                                    }`}
                            >
                                {status === "success" && (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                                {message}
                            </motion.div>
                        </form>

                        {/* Dismiss */}
                        <button
                            type="button"
                            onClick={() => setIsDismissed(true)}
                            className="font-body text-body-sm text-gray-600 hover:text-white transition-all duration-500 uppercase tracking-widest text-[10px]"
                        >
                            Continue Browsing
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
