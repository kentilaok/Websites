import TextReveal from "@/components/ui/TextReveal";

const services = [
  {
    title: "The Geneva Salon",
    type: "Flagship Boutique",
    description: "Located on the prestigious Rue du Rhône. Our flagship salon offers an intimate environment to explore our complete collection, including rare grand complications. Features a resident master watchmaker for on-site consultations.",
    image: "https://images.unsplash.com/photo-1541888053-5374df44b41a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "The London Boutique",
    type: "Global Outpost",
    description: "Situated in the heart of Mayfair on New Bond Street. The London Boutique pairs traditional British tailoring aesthetics with Swiss horological precision. Includes a private VIP viewing room.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "The Tokyo House",
    type: "Global Outpost",
    description: "A serene architectural masterpiece in Ginza. The Tokyo House integrates Japanese minimalist design with Chronos' heritage. Features exclusive regional limited editions.",
    image: "https://images.unsplash.com/photo-1542051812871-70b99fa281b3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "The New York Gallery",
    type: "Global Outpost",
    description: "Overlooking Central Park from Fifth Avenue. Designed as a contemporary art gallery where our timepieces are displayed as the kinetic sculptures they truly are.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Private Viewing Service",
    type: "Concierge Experience",
    description: "For our most discerning clients, we offer global secure transport of requested timepieces to your home, office, or private residence for an unhurried, private acquisition experience.",
    image: "https://images.unsplash.com/photo-1621845115147-3f9260756788?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Bespoke Commissions",
    type: "Unique Creations",
    description: "Collaborate directly with our master watchmakers and enamelists to create a Pièce Unique. From custom dial colors to unique case engravings and personalized complication modules.",
    image: "https://images.unsplash.com/photo-1501166222995-1f6305a409f5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "After-Sales Care",
    type: "Heritage Preservation",
    description: "A Chronos is built to outlast its original owner. Our Heritage Department guarantees the restoration and servicing of every timepiece we have ever produced, utilizing original tools and archival blueprints.",
    image: "https://images.unsplash.com/photo-1584680237517-5e608034db2b?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Concierge() {
  return (
    <div className="bg-brand-darker min-h-screen pt-40 pb-20">
      
      {/* Header */}
      <section className="px-6 text-center mb-32 max-w-4xl mx-auto">
        <h1 className="text-brand-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">Concierge & Boutiques</h1>
        <TextReveal 
          text="At Your Service, Worldwide."
          className="text-5xl md:text-7xl font-serif text-brand-light mb-8 justify-center"
        />
        <p className="text-brand-text/70 text-lg font-light leading-relaxed">
          Whether you wish to visit one of our global boutiques or arrange a private consultation, our concierge team is dedicated to providing an experience as flawless as our timepieces.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="group cursor-pointer bg-brand-dark border border-brand-gray hover:border-brand-gold/30 transition-colors duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <span className="text-brand-gold uppercase tracking-widest text-[10px] font-bold mb-3 block">
                  {service.type}
                </span>
                <h3 className="text-2xl font-serif text-brand-light mb-4">
                  {service.title}
                </h3>
                <p className="text-brand-text/70 text-sm font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="text-brand-light text-xs uppercase tracking-[0.2em] font-semibold border-b border-brand-gold/50 pb-1 group-hover:text-brand-gold transition-colors">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Teaser */}
      <section className="max-w-4xl mx-auto mt-32 px-6 text-center">
        <h2 className="text-3xl font-serif text-brand-light mb-6">Direct Inquiry</h2>
        <p className="text-brand-text/70 mb-10 font-light">
          For immediate assistance, please reach out to our global concierge desk.
        </p>
        <form className="flex flex-col gap-6 max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-brand-dark border border-brand-gray px-6 py-4 text-brand-light focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-text/30"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-brand-dark border border-brand-gray px-6 py-4 text-brand-light focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-text/30"
          />
          <textarea 
            placeholder="Your Inquiry" 
            rows={4}
            className="w-full bg-brand-dark border border-brand-gray px-6 py-4 text-brand-light focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-text/30 resize-none"
          ></textarea>
          <button 
            type="button"
            className="w-full bg-brand-gold text-brand-darker font-bold uppercase tracking-widest text-sm py-4 hover:bg-brand-light transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
}
