"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
  span?: string; // grid span class for collage
}

const team: TeamMember[] = [
  {
    name: "Elvis Baidoo",
    role: "Founder & CEO",
    initials: "EB",
    socials: {
      twitter: "https://x.com/elvisthebuilder",
      linkedin: "https://www.linkedin.com/in/elvisthebuilder/",
      instagram: "https://www.instagram.com/elvisthebuilder/",
    },
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Tetteh Kephas Teye-Lao",
    role: "Lead Engineer",
    initials: "KT",
    socials: {
      github: "https://github.com/APPBAI",
      linkedin: "https://www.linkedin.com/in/kephastetteh/",
    },
    span: "md:col-span-1",
  },
  {
    name: "Lawrence Tetteh Quao",
    role: "Design",
    initials: "LT",
    span: "md:col-span-1",
  },
  {
    name: "Hafsa Ahmed Hama",
    role: "Communications Lead",
    initials: "HH",
    span: "md:col-span-1",
    socials: {
      instagram: "https://www.instagram.com/hafsa_ace/",
      linkedin: "https://www.linkedin.com/in/hafsa-ahmed-hama-b47528315/",
    }
  },
  {
    name: "Dzisah Edem Kwabla",
    role: "Communications Strategist",
    initials: "ED",
    span: "md:col-span-1",
  },
  {
    name: "James Enam Atsu Anthony",
    role: "Head of Administration",
    initials: "JA",
    span: "md:col-span-1",
  },
];

function SocialIcon({ type }: { type: "twitter" | "linkedin" | "github" | "instagram" }) {
  if (type === "twitter") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    );
  }
  // github
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section
      id="team"
      className="px-6 md:px-12 lg:px-24 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-gray-200 dark:border-gray-800"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 md:mb-20"
      >
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
          Our Team
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-black dark:text-white tracking-tight">
            The people behind it.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm leading-relaxed font-body">
            A focused team building with intention, discipline, and care.
          </p>
        </div>
      </motion.div>

      {/* Collage grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[300px]">
        {team.map((member, index) => (
          <motion.div
            key={`${member.name}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 1.2,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative group rounded-2xl overflow-hidden ${member.span || ""}`}
          >
            {/* Image / Avatar background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black-medium flex items-center justify-center">
              {member.image ? (
                // Real image would go here
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }} />
              ) : (
                <span className="font-display text-5xl md:text-7xl text-gray-300/40 dark:text-gray-700/40 font-bold select-none">
                  {member.initials}
                </span>
              )}
            </div>

            {/* Gradient overlay — stronger at bottom for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Content — anchored to bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
              <h3 className="font-display text-lg md:text-xl text-white mb-0.5 tracking-tight">
                {member.name}
              </h3>
              <p className="text-[11px] text-gray-400 uppercase tracking-[0.15em] font-body mb-3">
                {member.role}
              </p>

              {/* Social links */}
              {member.socials && (
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {member.socials.twitter && (
                    <Link
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <SocialIcon type="twitter" />
                    </Link>
                  )}
                  {member.socials.linkedin && (
                    <Link
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <SocialIcon type="linkedin" />
                    </Link>
                  )}
                  {member.socials.instagram && (
                    <Link
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <SocialIcon type="instagram" />
                    </Link>
                  )}
                  {member.socials.github && (
                    <Link
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <SocialIcon type="github" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
