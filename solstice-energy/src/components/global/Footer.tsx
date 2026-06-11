import Link from "next/link";
import { Sun, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-solar-100/50 border-t border-solar-200 mt-20 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background sunburst */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-solar-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <Sun className="text-solar-500 group-hover:rotate-90 transition-transform duration-700" size={32} />
              <span className="text-2xl font-bold tracking-tighter text-gradient">SOLSTICE</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Empowering a sustainable future through advanced solar technologies and innovative energy solutions for a brighter tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-solar-200 flex items-center justify-center text-gray-600 hover:text-solar-600 hover:border-solar-500 transition-colors shadow-sm">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-solar-200 flex items-center justify-center text-gray-600 hover:text-solar-600 hover:border-solar-500 transition-colors shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-solar-200 flex items-center justify-center text-gray-600 hover:text-solar-600 hover:border-solar-500 transition-colors shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-solar-200 flex items-center justify-center text-gray-600 hover:text-solar-600 hover:border-solar-500 transition-colors shadow-sm">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-gray-600 hover:text-solar-600 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-solar-600 text-sm transition-colors">Careers</Link></li>
              <li><Link href="/technology" className="text-gray-600 hover:text-solar-600 text-sm transition-colors">Technology</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-solar-600 text-sm transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-solar-600 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/blog" className="text-gray-600 hover:text-solar-600 text-sm transition-colors">Blog</Link></li>
              <li><Link href="/investors" className="text-gray-600 hover:text-solar-600 text-sm transition-colors">Investors</Link></li>
              <li><Link href="/press" className="text-gray-600 hover:text-solar-600 text-sm transition-colors">Press</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-solar-600 text-sm transition-colors">FAQ</Link></li>
              <li><Link href="/support" className="text-gray-600 hover:text-solar-600 text-sm transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter to receive the latest news and updates.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-lg border border-solar-200 bg-white focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent transition-shadow text-sm"
              />
              <button 
                type="submit" 
                className="w-full bg-solar-500 hover:bg-solar-600 text-white font-medium py-3 rounded-lg transition-colors shadow-md shadow-solar-500/20"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-solar-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Solstice Energy Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-solar-600 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-solar-600 text-sm transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-gray-500 hover:text-solar-600 text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
