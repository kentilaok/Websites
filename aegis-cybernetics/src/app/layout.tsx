import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";
import SmoothScroller from "@/components/global/SmoothScroller";
import Footer from "@/components/global/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aegis Cybernetics // Defense Systems",
  description: "Enterprise Cybersecurity. Aggressive, cyberpunk, brutalist data-center vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body suppressHydrationWarning>
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          <main className="pt-24 min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
