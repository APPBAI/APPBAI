import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Editorial display font (Clash Display alternative)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Clean UI font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://appbai.com"),
  title: {
    default: "APPBAI — Build Innovate Impact",
    template: "%s | APPBAI",
  },
  description:
    "APPBAI is a technology lab building products that serve real human needs. Home of Halo AI and OffReel.",
  keywords: [
    "appbai",
    "APPBAI",
    "Halo AI",
    "OffReel",
    "Technology",
    "AI",
    "AI Assistant",
    "Video Platform",
    "Impact Technology",
    "Social Good Tech",
    "Intelligent Systems",
    "Ikigai Design",
  ],
  authors: [{ name: "APPBAI" }],
  creator: "APPBAI",
  publisher: "APPBAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "https://appbai.com/favicon.ico", sizes: "any" },
      { url: "https://appbai.com/favicon.svg", type: "image/svg+xml" },
      {
        url: "https://appbai.com/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "https://appbai.com/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
    ],
    apple: [
      {
        url: "https://appbai.com/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APPBAI — Build Innovate Impact",
    description:
      "APPBAI is a technology lab building products that serve real human needs. Home of Halo AI and OffReel.",
    url: "https://appbai.com",
    siteName: "APPBAI",
    images: [
      {
        url: "/appbai-logo.png",
        width: 1200,
        height: 630,
        alt: "APPBAI — Build Innovate Impact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APPBAI — Build Innovate Impact",
    description:
      "APPBAI is a technology lab building products that serve real human needs. Home of Halo AI and OffReel.",
    images: ["/appbai-logo.png"],
    creator: "@appbai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "APPBAI",
  url: "https://appbai.com",
  logo: "https://appbai.com/appbai-logo.png",
  description:
    "APPBAI is a technology lab building products that serve real human needs. Home of Halo AI and OffReel.",
  slogan: "Build Innovate Impact",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  sameAs: [
    "https://x.com/apbbai",
    "https://www.instagram.com/appbai.co/",
    "https://github.com/APPBAI",
  ],
  subOrganization: [
    {
      "@type": "Organization",
      name: "Halo AI",
      description: "An intelligent AI assistant with vision capabilities.",
    },
    {
      "@type": "Organization",
      name: "OffReel",
      description: "A creative video and gallery platform.",
    },
  ],
};

import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="bg-alabaster dark:bg-black-soft text-black dark:text-white"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SpeedInsights />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <SmoothScroll>
            <Header />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
