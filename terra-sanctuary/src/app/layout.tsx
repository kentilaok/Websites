import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/global/SmoothScroller";
import CustomCursor from "@/components/global/CustomCursor";
import Navigation from "@/components/global/Navigation";

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
          
          <footer className="bg-ts-moss text-ts-sand py-24 border-t-8 border-ts-clay mt-32">
             <div className="container grid md:grid-cols-3 gap-12">
                <div>
                  <div className="font-playfair text-3xl italic font-bold mb-6">Terra</div>
                  <p className="opacity-60 max-w-sm">
                    A sanctuary for those who seek absolute quiet and a deeper connection to the earth. Built entirely from raw, local materials.
                  </p>
                </div>
                <div>
                   <h4 className="font-bold tracking-widest uppercase mb-6 text-sm">Location</h4>
                   <p className="opacity-60">
                     The Highlands<br/>
                     Sector 4<br/>
                     Coordinates: 41.3851° N, 2.1734° E
                   </p>
                </div>
                <div>
                   <h4 className="font-bold tracking-widest uppercase mb-6 text-sm">Connect</h4>
                   <ul className="space-y-2 opacity-60">
                     <li>Instagram</li>
                     <li>Journal</li>
                     <li>Press</li>
                   </ul>
                </div>
             </div>
          </footer>
        </SmoothScroller>
      </body>
    </html>
  );
}
