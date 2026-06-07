import TextReveal from "@/components/ui/TextReveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-24 selection:bg-rose selection:text-skin bg-oud text-skin">
      <div className="max-w-4xl mx-auto text-center mb-32">
        <TextReveal as="h1" text="The Nose" className="text-6xl md:text-8xl font-serif italic mb-12 text-rose" />
        <p className="text-sm font-sans uppercase tracking-widest opacity-80 leading-loose max-w-2xl mx-auto">
          Founded in 2021 by a former architect, Sillage was born from a desire to construct spaces not with steel and glass, but with scent molecules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="aspect-[4/5] bg-skin/10 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1512413914442-7dd1eb13c9e6?w=800&q=80" alt="Perfumer" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-4xl italic">Form & Formulation</h2>
          <p className="font-sans text-sm leading-loose opacity-70">
            "I approach a fragrance exactly how I approached a building. It requires a strong foundation (the base notes), an engaging facade (the top notes), and a functional interior where one can live comfortably (the heart notes)."
          </p>
          <p className="font-sans text-sm leading-loose opacity-70">
            By extracting raw materials at their peak maturity and allowing maceration periods of no less than six months, we achieve a structural integrity that synthetic compounds simply cannot replicate.
          </p>
        </div>
      </div>
    </main>
  );
}
