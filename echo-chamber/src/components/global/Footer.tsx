import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-ec-white bg-ec-black text-ec-white py-12 px-8 md:px-32 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-ec-gray opacity-20 whitespace-nowrap pointer-events-none select-none mix-blend-overlay">
        ECHO CHAMBER
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <h2 className="text-4xl font-black tracking-tighter text-ec-lime uppercase">
            Echo Chamber
          </h2>
          <p className="text-sm tracking-widest uppercase leading-relaxed text-ec-gray">
            Independent Record Label. 
            <br />
            No Compromise. No Commercialism. 
            <br />
            Pure Sonic Destruction.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm font-bold tracking-widest uppercase">
          <Link href="/about" className="hover:text-ec-lime transition-colors w-fit border-b-2 border-transparent hover:border-ec-lime">
            [ ABOUT US ]
          </Link>
          <Link href="/contact" className="hover:text-ec-lime transition-colors w-fit border-b-2 border-transparent hover:border-ec-lime">
            [ CONTACT ]
          </Link>
          <Link href="/privacy" className="hover:text-ec-lime transition-colors w-fit border-b-2 border-transparent hover:border-ec-lime">
            [ PRIVACY POLICY ]
          </Link>
          <Link href="/terms" className="hover:text-ec-lime transition-colors w-fit border-b-2 border-transparent hover:border-ec-lime">
            [ TERMS OF SERVICE ]
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-16 pt-8 border-t-2 border-ec-gray flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest text-ec-gray uppercase">
        <p>&copy; {currentYear} Echo Chamber Records. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-ec-lime transition-colors">TWITTER</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-ec-lime transition-colors">INSTAGRAM</a>
          <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="hover:text-ec-lime transition-colors">SOUNDCLOUD</a>
        </div>
      </div>
    </footer>
  );
}
