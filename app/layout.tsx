import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
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
        default: "APPBAI — Building Technology for Society",
        template: "%s | APPBAI",
    },
    description: "APPBAI is a design and technology studio building the next generation of intelligent systems that amplify human potential and help society.",
    keywords: ["appbai", "APPBAI", "Technology", "AI", "Tech", "AI Studio", "Impact Technology", "Social Good Tech", "Intelligent Systems", "Future of Work", "Ikigai Design"],
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
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
            { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "APPBAI — Building Technology for Society",
        description: "Designing the next generation of intelligent systems that address real challenges and empower people.",
        url: "https://appbai.com",
        siteName: "APPBAI",
        images: [
            {
                url: "/appbai-logo.png", // Recommended: Create a dedicated social sharing image
                width: 1200,
                height: 630,
                alt: "APPBAI - Building Technology for Society",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "APPBAI — Building Technology for Society",
        description: "Designing the next generation of intelligent systems that address real challenges and empower people.",
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
    description: "Building technology that helps society through intelligent systems.",
    address: {
        "@type": "PostalAddress",
        addressCountry: "US",
    },
    sameAs: [
        "https://twitter.com/appbai",
        "https://linkedin.com/company/appbai",
        "https://github.com/appbai",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
            <body>
                
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
