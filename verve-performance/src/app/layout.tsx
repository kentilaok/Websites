import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/global/Navigation";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Verve Performance",
  description: "High-end Athleisure & Performance Gear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </SmoothScroller>
      </body>
    </html>
  );
}
