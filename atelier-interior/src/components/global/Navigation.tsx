import Link from "next/link";

const links = [
  { name: "Collection", href: "/collection" },
  { name: "Craft", href: "/craft" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex justify-between p-8 md:p-12">
      
      {/* Top Left: Logo */}
      <header className="pointer-events-auto">
        <Link href="/" className="cursor-none">
          <span className="text-2xl font-serif italic tracking-wide text-charcoal">Atelier.</span>
        </Link>
      </header>

      {/* Right Edge: Vertical Navigation */}
      <nav className="pointer-events-auto flex flex-col items-end gap-8 pt-24 md:pt-32">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group flex items-center gap-4 cursor-none"
          >
            <span className="w-0 h-[1px] bg-muted-coral group-hover:w-8 transition-all duration-500 ease-out" />
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-charcoal/70 group-hover:text-charcoal transition-colors duration-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              {link.name}
            </span>
          </Link>
        ))}
      </nav>

    </div>
  );
}
