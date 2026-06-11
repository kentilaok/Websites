"use client";

import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-end p-6 md:p-20 pb-20 md:pb-32 bg-[#0a0a0a] text-white">
        <TextReveal
          as="h1"
          text="SHAPING"
          className="text-7xl md:text-[12vw] font-serif leading-none tracking-tight opacity-90"
        />
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-4 md:mt-0">
          <TextReveal
            as="h1"
            text="THE VOID"
            className="text-7xl md:text-[12vw] font-serif leading-none tracking-tight text-[var(--color-accent)]"
          />
          <div className="max-w-md mt-10 md:mt-0 mb-4 md:mb-8 md:text-right">
            <TextReveal
              text="Lumina Architectonics redefines spatial experience through minimalism, pure geometry, and the sculptural use of natural light."
              className="text-lg md:text-xl font-light text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-20 bg-background text-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal
            as="h2"
            text="Architecture is not just about space; it is about the emotion that space evokes."
            className="text-4xl md:text-6xl font-serif font-light leading-snug"
          />
          <Link href="/philosophy" className="inline-flex items-center gap-2 mt-16 text-sm tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors">
            Our Philosophy <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Selected Works Preview */}
      <section className="py-32 px-6 md:px-20 bg-background">
        <div className="flex justify-between items-end mb-20">
          <TextReveal as="h2" text="Selected Works" className="text-5xl font-serif" />
          <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Project 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 grayscale opacity-80 group-hover:opacity-100"></div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-serif mb-2">The Monolith</h3>
                <p className="text-muted-foreground text-sm tracking-wide">Kyoto, Japan</p>
              </div>
              <span className="text-xs tracking-widest uppercase border border-border px-3 py-1 rounded-full">2025</span>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="group cursor-pointer md:mt-32">
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 grayscale opacity-80 group-hover:opacity-100"></div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-serif mb-2">Aether Pavilion</h3>
                <p className="text-muted-foreground text-sm tracking-wide">Oslo, Norway</p>
              </div>
              <span className="text-xs tracking-widest uppercase border border-border px-3 py-1 rounded-full">2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-20 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-serif mb-6 text-[var(--color-accent)]">Lumina</h2>
            <p className="text-gray-400 max-w-sm font-light leading-relaxed">
              Crafting timeless spaces through light, material, and profound silence.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-gray-500">Contact</h4>
            <ul className="space-y-3 font-light text-gray-300">
              <li>info@lumina.arch</li>
              <li>+1 (555) 123-4567</li>
              <li>100 Minimalist Ave.</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-gray-500">Social</h4>
            <ul className="space-y-3 font-light text-gray-300">
              <li><Link href="#" className="hover:text-[var(--color-accent)] transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-accent)] transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-accent)] transition-colors">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-widest uppercase gap-4">
          <p>&copy; {new Date().getFullYear()} Lumina Architectonics</p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}
