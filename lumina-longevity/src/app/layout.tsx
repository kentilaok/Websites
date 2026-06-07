import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina Longevity | Next-Gen Health",
  description: "Advanced biotech and anti-aging treatments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable}`}>
      <body className="antialiased suppressHydrationWarning bg-ll-offwhite text-ll-slate relative">
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          
          {/* Global Ambient Glow */}
          <div className="fixed top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-ll-blue-soft/50 to-transparent pointer-events-none -z-10" />
          
          <main>
            {children}
          </main>
        </SmoothScroller>
      </body>
    </html>
  );
}
