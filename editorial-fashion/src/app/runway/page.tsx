import TextReveal from "@/components/ui/TextReveal";

export default function Runway() {
  return (
    <section className="pt-40 pb-20 px-8 max-w-screen-xl mx-auto min-h-screen">
      <TextReveal as="h1" text="Runway." className="text-fluid-h1 font-serif text-ink-black italic text-center mb-16" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="aspect-[3/4] relative overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1502163140606-888448ae8cfe?w=800&q=80" alt="Runway 1" className="w-full h-full object-cover grayscale mix-blend-multiply" />
          <div className="absolute inset-0 bg-crimson mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="aspect-[3/4] relative overflow-hidden mt-32 group">
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80" alt="Runway 2" className="w-full h-full object-cover grayscale mix-blend-multiply" />
          <div className="absolute inset-0 bg-crimson mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </section>
  );
}
