import Link from "next/link";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-12 mix-blend-difference text-linen pointer-events-none">
      <div className="flex justify-between items-start pointer-events-auto">
        
        {/* Left Links */}
        <nav className="flex flex-col gap-4 text-xs tracking-[0.2em] uppercase">
          <Link href="/suites" className="cursor-none hover:opacity-50 transition-opacity">The Suites</Link>
          <Link href="/wellness" className="cursor-none hover:opacity-50 transition-opacity">Wellness</Link>
        </nav>

        {/* Center Massive Crest */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-auto">
          <Link href="/" className="cursor-none">
            <h1 className="font-serif text-3xl italic tracking-widest">Le<br/>Montagne</h1>
          </Link>
        </div>

        {/* Right Links */}
        <nav className="flex flex-col gap-4 text-xs tracking-[0.2em] uppercase text-right">
          <Link href="/reservations" className="cursor-none hover:opacity-50 transition-opacity">Reservations</Link>
          <button className="cursor-none hover:opacity-50 transition-opacity">Menu</button>
        </nav>

      </div>
    </header>
  );
}
