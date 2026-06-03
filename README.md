# APPBAI OFFICIAL WEBSITE - Coming Soon 

A creative, high-end "Coming Soon" website for APPBAI that demonstrates technical excellence through editorial typography, slow confident animations, and asymmetric and creative layouts.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev
# → http://localhost:3000

# Build for production
pnpm run build
pnpm start
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

## Contributing

> **This is APPBAI's official company website.** Every change must be intentional, polished, and reviewed before it reaches production. Nothing ships without approval.

### Workflow

1. **Create a branch** from `main` with a descriptive name:

   ```bash
   git checkout main && git pull
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** — keep commits focused and well-described:

   ```bash
   git add .
   git commit -m "feat: brief description of what this does"
   ```

3. **Push your branch** to the remote:

   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request** against `main`:
   - Write a clear title and description of _what_ changed and _why_
   - Include screenshots for any visual changes
   - Link any related issues

5. **Code Review** — a team member will review your PR. Address any feedback and push updates to the same branch. **No PR is merged without at least one approval.**

### Guidelines

- **Never push directly to `main`** — all changes go through pull requests
- **Keep PRs small and focused** — one feature or fix per PR
- **Test locally** before submitting — run `npm run build` to verify nothing breaks
- **Match the design language** — respect the editorial typography, spacing, and premium aesthetic
- **Performance matters** — avoid adding heavy dependencies or unoptimized assets

---

Built with creative purpose, love & confidence by APPBAI.
