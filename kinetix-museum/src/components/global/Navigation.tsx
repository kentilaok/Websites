'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Exhibitions', path: '/exhibitions' },
  { name: 'Collections', path: '/collections' },
  { name: 'Visit', path: '/visit' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.to('.mobile-menu', { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out' });
      gsap.fromTo('.mobile-link', 
        { y: 50, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: 'power3.out' }
      );
    } else {
      gsap.to('.mobile-menu', { autoAlpha: 0, y: '-100%', duration: 0.5, ease: 'power3.in' });
    }
  }, [isOpen]);

  return (
    <header className="fixed w-full top-0 z-[100] px-6 py-8 md:px-12 md:py-10 mix-blend-difference text-white">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase relative group">
          <span className="block group-hover:-translate-y-1 transition-transform duration-300">Kinetix</span>
          <span className="block text-xs font-medium tracking-[0.2em] opacity-70 group-hover:opacity-100 transition-opacity">Museum</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`text-sm uppercase tracking-widest font-medium relative overflow-hidden group ${
                pathname === link.path ? 'opacity-100' : 'opacity-60 hover:opacity-100'
              } transition-opacity duration-300`}
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.name}</span>
              <span className="inline-block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full text-peach">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden z-[110]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed inset-0 bg-stark-black text-stark-white invisible -translate-y-full flex flex-col justify-center px-6 z-[105]">
        <nav className="flex flex-col gap-8 text-5xl font-bold tracking-tighter uppercase">
          {navLinks.map((link) => (
            <div key={link.name} className="overflow-hidden">
              <Link 
                href={link.path}
                className="mobile-link block opacity-0 hover:text-lilac transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
