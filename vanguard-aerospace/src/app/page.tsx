"use client";

import { TextReveal } from "@/components/ui/TextReveal";
import { ArrowRight, Globe, Star, Zap, Shield, Rocket } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05050a]/50 to-[#05050a]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 mt-20">
          <TextReveal delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#9b51e0]/30 bg-black/50 text-[#d194ff] mb-8 text-sm font-tech">
              <span className="w-2 h-2 rounded-full bg-[#d194ff] animate-pulse" />
              TICKETS FOR 2027 ARE NOW AVAILABLE
            </div>
          </TextReveal>
          
          <TextReveal delay={0.4}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Beyond The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d194ff] to-[#9b51e0]">
                Horizon
              </span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.6}>
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
              Pioneering commercial space travel. Experience the profound beauty of Earth from orbit, and discover your place among the stars.
            </p>
          </TextReveal>

          <TextReveal delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/orbital-flights" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105">
                <div className="absolute inset-0 bg-[#d194ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
                  Explore Flights <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/habitats" className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                Discover Habitats
              </Link>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-24 bg-[#05050a] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
            <TextReveal delay={0.1} className="flex flex-col items-center text-center">
              <Globe className="w-12 h-12 text-[#9b51e0] mb-6" />
              <h3 className="text-4xl font-tech font-bold text-white mb-2">400km</h3>
              <p className="text-white/60">Standard orbital altitude</p>
            </TextReveal>
            <TextReveal delay={0.2} className="flex flex-col items-center text-center">
              <Star className="w-12 h-12 text-[#d194ff] mb-6" />
              <h3 className="text-4xl font-tech font-bold text-white mb-2">Zero-G</h3>
              <p className="text-white/60">Weightless experience</p>
            </TextReveal>
            <TextReveal delay={0.3} className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-[#9b51e0] mb-6" />
              <h3 className="text-4xl font-tech font-bold text-white mb-2">100%</h3>
              <p className="text-white/60">Safety record across missions</p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-32 bg-[#0a0a14] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#9b51e0]/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Vanguard Promise</h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                We believe that access to space should not be restricted to a select few. Our mission is to democratize orbit, providing safe, reliable, and awe-inspiring journeys beyond the Karman line.
              </p>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                With our next-generation reusable launch vehicles and state-of-the-art orbital habitats, we are laying the groundwork for humanity's future among the stars.
              </p>
            </TextReveal>
            <TextReveal delay={0.4}>
              <ul className="space-y-4 font-tech text-sm text-[#d194ff]">
                <li className="flex items-center gap-3"><Zap className="w-5 h-5" /> Next-Gen Propulsion Systems</li>
                <li className="flex items-center gap-3"><Rocket className="w-5 h-5" /> Fully Reusable Fleet</li>
                <li className="flex items-center gap-3"><Shield className="w-5 h-5" /> Triple-Redundant Life Support</li>
              </ul>
            </TextReveal>
          </div>
          <TextReveal delay={0.4} className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop" 
              alt="Spacecraft"
              className="w-full h-full object-cover"
            />
          </TextReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-[#05050a] relative text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9b51e0]/20 via-black to-black" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <TextReveal>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready for Liftoff?</h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-xl text-white/60 mb-12">
              Join the Vanguard waiting list and secure your place in history.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <button className="px-10 py-5 bg-[#9b51e0] hover:bg-[#d194ff] text-white hover:text-black font-bold rounded-full transition-all duration-300 text-lg shadow-[0_0_40px_rgba(155,81,224,0.4)] hover:shadow-[0_0_60px_rgba(209,148,255,0.6)]">
              Reserve Your Seat
            </button>
          </TextReveal>
        </div>
      </section>
    </div>
  );
}
