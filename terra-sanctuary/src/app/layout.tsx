import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terra Sanctuary | Eco Resort",
  description: "Raw luxury. Sustainable living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${manrope.variable}`}>
      <body className="antialiased suppressHydrationWarning">
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
