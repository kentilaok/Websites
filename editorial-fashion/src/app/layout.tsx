import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "VANGUARD | Fashion Editorial",
  description: "High-speed, stark contrast digital fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bodoni.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </SmoothScroller>
      </body>
    </html>
  );
}
