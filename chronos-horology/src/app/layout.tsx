import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/global/CustomCursor";
import SmoothScroller from "@/components/global/SmoothScroller";
import Navigation from "@/components/global/Navigation";

export const metadata: Metadata = {
  title: "Chronos Horology | Timeless Luxury",
  description: "Elegant, timeless luxury watchmaker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-brand-darker text-brand-text">
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          <main className="flex-1">{children}</main>
        </SmoothScroller>
      </body>
    </html>
  );
}
