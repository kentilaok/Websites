import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Legal", href: "#" },
  ];

  return (
    <footer className="w-full py-12 px-8 md:px-16 border-t border-white/5 bg-obsidian text-silver-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-serif text-xl tracking-widest text-white">
            OBSIDIAN<span className="text-silver-500">.</span>
          </Link>
          <p className="text-xs tracking-wider">
            &copy; {currentYear} Obsidian Wealth. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs tracking-[0.1em] uppercase">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
