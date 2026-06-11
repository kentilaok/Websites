import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 border-t border-white/5 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="group flex flex-col mb-6 inline-block">
              <span className="font-serif text-2xl tracking-widest text-white group-hover:text-gold-400 transition-colors duration-300">
                CRESCENT
              </span>
              <span className="text-[10px] tracking-[0.3em] text-white/50 group-hover:text-gold-500/80 uppercase">
                Culinary
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Experience the pinnacle of fine dining, where Eastern tradition meets Western innovation in every dish.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-gold-400 text-sm tracking-widest mb-6 uppercase">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors uppercase tracking-wider">Home</Link>
              </li>
              <li>
                <Link href="/tasting-menu" className="text-white/60 hover:text-white text-sm transition-colors uppercase tracking-wider">Tasting Menu</Link>
              </li>
              <li>
                <Link href="/chefs" className="text-white/60 hover:text-white text-sm transition-colors uppercase tracking-wider">Our Chefs</Link>
              </li>
              <li>
                <Link href="/reservations" className="text-white/60 hover:text-white text-sm transition-colors uppercase tracking-wider">Reservations</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-gold-400 text-sm tracking-widest mb-6 uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>123 Culinary Avenue</li>
              <li>Metropolis, NY 10001</li>
              <li className="pt-2">
                <a href="mailto:info@crescentculinary.com" className="hover:text-gold-400 transition-colors">info@crescentculinary.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-gold-400 transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-gold-400 text-sm tracking-widest mb-6 uppercase">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {currentYear} Crescent Culinary. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
