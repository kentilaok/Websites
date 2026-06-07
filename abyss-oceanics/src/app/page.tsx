"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "@/components/ui/TextReveal";
import { ArrowDown, Droplet, Compass, MapPin, Eye, Zap } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Parallax
    gsap.to(heroRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Bubbles animation
    if (bubblesRef.current) {
      const bubbles = bubblesRef.current.children;
      gsap.fromTo(
        bubbles,
        { y: "100vh", opacity: 0 },
        {
          y: "-10vh",
          opacity: 0.6,
          duration: "random(4, 8)",
          stagger: {
            amount: 5,
            repeat: -1,
          },
          ease: "none",
        }
      );
    }

    // Stats Stagger
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <main className="relative w-full">
      {/* Floating Bubbles */}
      <div ref={bubblesRef} className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-bio-cyan/20 blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div ref={heroRef} className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-abyss-900/80 to-abyss-900"></div>

        <div className="text-center z-10 max-w-5xl px-6">
          <TextReveal
            text="Explore the Unseen Depths"
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-bio-cyan text-glow-cyan uppercase tracking-tighter mb-6"
          />
          <TextReveal
            text="We build advanced submersibles and lead pioneering expeditions into the ocean's darkest trenches. The abyss calls."
            className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto mb-12"
            delay={0.5}
          />
          
          <button className="group relative px-8 py-4 bg-bio-cyan/10 border border-bio-cyan text-bio-cyan font-bold tracking-widest uppercase overflow-hidden transition-all hover:text-white rounded-sm">
            <span className="absolute inset-0 w-full h-full bg-bio-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 flex items-center gap-2">
              <Droplet size={18} /> Enter the Abyss
            </span>
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-bio-cyan/50">
          <ArrowDown size={32} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-bio-green tracking-[0.3em] uppercase mb-4 text-glow-green">Our Mission</h2>
            <TextReveal
              text="Illuminating the darkest corners of our planet."
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            />
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              At Abyss Oceanics, we believe that the deep ocean is the final frontier on Earth. Our state-of-the-art technology allows humanity to reach depths previously thought impossible, uncovering new ecosystems, geological formations, and biological wonders.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              We operate at the intersection of engineering and marine biology, providing platforms for researchers to study the profound mysteries hidden beneath thousands of meters of crushing pressure.
            </p>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden glass-panel p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-bio-cyan/20 to-transparent z-10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1682687982501-1e58f813fb31?q=80&w=1000" 
              alt="Deep sea exploration"
              className="w-full h-full object-cover rounded-md opacity-70 mix-blend-screen grayscale contrast-150"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-abyss-800/50 border-y border-bio-cyan/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-bio-cyan to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Compass, label: "Max Depth Reached", value: "10,928m" },
              { icon: MapPin, label: "Expeditions", value: "47+" },
              { icon: Eye, label: "New Species Found", value: "1,204" },
              { icon: Zap, label: "Active Submersibles", value: "6" },
            ].map((stat, i) => (
              <div key={i} className="glass-panel p-8 text-center rounded-lg border-bio-cyan/20 hover:border-bio-cyan/60 transition-colors duration-500 group">
                <div className="inline-flex p-4 rounded-full bg-abyss-900 mb-6 group-hover:bg-bio-cyan/10 transition-colors duration-500">
                  <stat.icon className="text-bio-cyan w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="py-12 text-center text-slate-600 border-t border-white/5 mt-20">
        <p className="tracking-widest uppercase text-xs">&copy; 2026 Abyss Oceanics. The deep awaits.</p>
      </footer>
    </main>
  );
}
