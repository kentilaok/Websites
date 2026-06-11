import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";

export default function ReservationsPage() {
  return (
    <div className="w-full flex flex-col pb-32">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <TextReveal text="Join Us" className="text-gold-400 tracking-[0.4em] uppercase text-sm mb-6" />
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">Reservations</h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Form Column */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl text-white">Book a Table</h2>
            <p className="text-white/60 font-light">
              Reservations open exactly 60 days in advance at midnight. Due to the intimate nature of our dining room, we cannot accommodate walk-ins.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-gold-400 uppercase">Date</label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold-400 transition-colors cursor-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-gold-400 uppercase">Guests</label>
                <select className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold-400 transition-colors cursor-none appearance-none">
                  <option className="bg-charcoal-900">2 Guests</option>
                  <option className="bg-charcoal-900">3 Guests</option>
                  <option className="bg-charcoal-900">4 Guests</option>
                  <option className="bg-charcoal-900">5+ Guests (Private Dining)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-widest text-gold-400 uppercase">Time</label>
              <select className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold-400 transition-colors cursor-none appearance-none">
                <option className="bg-charcoal-900">18:00 (1st Seating)</option>
                <option className="bg-charcoal-900">20:30 (2nd Seating)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-gold-400 uppercase">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold-400 transition-colors cursor-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-gold-400 uppercase">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold-400 transition-colors cursor-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-widest text-gold-400 uppercase">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold-400 transition-colors cursor-none"
              />
            </div>

            <button type="button" className="w-full mt-8 py-4 bg-burgundy-600 hover:bg-burgundy-500 text-white tracking-[0.2em] uppercase text-sm transition-all duration-300">
              Check Availability
            </button>
          </form>
        </div>

        {/* Info Column */}
        <div className="space-y-16">
          <div className="relative aspect-[16/9] w-full">
            <Image 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
              alt="Dining Room"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-gold-400">Hours of Operation</h3>
              <div className="text-white/70 font-light space-y-2 text-sm">
                <p>Wednesday — Sunday</p>
                <p>First Seating: 18:00</p>
                <p>Second Seating: 20:30</p>
                <p className="pt-2 text-white/50">Closed Monday & Tuesday</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl text-gold-400">Dress Code</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                Smart elegant. Jackets are required for gentlemen. We kindly ask that guests refrain from wearing athletic wear, shorts, or open-toed shoes (for gentlemen).
              </p>
            </div>

            <div className="space-y-4 md:col-span-2">
              <h3 className="font-serif text-xl text-gold-400">Private Dining (The Obsidian Room)</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                For parties of 6 to 12 guests, we offer an exclusive private dining experience enclosed in smoked glass and brass, featuring a bespoke 16-course menu and private sommelier service.
              </p>
            </div>
            
            <div className="space-y-4 md:col-span-2">
              <h3 className="font-serif text-xl text-gold-400">Contact</h3>
              <div className="text-white/70 font-light space-y-2 text-sm">
                <p>concierge@crescentculinary.com</p>
                <p>+1 (555) 867-5309</p>
                <p>1280 Zenith Boulevard, Elysium District</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
