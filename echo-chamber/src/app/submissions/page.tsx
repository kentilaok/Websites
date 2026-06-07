import TextReveal from "@/components/ui/TextReveal";

export default function SubmissionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-0">
        <TextReveal>
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-8 border-b-8 border-ec-white pb-8">
            SUBMIT
          </h1>
        </TextReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <TextReveal delay={0.1}>
            <div className="border-4 border-ec-white p-8 bg-ec-black brutalist-shadow">
              <h2 className="text-3xl font-bold uppercase mb-8">WARNING.</h2>
              <ul className="space-y-4 font-bold text-lg text-ec-gray list-disc pl-6">
                <li>WE ONLY ACCEPT PRIVATE SOUNDCLOUD LINKS.</li>
                <li>DO NOT SEND MP3 FILES. THEY WILL BE DELETED.</li>
                <li>DO NOT SEND SPOTIFY LINKS.</li>
                <li>IF IT SOUNDS LIKE EVERYTHING ELSE, DO NOT SEND IT.</li>
                <li>WE LISTEN TO EVERYTHING. WE RARELY REPLY.</li>
              </ul>
            </div>
          </TextReveal>

          <TextReveal delay={0.2}>
            <form className="border-4 border-ec-white p-8 bg-ec-black brutalist-shadow flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-xl uppercase">ALIAS</label>
                <input type="text" className="bg-transparent border-4 border-ec-white p-4 font-bold text-xl outline-none focus:border-ec-lime focus:bg-ec-gray transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-xl uppercase">SECURE LINK</label>
                <input type="url" placeholder="https://soundcloud.com/..." className="bg-transparent border-4 border-ec-white p-4 font-bold text-xl outline-none focus:border-ec-lime focus:bg-ec-gray transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-xl uppercase">MANIFESTO (OPTIONAL)</label>
                <textarea rows={4} className="bg-transparent border-4 border-ec-white p-4 font-bold text-xl outline-none focus:border-ec-lime focus:bg-ec-gray transition-colors resize-none" />
              </div>

              <button type="button" className="bg-ec-white text-ec-black font-black text-2xl uppercase py-6 hover:bg-ec-lime transition-colors mt-4">
                TRANSMIT
              </button>
            </form>
          </TextReveal>
        </div>
      </div>
    </div>
  );
}
