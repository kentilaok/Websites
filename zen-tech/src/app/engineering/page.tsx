import TextReveal from "@/components/ui/TextReveal";

export default function EngineeringPage() {
  return (
    <main className="min-h-screen pt-48 pb-48 px-6 md:px-12 selection:bg-carbon selection:text-pure-white bg-carbon text-pure-white">
      <div className="max-w-4xl mx-auto text-center mb-32">
        <TextReveal as="h1" text="Material Science" className="text-fluid-h1 mb-8" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
        <div>
          <h2 className="text-3xl font-light mb-8">Beryllium Exclusivity.</h2>
          <p className="text-titanium leading-relaxed font-light mb-8">
            Beryllium is lighter than aluminum and significantly more rigid than titanium. This allows our driver diaphragms to move with extreme speed while resisting deformation modes that cause distortion in standard headphones.
          </p>
          <p className="text-titanium leading-relaxed font-light">
            Due to the complexity of machining beryllium, our yields are low. Each diaphragm takes 14 hours to form and coat. It is an inefficient process that yields the most efficient acoustic transducer in existence.
          </p>
        </div>
        <div className="aspect-[3/4] bg-pure-white/5 rounded-3xl p-8 flex items-center justify-center">
           <img src="https://images.unsplash.com/photo-1536640523094-1ba2132d71b3?w=800&q=80" alt="Machining" className="w-full h-full object-cover rounded-2xl grayscale opacity-50" />
        </div>
      </div>
    </main>
  );
}
