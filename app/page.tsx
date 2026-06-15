import Link from "next/link";
import {
  Heart,
  Settings,
  Globe,
  Infinity as InfinityIcon,
  ArrowDown,
} from "lucide-react";
import CompaniesSection from "@/components/CompaniesSection";
import TeamSection from "@/components/TeamSection";
import PartnerCTA from "@/components/PartnerCTA";

export default function Home() {
  return (
    <div className="min-h-screen font-body selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <section className="relative px-6 md:px-12 lg:px-24 pt-28 pb-16 md:pt-44 md:pb-32 max-w-[1400px] mx-auto border-b border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Soft background glows from subsidiaries */}
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-body">
              Build &middot; Innovate &middot; Impact
            </p>
          </div>

          <h1 className="font-display font-light text-[32px] md:text-7xl lg:text-[90px] leading-[1.05] tracking-tight max-w-5xl mb-6 md:mb-8 text-black dark:text-white">
            We build companies <br className="hidden md:inline" />
            that build the <span className="font-normal italic">future.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-xl max-w-xl mb-8 md:mb-12 font-light leading-relaxed">
            APPBAI is a technology lab creating products that serve real human
            needs. Home of Halo AI and OffReel.
          </p>
          <Link
            href="#companies"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b border-black/30 dark:border-white/30 pb-1 hover:border-black/80 dark:hover:border-white/80"
          >
            Explore our Companies <ArrowDown className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Our Essence — Ikigai Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 max-w-[1400px] mx-auto border-b border-gray-200 dark:border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Sticky Info & SVG Venn Diagram */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:sticky lg:top-28 lg:h-[calc(100vh-220px)] min-h-[520px]">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-body">
                Our Philosophy
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-black dark:text-white leading-[1.1] tracking-tight mb-6">
                Balanced by design.
              </h2>
              <div className="border-l-2 border-black/20 dark:border-white/20 pl-4 mb-6">
                <p className="text-black dark:text-white text-sm md:text-base leading-relaxed italic font-light font-body">
                  &ldquo;Guided by Ikigai — the Japanese concept of purpose. Like Google&apos;s &lsquo;do the right thing,&rsquo; we believe there is always a good way to build and grow — by genuinely making things better.&rdquo;
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed max-w-md font-body">
                We design and build products at the intersection of passion, skill, need, and sustainability. This is our Ikigai.
              </p>
            </div>

            {/* Premium Responsive SVG Venn Diagram */}
            <div className="relative w-full max-w-[240px] aspect-square mx-auto lg:mx-0 my-6">
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-80 dark:opacity-90">
                {/* Defs for gradients */}
                <defs>
                  <radialGradient id="love-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
                  </radialGradient>
                  <radialGradient id="good-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                  </radialGradient>
                  <radialGradient id="need-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </radialGradient>
                  <radialGradient id="sustain-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                  </radialGradient>
                </defs>

                {/* Overlapping circles */}
                {/* Top: Love */}
                <circle cx="100" cy="75" r="45" fill="url(#love-grad)" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-red-500/40" />
                {/* Left: Good At */}
                <circle cx="75" cy="115" r="45" fill="url(#good-grad)" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-blue-500/40" />
                {/* Right: World Needs */}
                <circle cx="125" cy="115" r="45" fill="url(#need-grad)" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-emerald-500/40" />
                {/* Bottom: Sustains */}
                <circle cx="100" cy="135" r="45" fill="url(#sustain-grad)" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-amber-500/40" />

                {/* Central Intersection text */}
                <text x="100" y="113" textAnchor="middle" className="text-[7px] font-display font-medium fill-black dark:fill-white tracking-widest uppercase">
                  IKIGAI
                </text>
                <text x="100" y="122" textAnchor="middle" className="text-[6px] font-body fill-gray-400 dark:fill-gray-500 font-light">
                  APPBAI
                </text>
              </svg>
            </div>
          </div>

          {/* Right Column - Premium 2x2 Grid of Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1: What we love */}
            <div className="group relative rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/50 dark:bg-black-soft/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-500/30 dark:hover:border-red-500/20 hover:shadow-[0_8px_30px_rgb(239,68,68,0.04)] dark:hover:shadow-[0_8px_30px_rgb(239,68,68,0.06)] overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] tracking-[0.2em] text-red-500 font-mono font-medium uppercase">01 / PASSION</span>
                <Heart className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black dark:text-white font-display">
                What we love
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-body">
                A passion for code, design, and the architecture of systems that improve lives. We enjoy the process of turning ideas into functional artwork.
              </p>
            </div>

            {/* Card 2: What we are good at */}
            <div className="group relative rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/50 dark:bg-black-soft/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-[0_8px_30px_rgb(59,130,246,0.04)] dark:hover:shadow-[0_8px_30px_rgb(59,130,246,0.06)] overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] tracking-[0.2em] text-blue-500 font-mono font-medium uppercase">02 / VOCATION</span>
                <Settings className="w-5 h-5 text-blue-500 group-hover:rotate-45 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black dark:text-white font-display">
                What we are good at
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-body">
                Crafting scalable, efficient, and secure digital infrastructure with precision. Our technical discipline ensures our projects are robust and reliable.
              </p>
            </div>

            {/* Card 3: What the world needs */}
            <div className="group relative rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/50 dark:bg-black-soft/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:shadow-[0_8px_30px_rgb(16,185,129,0.04)] dark:hover:shadow-[0_8px_30px_rgb(16,185,129,0.06)] overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] tracking-[0.2em] text-emerald-500 font-mono font-medium uppercase">03 / MISSION</span>
                <Globe className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black dark:text-white font-display">
                What the world needs
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-body">
                Solutions that address real challenges, reducing friction and enhancing connection. We focus on utility and positive human impact above all.
              </p>
            </div>

            {/* Card 4: What sustains us */}
            <div className="group relative rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/50 dark:bg-black-soft/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 dark:hover:border-amber-500/20 hover:shadow-[0_8px_30px_rgb(245,158,11,0.04)] dark:hover:shadow-[0_8px_30px_rgb(245,158,11,0.06)] overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] tracking-[0.2em] text-amber-500 font-mono font-medium uppercase">04 / PROFESSION</span>
                <InfinityIcon className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black dark:text-white font-display">
                What sustains us
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-body">
                Creating enduring value that ensures longevity for our team and our partners. A healthy, self-sustaining financial engine powers future innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About APPBAI Section */}
      <section
        id="about"
        className="px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-[1400px] mx-auto border-b border-gray-200 dark:border-gray-800"
      >
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-8 md:mb-12 font-body">
          About the Lab
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-600 dark:text-gray-400 leading-[1.05] tracking-tight mb-8 font-light">
              We don&apos;t just ship features; we cultivate{" "}
              <span className="text-black dark:text-white font-normal italic">ecosystems.</span>
              <span className="block mt-6 text-lg md:text-xl text-gray-500 dark:text-gray-400 font-body font-light leading-relaxed max-w-xl">
                We believe software is at its best when it is quiet, invisible, and serving human capability. We build with the conviction that the most advanced technology is the one that best serves the human experience.
              </span>
            </h2>
            <Link
              href="#companies"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b border-black/30 dark:border-white/30 pb-1 w-fit hover:border-black/80 dark:hover:border-white/80"
            >
              See our Companies <ArrowDown className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center divide-y divide-gray-200 dark:divide-gray-800">
            <div className="pb-8">
              <span className="text-[10px] tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono font-medium uppercase block mb-3">01 / GENESIS</span>
              <h3 className="text-xl font-medium mb-3 text-black dark:text-white font-display">The Origin</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed font-body font-light">
                APPBAI was founded by Elvis Baidoo as a dedicated space to build software without compromise. Observing a digital landscape cluttered with bloated interfaces and short-lived features, Elvis established the lab to reclaim focus on pure craftsmanship—engineering tools that are exceptionally fast, intuitive, and built to endure.
              </p>
            </div>
            <div className="pt-8">
              <span className="text-[10px] tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono font-medium uppercase block mb-3">02 / STRUCTURE</span>
              <h3 className="text-xl font-medium mb-3 text-black dark:text-white font-display">The Lab Model</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed font-body font-light">
                We operate as a parent R&D engine. We identify complex digital friction, engineer core infrastructure, and spin them out into standalone subsidiaries. This allows our products to share a common foundation of high-performance technical standards and unified design values from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <CompaniesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Partner CTA Section */}
      <PartnerCTA />

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-black-medium text-black dark:text-white relative overflow-hidden transition-colors">
        {/* Top Statement */}
        <div className="px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto pt-20 md:pt-32 pb-16 md:pb-24 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-2xl">
              <div className="w-10 h-10 flex items-center justify-center mb-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.6821 12.9682C42.8398 16.2295 43.994 20.0518 44.0021 23.9622C44.0102 27.8727 42.8717 31.6997 40.7276 34.9699C38.5834 38.2401 35.5276 40.81 31.9382 42.3616C28.3488 43.9133 24.3833 44.3787 20.5321 43.7002M7.31813 35.0322C5.16051 31.7701 4.00672 27.9469 3.99955 24.0357C3.99237 20.1246 5.13211 16.2972 7.27774 13.0271C9.42337 9.75708 12.4807 7.1879 16.0714 5.63751C19.6622 4.08712 23.6287 3.62357 27.4801 4.30423"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-300 dark:text-gray-700"
                  />
                  <path
                    d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-300 dark:text-gray-700"
                  />
                  <path
                    d="M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-300 dark:text-gray-700"
                  />
                  <path
                    d="M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-300 dark:text-gray-700"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl leading-tight text-black dark:text-white tracking-tight">
                We build for the long term.
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light mt-3 font-body">
                Sustainability is not a feature, it is the foundation.
              </p>
            </div>
            <a
              href="mailto:hello@appbai.com"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors border-b border-black/30 dark:border-white/30 pb-1 w-fit hover:border-black/80 dark:hover:border-white/80"
            >
              hello@appbai.com
            </a>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 border-t border-gray-200 dark:border-gray-800 pt-12">
            {/* Lab */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono font-medium mb-5">
                Lab
              </p>
              <ul className="space-y-3 text-sm font-body">
                <li>
                  <Link href="#philosophy" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Companies */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono font-medium mb-5">
                Companies
              </p>
              <ul className="space-y-3 text-sm font-body">
                <li>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    Halo AI
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    OffReel
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono font-medium mb-5">
                Connect
              </p>
              <ul className="space-y-3 text-sm font-body">
                <li>
                  <a href="https://x.com/apbbai" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/appbai.co/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://github.com/APPBAI" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono font-medium mb-5">
                Legal
              </p>
              <ul className="space-y-3 text-sm font-body">
                <li>
                  <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 font-body">
              © {new Date().getFullYear()} APPBAI Inc. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 font-body tracking-widest uppercase">
              Build &middot; Innovate &middot; Impact
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
