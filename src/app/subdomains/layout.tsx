import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";

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
  title: "Get Your Subdomain — Weed Kerwing",
  description: "Get a professional subdomain for your business. Starting at RD$500/year.",
};

export default function SubdomainsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${bricolage.variable} ${mono.variable}`}>
      {children}
    </div>
  );
}
