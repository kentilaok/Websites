import TextReveal from "@/components/ui/TextReveal";

const destinations = [
  {
    title: "SUBORBITAL APEX",
    tagline: "THE EDGE OF SPACE",
    alt: "100 KM",
    desc: "Cross the Karman line. Experience 5 minutes of true weightlessness and observe the curvature of the Earth against the absolute blackness of space.",
    duration: "2.5 HOURS",
    cta: "REQUEST ITINERARY"
  },
  {
    title: "LOW EARTH ORBIT",
    tagline: "ORBITAL HABITAT",
    alt: "400 KM",
    desc: "A multi-day expedition orbiting the planet every 90 minutes. Witness 16 sunrises and sunsets per day from our orbital habitat module.",
    duration: "3 DAYS",
    cta: "VIEW HABITAT"
  },
  {
    title: "LUNAR FLYBY",
    tagline: "THE FAR SIDE",
    alt: "384,400 KM",
    desc: "A historic trajectory around the far side of the moon. Only two dozen humans have ever witnessed this view. Join their ranks.",
    duration: "6 DAYS",
    cta: "APPLY FOR MANIFEST"
  },
  {
    title: "SPACE STATION DOCKING",
    tagline: "RESEARCH OUTPOST",
    alt: "420 KM",
    desc: "Dock with the Vanguard Commercial Station. Spend a week conducting microgravity research or simply enjoying the ultimate luxury retreat in orbit.",
    duration: "7 DAYS",
    cta: "EXPLORE STATION"
  },
  {
    title: "LUNAR ORBITAL EXPEDITION",
    tagline: "EXTENDED LUNAR MISSION",
    alt: "384,400 KM",
    desc: "Enter orbit around the Moon for 48 hours. Map the craters of the lunar surface from just 100km above before executing the trans-Earth injection burn.",
    duration: "10 DAYS",
    cta: "JOIN WAITLIST"
  }
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="container">
        <TextReveal>
          <h1 className="text-5xl md:text-7xl font-bold mb-24">FLIGHT <span className="text-na-nebula">PROFILES</span></h1>
        </TextReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <TextReveal key={i} delay={i * 0.1}>
              <div className="border border-white/10 p-8 hover:bg-white/5 hover:border-na-atmosphere transition-all duration-500 group h-full flex flex-col">
                 <div className="flex justify-between items-center mb-4">
                   <div className="font-mono text-na-atmosphere text-xs tracking-widest">ALTITUDE // {dest.alt}</div>
                   <div className="font-mono text-white/40 text-[10px] tracking-widest uppercase">{dest.tagline}</div>
                 </div>
                 <h2 className="text-2xl font-bold mb-6 group-hover:text-na-atmosphere transition-colors">{dest.title}</h2>
                 <p className="text-na-stardust/60 font-light leading-relaxed mb-12 flex-grow">
                   {dest.desc}
                 </p>
                 <div className="border-t border-white/10 pt-6 flex flex-col gap-6 mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs text-na-stardust/40">DURATION</span>
                      <span className="font-orbitron font-bold text-sm tracking-widest">{dest.duration}</span>
                    </div>
                    <button className="w-full py-3 border border-na-atmosphere/50 text-na-atmosphere font-orbitron text-xs tracking-widest hover:bg-na-atmosphere hover:text-na-void transition-colors">
                      {dest.cta}
                    </button>
                 </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
