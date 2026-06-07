import Link from "next/link";

const links = [
  { name: "Concept", href: "/" },
  { name: "Tasting Menu", href: "/menu" },
  { name: "Provenance", href: "/about" },
];

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference pointer-events-none p-6 md:p-12">
      <div className="flex justify-between items-start w-full text-warm-bone pointer-events-auto">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex flex-col group cursor-none">
          <span className="text-4xl md:text-5xl font-serif tracking-tighter leading-none group-hover:italic transition-all duration-500">
            Aura.
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.3em] font-sans mt-2 opacity-60">
            Est. 2026
          </span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex gap-12 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-sans hover:text-terracotta transition-colors duration-500 cursor-none relative overflow-hidden group"
            >
              <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
                {link.name}
              </span>
              <span className="absolute left-0 top-0 inline-block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-terracotta italic font-serif text-sm">
                {link.name}
              </span>
            </Link>
          ))}
          <Link 
            href="/contact"
            className="text-xs uppercase tracking-[0.2em] font-sans border-b border-warm-bone/30 pb-1 hover:border-terracotta hover:text-terracotta transition-colors duration-500 cursor-none"
          >
            Reservations
          </Link>
        </nav>
        
        {/* Mobile menu trigger */}
        <button className="md:hidden text-xs uppercase tracking-widest font-sans cursor-none">
          Menu
        </button>

      </div>
    </header>
  );
}
