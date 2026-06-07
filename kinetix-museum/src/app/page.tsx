'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextReveal from '@/components/ui/TextReveal';
import Link from 'next/link';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
      });

      // Soft pastel background fade
      gsap.to(colorRef.current, {
        scrollTrigger: {
          trigger: '.featured-section',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
        backgroundColor: 'var(--color-lilac)',
        opacity: 0.1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full">
      {/* Background color overlay for scroll effects */}
      <div ref={colorRef} className="fixed inset-0 pointer-events-none -z-10 bg-stark-white transition-colors duration-1000" />

      {/* 1. Hero Section */}
      <section ref={heroRef} className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24">
        <div className="overflow-hidden">
          <h1 className="hero-text text-[15vw] leading-[0.8] font-black tracking-tighter uppercase text-stark-black">
            Digital
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-text text-[15vw] leading-[0.8] font-black tracking-tighter uppercase text-stark-black md:ml-[10vw]">
            Canvas
          </h1>
        </div>
        <div className="mt-12 md:mt-24 max-w-xl hero-text">
          <p className="text-lg md:text-2xl font-medium tracking-wide">
            Kinetix Museum redefines the spatial boundaries of art, merging algorithms with human emotion in a stark, uncompromising environment.
          </p>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="min-h-[50vh] px-6 md:px-12 py-24 flex items-center">
        <div className="max-w-4xl">
          <TextReveal 
            text="We exist at the intersection of code and canvas. A sanctuary for new media, generative design, and interactive installations that challenge perception."
            className="text-3xl md:text-6xl font-bold tracking-tight leading-tight"
          />
        </div>
      </section>

      {/* 3. Featured Exhibition */}
      <section className="featured-section min-h-screen px-6 md:px-12 py-24">
        <div className="border-t-2 border-stark-black pt-8 mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em]">Currently on View</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-stark-black relative overflow-hidden group">
            <div className="absolute inset-0 bg-peach opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
            <div className="absolute inset-0 flex items-center justify-center text-stark-white opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <span className="text-xl tracking-widest uppercase border border-white px-8 py-4">Explore</span>
            </div>
          </div>
          <div>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6">Syntax<br/>Errors</h3>
            <p className="text-xl mb-8 opacity-70">By Elena Rostova</p>
            <p className="text-lg mb-12 max-w-md">An exploration of glitch aesthetics and computational failure as a medium for spontaneous beauty.</p>
            <Link href="/exhibitions" className="text-sm font-bold uppercase tracking-widest border-b-2 border-stark-black pb-1 hover:text-lilac hover:border-lilac transition-colors">
              View Exhibition
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The Digital Medium */}
      <section className="px-6 md:px-12 py-24 bg-stark-black text-stark-white">
        <div className="max-w-5xl mx-auto text-center">
          <TextReveal 
            text="Code is not merely a tool; it is the brush, the paint, and the canvas. We elevate the algorithm to the status of masterpiece."
            className="text-4xl md:text-7xl font-bold tracking-tighter mb-16"
          />
          <Link href="/collections" className="inline-block px-12 py-6 bg-stark-white text-stark-black text-sm font-bold uppercase tracking-widest hover:bg-peach transition-colors duration-300">
            Browse Collections
          </Link>
        </div>
      </section>

      {/* 5. Visitor Experience */}
      <section className="min-h-screen px-6 md:px-12 py-24 flex flex-col justify-center">
        <div className="grid md:grid-cols-3 gap-12 border-t-2 border-stark-black pt-12">
          <div>
            <h4 className="text-3xl font-bold tracking-tighter uppercase mb-4">Immersive</h4>
            <p className="text-lg opacity-80">Our galleries are reactive. Every step you take alters the generative displays surrounding you.</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold tracking-tighter uppercase mb-4">Timeless</h4>
            <p className="text-lg opacity-80">While technology ages, the concepts remain. We preserve digital art for future generations.</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold tracking-tighter uppercase mb-4">Accessible</h4>
            <p className="text-lg opacity-80">Experience the museum both physically in our stark galleries, and digitally from anywhere.</p>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-stark-black/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-4xl font-black tracking-tighter uppercase">Kinetix</div>
          <div className="flex gap-8 text-sm font-medium tracking-widest uppercase">
            <Link href="#" className="hover:text-peach transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-lilac transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-peach transition-colors">Discord</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
