import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-verve-dark border-t border-verve-gray text-verve-light pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-black tracking-tighter uppercase mb-6 inline-block">
              Verve<span className="text-verve-orange">.</span>
            </Link>
            <p className="text-sm text-verve-light/70 max-w-xs">
              High-end athleisure and performance gear engineered for the modern athlete. Push your limits.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-verve-light">Shop</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/apparel" className="text-sm font-medium tracking-wide text-verve-light/70 hover:text-verve-orange transition-colors">
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-sm font-medium tracking-wide text-verve-light/70 hover:text-verve-orange transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/athletes" className="text-sm font-medium tracking-wide text-verve-light/70 hover:text-verve-orange transition-colors">
                  Athletes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-verve-light">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm font-medium tracking-wide text-verve-light/70 hover:text-verve-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-sm font-medium tracking-wide text-verve-light/70 hover:text-verve-orange transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-medium tracking-wide text-verve-light/70 hover:text-verve-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-verve-light">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-verve-gray/20 rounded-full hover:bg-verve-orange hover:text-verve-dark transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-verve-gray/20 rounded-full hover:bg-verve-orange hover:text-verve-dark transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-verve-gray/20 rounded-full hover:bg-verve-orange hover:text-verve-dark transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-verve-gray/20 rounded-full hover:bg-verve-orange hover:text-verve-dark transition-all duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-verve-gray/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-verve-light/50 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Verve Performance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-verve-light/50 hover:text-verve-light transition-colors font-medium tracking-wide">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-verve-light/50 hover:text-verve-light transition-colors font-medium tracking-wide">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
