import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/global/Navigation";
import { CustomCursor } from "@/components/global/CustomCursor";
import { SmoothScroller } from "@/components/global/SmoothScroller";
import { Footer } from "@/components/global/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-tech",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanguard Aerospace | Beyond the Horizon",
  description: "Commercial space travel, orbital habitats, and the future of humanity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
