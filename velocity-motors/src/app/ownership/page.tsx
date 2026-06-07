import TextReveal from "@/components/ui/TextReveal";

export default function OwnershipPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-vm-dark">
      <div className="container max-w-4xl mx-auto">
        <TextReveal>
          <div className="text-vm-red font-syncopate tracking-widest mb-4">RESTRICTED ACCESS</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-12">OWNERSHIP</h1>
        </TextReveal>

        <TextReveal delay={0.1}>
          <div className="bg-vm-black border border-white/10 p-8 md:p-16">
            <h2 className="text-3xl font-syncopate mb-6">INITIATE ALLOCATION</h2>
            <p className="text-vm-steel mb-12 font-manrope">
              Production is strictly limited to 99 units globally. Applications are currently being reviewed for the next production cycle. Please submit your credentials below.
            </p>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-syncopate text-vm-steel block">GIVEN NAME</label>
                  <input type="text" className="w-full bg-vm-dark border border-white/10 p-4 text-white focus:border-vm-red outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-syncopate text-vm-steel block">SURNAME</label>
                  <input type="text" className="w-full bg-vm-dark border border-white/10 p-4 text-white focus:border-vm-red outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-syncopate text-vm-steel block">COMMUNICATION VECTOR (EMAIL)</label>
                <input type="email" className="w-full bg-vm-dark border border-white/10 p-4 text-white focus:border-vm-red outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-syncopate text-vm-steel block">PREVIOUS HYPERCAR OWNERSHIP (IF APPLICABLE)</label>
                <textarea rows={4} className="w-full bg-vm-dark border border-white/10 p-4 text-white focus:border-vm-red outline-none transition-colors resize-none" />
              </div>

              <button type="button" className="w-full border-2 border-vm-red bg-vm-red text-vm-dark font-syncopate font-bold py-6 hover:bg-transparent hover:text-vm-red transition-all duration-300">
                SUBMIT CREDENTIALS
              </button>
            </form>
          </div>
        </TextReveal>
        
        <TextReveal delay={0.2}>
          <div className="mt-16 text-center text-vm-steel text-sm">
            <p>Our concierge will contact approved applicants within 72 hours via encrypted channel.</p>
          </div>
        </TextReveal>
      </div>
    </div>
  );
}
