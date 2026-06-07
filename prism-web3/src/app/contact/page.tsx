export default function ContactPage() {
  return (
    <main className="bg-void-black text-stark-white min-h-screen pt-48 pb-32 px-6 md:px-12 font-sans flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-transparent pointer-events-none" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Connect to the Network</h1>
        <div className="flex gap-8 justify-center">
          <button className="px-6 py-3 border border-stark-white/20 hover:border-neon-cyan text-sm font-mono tracking-widest transition-colors rounded">Discord</button>
          <button className="px-6 py-3 border border-stark-white/20 hover:border-electric-indigo text-sm font-mono tracking-widest transition-colors rounded">Twitter / X</button>
          <button className="px-6 py-3 border border-stark-white/20 hover:border-stark-white text-sm font-mono tracking-widest transition-colors rounded">GitHub</button>
        </div>
      </div>
    </main>
  );
}
