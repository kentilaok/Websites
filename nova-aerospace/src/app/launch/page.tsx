import TextReveal from "@/components/ui/TextReveal";

export default function LaunchPage() {
  return (
    <div className="min-h-screen pt-48 pb-32 flex flex-col items-center justify-center">
      <div className="container max-w-2xl text-center">
        <TextReveal>
          <div className="w-24 h-24 border border-na-atmosphere rounded-full flex items-center justify-center mx-auto mb-12">
            <div className="w-2 h-2 bg-na-atmosphere animate-ping rounded-full" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">INITIATE SEQUENCE</h1>
          <p className="text-na-stardust/60 font-light mb-16 leading-relaxed">
             Flight manifests for the 2026-2027 orbital windows are currently full. 
             We are accepting applications for the waitlist. Prospective astronauts must complete 
             a physical assessment and 3 days of centrifuge training prior to launch.
          </p>
        </TextReveal>

        <TextReveal delay={0.2}>
          <form className="space-y-6 text-left border border-white/10 p-8 bg-white/5 backdrop-blur-md">
            <div className="space-y-2">
              <label className="font-mono text-xs text-na-atmosphere tracking-widest uppercase block">CALLSIGN / NAME</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 p-4 text-white focus:border-na-atmosphere outline-none font-inter transition-colors" />
            </div>
            
            <div className="space-y-2">
              <label className="font-mono text-xs text-na-atmosphere tracking-widest uppercase block">SECURE COMM CHANNEL (EMAIL)</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 p-4 text-white focus:border-na-atmosphere outline-none font-inter transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-na-atmosphere tracking-widest uppercase block">FLIGHT PROFILE REQUESTED</label>
              <select className="w-full bg-transparent border-b border-white/20 p-4 text-white focus:border-na-atmosphere outline-none font-inter transition-colors appearance-none cursor-pointer [&>option]:bg-na-void">
                <option>SUBORBITAL APEX</option>
                <option>LOW EARTH ORBIT</option>
                <option>LUNAR FLYBY</option>
              </select>
            </div>

            <button type="button" className="w-full mt-8 bg-na-atmosphere/10 hover:bg-na-atmosphere text-na-atmosphere hover:text-na-void border border-na-atmosphere font-orbitron font-bold tracking-widest py-6 transition-all duration-300">
              REQUEST CLEARANCE
            </button>
          </form>
        </TextReveal>
      </div>
    </div>
  );
}
