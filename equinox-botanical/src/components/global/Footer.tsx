import Link from "next/link";
import { Leaf, Mail, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-earth-50 py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <Leaf className="w-6 h-6 transition-transform duration-500 group-hover:rotate-45 text-sage-300" />
              <span className="font-serif text-xl tracking-wider">EQUINOX</span>
            </Link>
            <p className="text-sm text-earth-50/70 leading-relaxed max-w-xs">
              Curating rare botanical specimens and designing living art installations for the modern space.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg text-sage-200 mb-2">Explore</h4>
            <Link href="/" className="text-sm text-earth-50/70 hover:text-sage-300 transition-colors duration-300 w-fit">
              Home
            </Link>
            <Link href="/collections" className="text-sm text-earth-50/70 hover:text-sage-300 transition-colors duration-300 w-fit">
              Collections
            </Link>
            <Link href="/installations" className="text-sm text-earth-50/70 hover:text-sage-300 transition-colors duration-300 w-fit">
              Installations
            </Link>
            <Link href="/care-guide" className="text-sm text-earth-50/70 hover:text-sage-300 transition-colors duration-300 w-fit">
              Care Guide
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg text-sage-200 mb-2">Information</h4>
            <Link href="/about" className="text-sm text-earth-50/70 hover:text-sage-300 transition-colors duration-300 w-fit">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-earth-50/70 hover:text-sage-300 transition-colors duration-300 w-fit">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-earth-50/70 hover:text-sage-300 transition-colors duration-300 w-fit">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-earth-50/70 hover:text-sage-300 transition-colors duration-300 w-fit">
              Terms of Service
            </Link>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg text-sage-200 mb-2">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-earth-50/70 hover:text-sage-300 transition-colors duration-300" aria-label="Mail">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-earth-50/70 hover:text-sage-300 transition-colors duration-300" aria-label="Social">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-earth-50/70 hover:text-sage-300 transition-colors duration-300" aria-label="Website">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-earth-50/50">
          <p>&copy; {currentYear} Equinox Botanical. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
}
