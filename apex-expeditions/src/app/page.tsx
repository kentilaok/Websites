"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Mountain, Shield, Wind } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const parallaxSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (parallaxSectionRef.current) {
      const bg = parallaxSectionRef.current.querySelector(".parallax-bg");
      if (bg) {
        gsap.to(bg, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: parallaxSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-terrain">
          <Image
            ref={heroImageRef as any}
            src="https://images.unsplash.com/photo-1522346513757-54c552451fdc?q=80&w=2938&auto=format&fit=crop"
            alt="Mountain peak at sunrise"
            fill
            className="object-cover opacity-60 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-terrain via-transparent to-terrain/80" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center mt-20">
          <p className="text-moss-300 font-semibold tracking-[0.3em] uppercase text-sm mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-moss-300"></span>
            Elevate Your Limits
            <span className="w-12 h-px bg-moss-300"></span>
          </p>
          <h1 className="font-display text-7xl md:text-9xl font-bold uppercase tracking-tighter text-snow drop-shadow-2xl mb-8 mix-blend-overlay">
            Beyond <br /> The Clouds
          </h1>
          <p className="text-slate-300 max-w-2xl text-lg md:text-xl font-light mb-12">
            Exclusive, world-class mountaineering expeditions tailored for the elite adventurer. We guide you to the roof of the world with unparalleled safety and luxury.
          </p>
          <Link href="/destinations" className="group relative overflow-hidden bg-snow text-terrain px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-moss-50 hover:text-moss-900 flex items-center gap-3">
            <span className="relative z-10">Explore Expeditions</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-24 bg-terrain">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <TextReveal 
              text="The summit is just the halfway point." 
              className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-snow mb-8 opacity-100! [&_h2]:opacity-100!" 
            />
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              At Apex Expeditions, we believe that true luxury in the mountains lies in flawless execution. Our teams consist of IFMGA-certified guides, seasoned Sherpas, and world-class logistics experts, ensuring that every detail of your ascent is meticulously planned.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Shield className="text-moss-400 mb-4" size={32} />
                <h4 className="font-display uppercase text-xl font-bold mb-2 text-snow">Safety First</h4>
                <p className="text-slate-500 text-sm">Industry-leading medical support and risk management.</p>
              </div>
              <div>
                <Compass className="text-moss-400 mb-4" size={32} />
                <h4 className="font-display uppercase text-xl font-bold mb-2 text-snow">Precision</h4>
                <p className="text-slate-500 text-sm">Tailored itineraries aligned with weather windows.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-[600px] rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2940&auto=format&fit=crop"
              alt="Climber on ridge"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-8 border-terrain rounded-2xl pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* Parallax Quote Section */}
      <section ref={parallaxSectionRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <div className="parallax-bg absolute inset-0 -top-24 bottom-[-6rem] w-full h-[calc(100%+12rem)]">
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop"
              alt="Mountain range"
              fill
              className="object-cover opacity-40 grayscale"
            />
          </div>
        </div>
        <div className="relative z-10 max-w-4xl text-center px-6">
          <Mountain className="mx-auto text-moss-400 mb-8" size={48} strokeWidth={1} />
          <h3 className="font-display text-4xl md:text-6xl uppercase font-medium leading-tight text-snow tracking-wide">
            "It is not the mountain we conquer, but ourselves."
          </h3>
          <p className="mt-8 text-moss-300 tracking-widest uppercase text-sm font-semibold">— Sir Edmund Hillary</p>
        </div>
      </section>

      {/* Featured Expedition */}
      <section className="py-32 px-6 md:px-24 bg-terrain">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-moss-400 uppercase tracking-widest font-bold text-sm mb-4">Signature Route</p>
              <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-snow tracking-tighter">Mt. Vinson</h2>
            </div>
            <Link href="/destinations" className="hidden md:flex items-center gap-2 text-slate-300 hover:text-moss-400 transition-colors uppercase tracking-widest text-sm font-bold">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="relative h-[70vh] rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=2787&auto=format&fit=crop"
              alt="Antarctica mountains"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-terrain via-terrain/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-12 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <p className="text-moss-300 font-mono text-sm mb-2">4,892m / 16,050ft</p>
                <h3 className="font-display text-4xl font-bold uppercase text-snow mb-4">Antarctic Majesty</h3>
                <p className="text-slate-300 max-w-xl">Ascend the highest peak in Antarctica. A true test of endurance in the most remote, pristine environment on Earth.</p>
              </div>
              <button className="bg-moss-600 text-snow px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-moss-500 transition-colors">
                View Itinerary
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-moss-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
          <Wind size={400} strokeWidth={0.5} />
        </div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-snow mb-8">
            Ready to Ascend?
          </h2>
          <p className="text-moss-200 text-xl font-light mb-12">
            Consult with our expedition leaders to craft your custom mountaineering experience.
          </p>
          <Link href="/booking" className="inline-block bg-snow text-moss-900 px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors shadow-2xl">
            Inquire Now
          </Link>
        </div>
      </section>
    </main>
  );
}
