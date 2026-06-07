import TextReveal from "@/components/ui/TextReveal";

export default function StockistsPage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-24 selection:bg-rose selection:text-skin">
      <div className="max-w-4xl mx-auto text-center mb-32">
        <TextReveal as="h1" text="Retail Partners" className="text-6xl md:text-8xl font-serif italic mb-12" />
        <p className="text-sm font-sans uppercase tracking-[0.2em] opacity-60">Authorized Stockists Globally.</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-center md:text-left">
        
        <div className="border-t border-oud/20 pt-8">
          <h2 className="font-serif text-3xl italic mb-6">Europe</h2>
          <ul className="flex flex-col gap-6 font-sans text-sm uppercase tracking-widest opacity-80">
            <li>
              <strong>Nose Paris</strong><br/>
              <span className="opacity-60 text-xs mt-1 block">20 Rue Bachaumont, Paris</span>
            </li>
            <li>
              <strong>Liberty London</strong><br/>
              <span className="opacity-60 text-xs mt-1 block">Regent St, Carnaby, London</span>
            </li>
            <li>
              <strong>Avery Perfume Gallery</strong><br/>
              <span className="opacity-60 text-xs mt-1 block">Corso Como 2, Milan</span>
            </li>
          </ul>
        </div>

        <div className="border-t border-oud/20 pt-8">
          <h2 className="font-serif text-3xl italic mb-6">North America</h2>
          <ul className="flex flex-col gap-6 font-sans text-sm uppercase tracking-widest opacity-80">
            <li>
              <strong>Scent Bar NY</strong><br/>
              <span className="opacity-60 text-xs mt-1 block">244 Elizabeth St, New York</span>
            </li>
            <li>
              <strong>Luckyscent</strong><br/>
              <span className="opacity-60 text-xs mt-1 block">7405 Beverly Blvd, Los Angeles</span>
            </li>
            <li>
              <strong>SSENSE Montreal</strong><br/>
              <span className="opacity-60 text-xs mt-1 block">418 Rue Saint-Sulpice, Montreal</span>
            </li>
          </ul>
        </div>

      </div>
    </main>
  );
}
