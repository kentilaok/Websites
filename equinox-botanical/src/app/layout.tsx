import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/global/CustomCursor";
import SmoothScroller from "@/components/global/SmoothScroller";
import Navigation from "@/components/global/Navigation";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Equinox Botanical | Luxury Indoor Landscaping",
  description: "Exquisite terrariums and indoor botanical installations for the modern aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col relative sm:cursor-none">
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        <main className="flex-grow pt-24 pb-16">
          {children}
        </main>
      </body>
    </html>
  );
}
