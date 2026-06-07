export default function ContactPage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-12 flex flex-col items-center justify-center selection:bg-matrix-green selection:text-cyber-black">
      
      <div className="border border-matrix-green/50 p-8 max-w-lg w-full bg-slate-gray/50 backdrop-blur-md">
        <h1 className="text-2xl uppercase tracking-widest font-bold mb-8 border-b border-matrix-green/20 pb-4">
          Establish Secure Connection
        </h1>

        <form className="flex flex-col gap-6 font-mono text-sm">
          <div className="flex flex-col gap-2">
            <label className="text-matrix-green/70">ENTITY_NAME</label>
            <input type="text" className="bg-cyber-black border border-matrix-green/30 p-3 text-matrix-green outline-none focus:border-matrix-green transition-colors" placeholder="e.g. Citadel Securities" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-matrix-green/70">AUM_TIER</label>
            <select className="bg-cyber-black border border-matrix-green/30 p-3 text-matrix-green outline-none focus:border-matrix-green">
              <option>&lt; $500M</option>
              <option>$500M - $1B</option>
              <option>&gt; $1B</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-matrix-green/70">PGP_PUBLIC_KEY</label>
            <textarea className="bg-cyber-black border border-matrix-green/30 p-3 text-matrix-green outline-none focus:border-matrix-green h-24" placeholder="-----BEGIN PGP PUBLIC KEY BLOCK-----..." />
          </div>

          <button type="button" className="bg-matrix-green text-cyber-black font-bold p-4 uppercase tracking-widest mt-4 hover:bg-white transition-colors">
            Transmit Payload
          </button>
        </form>
      </div>

    </main>
  );
}
