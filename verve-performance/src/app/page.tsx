"use client";

import { useEffect, useRef } from "react";
import TextReveal from "@/components/ui/TextReveal";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current.children,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out", delay: 0.2 }
      );
    }
    
    if (heroImageRef.current) {
      gsap.fromTo(
        heroImageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-verve-dark/50 to-verve-dark"></div>
        <div 
          ref={heroImageRef}
          className="absolute inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale-[50%]"
        ></div>
        
        <div className="z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
          <h1 ref={heroTextRef} className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
            <span className="block overflow-hidden"><span className="block">Defy</span></span>
            <span className="block overflow-hidden"><span className="block text-stroke hover:text-verve-orange hover:-webkit-text-stroke-verve-orange transition-all duration-300">Gravity</span></span>
            <span className="block overflow-hidden"><span className="block text-verve-orange">Push</span></span>
            <span className="block overflow-hidden"><span className="block">Limits.</span></span>
          </h1>
          
          <p className="text-verve-light/80 text-lg md:text-xl max-w-2xl mt-8 mb-10 font-medium">
            Engineered for those who demand more from their gear. Next-generation athleisure that moves at the speed of your ambition.
          </p>

          <Link href="/apparel" className="group flex items-center gap-4 bg-verve-light text-verve-dark px-8 py-4 font-bold uppercase tracking-widest hover:bg-verve-orange hover:text-verve-light transition-all duration-300">
            Explore Collection
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-verve-dark">
        <div className="container mx-auto max-w-6xl">
          <TextReveal 
            text="WE DON'T JUST MAKE CLOTHES. WE ENGINEER PERFORMANCE APPARATUS DESIGNED TO ELEVATE HUMAN POTENTIAL."
            className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight"
          />
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Kinetic Fit", desc: "Garments that map to your musculature for unrestricted, explosive movement." },
              { title: "Thermal Reg", desc: "Proprietary fabrics that actively manage core temperature during peak exertion." },
              { title: "Zero Gravity", desc: "Ultralight materials that feel like a second skin, eliminating all drag." }
            ].map((feature, i) => (
              <div key={i} className="border-t border-verve-gray pt-8 group">
                <h3 className="text-2xl font-black uppercase tracking-widest text-verve-light mb-4 group-hover:text-verve-orange transition-colors">
                  0{i + 1} {"//"} {feature.title}
                </h3>
                <p className="text-verve-light/70 text-lg leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Drop */}
      <section className="py-32 bg-verve-gray px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-verve-orange/10 blur-3xl -z-0 transform translate-x-1/2 rounded-full"></div>
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              The <span className="text-verve-orange">Apex</span><br/>Collection
            </h2>
            <p className="text-xl text-verve-light/80 mb-10">
              Our latest drop features micro-perforated tech fabrics and welded seams for the ultimate friction-free training experience.
            </p>
            <Link href="/apparel" className="border-2 border-verve-light text-verve-light px-8 py-4 font-bold uppercase tracking-widest hover:bg-verve-light hover:text-verve-dark transition-all duration-300 inline-block">
              Shop The Drop
            </Link>
          </div>
          <div className="w-full md:w-1/2 aspect-square bg-verve-dark relative group overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556817411-31ae72fa3ea8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
             <div className="absolute inset-0 bg-verve-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
