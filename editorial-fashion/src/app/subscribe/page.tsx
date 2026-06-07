import TextReveal from "@/components/ui/TextReveal";

export default function Subscribe() {
  return (
    <section className="h-svh w-full flex flex-col justify-center items-center px-8 bg-crimson text-pure-white text-center overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <TextReveal as="h1" text="Join the Vanguard" className="text-fluid-h2 font-serif uppercase leading-none mb-8 mix-blend-difference" />
      
      <p className="font-sans font-bold uppercase tracking-widest mb-12 max-w-md mx-auto mix-blend-difference">
        Exclusive editorial drops, runway access, and industry insights delivered to your inbox weekly.
      </p>

      <form className="w-full max-w-lg flex flex-col md:flex-row gap-4 relative z-10">
        <input 
          type="email" 
          placeholder="ENTER EMAIL" 
          className="flex-1 bg-pure-white text-ink-black px-6 py-4 font-sans font-bold uppercase placeholder:text-ink-black/40 focus:outline-none"
        />
        <button 
          type="button"
          className="bg-ink-black text-pure-white px-8 py-4 font-sans font-bold uppercase hover:bg-pure-white hover:text-ink-black transition-colors"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
