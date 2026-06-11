import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-charcoal text-linen py-12 px-6 md:px-12 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl italic tracking-widest mb-2">Le Montagne</h2>
          <p className="font-sans text-xs uppercase tracking-widest opacity-70">Exclusive Boutique Hotel</p>
        </div>
        
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-xs uppercase tracking-widest">
          <Link href="/privacy" className="cursor-none hover:opacity-50 transition-opacity">Privacy Policy</Link>
          <Link href="/terms" className="cursor-none hover:opacity-50 transition-opacity">Terms of Service</Link>
          <Link href="/contact" className="cursor-none hover:opacity-50 transition-opacity">Contact Us</Link>
        </nav>
      </div>
      
      <div className="w-full h-[1px] bg-linen/20"></div>
      
      <div className="text-center font-sans text-xs uppercase tracking-widest opacity-50">
        &copy; {new Date().getFullYear()} Le Montagne. All rights reserved.
      </div>
    </footer>
  );
}
