import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/global/CustomCursor";
import SmoothScroller from "@/components/global/SmoothScroller";
import Navigation from "@/components/global/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Omni Robotics | Industrial Automation",
  description: "Next-generation B2B industrial robotics and automation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-steel-900 text-foreground selection:bg-industrial-orange selection:text-white">
        <SmoothScroller />
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        
        <footer className="bg-steel-800 border-t border-steel-700 py-12 mt-24">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-black uppercase text-white mb-4">Omni Robotics</h3>
              <p className="text-steel-400 font-mono text-sm">Engineered for the extreme. Built for the future.</p>
            </div>
            <div>
              <h4 className="font-bold text-industrial-orange uppercase tracking-wider mb-4">Solutions</h4>
              <ul className="space-y-2 text-steel-400">
                <li>Automated Assembly</li>
                <li>Heavy Payload Transit</li>
                <li>Precision Welding</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-industrial-orange uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-steel-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-industrial-orange uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2 text-steel-400">
                <li>sales@omni-robotics.com</li>
                <li>1-800-OMNI-ROB</li>
                <li>Sector 7G, Industrial Park</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
