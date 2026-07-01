import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/content/portfolio";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.fullName} — ${profile.title}`,
  description: `Portfolio d'architecture de ${profile.fullName}. ${profile.tagline}`,
  keywords: [
    "architecte",
    "architecture",
    "ArchiCAD",
    "SketchUp",
    "rendu 3D",
    "Madagascar",
    profile.fullName,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="cine-grain">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
