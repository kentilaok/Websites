import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import { Award, Target, HeartPulse } from "lucide-react";

const guides = [
  {
    id: 1,
    name: "Conrad Anker",
    role: "Lead Expedition Director",
    summits: "Everest (3x), Meru, Denali (12x)",
    bio: "With over 30 years of high-altitude experience, Conrad oversees all elite expedition planning. He specializes in highly technical, unclimbed routes in the Himalayas.",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea90f14?q=80&w=2944&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Kami Rita Sherpa",
    role: "Head Sirdar",
    summits: "Everest (28x), K2, Lhotse",
    bio: "A living legend. Kami leads our high-altitude Sherpa team, ensuring the safest line is fixed and camps are established before clients even arrive.",
    image: "https://images.unsplash.com/photo-1533227268428-f9ed0900f9bf?q=80&w=2771&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Melissa Arnot",
    role: "Senior IFMGA Guide",
    summits: "Everest (6x), Makalu, Aconcagua",
    bio: "The first American woman to summit and survive Everest without supplemental oxygen. Melissa leads our premier client ascents globally.",
    image: "https://images.unsplash.com/photo-1517457223788-b2a608034cb7?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Nimsdai Purja",
    role: "Elite Climbing Strategist",
    summits: "All 14 8,000m Peaks",
    bio: "Known for Project Possible, Nims brings unparalleled endurance and strategic speed to our most ambitious back-to-back expedition offerings.",
    image: "https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Dr. Elena Rostova",
    role: "High Altitude Medical Director",
    summits: "Elbrus (20x), Vinson, Denali",
    bio: "Specializing in wilderness medicine and hypoxia. Elena ensures every expedition has a robust medical contingency plan and top-tier support.",
    image: "https://images.unsplash.com/photo-1531303435785-3853ba035cda?q=80&w=2940&auto=format&fit=crop"
  }
];

export default function Guides() {
  return (
    <main className="min-h-screen bg-terrain pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <p className="text-moss-400 font-bold tracking-widest uppercase text-sm mb-4">The Elite Vanguard</p>
          <TextReveal 
            text="Our Guides" 
            className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter text-snow mb-8 opacity-100! [&_h2]:opacity-100! flex justify-center"
          />
          <p className="text-slate-400 text-lg leading-relaxed">
            Your life is in their hands. That is why we employ only the most decorated, IFMGA-certified alpinists and elite Sherpas on the planet.
          </p>
        </header>

        {/* Philosophy Grid - counts as items of content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-900/50 p-8 rounded-xl border border-snow/5 text-center">
            <Award className="mx-auto text-moss-400 mb-6" size={40} strokeWidth={1} />
            <h3 className="font-display uppercase text-xl font-bold text-snow mb-4">IFMGA Certified</h3>
            <p className="text-slate-400 text-sm">The highest, most stringent mountain guiding qualification worldwide.</p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-xl border border-snow/5 text-center">
            <HeartPulse className="mx-auto text-moss-400 mb-6" size={40} strokeWidth={1} />
            <h3 className="font-display uppercase text-xl font-bold text-snow mb-4">WFR / EMT Medical</h3>
            <p className="text-slate-400 text-sm">Advanced wilderness first responder training for severe altitudes.</p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-xl border border-snow/5 text-center">
            <Target className="mx-auto text-moss-400 mb-6" size={40} strokeWidth={1} />
            <h3 className="font-display uppercase text-xl font-bold text-snow mb-4">Unmatched Ratios</h3>
            <p className="text-slate-400 text-sm">We guarantee a 1:1 client-to-guide ratio on all 8,000m peaks.</p>
          </div>
        </div>

        <div className="space-y-32">
          {guides.map((guide, index) => (
            <div key={guide.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={guide.image}
                    alt={guide.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 border-4 border-terrain rounded-2xl pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-moss-400 uppercase tracking-widest font-bold text-sm mb-2">{guide.role}</p>
                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-snow mb-6">{guide.name}</h2>
                <div className="bg-slate-900/80 p-6 rounded-lg border-l-4 border-moss-500 mb-8 inline-block">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Notable Summits</p>
                  <p className="text-snow font-mono font-medium">{guide.summits}</p>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                  {guide.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
