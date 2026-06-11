import TextReveal from "@/components/ui/TextReveal";

const features = [
  {
    tagline: "STRUCTURAL INTEGRITY",
    title: "CARBON-TITANIUM HULL",
    desc: "A seamless monocoque chassis capable of withstanding extreme thermal loads during atmospheric reentry while maintaining a pressurized, climate-controlled cabin.",
    cta: "VIEW MATERIAL SPECS"
  },
  {
    tagline: "OBSERVATION",
    title: "PANORAMIC VIEWPORTS",
    desc: "Twelve 36-inch continuous viewports constructed from aerospace-grade fused silica, offering unobstructed 360-degree views of the Earth and deep space.",
    cta: "EXPLORE CABIN"
  },
  {
    tagline: "PASSENGER COMFORT",
    title: "ARTICULATING SEATS",
    desc: "Custom-molded acceleration couches that actively pivot to distribute G-forces during launch and reentry, ensuring a comfortable experience for civilians.",
    cta: "LEARN MORE"
  },
  {
    tagline: "LIFE SUPPORT",
    title: "CLOSED-LOOP ECLSS",
    desc: "State-of-the-art Environmental Control and Life Support System that recycles 98% of cabin air and moisture, ensuring absolute safety during extended orbital missions.",
    cta: "SYSTEM DETAILS"
  },
  {
    tagline: "PROPULSION",
    title: "PLASMA THRUSTERS",
    desc: "Next-generation ion propulsion allows for precise orbital maneuvering and docking without the use of toxic hypergolic chemical propellants.",
    cta: "VIEW ENGINE SPECS"
  }
];

export default function VesselPage() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="container">
        <TextReveal>
           <h1 className="text-5xl md:text-7xl font-bold mb-8">THE <span className="text-na-nebula">VESSEL</span></h1>
           <p className="text-xl text-na-stardust/70 max-w-3xl mb-24 leading-relaxed font-light">
             The Astra-V spacecraft represents a paradigm shift in commercial aerospace engineering. Fully reusable, autonomously piloted, and designed for maximum passenger comfort.
           </p>
        </TextReveal>

        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-16">
            {features.map((feature, i) => (
              <TextReveal key={i} delay={i * 0.1}>
                <div className="pl-6 border-l border-na-atmosphere flex flex-col group">
                  <span className="font-mono text-[10px] text-na-atmosphere/50 tracking-widest mb-2 uppercase">{feature.tagline}</span>
                  <h3 className="font-orbitron text-xl text-white mb-4 tracking-widest group-hover:text-na-atmosphere transition-colors">{feature.title}</h3>
                  <p className="text-na-stardust/60 leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  <div className="flex justify-start">
                    <button className="text-xs font-orbitron tracking-widest text-na-atmosphere border border-na-atmosphere/30 px-6 py-2 hover:bg-na-atmosphere hover:text-na-void transition-all">
                      {feature.cta}
                    </button>
                  </div>
                </div>
              </TextReveal>
            ))}
          </div>

          <div className="relative aspect-[3/4] border border-white/10 flex items-center justify-center p-8 bg-na-void/50 backdrop-blur-sm">
            {/* Abstract Wireframe Representation of a Ship */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <TextReveal delay={0.4}>
              <div className="w-full h-full border border-na-nebula flex items-center justify-center relative">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-na-void px-4 font-mono text-xs text-na-atmosphere">ASTRA-V SCHEMATIC</div>
                 <div className="w-1/2 h-[80%] rounded-[100px] border border-na-atmosphere/50 flex flex-col justify-between items-center py-8">
                    <div className="w-12 h-12 rounded-full border border-na-atmosphere/30" />
                    <div className="w-8 h-24 border border-na-atmosphere/30" />
                 </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
