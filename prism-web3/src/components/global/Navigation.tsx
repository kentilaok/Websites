import Link from "next/link";

const links = [
  { name: "Platform", href: "/platform" },
  { name: "Vision", href: "/vision" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      {/* Glassmorphic Floating Pill */}
      <header className="flex items-center gap-8 px-8 py-4 bg-void-black/60 backdrop-blur-xl border border-stark-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        
        <Link href="/" className="cursor-none mr-4">
          <span className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-indigo">
            PRISM
          </span>
        </Link>

        <nav className="flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-stark-white/70 hover:text-stark-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 cursor-none"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button className="ml-4 px-6 py-2 bg-stark-white text-void-black text-xs font-mono uppercase tracking-widest rounded-full hover:bg-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] transition-all duration-300 cursor-none">
          Launch App
        </button>
        
      </header>
    </div>
  );
}
