# APPBAI OFFICIAL WEBSITE - Coming Soon

A creative, high-end "Coming Soon" website for APPBAI that demonstrates technical excellence through editorial typography, slow confident animations, and asymmetric and creative layouts.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

## Features

- **Editorial Typography**: Dramatic scale jumps with Space Grotesk display font
- **Slow, Confident Animations**: 1.5–2s durations with intentional easing
- **Asymmetric Layouts**: Off-grid positioning with intentional negative space
- **Scroll-Linked Effects**: Parallax and masked reveals
- **Locked Project Cards**: Blur/grayscale effects with subtle hover states
- **Disruptive Interactions**: Early access interrupt that breaks scroll flow

## Tech Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 3.4
- Framer Motion 11.15

## Design Philosophy

This is **not a traditional landing page**—it's a product demo showcasing:
- Typography as a visual element (oversized, clipped, fragmented)
- Unconventional motion (slow, purposeful, confident)
- Premium black & white aesthetic
- Scroll as an experience, not just navigation

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ProjectCard.tsx
│   ├── EarlyAccessInterrupt.tsx
│   └── BrandSignature.tsx
├── lib/
│   └── animations.ts       # Framer Motion variants
└── hooks/
    └── useScrollProgress.ts
```

## Performance

- First Load JS: 145 kB
- Static generation
- 60fps animations
- Reduced motion support

---

Built with creative confidence by APPBAI.
