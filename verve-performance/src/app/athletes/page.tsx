"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ATHLETES = [
  {
    name: "Marcus Thorne",
    sport: "Ultramarathon / Trail",
    quote: "When you're 80 miles in, your gear cannot be a distraction. Verve becomes invisible, allowing pure focus.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    sport: "Track & Field / Sprint",
    quote: "Explosive power requires zero restriction. The Kinetic Response line moves faster than I do.",
    image: "https://images.unsplash.com/photo-1552674605-171d31fea3fa?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    sport: "CrossFit / Functional Fitness",
    quote: "I destroy clothes for a living. Verve is the first brand that withstands the friction and the sweat.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    sport: "Alpinism / Mixed Climbing",
    quote: "Temperature regulation is a matter of survival up there. The Thermal Shield adapts dynamically to my output.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2003&auto=format&fit=crop"
  },
  {
    name: "Kofi Mensah",
    sport: "Pro Basketball / Guard",
    quote: "Lateral agility demands structural support. Verve Compression mapping keeps my joints locked in during explosive cuts.",
    image: "https://images.unsplash.com/photo-1519861531473-920026076448?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Nina Vance",
    sport: "Triathlon / Ironman",
    quote: "Transitioning through three disciplines requires gear that dries instantly and never chafes. Verve delivers on both.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function AthletesPage() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className="w-full bg-verve-dark text-verve-light pt-32 pb-24 min-h-screen">
      <div className="container mx-auto max-w-7xl px-6 mb-24">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
          The <span className="text-verve-orange">Vanguard</span>
        </h1>
        <p className="text-xl md:text-2xl text-verve-light/70 max-w-3xl">
          Elite competitors pushing the boundaries of human performance. They demand perfection from themselves, and from their equipment.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ATHLETES.map((athlete, idx) => (
          <div 
            key={idx} 
            ref={el => { cardsRef.current[idx] = el; }}
            className="group relative h-[600px] overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={athlete.image} 
              alt={athlete.name}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-verve-dark via-verve-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-verve-orange font-bold uppercase tracking-widest text-sm mb-2">
                {athlete.sport}
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 group-hover:text-verve-orange transition-colors">
                {athlete.name}
              </h2>
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                <p className="text-verve-light/90 italic border-l-2 border-verve-orange pl-4 mb-4">
                  &quot;{athlete.quote}&quot;
                </p>
                <button className="text-sm font-bold uppercase tracking-widest hover:text-verve-orange transition-colors flex items-center gap-2">
                  View Profile <span className="text-verve-orange">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
