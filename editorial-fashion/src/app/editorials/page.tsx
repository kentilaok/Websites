import TextReveal from "@/components/ui/TextReveal";

export default function Editorials() {
  const articles = [
    { title: "The Death of Trends", category: "Op-Ed", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" },
    { title: "Neon & Nylon", category: "Style", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" },
    { title: "Structural Integrity", category: "Architecture x Fashion", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80" }
  ];

  return (
    <section className="pt-40 pb-20 px-8 max-w-screen-2xl mx-auto min-h-screen">
      <div className="mb-24 border-b-4 border-ink-black pb-8">
        <TextReveal as="h1" text="Editorials" className="text-fluid-h1 font-serif text-ink-black uppercase" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <div key={i} className="group cursor-none border-b border-ink-black/20 pb-8">
            <div className="aspect-[4/5] relative overflow-hidden mb-6 bg-ink-black">
              <img src={article.image} alt={article.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
            </div>
            <p className="text-xs font-sans font-bold uppercase tracking-widest text-crimson mb-2">{article.category}</p>
            <h3 className="text-3xl font-serif text-ink-black leading-snug">{article.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
