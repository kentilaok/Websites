export default function PlatformPage() {
  return (
    <main className="bg-void-black text-stark-white min-h-screen pt-48 pb-32 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-indigo">Platform Architecture.</h1>
        <p className="font-mono text-stark-white/60 leading-loose">
          The Prism execution environment leverages a zero-knowledge virtual machine (zkVM) to process state transitions off-chain, verifying them via cryptographic proofs on Ethereum Mainnet.
        </p>
      </div>
      <div className="absolute top-1/2 right-0 w-[60vw] h-[60vw] bg-electric-indigo/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
    </main>
  );
}
