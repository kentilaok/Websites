'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/ui/TextReveal';

const exhibitions = [
  {
    id: 1,
    title: 'Syntax Errors',
    artist: 'Elena Rostova',
    date: 'Oct 12 - Dec 30, 2026',
    description: 'An exploration of glitch aesthetics and computational failure as a medium for spontaneous beauty. Rostova intentionally corrupts rendering engines to produce mesmerizing, unpredictable visuals.',
    status: 'Current',
    color: 'hover:bg-peach',
  },
  {
    id: 2,
    title: 'Neural Topographies',
    artist: 'Marcus Chen',
    date: 'Nov 05 - Jan 15, 2027',
    description: 'Using Generative Adversarial Networks (GANs) trained on satellite imagery, Chen creates impossible landscapes that blur the line between natural geography and machine hallucination.',
    status: 'Current',
    color: 'hover:bg-lilac',
  },
  {
    id: 3,
    title: 'Quantum Entanglements',
    artist: 'Studio XOR',
    date: 'Dec 01 - Feb 28, 2027',
    description: 'A physical installation where user movement is tracked and mapped to quantum state simulators, visually representing the observer effect in real-time.',
    status: 'Upcoming',
    color: 'hover:bg-peach',
  },
  {
    id: 4,
    title: 'Data Decay',
    artist: 'Sarah Jenkins',
    date: 'Jan 10 - Mar 20, 2027',
    description: 'Visualizing the impermanence of digital storage. Jenkins takes iconic digital artworks and subjects them to simulated bit rot over the course of the exhibition.',
    status: 'Upcoming',
    color: 'hover:bg-lilac',
  },
  {
    id: 5,
    title: 'Algorithmic Flora',
    artist: 'Kenji Sato',
    date: 'Feb 15 - Apr 30, 2027',
    description: 'Generative botanical gardens that grow, mutate, and die based on live weather data and air quality indexes from major global cities.',
    status: 'Upcoming',
    color: 'hover:bg-peach',
  },
  {
    id: 6,
    title: 'Echo Chambers',
    artist: 'The Collective Noun',
    date: 'Mar 01 - May 15, 2027',
    description: 'An interactive audio-visual space that captures visitor conversations and distorts them using sentiment analysis algorithms, creating a feedback loop of emotion.',
    status: 'Upcoming',
    color: 'hover:bg-lilac',
  }
];

export default function Exhibitions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray('.exhibition-item');
    items.forEach((item: any) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 100 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <main className="min-h-screen pt-32 px-6 md:px-12 pb-24">
      <div className="mb-24">
        <h1 className="text-[12vw] leading-none font-black tracking-tighter uppercase mb-8">Exhibitions</h1>
        <TextReveal 
          text="Witness the frontier of generative design. Our curated exhibitions push the boundaries of what is possible when human creativity directs machine execution." 
          className="text-2xl md:text-4xl max-w-4xl font-medium"
        />
      </div>

      <div ref={containerRef} className="flex flex-col gap-0 border-t-2 border-stark-black">
        {exhibitions.map((exhibition) => (
          <div 
            key={exhibition.id} 
            className={`exhibition-item group border-b-2 border-stark-black py-12 md:py-24 transition-colors duration-500 ${exhibition.color}`}
          >
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] border border-stark-black px-4 py-2 rounded-full">
                  {exhibition.status}
                </span>
                <p className="mt-8 text-sm font-medium tracking-widest uppercase opacity-60">
                  {exhibition.date}
                </p>
              </div>
              
              <div className="md:col-span-6">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 group-hover:translate-x-4 transition-transform duration-500">
                  {exhibition.title}
                </h2>
                <p className="text-2xl font-bold mb-6 tracking-tight">{exhibition.artist}</p>
                <p className="text-lg max-w-xl opacity-80 leading-relaxed">
                  {exhibition.description}
                </p>
              </div>
              
              <div className="md:col-span-3 flex justify-start md:justify-end mt-8 md:mt-0">
                <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-stark-black pb-1 hover:border-transparent transition-colors">
                  Tickets & Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
