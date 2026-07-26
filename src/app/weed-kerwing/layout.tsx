import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";

/* Bricolage Grotesque — variable 200–800, geometric with personality.
   NOT Syne, NOT Cormorant, NOT Playfair. A real design choice.
   Weight 800 at 14vw = massive editorial statement.
   Weight 300 at 16px = clean, readable, minimal. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weed Kerwing — Digital Designer & Developer, Santo Domingo",
  description:
    "Premium websites, digital products, and AI-powered experiences. Custom-built from strategy to launch. Based in Santo Domingo, DR — working globally.",
  openGraph: {
    title: "Weed Kerwing — Digital Designer & Developer",
    description:
      "Premium websites, digital products, and AI-powered experiences. Custom-built from strategy to launch.",
    type: "website",
  },
};

export default function WeedKerwingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${bricolage.variable} ${mono.variable}`}>
      {children}
    </div>
  );
}
