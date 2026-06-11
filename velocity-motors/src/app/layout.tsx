import type { Metadata } from "next";
import { Syncopate, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velocity Motors | Future of Speed",
  description: "Hyper-car manufacturing and aerodynamics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syncopate.variable} ${manrope.variable}`}>
      <body className="antialiased suppressHydrationWarning">
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          <main className="md:ml-24">
            {children}
          </main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
