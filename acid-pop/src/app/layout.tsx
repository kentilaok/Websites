import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ACID_POP | Creative Agency",
  description: "We don't do boring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="suppressHydrationWarning">
      <body className={`${space.variable} antialiased suppressHydrationWarning`}>
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
