import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
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
    <div className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      {children}
    </div>
  );
}
