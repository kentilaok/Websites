import TextReveal from "@/components/ui/TextReveal";

export default function AlgorithmsPage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-matrix-green selection:text-cyber-black">
      
      <div className="max-w-4xl">
        <p className="text-matrix-green/50 mb-8 text-xs tracking-[0.3em] font-bold">&gt; _ALGORITHMIC_STRATEGIES</p>
        <TextReveal as="h1" text="Statistical Arbitrage." className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase glitch-text" data-text="Statistical Arbitrage." />
        
        <div className="flex flex-col gap-12 border-l-2 border-matrix-green/20 pl-8">
          
          <div className="relative">
            <div className="absolute -left-[35px] top-2 w-4 h-4 bg-cyber-black border-2 border-matrix-green rounded-full" />
            <h3 className="text-2xl font-bold mb-2 uppercase">Mean Reversion [Alpha_01]</h3>
            <p className="opacity-70 leading-loose text-sm max-w-2xl">
              Identifies micro-deviations from historical price correlations across heavily traded ETF pairs. Executes mean-reversion logic within 5μs of deviation detection.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[35px] top-2 w-4 h-4 bg-matrix-green rounded-full shadow-[0_0_10px_#00FF41]" />
            <h3 className="text-2xl font-bold mb-2 uppercase text-white">Dark Pool Liquidity Sourcing [Alpha_02]</h3>
            <p className="opacity-70 leading-loose text-sm max-w-2xl text-white">
              Actively pinging unlit markets using Iceberg and TWAP orders to construct large positions without alerting high-frequency predators on lit exchanges.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[35px] top-2 w-4 h-4 bg-cyber-black border-2 border-matrix-green rounded-full" />
            <h3 className="text-2xl font-bold mb-2 uppercase">Volatility Surface Arbitrage [Alpha_03]</h3>
            <p className="opacity-70 leading-loose text-sm max-w-2xl">
              Real-time pricing of options chains to detect mispricings in implied volatility across strikes and expirations. 
            </p>
          </div>

        </div>
      </div>

    </main>
  );
}
