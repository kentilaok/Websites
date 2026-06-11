import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/global/CustomCursor";
import SmoothScroller from "@/components/global/SmoothScroller";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

export const metadata: Metadata = {
  title: "Abyss Oceanics | Deep Sea Exploration",
  description: "Pioneering the next frontier in deep-sea exploration and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans selection:bg-bio-cyan/30 selection:text-white relative min-h-screen">
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        {/* Background ambient lighting */}
        <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-abyss-700/50 via-abyss-900 to-black"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
