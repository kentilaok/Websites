import { TextReveal } from "@/components/ui/TextReveal";

export default function FleetPage() {
  const fleetData = [
    { class: "Leviathan Class", type: "Maritime Cargo", status: "Active (142)", capacity: "24,000 TEU", imgColor: "bg-blue-900/40" },
    { class: "Stratosphere", type: "Air Freight", status: "Active (85)", capacity: "140 Tons", imgColor: "bg-sky-900/40" },
    { class: "Behemoth", type: "Rail Transport", status: "Active (312)", capacity: "400 Freight Cars", imgColor: "bg-orange-900/40" },
    { class: "Goliath", type: "Heavy Road Transport", status: "Active (4,200)", capacity: "36 Tons", imgColor: "bg-slate-800" },
    { class: "Hermes Drone", type: "Last Mile Air", status: "Testing (1,500)", capacity: "25 kg", imgColor: "bg-teal-900/40" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      <section className="mt-12">
        <h1 className="text-6xl font-mono font-bold uppercase mb-6"><TextReveal text="Global Fleet Array" /></h1>
        <p className="text-xl text-hyperion-muted font-mono max-w-3xl">
          Multi-modal transport network managed by centralized AI routing. Unmatched capacity across sea, air, and land.
        </p>
      </section>

      <section className="space-y-8">
        {fleetData.map((vessel, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 border border-hyperion-border bg-hyperion-card p-6 hover:border-hyperion-neon-orange transition-colors group cursor-default">
            <div className={`w-full md:w-72 h-48 ${vessel.imgColor} rounded-sm relative overflow-hidden flex items-center justify-center border border-hyperion-border`}>
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20" />
               <span className="font-mono text-hyperion-muted uppercase text-xs tracking-widest relative z-10 group-hover:text-hyperion-neon-blue transition-colors">Schematic Unavailable</span>
               <div className="absolute inset-0 bg-gradient-to-t from-hyperion-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               
               {/* Scanner effect */}
               <div className="absolute top-0 left-0 w-full h-0.5 bg-hyperion-neon-blue shadow-[0_0_8px_var(--color-hyperion-neon-blue)] opacity-0 group-hover:opacity-100 animate-[scan_2s_ease-in-out_infinite]" />
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-4 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-mono font-bold text-hyperion-neon-blue uppercase">{vessel.class}</h2>
                  <p className="font-mono text-hyperion-text uppercase tracking-widest">{vessel.type}</p>
                </div>
                <div className="px-3 py-1 bg-hyperion-neon-blue/10 border border-hyperion-neon-blue text-hyperion-neon-blue font-mono text-sm uppercase">
                  {vessel.status}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-hyperion-border pt-4">
                <div>
                  <span className="block text-xs font-mono text-hyperion-muted uppercase">Max Capacity</span>
                  <span className="font-mono text-hyperion-text">{vessel.capacity}</span>
                </div>
                <div>
                  <span className="block text-xs font-mono text-hyperion-muted uppercase">Powerplant</span>
                  <span className="font-mono text-hyperion-text">Fusion Cell</span>
                </div>
                <div>
                  <span className="block text-xs font-mono text-hyperion-muted uppercase">Crew</span>
                  <span className="font-mono text-hyperion-text">Autonomous</span>
                </div>
                <div>
                  <span className="block text-xs font-mono text-hyperion-muted uppercase">Maintenance</span>
                  <span className="font-mono text-hyperion-neon-blue">Optimal</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      
      {/* Tailwind config for custom animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `}} />
    </div>
  );
}
