export default function HirePage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-deep-purple selection:text-electric-pink bg-acid-yellow text-deep-purple flex flex-col items-center justify-center border-[20px] border-deep-purple">
      
      <div className="max-w-2xl w-full bg-off-white border-8 border-deep-purple p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(36,0,70,1)] transform -rotate-1">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-8">Let's build something wild.</h1>
        
        <form className="flex flex-col gap-6 font-bold text-xl">
          <div className="flex flex-col gap-2">
            <label>YOUR NAME</label>
            <input type="text" className="border-4 border-deep-purple p-4 bg-transparent outline-none focus:bg-acid-yellow transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label>YOUR BUDGET</label>
            <select className="border-4 border-deep-purple p-4 bg-transparent outline-none focus:bg-acid-yellow transition-colors cursor-none">
              <option>$10k - $50k</option>
              <option>$50k - $100k</option>
              <option>$100k+</option>
            </select>
          </div>

          <button type="button" className="bg-electric-pink text-off-white font-black text-2xl p-6 mt-8 border-4 border-deep-purple hover:bg-deep-purple transition-colors cursor-none">
            SUBMIT INQUIRY
          </button>
        </form>
      </div>

    </main>
  );
}
