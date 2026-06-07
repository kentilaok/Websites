import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/global/CustomCursor";
import SmoothScroller from "@/components/global/SmoothScroller";
import Navigation from "@/components/global/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Expeditions | High-End Mountaineering",
  description: "Exclusive, elite mountaineering expeditions to the world's most formidable peaks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${oswald.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
