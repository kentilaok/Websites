import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-stark-black text-stark-white px-6 py-12 md:px-12 md:py-20 flex flex-col gap-12 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex flex-col gap-6">
          <Link href="/" className="text-3xl md:text-5xl font-bold tracking-tighter uppercase relative group inline-block">
            <span className="block">Kinetix</span>
            <span className="block text-sm md:text-base font-medium tracking-[0.2em] opacity-70 group-hover:opacity-100 transition-opacity">Museum</span>
          </Link>
          <p className="text-stark-white/60 max-w-sm text-sm md:text-base leading-relaxed">
            A stark, minimalist exhibition of digital masterpieces. Exploring the intersection of code and canvas.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-24">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-widest font-medium">
            <span className="text-stark-white/40 mb-2 text-xs">Explore</span>
            <Link href="/exhibitions" className="hover:text-peach transition-colors duration-300">Exhibitions</Link>
            <Link href="/collections" className="hover:text-peach transition-colors duration-300">Collections</Link>
            <Link href="/visit" className="hover:text-peach transition-colors duration-300">Visit</Link>
          </nav>
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-widest font-medium">
            <span className="text-stark-white/40 mb-2 text-xs">Legal</span>
            <Link href="/privacy" className="hover:text-lilac transition-colors duration-300">Privacy</Link>
            <Link href="/terms" className="hover:text-lilac transition-colors duration-300">Terms</Link>
          </nav>
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-widest font-medium">
            <span className="text-stark-white/40 mb-2 text-xs">Social</span>
            <a href="#" className="hover:text-stark-white text-stark-white/70 transition-colors duration-300">Instagram</a>
            <a href="#" className="hover:text-stark-white text-stark-white/70 transition-colors duration-300">Twitter</a>
            <a href="#" className="hover:text-stark-white text-stark-white/70 transition-colors duration-300">Artsy</a>
          </nav>
        </div>
      </div>

      <div className="border-t border-stark-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-stark-white/50 uppercase">
        <p>&copy; {new Date().getFullYear()} Kinetix Museum. All rights reserved.</p>
        <p>Curated Digital Experiences</p>
      </div>
    </footer>
  );
}
