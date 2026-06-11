"use client";

import TextReveal from "@/components/ui/TextReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "The Monolith",
    location: "Kyoto, Japan",
    specs: "12,000 sq ft | Residential",
    year: "2025",
    description: "A concrete and glass private residence that captures the ephemeral nature of light, designed as a contemplative sanctuary away from the urban noise.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Aether Pavilion",
    location: "Oslo, Norway",
    specs: "45,000 sq ft | Cultural",
    year: "2024",
    description: "A cultural center blending seamlessly with the surrounding fjords. The floating roof structure appears weightless against the dramatic landscape.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Silence Gallery",
    location: "Berlin, Germany",
    specs: "22,000 sq ft | Exhibition",
    year: "2023",
    description: "An underground art space illuminated solely by carefully placed skylights, orchestrating a sequence of light and shadow.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Vertex Tower",
    location: "Dubai, UAE",
    specs: "1.2M sq ft | Commercial",
    year: "2026",
    description: "A commercial skyscraper redefining the skyline with its twisted geometry, maximizing shading while preserving panoramic views.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "05",
    title: "Horizon House",
    location: "Malibu, California",
    specs: "8,500 sq ft | Residential",
    year: "2022",
    description: "A cliffside retreat with infinity views over the Pacific. The boundaries between interior and exterior are completely dissolved.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "06",
    title: "Lumen Library",
    location: "Helsinki, Finland",
    specs: "60,000 sq ft | Public",
    year: "2024",
    description: "A public library designed to maximize natural light during dark winters, featuring a monumental timber roof and glass facade.",
    image: "https://images.unsplash.com/photo-1541123437800-1c1fb5ec3bc2?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen pt-40 pb-32 px-6 md:px-20 bg-background text-foreground">
      <div className="mb-32">
        <TextReveal as="h1" text="SELECTED" className="text-6xl md:text-[10vw] font-serif leading-none tracking-tight" />
        <TextReveal as="h1" text="WORKS" className="text-6xl md:text-[10vw] font-serif leading-none tracking-tight text-[var(--color-accent)]" />
      </div>

      <div className="flex flex-col gap-32 md:gap-48">
        {projects.map((project, index) => (
          <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center group">
            <div className={`col-span-1 md:col-span-7 relative aspect-[16/10] overflow-hidden bg-zinc-100 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </div>
            
            <div className={`col-span-1 md:col-span-5 flex flex-col justify-center ${index % 2 !== 0 ? 'md:pr-16' : 'md:pl-16'}`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-serif text-[var(--color-accent)]">{project.id}</span>
                <div className="h-[1px] bg-gray-300 w-16" />
                <span className="text-xs tracking-widest uppercase text-muted-foreground">{project.year}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif mb-6 group-hover:text-[var(--color-accent)] transition-colors">{project.title}</h2>
              
              <div className="flex flex-col gap-2 mb-8 text-xs tracking-widest uppercase text-muted-foreground">
                <p>Location — {project.location}</p>
                <p>Specs — {project.specs}</p>
              </div>
              
              <p className="text-lg font-light leading-relaxed mb-10 text-gray-600">
                {project.description}
              </p>
              
              <button className="flex items-center gap-4 text-xs tracking-widest uppercase w-fit group/btn">
                <span className="group-hover/btn:text-[var(--color-accent)] transition-colors">Explore Project</span>
                <span className="bg-foreground text-background p-3 rounded-full group-hover/btn:bg-[var(--color-accent)] group-hover/btn:text-white transition-colors">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action Footer inside projects */}
      <div className="mt-48 pt-20 border-t border-border flex flex-col items-center text-center">
        <TextReveal as="h2" text="Have a project in mind?" className="text-4xl md:text-6xl font-serif mb-8" />
        <button className="px-8 py-4 bg-foreground text-background text-sm tracking-widest uppercase hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300">
          Commission Us
        </button>
      </div>
    </main>
  );
}
