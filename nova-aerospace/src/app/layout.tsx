import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOVA AEROSPACE | Commercial Spaceflight",
  description: "To the stars, in luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${orbitron.variable} ${inter.variable}`}>
      <body className="antialiased suppressHydrationWarning">
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          
          {/* Global Vignette for deep space feel */}
          <div className="fixed inset-0 pointer-events-none z-50 shadow-[inset_0_0_150px_rgba(2,2,5,1)]" />

          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
