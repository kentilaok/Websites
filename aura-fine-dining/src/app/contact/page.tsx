import TextReveal from "@/components/ui/TextReveal";

export default function ContactPage() {
  return (
    <main className="bg-forest-night text-warm-bone min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-terracotta selection:text-warm-bone">
      
      {/* 1. Header */}
      <div className="max-w-4xl mx-auto text-center mb-32">
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-terracotta mb-8 block">
          Inquiries & Reservations
        </span>
        <TextReveal
          as="h1"
          text="Secure a Table."
          className="text-5xl md:text-8xl font-serif leading-tight mb-8"
        />
        <p className="font-sans text-lg opacity-70 max-w-2xl mx-auto">
          Reservations open on the first of every month at 9:00 AM EST for the following month. Due to the intimate nature of our dining room, we cannot accommodate walk-ins.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        
        {/* Left Column: Form / Booking Placeholder */}
        <div className="bg-warm-bone text-forest-night p-12 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-serif italic mb-6">Booking Portal</h2>
          <p className="font-sans text-sm opacity-80 mb-12">
            Please select your desired date and party size. Note that our largest table accommodates a maximum of six guests.
          </p>
          <button className="w-full py-4 border border-forest-night text-sm font-sans uppercase tracking-[0.2em] hover:bg-forest-night hover:text-warm-bone transition-colors duration-300">
            Check Availability via Tock
          </button>
        </div>

        {/* Right Column: Policies & Details */}
        <div className="flex flex-col justify-center gap-12">
          
          <div>
            <h3 className="text-2xl font-serif mb-4 text-terracotta">Location</h3>
            <p className="font-sans text-sm opacity-70 leading-loose">
              128 High Street<br/>
              Culinary District<br/>
              New York, NY 10011
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4 text-terracotta">Contact</h3>
            <p className="font-sans text-sm opacity-70 leading-loose">
              inquiries@auradining.com<br/>
              +1 (212) 555-0199<br/>
              <span className="italic mt-2 block">Phones answered Wed-Sun between 2 PM and 5 PM.</span>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4 text-terracotta">Dietary Policies</h3>
            <p className="font-sans text-sm opacity-70 leading-relaxed">
              Due to the hyper-seasonal nature of our tasting menu, we can accommodate vegetarian, pescatarian, and gluten-free diets with at least 48 hours' notice. We politely decline substitutions for severe allium or nightshade allergies, as they form the foundation of our cuisine.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4 text-terracotta">Private Dining</h3>
            <p className="font-sans text-sm opacity-70 leading-relaxed">
              The Vault Room is available for intimate private gatherings of up to 14 guests. For full restaurant buyouts and exclusive events, please email our events director directly.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}
