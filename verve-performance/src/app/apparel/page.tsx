"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GARMENTS = [
  {
    id: "v-100",
    name: "Apex Compression Tight",
    price: "$120",
    desc: "Gradient compression mapping accelerates blood flow and reduces muscle vibration during high-intensity output.",
    specs: ["Warp-knit stretch", "Micro-perforated zones", "Anti-odor tech"],
    image: "https://images.unsplash.com/photo-1512413914809-f9ac7a0d4b8e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "v-200",
    name: "Aero-Mesh Core Singlet",
    price: "$65",
    desc: "Ultralight tank engineered with 3D-mesh structure to maximize airflow and pull moisture away from the skin instantly.",
    specs: ["Featherweight 75gsm", "Welded seams", "Reflective hits"],
    image: "https://images.unsplash.com/photo-1583526362016-c3137c71cc3a?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "v-300",
    name: "Kinetic Response Short",
    price: "$85",
    desc: "Built for explosive lateral movement. Features a four-way stretch woven exterior and a built-in compression liner.",
    specs: ["DWR finish", "Laser-cut venting", "Secure zip pockets"],
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "v-400",
    name: "Thermal Shield Hybrid Jacket",
    price: "$195",
    desc: "Targeted insulation meets high-stretch panels. Designed to maintain core temp during cold weather conditioning.",
    specs: ["Primaloft Eco", "Wind-blocking chest", "Articulated sleeves"],
    image: "https://images.unsplash.com/photo-1556820503-c973f968588f?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "v-500",
    name: "Velocity Seamless Long Sleeve",
    price: "$95",
    desc: "Engineered without seams to eliminate chafing. Features body-mapped knit structures for breathability where you run hottest.",
    specs: ["Chafe-free construction", "Slim athletic fit", "Quick-dry yarn"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: "v-600",
    name: "Carbon Plate Trainer",
    price: "$250",
    desc: "Propulsive energy return via a full-length carbon infused plate. Maximum stack height for ultimate impact absorption.",
    specs: ["Super-critical foam", "Engineered mesh upper", "High-traction rubber"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ApparelPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }

    itemsRef.current.forEach((item) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-verve-dark pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div ref={headerRef} className="mb-24">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
            The <span className="text-verve-orange text-stroke hover:text-verve-orange hover:-webkit-text-stroke-verve-orange transition-colors">Armory</span>
          </h1>
          <p className="text-xl md:text-2xl text-verve-light/70 max-w-3xl">
            Precision-engineered equipment for the relentless. Every thread, seam, and fabric choice is optimized for elite performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GARMENTS.map((garment, idx) => (
            <div 
              key={garment.id} 
              ref={el => { itemsRef.current[idx] = el; }}
              className="group flex flex-col bg-verve-gray border border-verve-light/10 hover:border-verve-orange/50 transition-colors duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-verve-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={garment.image} 
                  alt={garment.name}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 bg-verve-dark text-verve-light text-xs font-bold px-3 py-1 uppercase tracking-widest">
                  {garment.id}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-none">{garment.name}</h3>
                  <span className="text-verve-orange font-bold text-xl">{garment.price}</span>
                </div>
                
                <p className="text-verve-light/70 mb-6 flex-grow">
                  {garment.desc}
                </p>
                
                <ul className="mb-8 space-y-2">
                  {garment.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-verve-light/50 flex items-center gap-2 uppercase tracking-wider font-semibold">
                      <span className="w-1.5 h-1.5 bg-verve-orange rounded-full"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-verve-light text-verve-dark py-4 font-bold uppercase tracking-widest hover:bg-verve-orange hover:text-verve-light transition-colors mt-auto">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
