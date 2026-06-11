import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Crescent Culinary | Michelin-Star Fusion",
  description: "Experience the pinnacle of fine dining at Crescent Culinary, where Eastern tradition meets Western innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-burgundy-500 selection:text-white" suppressHydrationWarning>
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        <main className="flex-grow flex flex-col pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
