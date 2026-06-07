import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="h-screen flex items-center relative overflow-hidden">
        {/* Massive glowing planet edge */}
        <div className="absolute -bottom-[60vh] left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] rounded-full border-[1px] border-na-nebula/30 shadow-[0_0_150px_rgba(77,77,255,0.2)] bg-gradient-to-b from-na-void via-na-void to-[#050510] -z-10" />

        <div className="container text-center max-w-4xl">
          <TextReveal>
            <div className="font-mono text-xs text-na-atmosphere mb-8 tracking-[0.4em] uppercase">
              // ORBITAL ALTITUDE: 408 KM // STATUS: NOMINAL
            </div>
          </TextReveal>
          
          <TextReveal delay={0.1}>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
              BEYOND THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-na-nebula">KARMAN LINE.</span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="text-lg md:text-xl text-na-stardust/70 font-inter mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Nova Aerospace is the premier provider of commercial suborbital and orbital spaceflight. Experience the profound silence of the cosmos.
            </p>
          </TextReveal>

          <TextReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/vessel" className="group relative px-8 py-4 font-orbitron tracking-widest text-sm uppercase overflow-hidden border border-na-atmosphere text-na-atmosphere hover:text-na-void transition-colors duration-500">
                <span className="absolute inset-0 bg-na-atmosphere translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />
                EXPLORE THE VESSEL
              </Link>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 border-y border-white/5 bg-na-void/50 backdrop-blur-md relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
             <TextReveal>
               <div className="text-center">
                 <div className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-2">12</div>
                 <div className="text-na-nebula font-mono text-xs tracking-widest uppercase">SUCCESSFUL LAUNCHES</div>
               </div>
             </TextReveal>
             <TextReveal delay={0.1}>
               <div className="text-center">
                 <div className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-2">3.2G</div>
                 <div className="text-na-nebula font-mono text-xs tracking-widest uppercase">MAX ACCELERATION</div>
               </div>
             </TextReveal>
             <TextReveal delay={0.2}>
               <div className="text-center">
                 <div className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-2">90M</div>
                 <div className="text-na-nebula font-mono text-xs tracking-widest uppercase">MINUTES IN MICROGRAVITY</div>
               </div>
             </TextReveal>
             <TextReveal delay={0.3}>
               <div className="text-center">
                 <div className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-2">400k</div>
                 <div className="text-na-nebula font-mono text-xs tracking-widest uppercase">APOGEE (FEET)</div>
               </div>
             </TextReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
