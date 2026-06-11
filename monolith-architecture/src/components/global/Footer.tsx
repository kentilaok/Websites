import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-obsidian text-stark-white border-t border-stark-white/20 uppercase font-sans mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stark-white/20">
        
        {/* Brand & Copyright Block */}
        <div className="p-6 md:p-12 flex flex-col justify-between space-y-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-2">Monolith</h2>
            <p className="text-xs text-stark-white/50 lowercase">brutalist architecture</p>
          </div>
          <div className="text-xs text-stark-white/50">
            &copy; {new Date().getFullYear()} Monolith. All rights reserved.
          </div>
        </div>

        {/* Links Block 1 */}
        <div className="p-6 md:p-12 flex flex-col justify-between">
          <ul className="space-y-4">
            <li>
              <Link href="/projects" className="text-sm tracking-widest hover:text-hyper-lime transition-colors duration-300 cursor-none flex items-center group">
                <span className="opacity-0 group-hover:opacity-100 mr-2 text-hyper-lime transition-opacity">[→]</span>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/studio" className="text-sm tracking-widest hover:text-hyper-lime transition-colors duration-300 cursor-none flex items-center group">
                <span className="opacity-0 group-hover:opacity-100 mr-2 text-hyper-lime transition-opacity">[→]</span>
                Studio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm tracking-widest hover:text-hyper-lime transition-colors duration-300 cursor-none flex items-center group">
                <span className="opacity-0 group-hover:opacity-100 mr-2 text-hyper-lime transition-opacity">[→]</span>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Block 2 / Socials */}
        <div className="p-6 md:p-12 flex flex-col justify-between">
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-sm tracking-widest hover:text-hyper-lime transition-colors duration-300 cursor-none flex items-center group">
                <span className="opacity-0 group-hover:opacity-100 mr-2 text-hyper-lime transition-opacity">[→]</span>
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm tracking-widest hover:text-hyper-lime transition-colors duration-300 cursor-none flex items-center group">
                <span className="opacity-0 group-hover:opacity-100 mr-2 text-hyper-lime transition-opacity">[→]</span>
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm tracking-widest hover:text-hyper-lime transition-colors duration-300 cursor-none flex items-center group">
                <span className="opacity-0 group-hover:opacity-100 mr-2 text-hyper-lime transition-opacity">[→]</span>
                Twitter
              </Link>
            </li>
          </ul>
          <div className="text-xs text-stark-white/50 mt-12 md:mt-0">
            Design <span className="text-hyper-lime">SYSTEM.ONLINE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
