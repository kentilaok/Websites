import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-8 py-12 md:py-24 bg-oud text-skin flex flex-col gap-12 rounded-t-[3rem] mt-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex flex-col gap-4 max-w-sm">
          <Link href="/" className="cursor-none font-serif text-4xl md:text-6xl italic tracking-widest hover:text-rose transition-colors">
            Sillage.
          </Link>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs text-fluid-p">
            Crafting tactile olfactory experiences. Unseen but deeply felt.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-24 text-sm uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-4">
            <h4 className="opacity-50 mb-2">Explore</h4>
            <Link href="/fragrances" className="hover:text-rose transition-colors cursor-none">Fragrances</Link>
            <Link href="/about" className="hover:text-rose transition-colors cursor-none">The Nose</Link>
            <Link href="/stockists" className="hover:text-rose transition-colors cursor-none">Stockists</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="opacity-50 mb-2">Social</h4>
            <a href="#" className="hover:text-rose transition-colors cursor-none">Instagram</a>
            <a href="#" className="hover:text-rose transition-colors cursor-none">TikTok</a>
            <a href="#" className="hover:text-rose transition-colors cursor-none">Journal</a>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-skin/20"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50 uppercase tracking-[0.1em]">
        <p>&copy; {currentYear} Sillage Parfums. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-rose transition-colors cursor-none">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-rose transition-colors cursor-none">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
