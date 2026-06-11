import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/global/Navigation";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Footer from "@/components/global/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eden Synthetic | Bio-Engineering Future Food",
  description: "Next-generation synthetic proteins and bio-engineered food solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased font-sans`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg-primary text-text-main flex flex-col selection:bg-brand-green selection:text-text-main overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        <main className="flex-grow pt-24 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
