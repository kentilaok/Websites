import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-900 border-t border-steel-700 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-tighter uppercase text-white flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-industrial-orange skew-x-[-15deg] flex items-center justify-center">
                <span className="text-white text-xs font-bold transform skew-x-[15deg]">OM</span>
              </div>
              <span className="text-industrial-orange">Omni</span>
              <span className="text-steel-500">Robotics</span>
            </Link>
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              Pioneering the future of autonomous systems and intelligent industrial robotics. Engineering solutions that push the boundaries of automation.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-steel-400 hover:text-safety-yellow transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-steel-400 hover:text-safety-yellow transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-steel-400 hover:text-safety-yellow transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-steel-400 hover:text-safety-yellow transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {["Home", "Fleet", "Case Studies", "Support", "Careers"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-steel-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Solutions</h3>
            <ul className="flex flex-col gap-3">
              {["Warehouse Automation", "Manufacturing", "Logistics", "Custom Integration", "Software API"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-steel-400 hover:text-white transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Stay Updated</h3>
            <p className="text-steel-400 text-sm mb-4">
              Subscribe to our newsletter for the latest in robotics engineering.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-steel-800 border border-steel-700 text-white px-4 py-2 text-sm focus:outline-none focus:border-industrial-orange transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-industrial-orange text-white px-4 py-2 uppercase font-bold text-sm tracking-widest skew-x-[-15deg] hover:bg-safety-yellow hover:text-steel-900 transition-colors w-fit"
              >
                <span className="block transform skew-x-[15deg]">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-steel-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-500 text-xs">
            &copy; {currentYear} Omni Robotics Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-steel-500 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-steel-500 hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-steel-500 hover:text-white text-xs transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
