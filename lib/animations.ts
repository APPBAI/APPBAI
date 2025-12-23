import { Variants } from "framer-motion";

// Slow, confident fade in
export const fadeInSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1], // Confident easing
        },
    },
};

// Slide up with intentional delay
export const slideUpSlow: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

// Masked text reveal (clip-path)
export const revealText: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
        clipPath: "inset(0 0 0 0)",
        transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

// Staggered children with increased delays
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Increased from typical 0.1-0.15
            delayChildren: 0.2,
        },
    },
};

// Parallax scroll effect
export const parallaxVariant = (offset: number): Variants => ({
    hidden: { y: 0 },
    visible: {
        y: offset,
        transition: {
            duration: 0, // Instant, controlled by scroll
        },
    },
});

// Scale on hover (subtle, for project cards)
export const scaleOnHover: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

// Blur reveal (for locked projects)
export const blurReveal: Variants = {
    locked: {
        filter: "blur(8px) grayscale(100%)",
        opacity: 0.4,
    },
    hover: {
        filter: "blur(8px) grayscale(80%)",
        opacity: 0.5,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};
