import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-32 selection:bg-matrix-green selection:text-cyber-black">
      
      {/* 1. Hero Terminal Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-matrix-green)_0%,_transparent_20%)] opacity-5 pointer-events-none" />
        <p className="text-alert-red mb-4 text-xs tracking-[0.3em] font-bold">SYSTEM.STATUS: OPERATIONAL [PING: 2ms]</p>
        <h1 className="text-fluid-h1 font-bold tracking-tighter mb-8 glitch-text uppercase" data-text="Absolute Alpha">
          Absolute Alpha
        </h1>
        <p className="text-fluid-p max-w-2xl text-matrix-green/80 mb-12">
          Executing trades at the literal speed of light. Our proprietary microwave networks and FPGA-accelerated execution engines provide institutional clients with unparalleled market access and liquidity sourcing.
        </p>
        <div className="flex gap-4 text-xs tracking-widest">
          <Link href="/platform" className="border border-matrix-green px-6 py-3 hover:bg-matrix-green hover:text-cyber-black transition-colors">
            [ INITIALIZE_DOCUMENTATION ]
          </Link>
        </div>
      </section>

      {/* 2. Live Data Feed Teaser */}
      <section className="py-24 border-y border-matrix-green/20 bg-matrix-green/5">
        <div className="flex overflow-hidden whitespace-nowrap opacity-50 font-sans text-sm tracking-widest">
          <div className="animate-[spin_60s_linear_infinite_reverse] w-[200vw] text-matrix-green">
            BTC/USD 64,210.50 [+2.4%] • ETH/USD 3,450.20 [-0.8%] • SOL/USD 145.20 [+5.1%] • APPL 190.50 [+1.2%] • MSFT 420.10 [-0.5%] • NVDA 1,200.50 [+4.2%] • 
            BTC/USD 64,210.50 [+2.4%] • ETH/USD 3,450.20 [-0.8%] • SOL/USD 145.20 [+5.1%] • APPL 190.50 [+1.2%] • MSFT 420.10 [-0.5%] • NVDA 1,200.50 [+4.2%]
          </div>
        </div>
      </section>

      {/* 3. The Edge / Why Us */}
      <section className="py-32 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <TextReveal as="h2" text="Zero Latency Architecture." className="text-fluid-h2 mb-8 uppercase tracking-tighter" />
          <p className="opacity-70 leading-relaxed mb-8">
            In modern financial markets, microseconds dictate success. We bypass traditional fiber optic backbones in favor of custom-built line-of-sight microwave networks between Chicago and New Jersey. 
          </p>
        </div>
        <div className="border border-matrix-green/30 p-8 flex flex-col justify-between h-[400px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 text-xs opacity-50">[SYS.DIAGNOSTICS]</div>
          <div className="w-full h-[1px] bg-matrix-green/20 absolute top-1/2 -translate-y-1/2 left-0 group-hover:bg-alert-red transition-colors" />
          <div className="h-full w-[1px] bg-matrix-green/20 absolute left-1/2 -translate-x-1/2 top-0 group-hover:bg-alert-red transition-colors" />
          <div className="z-10 mt-auto bg-cyber-black p-4 border border-matrix-green/30 inline-block w-fit">
            &gt; fpga_kernel_load... OK<br/>
            &gt; network_sync... 0.001ms
          </div>
        </div>
      </section>

      {/* 4. Infrastructure Stats */}
      <section className="py-32 px-6 md:px-12 bg-slate-gray/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-matrix-green/20 pb-16 mb-16">
          {[
            { label: "Daily Volume", val: "$14.2B" },
            { label: "Execution Speed", val: "1.2μs" },
            { label: "Uptime", val: "99.999%" },
            { label: "Active Markets", val: "42" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-xs uppercase opacity-50 tracking-widest">{stat.label}</span>
              <span className="text-4xl font-bold">{stat.val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer / CTA */}
      <section className="py-32 px-6 md:px-12 text-center">
        <TextReveal as="h2" text="Access the Liquidity Pool" className="text-fluid-h2 mb-8 uppercase tracking-tighter" />
        <p className="opacity-70 leading-relaxed max-w-xl mx-auto mb-12">
          Strict KYC/AML and minimum AUM requirements apply. Request an API key to begin integration testing in our sandbox environment.
        </p>
        <Link href="/contact" className="border border-matrix-green bg-matrix-green text-cyber-black px-8 py-4 uppercase font-bold tracking-widest hover:bg-transparent hover:text-matrix-green transition-colors">
          [ AUTHENTICATE_SESSION ]
        </Link>
      </section>

    </main>
  );
}
