import TextReveal from "@/components/ui/TextReveal";

export default function Home() {
  return (
    <main className="bg-void-black text-stark-white min-h-screen pt-48 pb-32 font-sans selection:bg-neon-cyan selection:text-void-black overflow-hidden relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-electric-indigo/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* 1. Glass Hero */}
      <section className="relative w-full px-6 md:px-12 pt-24 pb-48 z-10 flex flex-col items-center text-center">
        
        <div className="inline-block px-4 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-mono tracking-widest mb-12 backdrop-blur-sm">
          PRISM PROTOCOL V2.0 LIVE
        </div>

        <h1 className="text-fluid-h1 font-bold tracking-tighter leading-none mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-stark-white to-stark-white/40">Liquid</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-indigo">Consensus.</span>
        </h1>

        <p className="max-w-xl font-mono text-sm text-stark-white/60 leading-loose mb-16">
          The next evolution of decentralized liquidity. A zero-knowledge rollup engineered for infinite scalability and absolute privacy across the omnichain ecosystem.
        </p>

        <div className="flex gap-6">
          <button className="px-8 py-4 bg-stark-white text-void-black text-sm font-mono tracking-widest hover:bg-neon-cyan transition-colors duration-300 rounded-lg cursor-none">
            Start Staking
          </button>
          <button className="px-8 py-4 bg-transparent border border-stark-white/20 text-stark-white text-sm font-mono tracking-widest hover:bg-stark-white/10 transition-colors duration-300 rounded-lg cursor-none backdrop-blur-md">
            Read Whitepaper
          </button>
        </div>
      </section>

      {/* 2. Ecosystem Metrics */}
      <section className="py-24 px-6 md:px-12 z-10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl bg-stark-white/[0.02] border border-stark-white/10 backdrop-blur-md flex flex-col gap-4">
            <span className="text-neon-cyan font-mono text-xs tracking-widest">TOTAL VALUE LOCKED</span>
            <span className="text-5xl font-bold tracking-tighter">$4.2B</span>
          </div>

          <div className="p-8 rounded-2xl bg-stark-white/[0.02] border border-stark-white/10 backdrop-blur-md flex flex-col gap-4">
            <span className="text-electric-indigo font-mono text-xs tracking-widest">24H VOLUME</span>
            <span className="text-5xl font-bold tracking-tighter">$892M</span>
          </div>

          <div className="p-8 rounded-2xl bg-stark-white/[0.02] border border-stark-white/10 backdrop-blur-md flex flex-col gap-4">
            <span className="text-neon-cyan font-mono text-xs tracking-widest">ACTIVE NODES</span>
            <span className="text-5xl font-bold tracking-tighter">12,408</span>
          </div>

        </div>
      </section>

      {/* 3. Deep Architecture Feature */}
      <section className="py-40 px-6 md:px-12 z-10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          
          <div className="relative aspect-square rounded-full border border-stark-white/10 flex items-center justify-center">
            <div className="absolute inset-4 rounded-full border border-neon-cyan/30 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-12 rounded-full border border-electric-indigo/30 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="w-32 h-32 bg-gradient-to-br from-neon-cyan to-electric-indigo rounded-full blur-xl opacity-50" />
          </div>

          <div>
            <TextReveal as="h2" text="Omnichain Architecture." className="text-4xl md:text-6xl font-bold tracking-tighter mb-8" />
            <p className="font-mono text-sm text-stark-white/60 leading-loose mb-8">
              Prism operates on a novel proof-of-liquidity consensus mechanism. By aggregating fragmented liquidity pools across Layer 1s, we provide a unified execution environment. No bridging delays. No slippage. Just instant, mathematically proven finality.
            </p>
            <ul className="space-y-4 font-mono text-xs text-stark-white/80">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-neon-cyan" /> Sub-second finality
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-neon-cyan" /> Zero-knowledge state proofs
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-neon-cyan" /> MEV-resistant sequencing
              </li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
