import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/global/CustomCursor";
import SmoothScroller from "@/components/global/SmoothScroller";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Omni Robotics | Industrial Automation",
  description: "Next-generation B2B industrial robotics and automation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-steel-900 text-foreground selection:bg-industrial-orange selection:text-white">
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
