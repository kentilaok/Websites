import TextReveal from "@/components/ui/TextReveal";

export default function PlatformPage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-matrix-green selection:text-cyber-black">
      
      <section className="max-w-5xl mx-auto border border-matrix-green/20 p-8 md:p-16 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-matrix-green" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-matrix-green" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-matrix-green" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-matrix-green" />

        <p className="text-alert-red mb-8 text-xs tracking-[0.3em] font-bold">&gt; _SYS.PLATFORM_ARCHITECTURE</p>
        <TextReveal as="h1" text="Hardware Accelerated Execution." className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 uppercase" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-sm opacity-80 leading-loose">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-matrix-green/20 pb-2">FPGA Core Processing</h3>
            <p className="mb-6">
              Our trading logic is burned directly onto Field Programmable Gate Arrays. By bypassing standard CPU architecture and operating systems, we eliminate the jitter and non-determinism inherent in software-based trading.
            </p>
            <p>
              Tick-to-trade latency is measured in nanoseconds, not microseconds.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-matrix-green/20 pb-2">Co-location Architecture</h3>
            <p className="mb-6">
              Servers are physically located within the same data centers as the exchange matching engines (CME, NYSE, NASDAQ). Cross-connects run on custom-calibrated optical cables to ensure exactly equal length and latency for all strategies.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
