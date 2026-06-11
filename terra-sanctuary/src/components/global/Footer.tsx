import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ts-moss text-ts-sand py-24 border-t-8 border-ts-clay mt-32 relative z-10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-playfair text-3xl italic font-bold mb-6">Terra</div>
            <p className="opacity-60 max-w-sm font-manrope">
              A sanctuary for those who seek absolute quiet and a deeper connection to the earth. Built entirely from raw, local materials.
            </p>
          </div>
          <div>
            <h4 className="font-bold tracking-widest uppercase mb-6 text-sm font-manrope">Location</h4>
            <p className="opacity-60 font-manrope">
              The Highlands<br />
              Sector 4<br />
              Coordinates: 41.3851° N, 2.1734° E
            </p>
          </div>
          <div>
            <h4 className="font-bold tracking-widest uppercase mb-6 text-sm font-manrope">Connect</h4>
            <ul className="space-y-2 opacity-60 font-manrope">
              <li>
                <Link href="#" className="hover:text-ts-clay transition-colors">Instagram</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-ts-clay transition-colors">Journal</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-ts-clay transition-colors">Press</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-ts-sand/20 flex flex-col md:flex-row items-center justify-between gap-4 font-manrope text-sm opacity-60">
          <p>&copy; {currentYear} Terra Sanctuary. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-ts-clay transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-ts-clay transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
