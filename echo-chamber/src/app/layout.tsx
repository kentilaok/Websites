import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECHO_CHAMBER",
  description: "Underground sonic destruction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jetbrains.variable}`}>
      <body className="antialiased suppressHydrationWarning min-h-screen border-8 border-ec-lime relative">
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          <div className="fixed top-0 left-0 w-full h-2 bg-ec-lime z-50" />
          <div className="fixed bottom-0 left-0 w-full h-2 bg-ec-lime z-50" />
          <div className="fixed top-0 left-0 w-2 h-full bg-ec-lime z-50" />
          <div className="fixed top-0 right-0 w-2 h-full bg-ec-lime z-50" />
          <main className="p-4 md:p-8">
            {children}
          </main>
        </SmoothScroller>
        <Footer />
      </body>
    </html>
  );
}
