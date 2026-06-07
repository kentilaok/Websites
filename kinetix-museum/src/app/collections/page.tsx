'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/ui/TextReveal';

const collections = [
  {
    id: 'c1',
    title: 'Generative Core',
    items: '42 Artworks',
    description: 'The foundational pieces of our museum. Algorithms that set the standard for computational aesthetics from 1990 to present day.',
    theme: 'bg-stark-black text-stark-white',
  },
  {
    id: 'c2',
    title: 'Glitch Archives',
    items: '128 Artworks',
    description: 'A curated selection of intentional and accidental digital artifacts. Celebrating the unexpected beauty of machine failure.',
    theme: 'bg-lilac text-stark-black',
  },
  {
    id: 'c3',
    title: 'Kinetic Data',
    items: '15 Installations',
    description: 'Artworks driven by real-world, real-time data streams. From stock market fluctuations to global wind patterns.',
    theme: 'bg-peach text-stark-black',
  },
  {
    id: 'c4',
    title: 'Neural Networks',
    items: '64 Artworks',
    description: 'The output of early and modern AI models, trained on classical art to produce entirely new, synthesized movements.',
    theme: 'bg-stark-white text-stark-black border-2 border-stark-black',
  },
  {
    id: 'c5',
    title: 'Virtual Spaces',
    items: '8 Experiences',
    description: 'Fully immersive VR environments exploring impossible geometry and non-euclidean architecture.',
    theme: 'bg-stark-black text-stark-white',
  }
];

export default function Collections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray('.collection-card');
    cards.forEach((card: any) => {
      gsap.fromTo(card,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <main className="min-h-screen pt-32 px-6 md:px-12 pb-24 bg-stark-black text-stark-white">
      <div className="mb-24">
        <h1 className="text-[10vw] leading-none font-black tracking-tighter uppercase mb-8">Permanent<br/>Collection</h1>
        <TextReveal 
          text="A vast repository of digital heritage. Preserving the ephemeral code that defined a generation." 
          className="text-2xl md:text-4xl max-w-4xl font-medium"
        />
      </div>

      <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div 
            key={collection.id} 
            className={`collection-card p-12 min-h-[400px] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-4 ${collection.theme}`}
          >
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-8 opacity-70">
                {collection.items}
              </p>
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-6 leading-none">
                {collection.title}
              </h2>
            </div>
            
            <div>
              <p className="text-lg opacity-90 mb-8 font-medium">
                {collection.description}
              </p>
              <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-current pb-1 hover:opacity-50 transition-opacity">
                Explore Vault
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
