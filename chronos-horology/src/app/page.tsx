import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/60 to-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-6 opacity-80">A Legacy of Time</p>
          <h1 className="text-5xl md:text-8xl font-serif text-brand-light mb-8 leading-tight">
            Mastery Beyond <br /> <span className="text-brand-gold italic">Measure</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-text/80 mb-12 max-w-2xl font-light leading-relaxed">
            Discover the epitome of horological perfection. Where centuries of Swiss craftsmanship meet avant-garde design.
          </p>
          <Link href="/timepieces" className="px-10 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-darker transition-all duration-500 uppercase tracking-widest text-sm font-medium">
            Explore Collections
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm text-brand-gold uppercase tracking-[0.3em] mb-4">Our Philosophy</h2>
            <TextReveal 
              text="Time is not merely measured; it is sculpted. Every component, every gear, every sweeping second is a testament to our unwavering pursuit of perfection."
              className="text-3xl md:text-5xl font-serif text-brand-light leading-snug"
            />
          </div>
          <div className="relative aspect-[4/5] w-full">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"></div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 px-6 md:px-12 bg-brand-darker border-t border-brand-gray">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-sm text-brand-gold uppercase tracking-[0.3em] mb-4">The Vanguard</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-brand-light">Signature Timepieces</h3>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "The Celestial", desc: "Perpetual Calendar Chronograph", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop" },
            { name: "Oceanus Deep", desc: "Professional Dive Instrument", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop" },
            { name: "Aero Tourbillon", desc: "Aviation-Inspired Gravity Defier", img: "https://images.unsplash.com/photo-1587836374828-cb4387df3c7c?q=80&w=800&auto=format&fit=crop" }
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-square mb-8 overflow-hidden bg-brand-gray/30 rounded-sm">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
              </div>
              <h4 className="text-2xl font-serif text-brand-light mb-2">{item.name}</h4>
              <p className="text-brand-gold uppercase tracking-wider text-xs mb-6">{item.desc}</p>
              <span className="text-brand-text/60 text-sm uppercase tracking-widest border-b border-transparent group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-300 pb-1">
                Discover
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Craftsmanship Teaser */}
      <section className="relative py-40 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584680237517-5e608034db2b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-7xl font-serif text-brand-light mb-8">The Art of Precision</h2>
          <p className="text-lg text-brand-text/80 mb-10 font-light leading-relaxed">
            Our master watchmakers dedicate hundreds of hours to assembling a single caliber, 
            ensuring that the soul of the watch beats with flawless accuracy.
          </p>
          <Link href="/craftsmanship" className="inline-block px-10 py-4 bg-brand-gold text-brand-darker hover:bg-brand-light transition-all duration-500 uppercase tracking-widest text-sm font-semibold">
            Explore Our Craft
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-darker py-20 px-6 md:px-12 border-t border-brand-gray text-center md:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl tracking-[0.2em] text-brand-light uppercase mb-6">Chronos</h2>
            <p className="text-brand-text/60 font-light max-w-sm">
              Defining the future of haute horlogerie while remaining deeply rooted in the traditions of Swiss watchmaking.
            </p>
          </div>
          <div>
            <h4 className="text-brand-gold uppercase tracking-widest text-xs mb-6">Collections</h4>
            <ul className="space-y-4 text-brand-text/70 text-sm">
              <li><Link href="/timepieces" className="hover:text-brand-light transition-colors">The Celestial</Link></li>
              <li><Link href="/timepieces" className="hover:text-brand-light transition-colors">Oceanus Deep</Link></li>
              <li><Link href="/timepieces" className="hover:text-brand-light transition-colors">Aero Tourbillon</Link></li>
              <li><Link href="/timepieces" className="hover:text-brand-light transition-colors">Heritage Classic</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-gold uppercase tracking-widest text-xs mb-6">Maison</h4>
            <ul className="space-y-4 text-brand-text/70 text-sm">
              <li><Link href="/craftsmanship" className="hover:text-brand-light transition-colors">Craftsmanship</Link></li>
              <li><Link href="/concierge" className="hover:text-brand-light transition-colors">Boutiques</Link></li>
              <li><Link href="/concierge" className="hover:text-brand-light transition-colors">Concierge Service</Link></li>
              <li><Link href="/concierge" className="hover:text-brand-light transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-gray/50 text-center text-brand-text/40 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Chronos Horology. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
