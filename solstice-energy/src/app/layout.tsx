import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/global/Navigation";
import CustomCursor from "@/components/global/CustomCursor";
import SmoothScroller from "@/components/global/SmoothScroller";
import Footer from "@/components/global/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solstice Energy | Next-Gen Solar & Fusion",
  description: "Optimistic and forward-looking energy solutions for a brighter future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} font-sans antialiased bg-solar-50`}
    >
      <body className="min-h-screen flex flex-col relative">
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        <main className="flex-grow pt-24">{children}</main>
        
        {/* Global Sunburst Glow */}
        <div className="fixed top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-solar-200/30 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-multiply" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-fusion-200/20 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-multiply" />
        <Footer />
      </body>
    </html>
  );
}
