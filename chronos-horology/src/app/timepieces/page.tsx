import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

const watches = [
  {
    id: 1,
    name: "The Celestial Perpetual",
    caliber: "Caliber CHR-01",
    description: "A masterclass in astronomical complications. Features a perpetual calendar that requires no adjustment for 100 years, alongside a mesmerizing moonphase indicator crafted from lapis lazuli and gold dust.",
    price: "$145,000",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Oceanus Deep Dive",
    caliber: "Caliber CHR-04",
    description: "Engineered for the abyss. Water-resistant to 3,900 meters, this professional instrument features a helium escape valve and our proprietary luminescent indices that glow brightly in the darkest depths.",
    price: "$28,500",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Aero Tourbillon",
    caliber: "Caliber CHR-09T",
    description: "Defying gravity with unparalleled elegance. The flying tourbillon cage is meticulously hand-finished, making a full rotation every 60 seconds to counter the effects of gravity on the escapement.",
    price: "$210,000",
    image: "https://images.unsplash.com/photo-1587836374828-cb4387df3c7c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Heritage Classic",
    caliber: "Caliber CHR-02",
    description: "A tribute to our founding era. Its ultra-thin case houses a hand-wound movement, while the enamel dial features Breguet numerals and heat-blued steel hands for a timeless aesthetic.",
    price: "$34,000",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Midnight Skeleton",
    caliber: "Caliber CHR-SK1",
    description: "The art of reduction. Every non-essential ounce of metal has been carefully removed by our master engravers to reveal the beating heart of the timepiece, coated in deep ruthenium.",
    price: "$85,000",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Eclipse Chronograph",
    caliber: "Caliber CHR-C8",
    description: "Precision timing meets bold design. Featuring a column-wheel chronograph mechanism with a vertical clutch, allowing for butter-smooth actuation and instantaneous time measurement.",
    price: "$42,500",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Timepieces() {
  return (
    <div className="flex flex-col bg-brand-darker min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-20 px-6 text-center border-b border-brand-gray relative">
        <h1 className="text-sm text-brand-gold uppercase tracking-[0.4em] mb-6">Collections</h1>
        <TextReveal 
          text="The Pinnacle of Horology"
          className="text-5xl md:text-7xl font-serif text-brand-light justify-center"
        />
      </section>

      {/* Collection List */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          {watches.map((watch, idx) => (
            <div key={watch.id} className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Container */}
              <div className="w-full md:w-1/2 group">
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-dark rounded-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-[2s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    style={{ backgroundImage: `url(${watch.image})` }}
                  ></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-brand-gold font-medium uppercase tracking-[0.2em] text-xs mb-4">
                  {watch.caliber}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-light mb-8">
                  {watch.name}
                </h2>
                <p className="text-brand-text/70 text-lg leading-relaxed mb-10 font-light max-w-lg">
                  {watch.description}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <Link href="/concierge" className="px-8 py-4 bg-transparent border border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-darker transition-colors duration-500 uppercase tracking-widest text-xs font-semibold">
                    Inquire Now
                  </Link>
                  <span className="text-brand-text/50 font-serif text-xl tracking-wide">{watch.price}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-brand-dark text-center px-6 border-t border-brand-gray">
        <h3 className="text-3xl md:text-5xl font-serif text-brand-light mb-8">Experience Chronos in Person</h3>
        <p className="text-brand-text/70 mb-12 max-w-xl mx-auto font-light">
          Visit one of our exclusive boutiques to feel the weight, see the intricate finishings, and hear the heartbeat of a Chronos timepiece.
        </p>
        <Link href="/concierge" className="inline-block px-12 py-5 bg-brand-gold text-brand-darker hover:bg-brand-light transition-colors duration-500 uppercase tracking-[0.2em] text-xs font-bold">
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
