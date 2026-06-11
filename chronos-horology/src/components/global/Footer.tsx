import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker border-t border-brand-gray/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-2xl tracking-[0.2em] text-brand-light uppercase block mb-6">
              Chronos
            </Link>
            <p className="text-brand-text/70 text-sm max-w-md leading-relaxed">
              Crafting timeless elegance since 1892. Our master horologists dedicate their lives to the pursuit of perfection, creating timepieces that transcend generations.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-light text-xs font-medium tracking-[0.15em] uppercase mb-6">Collections</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/timepieces/heritage" className="text-sm text-brand-text/70 hover:text-brand-gold transition-colors duration-300">Heritage</Link>
              </li>
              <li>
                <Link href="/timepieces/avant-garde" className="text-sm text-brand-text/70 hover:text-brand-gold transition-colors duration-300">Avant-Garde</Link>
              </li>
              <li>
                <Link href="/timepieces/complications" className="text-sm text-brand-text/70 hover:text-brand-gold transition-colors duration-300">Grand Complications</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-light text-xs font-medium tracking-[0.15em] uppercase mb-6">House</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/craftsmanship" className="text-sm text-brand-text/70 hover:text-brand-gold transition-colors duration-300">Our Craft</Link>
              </li>
              <li>
                <Link href="/boutiques" className="text-sm text-brand-text/70 hover:text-brand-gold transition-colors duration-300">Boutiques</Link>
              </li>
              <li>
                <Link href="/concierge" className="text-sm text-brand-text/70 hover:text-brand-gold transition-colors duration-300">Concierge</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-gray/30 gap-4">
          <p className="text-brand-text/50 text-xs">
            &copy; {currentYear} Chronos Horology. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-brand-text/50 text-xs hover:text-brand-gold transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="text-brand-text/50 text-xs hover:text-brand-gold transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
