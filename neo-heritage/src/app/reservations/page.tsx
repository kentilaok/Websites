export default function ReservationsPage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-12 flex flex-col items-center justify-center selection:bg-sage selection:text-linen">
      <div className="max-w-2xl w-full">
        <h1 className="font-serif text-5xl italic mb-16 text-center">Your Retreat Awaits</h1>
        
        <form className="flex flex-col gap-12 text-sm uppercase tracking-widest">
          
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <label className="text-xs opacity-50">Arrival Date</label>
              <input type="text" placeholder="DD.MM.YYYY" className="bg-transparent border-b border-ink/20 pb-2 outline-none focus:border-ink transition-colors" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-xs opacity-50">Departure Date</label>
              <input type="text" placeholder="DD.MM.YYYY" className="bg-transparent border-b border-ink/20 pb-2 outline-none focus:border-ink transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-xs opacity-50">Guests</label>
            <select className="bg-transparent border-b border-ink/20 pb-2 outline-none focus:border-ink transition-colors cursor-none">
              <option>1 Adult</option>
              <option>2 Adults</option>
            </select>
            <p className="text-[10px] opacity-40 mt-2 lowercase tracking-normal">Note: Le Montagne is an adults-only property.</p>
          </div>

          <button type="button" className="bg-ink text-linen py-6 hover:bg-sage transition-colors cursor-none">
            Request Availability
          </button>

        </form>
      </div>
    </main>
  );
}
