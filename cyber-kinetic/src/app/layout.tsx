import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";

const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cyber-Kinetic | HFT Systems",
  description: "High Frequency Trading Algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="suppressHydrationWarning">
      <body className={`${jetbrains.variable} ${inter.variable} antialiased suppressHydrationWarning`}>
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
