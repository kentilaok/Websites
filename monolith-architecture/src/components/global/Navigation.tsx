import Link from "next/link";

const links = [
  { name: "Projects", href: "/projects", index: "01.1" },
  { name: "Studio", href: "/studio", index: "01.2" },
  { name: "Inquiries", href: "/contact", index: "01.3" },
];

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-obsidian text-stark-white pointer-events-auto border-b border-stark-white/20 uppercase font-sans">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stark-white/20 border-b border-stark-white/20">
        
        {/* Brand Block */}
        <div className="p-4 md:p-6 flex items-center col-span-2 md:col-span-1 border-b md:border-b-0 border-stark-white/20">
          <Link href="/" className="cursor-none group w-full flex justify-between items-center">
            <span className="text-xl font-bold tracking-tighter">Monolith</span>
            <span className="text-xs text-hyper-lime opacity-0 group-hover:opacity-100 transition-opacity">[SYS.ACTIVE]</span>
          </Link>
        </div>

        {/* Navigation Blocks */}
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="p-4 md:p-6 text-xs tracking-widest hover:bg-stark-white hover:text-obsidian transition-colors duration-300 cursor-none flex justify-between items-center group"
          >
            <span className="opacity-50 group-hover:opacity-100">[{link.index}]</span>
            <span>{link.name}</span>
          </Link>
        ))}

      </div>
    </header>
  );
}
