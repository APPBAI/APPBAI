import type { Metadata } from "next";
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
    title: "APPBAI — Coming Soon",
    description: "Building technology that helps society",
    icons: {
        icon: "/Favicon.svg",
    },
    openGraph: {
        title: "APPBAI — Coming Soon",
        description: "Building technology that helps society",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
            <body>
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
