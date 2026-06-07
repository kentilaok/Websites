import TextReveal from "@/components/ui/TextReveal";

export default function ContactPage() {
  return (
    <main className="bg-charcoal text-warm-white min-h-screen pt-48 pb-32 px-6 md:px-32 font-sans pr-24 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <TextReveal as="h1" text="Commission a Space" className="text-4xl md:text-6xl font-serif italic mb-12 text-center" />
        <p className="text-sm tracking-widest uppercase opacity-70 leading-loose text-center mb-16">
          We are currently accepting inquiries for residential commissions in Q3 2027.
        </p>
        <div className="border border-warm-white/20 p-12 text-center text-xs tracking-widest uppercase">
          Email: inquiries@atelier-interior.studio<br/>
          Location: Copenhagen, Denmark
        </div>
      </div>
    </main>
  );
}
