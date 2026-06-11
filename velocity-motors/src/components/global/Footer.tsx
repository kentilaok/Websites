import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-vm-black border-t border-white/5 py-16 px-6 md:px-12 lg:px-24 md:ml-24">
      <div className="max-w-[80rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl md:text-5xl font-syncopate font-bold text-white mb-6">
              VELOCITY<br /><span className="text-vm-red">MOTORS</span>
            </h2>
            <p className="text-vm-steel font-manrope max-w-sm">
              Pushing the boundaries of aerodynamics and speed. The future of hyper-car manufacturing.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-syncopate text-white text-sm mb-2 tracking-widest">COMPANY</h3>
            <Link href="/about" className="text-vm-steel hover:text-vm-red transition-colors font-manrope">About Us</Link>
            <Link href="/fleet" className="text-vm-steel hover:text-vm-red transition-colors font-manrope">The Fleet</Link>
            <Link href="/careers" className="text-vm-steel hover:text-vm-red transition-colors font-manrope">Careers</Link>
            <Link href="/contact" className="text-vm-steel hover:text-vm-red transition-colors font-manrope">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-syncopate text-white text-sm mb-2 tracking-widest">LEGAL</h3>
            <Link href="/privacy" className="text-vm-steel hover:text-vm-red transition-colors font-manrope">Privacy Policy</Link>
            <Link href="/terms" className="text-vm-steel hover:text-vm-red transition-colors font-manrope">Terms of Service</Link>
            <Link href="/cookies" className="text-vm-steel hover:text-vm-red transition-colors font-manrope">Cookie Policy</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-vm-steel text-sm font-manrope">
          <p>&copy; {new Date().getFullYear()} Velocity Motors. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0 font-syncopate text-xs tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">INSTAGRAM</Link>
            <Link href="#" className="hover:text-white transition-colors">TWITTER</Link>
            <Link href="#" className="hover:text-white transition-colors">YOUTUBE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
