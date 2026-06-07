import TextReveal from "@/components/ui/TextReveal";

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-electric-pink selection:text-off-white bg-off-white">
      <TextReveal as="h1" text="The Archive" className="text-fluid-h1 text-deep-purple mb-24 text-center" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-16 max-w-7xl mx-auto">
        
        <div className="group cursor-none">
          <div className="aspect-video bg-deep-purple border-8 border-deep-purple shadow-[16px_16px_0px_0px_rgba(36,0,70,1)] overflow-hidden mb-8">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" alt="Retro" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
          </div>
          <h2 className="text-4xl font-black uppercase mb-2">Synthwave App</h2>
          <p className="text-xl font-bold text-electric-pink">UX/UI & WebGL</p>
        </div>

        <div className="group cursor-none md:translate-y-24">
          <div className="aspect-video bg-deep-purple border-8 border-deep-purple shadow-[16px_16px_0px_0px_rgba(36,0,70,1)] overflow-hidden mb-8">
            <img src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=800&q=80" alt="Abstract" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
          </div>
          <h2 className="text-4xl font-black uppercase mb-2">Chrome Type</h2>
          <p className="text-xl font-bold text-electric-pink">Brand Identity</p>
        </div>

      </div>
    </main>
  );
}
