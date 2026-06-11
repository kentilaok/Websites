import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AURA | High-Fidelity Audio",
  description: "Acoustic perfection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="suppressHydrationWarning">
      <body className={`${inter.variable} antialiased suppressHydrationWarning`}>
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
