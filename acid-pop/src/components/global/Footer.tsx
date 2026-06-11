import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-purple text-off-white py-12 px-6 border-t-8 border-acid-yellow mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start transform -rotate-2">
          <h2 className="font-black text-4xl text-electric-pink uppercase tracking-tighter">ACID_POP</h2>
          <p className="text-acid-yellow font-bold mt-2">WE DON'T DO BORING.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4 transform rotate-1">
          <div className="flex gap-6">
            <Link href="/work" className="cursor-none font-bold text-xl hover:text-electric-pink transition-colors">
              THE WORK
            </Link>
            <Link href="/culture" className="cursor-none font-bold text-xl hover:text-electric-pink transition-colors">
              OUR CULTURE
            </Link>
            <Link href="/hire" className="cursor-none font-bold text-xl hover:text-electric-pink transition-colors">
              HIRE US
            </Link>
          </div>
          <p className="text-sm opacity-70 mt-4">&copy; {new Date().getFullYear()} ACID_POP. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
