import TextReveal from "@/components/ui/TextReveal";

export default function BookingPage() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="container max-w-3xl mx-auto">
        <TextReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-ts-moss">
              Reserve your <i className="text-ts-clay">Sanctuary</i>.
            </h1>
            <p className="text-xl text-ts-stone">
              Minimum stay is 3 nights. We recommend booking 6 months in advance.
            </p>
          </div>
        </TextReveal>

        <TextReveal delay={0.2}>
          <div className="bg-white p-8 md:p-12 border-2 border-ts-moss shadow-[8px_8px_0_0_#3A4032]">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-bold tracking-widest uppercase text-xs text-ts-moss">First Name</label>
                  <input type="text" className="w-full border-b-2 border-ts-stone/30 py-3 text-ts-moss focus:border-ts-clay outline-none transition-colors bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold tracking-widest uppercase text-xs text-ts-moss">Last Name</label>
                  <input type="text" className="w-full border-b-2 border-ts-stone/30 py-3 text-ts-moss focus:border-ts-clay outline-none transition-colors bg-transparent" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-bold tracking-widest uppercase text-xs text-ts-moss">Villa Preference</label>
                <select className="w-full border-b-2 border-ts-stone/30 py-3 text-ts-moss focus:border-ts-clay outline-none transition-colors bg-transparent appearance-none">
                  <option>The Monolith</option>
                  <option>The Canopy</option>
                  <option>The Cavern</option>
                  <option>No Preference</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-bold tracking-widest uppercase text-xs text-ts-moss">Arrival Date</label>
                  <input type="date" className="w-full border-b-2 border-ts-stone/30 py-3 text-ts-moss focus:border-ts-clay outline-none transition-colors bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold tracking-widest uppercase text-xs text-ts-moss">Departure Date</label>
                  <input type="date" className="w-full border-b-2 border-ts-stone/30 py-3 text-ts-moss focus:border-ts-clay outline-none transition-colors bg-transparent" />
                </div>
              </div>

              <button type="button" className="w-full bg-ts-moss text-ts-sand font-bold tracking-widest uppercase py-6 hover:bg-ts-clay transition-colors mt-8">
                Request Availability
              </button>
            </form>
          </div>
        </TextReveal>
      </div>
    </div>
  );
}
