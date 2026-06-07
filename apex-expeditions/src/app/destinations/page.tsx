import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

const expeditions = [
  {
    id: "everest",
    peak: "Mt. Everest",
    region: "Himalayas, Nepal",
    elevation: "8,848m / 29,029ft",
    duration: "60 Days",
    difficulty: "Extreme",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2940&auto=format&fit=crop",
    description: "The ultimate mountaineering achievement. Our guided ascent offers unparalleled logistics, highly experienced Sherpa support, and premium base camp facilities.",
  },
  {
    id: "k2",
    peak: "K2",
    region: "Karakoram, Pakistan",
    elevation: "8,611m / 28,251ft",
    duration: "65 Days",
    difficulty: "Apex",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2803&auto=format&fit=crop",
    description: "Known as the Savage Mountain. For elite climbers seeking the most demanding technical ascent on Earth. Requires significant previous 8,000m experience.",
  },
  {
    id: "denali",
    peak: "Denali",
    region: "Alaska, USA",
    elevation: "6,190m / 20,310ft",
    duration: "21 Days",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1547305988-fa0819717cb4?q=80&w=2942&auto=format&fit=crop",
    description: "A brutal test of cold-weather endurance and self-sufficiency. Ascend the highest peak in North America near the Arctic Circle.",
  },
  {
    id: "vinson",
    peak: "Mt. Vinson",
    region: "Ellsworth Mts, Antarctica",
    elevation: "4,892m / 16,050ft",
    duration: "16 Days",
    difficulty: "Intermediate/Advanced",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=2787&auto=format&fit=crop",
    description: "Experience the profound isolation of Antarctica. A highly logistically complex expedition in the most pristine environment imaginable.",
  },
  {
    id: "aconcagua",
    peak: "Aconcagua",
    region: "Andes, Argentina",
    elevation: "6,960m / 22,837ft",
    duration: "20 Days",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2988&auto=format&fit=crop",
    description: "The highest peak outside Asia. Known for extreme high-altitude winds and stunning Andean sunsets. Excellent preparation for 8,000m peaks.",
  },
  {
    id: "matterhorn",
    peak: "Matterhorn",
    region: "Alps, Switzerland",
    elevation: "4,478m / 14,692ft",
    duration: "7 Days",
    difficulty: "Technical",
    image: "https://images.unsplash.com/photo-1533215582319-35c9a41bd9f8?q=80&w=2940&auto=format&fit=crop",
    description: "The iconic alpine pyramid. Requires solid rock and ice climbing skills. An exhilarating classic alpine ascent on the Hornli Ridge.",
  }
];

export default function Destinations() {
  return (
    <main className="min-h-screen bg-terrain pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <p className="text-moss-400 font-bold tracking-widest uppercase text-sm mb-4">The Seven Summits & Beyond</p>
          <TextReveal 
            text="Global Expeditions" 
            className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter text-snow opacity-100! [&_h2]:opacity-100!"
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {expeditions.map((exp) => (
            <div key={exp.id} className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-snow/5 hover:border-moss-500/30 transition-colors">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.peak}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute top-4 left-4 bg-terrain/80 backdrop-blur-sm px-3 py-1 rounded text-xs uppercase tracking-widest text-moss-300 font-bold border border-snow/10">
                  {exp.difficulty}
                </div>
              </div>
              
              <div className="p-8 relative z-10 -mt-12">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="font-display text-4xl font-bold uppercase text-snow tracking-tight">{exp.peak}</h3>
                    <p className="text-slate-400 flex items-center gap-1 text-sm mt-2">
                      <MapPin size={14} /> {exp.region}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 my-6 border-y border-snow/10 py-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Elevation</p>
                    <p className="text-snow font-mono">{exp.elevation}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Duration</p>
                    <p className="text-snow font-mono">{exp.duration}</p>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {exp.description}
                </p>
                
                <Link href={`/booking?expedition=${exp.id}`} className="inline-flex items-center gap-2 text-moss-400 hover:text-moss-300 uppercase tracking-widest text-sm font-bold transition-colors group/link">
                  Request Itinerary <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
