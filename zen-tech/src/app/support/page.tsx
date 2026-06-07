export default function SupportPage() {
  return (
    <main className="min-h-screen pt-48 pb-48 px-6 md:px-12 selection:bg-carbon selection:text-pure-white flex flex-col items-center justify-center">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-light mb-6">Concierge Support</h1>
        <p className="text-titanium text-sm mb-16">For repair requests, please enter your unit's serial number.</p>

        <form className="flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-titanium">SERIAL NUMBER (S/N)</label>
            <input type="text" className="border-b border-carbon/20 py-4 outline-none focus:border-carbon transition-colors bg-transparent" placeholder="e.g. A1-00492" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-titanium">ISSUE DESCRIPTION</label>
            <textarea className="border-b border-carbon/20 py-4 outline-none focus:border-carbon transition-colors bg-transparent resize-none h-32" placeholder="Detail the acoustic or mechanical fault..."></textarea>
          </div>

          <button type="button" className="bg-carbon text-pure-white py-4 rounded-full hover:bg-titanium transition-colors cursor-none mt-4">
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}
