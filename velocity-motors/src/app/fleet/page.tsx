import TextReveal from "@/components/ui/TextReveal";

const fleet = [
  {
    tagline: "PROJECT 01",
    name: "APEX-V",
    desc: "The track-focused anomaly. 1200 horsepower naturally aspirated V12 mated to a sequential 7-speed gearbox.",
    stat1Label: "0-60 MPH", stat1: "2.1s",
    stat2Label: "TOP SPEED", stat2: "234 MPH",
    cta: "CONFIGURE APEX-V"
  },
  {
    tagline: "PROJECT 02",
    name: "SILHOUETTE",
    desc: "Grand touring redefined. A hybrid powertrain delivering 900 miles of range with ballistic acceleration.",
    stat1Label: "RANGE", stat1: "900 MI",
    stat2Label: "POWER", stat2: "1050 HP",
    cta: "CONFIGURE SILHOUETTE"
  },
  {
    tagline: "PROJECT 03",
    name: "PHANTOM",
    desc: "The ultimate hyper-SUV. A quad-motor setup offering unparalleled off-road capability without sacrificing track dynamics.",
    stat1Label: "0-60 MPH", stat1: "2.8s",
    stat2Label: "TORQUE", stat2: "1400 LB-FT",
    cta: "CONFIGURE PHANTOM"
  },
  {
    tagline: "PROJECT 04",
    name: "ECLIPSE",
    desc: "A pure electric track weapon. Active aerodynamics and a lightweight graphene chassis create an entirely new driving paradigm.",
    stat1Label: "DOWNFORCE", stat1: "2000 LBS",
    stat2Label: "WEIGHT", stat2: "2800 LBS",
    cta: "CONFIGURE ECLIPSE"
  },
  {
    tagline: "PROJECT 05",
    name: "VANGUARD",
    desc: "Our flagship luxury saloon. Executive comfort seamlessly integrated with sub-three second acceleration.",
    stat1Label: "0-60 MPH", stat1: "2.9s",
    stat2Label: "RANGE", stat2: "600 MI",
    cta: "CONFIGURE VANGUARD"
  }
];

export default function FleetPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container">
        <TextReveal>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">THE FLEET</h1>
          <p className="text-xl text-vm-steel font-manrope max-w-2xl mb-24">
            Five distinct architectures. One unified philosophy of speed.
          </p>
        </TextReveal>

        <div className="space-y-32">
          {fleet.map((car, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-32">
              <div className={`md:col-span-5 ${i % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2 md:pl-12'}`}>
                <TextReveal>
                  <div className="text-vm-red font-syncopate mb-2">{car.tagline}</div>
                  <h2 className="text-5xl font-bold mb-6">{car.name}</h2>
                  <p className="text-vm-steel mb-8">
                    {car.desc}
                  </p>
                  <div className="flex gap-8 border-t border-white/10 pt-8 mb-8">
                    <div>
                      <div className="text-sm text-vm-steel mb-1">{car.stat1Label}</div>
                      <div className="text-2xl font-syncopate text-white">{car.stat1}</div>
                    </div>
                    <div>
                      <div className="text-sm text-vm-steel mb-1">{car.stat2Label}</div>
                      <div className="text-2xl font-syncopate text-white">{car.stat2}</div>
                    </div>
                  </div>
                  <button className="bg-vm-red text-white font-syncopate text-sm py-4 px-8 hover:bg-white hover:text-vm-red transition-colors duration-300">
                    {car.cta}
                  </button>
                </TextReveal>
              </div>
              <div className={`md:col-span-7 h-[400px] bg-vm-black relative overflow-hidden group ${i % 2 === 0 ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-vm-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
