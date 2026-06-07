"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/ui/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const TECHNOLOGIES = [
  {
    title: "AeroWeave 3D",
    subtitle: "Micro-Climate Control",
    desc: "A proprietary knit structure that creates micro-pockets of air between the fabric and skin, optimizing thermoregulation regardless of external conditions.",
    image: "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Verve-Core Compression",
    subtitle: "Targeted Muscle Support",
    desc: "Gradient compression mapping mathematically calculated to accelerate venous return, reducing blood lactate buildup and delaying fatigue.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Omni-Stretch Matrix",
    subtitle: "Zero-Restriction Movement",
    desc: "A high-elastane blend woven in a multi-directional matrix, allowing for 360-degree mechanical stretch that instantly recovers its shape.",
    image: "https://images.unsplash.com/photo-1618213601556-91e813f63969?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Plasma-Shield",
    subtitle: "Element Defiance",
    desc: "A plasma-deposited nanocoating that permanently repels water, mud, and oil without compromising the fabric's innate breathability.",
    image: "https://images.unsplash.com/photo-1584863431184-25e24a520e5c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "ION-Silver Antimicrobial",
    subtitle: "Permanent Odor Control",
    desc: "Silver ions molecularly bonded to the yarn structure, aggressively neutralizing odor-causing bacteria before they can multiply.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Sonic-Weld Construction",
    subtitle: "Frictionless Assembly",
    desc: "Eliminating traditional stitching entirely. Garments are fused together using high-frequency ultrasonic waves, resulting in a flat, indestructible seam.",
    image: "https://images.unsplash.com/photo-1605234125869-798ba58efcb5?q=80&w=2071&auto=format&fit=crop"
  }
];

export default function TechnologyPage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const textContent = section.querySelector('.text-content');
        const imageContent = section.querySelector('.image-content');
        
        gsap.fromTo(
          textContent,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
            }
          }
        );

        gsap.fromTo(
          imageContent,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className="w-full bg-verve-dark text-verve-light pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 mb-32">
        <TextReveal 
          text="INNOVATION IS OUR BASELINE. WE DON'T ACCEPT THE LIMITS OF TRADITIONAL MANUFACTURING." 
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
        />
      </div>

      <div className="flex flex-col gap-32">
        {TECHNOLOGIES.map((tech, idx) => (
          <section 
            key={idx} 
            ref={el => { sectionsRef.current[idx] = el; }}
            className={`container mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2 text-content">
              <span className="text-verve-orange font-bold tracking-widest uppercase mb-4 block">
                0{idx + 1} {"//"} {tech.subtitle}
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                {tech.title}
              </h2>
              <p className="text-xl text-verve-light/70 leading-relaxed">
                {tech.desc}
              </p>
            </div>
            
            <div className="w-full md:w-1/2 aspect-[4/3] image-content overflow-hidden relative">
              <div className="absolute inset-0 bg-verve-orange/10 z-10 mix-blend-overlay"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={tech.image} 
                alt={tech.title}
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
            </div>
          </section>
        ))}
      </div>
      
      <div className="mt-32 text-center py-24 bg-verve-gray border-t border-verve-dark">
        <h3 className="text-4xl font-black uppercase tracking-tighter mb-8">Experience The Difference</h3>
        <button className="bg-verve-orange text-verve-light px-10 py-5 font-bold uppercase tracking-widest hover:bg-verve-red transition-colors">
          Shop Tech Collection
        </button>
      </div>
    </div>
  );
}
