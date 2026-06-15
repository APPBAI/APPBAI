# APPBAI PORTAL

A premium, creative portal for the **APPBAI** technology lab. Designed to demonstrate editorial design excellence through custom asymmetric layouts, fluid responsive typography, theme-adaptive styling (featuring a luxurious, warm Alabaster light mode), and tactile micro-animations.

---

## Quick Start

Ensure you have [pnpm](https://pnpm.io/) installed:

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

---

## Core Features

- **Asymmetric "Crooked" Card Design**: Subsidiary cards (Halo AI and OffReel) utilize custom multi-layered layouts where background and foreground rotate in opposite directions (`1.8deg` / `-1.2deg`) and smoothly snap to alignment (`rotate-0`) on hover.
- **Responsive Diagonal Bevels**: Dynamic asymmetric `clip-path` cuts that adapt gracefully across viewports (`40px` on mobile, `52px` on tablet, `64px` on desktop) using scoped CSS custom properties to prevent layout cramping.
- **Premium Alabaster Light Mode**: Replaced harsh, high-contrast pure white screens with a luxurious, warm Alabaster off-white (`#FAF9F6`) to reduce glare and offer a print-editorial aesthetic.
- **Fluid Typography & Spacing**: Precise clamp scaling and breathability adjustments (e.g., enlarged hero top margins) ensuring the portal looks perfectly balanced on mobile, tablet, and ultra-wide screens.
- **Philosophy-Driven Layout**: Interactively presents the lab's core philosophy (guided by *Ikigai*) with an elegant SVG Venn diagram representing passion, skill, need, and sustainability.

---

## Tech Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 3.4**
- **Framer Motion 11.15** (for fluid physical page animations)
- **Lucide React** (icons)

---

## Project Structure

```
├── app/
│   ├── layout.tsx            # Root layout with custom theme providers and fonts
│   ├── page.tsx              # Main home landing page & Hero layout
│   └── globals.css           # Global Tailwind base and custom bevel/glass variables
├── components/
│   ├── Header.tsx            # Theme-toggle navigation header with mobile overlays
│   ├── CompaniesSection.tsx  # Subsidiary showcase container
│   ├── CompanyCard.tsx       # Interactive asymmetrical crooked bevel cards
│   ├── TeamSection.tsx       # Team profile grid
│   ├── PartnerCTA.tsx        # Framed email & social collaboration panel
│   └── ThemeProvider.tsx     # Theme wrapper
```

---

## Performance & Optimization

- **Static Pre-rendering**: Pages are compiled ahead of time for instantaneous loading speeds.
- **Small Footprint**: Keeps First Load JS under 150 kB.
- **Hardware-Accelerated Motion**: Framer Motion transitions are bound to GPU properties (`translate3d`, `rotateZ`) to ensure solid 60fps renders.
- **IndexNow Integration**: Automates instant build-time submissions to major search engine indexes.

---

## Contributing

> **This is APPBAI's official company website.** Every change must be intentional, polished, and reviewed before it reaches production. Nothing ships without approval.

### Workflow

1. **Create a branch** from `main`:
   ```bash
   git checkout main && git pull
   git checkout -b feature/your-feature-name
   ```
2. **Commit changes** with clean, descriptive messages:
   ```bash
   git add .
   git commit -m "feat: add responsive grid alignments"
   ```
3. **Push and Open a Pull Request** against `main`. Maintainers will verify the build and design language before merging.

---

Built with creative purpose, discipline & care by APPBAI.
