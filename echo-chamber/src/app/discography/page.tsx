import TextReveal from "@/components/ui/TextReveal";

const releases = [
  { id: "EC-042", tagline: "NEW RELEASE", title: "CONCRETE LUNGS", artist: "NULL_POINTER", year: "2026", desc: "A devastating 4-track EP exploring the sounds of industrial decay.", cta: "PURCHASE VINYL" },
  { id: "EC-041", tagline: "REPRESS", title: "ABSOLUTE ZERO", artist: "VOID_WALKER", year: "2026", desc: "The legendary ambient album, finally repressed on clear double vinyl.", cta: "PRE-ORDER" },
  { id: "EC-040", tagline: "ARCHIVE", title: "KERNEL PANIC", artist: "ERROR_CODE", year: "2025", desc: "Digital-only release featuring corrupted stems from the original sessions.", cta: "DOWNLOAD" },
  { id: "EC-039", tagline: "CLASSIC", title: "WHITE NOISE THERAPY", artist: "SYSTEM_FAILURE", year: "2025", desc: "60 minutes of uninterrupted frequencies designed to induce trance states.", cta: "STREAM NOW" },
  { id: "EC-038", tagline: "ARCHIVE", title: "DATA CORRUPTION", artist: "NULL_POINTER", year: "2025", desc: "The debut EP that launched the brutalist sound of Echo Chamber.", cta: "DOWNLOAD" },
  { id: "EC-037", tagline: "LIVE", title: "BERLIN SESSIONS", artist: "GHOST_DRIVE", year: "2024", desc: "Recorded live at Tresor. Pure, unedited hardware improvisation.", cta: "STREAM NOW" },
];

export default function DiscographyPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-0">
        <TextReveal>
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-16 border-b-8 border-ec-white pb-8">
            DISCOGRAPHY
          </h1>
        </TextReveal>

        <div className="border-4 border-ec-white bg-ec-black brutalist-shadow">
          {releases.map((release, i) => (
            <TextReveal key={release.id} delay={i * 0.05}>
              <div className="flex flex-col gap-4 p-6 border-b-4 border-ec-white hover:bg-ec-lime hover:text-ec-black transition-colors group">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-xl">{release.id}</div>
                  <div className="font-bold text-sm border-2 border-current px-2 py-1">{release.tagline}</div>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-4">
                   <h2 className="font-black text-4xl uppercase">{release.title}</h2>
                   <div className="font-bold text-2xl text-ec-gray group-hover:text-ec-black transition-colors">{release.artist} <span className="text-sm opacity-50 ml-2">({release.year})</span></div>
                </div>
                <p className="text-xl font-medium mb-6">{release.desc}</p>
                <div className="flex justify-start">
                  <button className="bg-ec-white text-ec-black hover:bg-ec-black hover:text-ec-lime border-4 border-transparent hover:border-ec-lime font-black uppercase px-6 py-3 text-lg transition-all">
                    {release.cta}
                  </button>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
