import TextReveal from "@/components/ui/TextReveal";

export default function CraftPage() {
  return (
    <main className="bg-warm-white text-charcoal min-h-screen pt-48 pb-32 px-6 md:px-32 font-sans pr-24 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <TextReveal as="h1" text="The Craft" className="text-6xl md:text-8xl font-serif italic mb-12" />
        <p className="text-lg leading-loose opacity-80 max-w-2xl mx-auto">
          We believe in the integrity of raw materials. Unlacquered brass that patinas with human touch. Plaster applied by hand. Wood sourced from sustainable old-growth forests. The craft is the ultimate luxury.
        </p>
      </div>
    </main>
  );
}
