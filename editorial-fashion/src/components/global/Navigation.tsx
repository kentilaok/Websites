import Link from "next/link";

const links = [
  { name: "Archive", href: "/archive" },
  { name: "Editorial", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-warm-white/90 backdrop-blur-md pointer-events-auto border-b border-charcoal/20">
      <div className="flex flex-col items-center pt-8 pb-4">
        
        {/* Massive Centered Masthead Logo */}
        <Link href="/" className="mb-6 cursor-none hover:opacity-80 transition-opacity duration-300">
          <span className="text-6xl md:text-9xl font-serif tracking-tight leading-none uppercase">
            Vanguard
          </span>
        </Link>

        {/* Sticky Thin Bottom Menu */}
        <nav className="flex gap-16 md:gap-32 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.3em] font-sans hover:text-muted-coral transition-colors duration-500 cursor-none py-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
      </div>
    </header>
  );
}
