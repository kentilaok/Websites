import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/global/Navigation";
import { CustomCursor } from "@/components/global/CustomCursor";
import { SmoothScroller } from "@/components/global/SmoothScroller";

export const metadata: Metadata = {
  title: "Hyperion Logistics | Global Supply Chain",
  description: "Advanced global freight and supply chain tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        <main className="pt-20 pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}
