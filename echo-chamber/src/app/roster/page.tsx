import TextReveal from "@/components/ui/TextReveal";

const roster = [
  { name: "NULL_POINTER", genre: "INDUSTRIAL TECHNO", status: "ACTIVE", desc: "Pioneering the sound of raw server banks failing in real time.", cta: "BOOK NULL_POINTER" },
  { name: "VOID_WALKER", genre: "DARK AMBIENT", status: "ON TOUR", desc: "Sonic landscapes crafted from the deepest frequencies of human anxiety.", cta: "VIEW TOUR DATES" },
  { name: "ERROR_CODE", genre: "GLITCH CORE", status: "RECORDING", desc: "Weaponized digital artifacts and stuttering breakbeats.", cta: "LISTEN TO DEMOS" },
  { name: "SYSTEM_FAILURE", genre: "POWER ELECTRONICS", status: "HIATUS", desc: "Maximum volume harsh noise meant to permanently alter ear drums.", cta: "ARCHIVE" },
  { name: "GHOST_DRIVE", genre: "CYBERPUNK SYNTH", status: "ACTIVE", desc: "A relentless barrage of 80s arpeggios corrupted by modern malware.", cta: "BOOK GHOST_DRIVE" },
  { name: "DEAD_LINK", genre: "EXPERIMENTAL BASS", status: "DEBUTING", desc: "Sub-frequencies that bypass the ears and resonate directly in the sternum.", cta: "PRE-SAVE ALBUM" }
];

export default function RosterPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-0">
        <TextReveal>
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-16 border-b-8 border-ec-white pb-8">
            ROSTER
          </h1>
        </TextReveal>

        <div className="space-y-8">
          {roster.map((artist, i) => (
            <TextReveal key={i} delay={i * 0.1}>
              <div className="border-4 border-ec-white p-6 md:p-12 hover:bg-ec-lime hover:text-ec-black transition-colors group brutalist-shadow bg-ec-black">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-ec-gray pb-4 mb-4 group-hover:border-ec-black transition-colors">
                  <h2 className="text-4xl md:text-6xl font-black uppercase break-words">{artist.name}</h2>
                  <div className="text-xl font-bold border-2 border-current px-4 py-1">
                    {artist.status}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
                  <div>
                    <p className="text-xl font-bold uppercase mb-2 text-ec-gray group-hover:text-ec-black transition-colors">{artist.genre}</p>
                    <p className="text-lg font-medium">{artist.desc}</p>
                  </div>
                  <div className="flex justify-start md:justify-end">
                    <button className="bg-ec-white text-ec-black hover:bg-ec-black hover:text-ec-lime border-4 border-transparent hover:border-ec-lime font-black uppercase px-8 py-4 text-xl transition-all">
                      {artist.cta}
                    </button>
                  </div>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
