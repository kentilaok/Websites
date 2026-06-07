import Link from "next/link";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      
      <div className="absolute top-6 left-6 bg-acid-yellow border-4 border-deep-purple p-4 transform -rotate-3 pointer-events-auto hover:rotate-0 transition-transform">
        <Link href="/" className="cursor-none font-black text-2xl uppercase tracking-tighter">
          ACID_POP
        </Link>
      </div>

      <nav className="absolute top-12 right-12 flex flex-col items-end gap-2 pointer-events-auto">
        <Link href="/work" className="cursor-none bg-deep-purple text-off-white font-bold text-xl px-4 py-2 hover:bg-electric-pink transition-colors transform rotate-2">
          THE WORK
        </Link>
        <Link href="/culture" className="cursor-none bg-deep-purple text-off-white font-bold text-xl px-4 py-2 hover:bg-electric-pink transition-colors transform -rotate-1">
          OUR CULTURE
        </Link>
        <Link href="/hire" className="cursor-none bg-electric-pink text-deep-purple font-black text-2xl px-6 py-3 mt-4 hover:scale-110 transition-transform shadow-[8px_8px_0px_0px_rgba(36,0,70,1)] border-4 border-deep-purple">
          HIRE US
        </Link>
      </nav>

    </header>
  );
}
