import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site-data";
import Navigation from "@/components/global/Navigation";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import MotionOrchestrator from "@/components/global/MotionOrchestrator";
import Footer from "@/components/global/Footer";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: "%s | " + site.name,
  },
  description: site.pages.home.hero.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScroller>
          <Navigation />
          <MotionOrchestrator />
          {children}
          <Footer />
          <CustomCursor />
        </SmoothScroller>
      </body>
    </html>
  );
}
