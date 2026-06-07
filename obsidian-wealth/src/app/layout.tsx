import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Obsidian Wealth | Ultra-Exclusive Private Bank",
  description: "Bespoke wealth management and advisory for the elite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-obsidian text-foreground antialiased selection:bg-silver-800 selection:text-white" suppressHydrationWarning>
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          <main className="min-h-screen w-full flex flex-col">
            {children}
          </main>
        </SmoothScroller>
      </body>
    </html>
  );
}
