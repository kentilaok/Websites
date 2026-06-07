import TextReveal from "@/components/ui/TextReveal";

export default function ContactPage() {
  return (
    <main className="bg-charcoal text-warm-white min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-warm-white selection:text-charcoal flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center">
        <span className="text-xs font-sans uppercase tracking-[0.3em] mb-8 block text-muted-coral">Showroom & Press</span>
        <TextReveal as="h1" text="Inquiries." className="text-6xl md:text-9xl font-serif tracking-tight mb-16 italic" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left border-t border-warm-white/20 pt-16">
          <div>
            <h3 className="font-serif text-2xl mb-4">Paris Showroom</h3>
            <p className="font-sans text-sm uppercase tracking-widest opacity-70 leading-loose">
              14 Rue de Turenne<br/>
              75003 Paris, France<br/>
              <br/>
              By Appointment Only
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Press Office</h3>
            <p className="font-sans text-sm uppercase tracking-widest opacity-70 leading-loose">
              press@vanguard.com<br/>
              +33 1 42 72 00 00<br/>
              <br/>
              Requests for pull must be submitted 48 hours in advance.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
