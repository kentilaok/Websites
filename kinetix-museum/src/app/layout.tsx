import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/global/CustomCursor";
import SmoothScroller from "@/components/global/SmoothScroller";
import Navigation from "@/components/global/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinetix Museum | Modern Digital Art",
  description: "A stark, minimalist exhibition of digital masterpieces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-stark-white text-stark-black selection:bg-lilac selection:text-stark-black`}>
        <CustomCursor />
        <Navigation />
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
