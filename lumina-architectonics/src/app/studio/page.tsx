"use client";

import TextReveal from "@/components/ui/TextReveal";

export default function Studio() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-40 pb-32 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <TextReveal as="h1" text="THE STUDIO" className="text-6xl md:text-[10vw] font-serif leading-none tracking-tight mb-20 md:mb-32" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 md:mb-48">
          <div className="relative aspect-[4/5] bg-zinc-100 grayscale overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-90 hover:scale-105 transition-transform duration-1000"></div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-10">A laboratory for spatial experimentation.</h2>
            <p className="text-lg font-light leading-relaxed text-gray-600 mb-8">
              Founded in 2010 by Elias Vance, Lumina Architectonics operates at the intersection of art, engineering, and environmental psychology. Our studio is composed of architects, designers, and researchers dedicated to pushing the boundaries of spatial experience.
            </p>
            <p className="text-lg font-light leading-relaxed text-gray-600">
              We work collaboratively, engaging in rigorous research and iterative design processes. From small-scale pavilions to massive urban interventions, our approach remains consistently focused on the human experience of space.
            </p>
          </div>
        </div>
        
        <div className="mb-32 md:mb-48">
          <TextReveal as="h2" text="LEADERSHIP" className="text-sm tracking-widest uppercase mb-16 text-[var(--color-accent)]" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Person 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-zinc-200 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"></div>
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-[var(--color-accent)] transition-colors">Elias Vance</h3>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Founder & Principal</p>
            </div>
            {/* Person 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-zinc-200 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"></div>
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-[var(--color-accent)] transition-colors">Elena Rostova</h3>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Design Director</p>
            </div>
            {/* Person 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-zinc-200 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"></div>
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-[var(--color-accent)] transition-colors">Marcus Chen</h3>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Technical Director</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-20">
          <TextReveal as="h2" text="CAREERS" className="text-sm tracking-widest uppercase mb-10 text-[var(--color-accent)]" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <h3 className="text-3xl font-serif">Join our collective of spatial thinkers.</h3>
            <button className="px-8 py-4 border border-border text-xs tracking-widest uppercase hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300">
              View Openings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
