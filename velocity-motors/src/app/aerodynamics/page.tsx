import TextReveal from "@/components/ui/TextReveal";

export default function AerodynamicsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-vm-black">
      <div className="container">
        <TextReveal>
          <div className="text-vm-red font-syncopate tracking-widest mb-4">WIND TUNNEL TESTED</div>
          <h1 className="text-6xl md:text-8xl font-bold mb-24">AERODYNAMICS</h1>
        </TextReveal>

        <div className="grid md:grid-cols-2 gap-16">
          <TextReveal delay={0.1}>
            <div className="p-8 border border-white/10 hover:border-vm-red transition-colors bg-vm-dark">
              <div className="text-4xl text-vm-red mb-6">01</div>
              <h3 className="text-2xl font-syncopate mb-4 text-white">ACTIVE AERO</h3>
              <p className="text-vm-steel">
                Dynamically adjusting spoilers and diffusers that respond in milliseconds to steering angle and velocity, producing up to 1,500 lbs of downforce.
              </p>
            </div>
          </TextReveal>
          
          <TextReveal delay={0.2}>
            <div className="p-8 border border-white/10 hover:border-vm-red transition-colors bg-vm-dark">
              <div className="text-4xl text-vm-red mb-6">02</div>
              <h3 className="text-2xl font-syncopate mb-4 text-white">GROUND EFFECT</h3>
              <p className="text-vm-steel">
                Venturi tunnels sculpted into the carbon tub suck the vehicle to the tarmac, enabling cornering forces exceeding 2.5G.
              </p>
            </div>
          </TextReveal>

          <TextReveal delay={0.3}>
             <div className="p-8 border border-white/10 hover:border-vm-red transition-colors bg-vm-dark">
              <div className="text-4xl text-vm-red mb-6">03</div>
              <h3 className="text-2xl font-syncopate mb-4 text-white">DRAG REDUCTION</h3>
              <p className="text-vm-steel">
                A drag coefficient of just 0.21 Cd. The vehicle slices through the air with minimal turbulence, enhancing top speed and stability.
              </p>
            </div>
          </TextReveal>

           <TextReveal delay={0.4}>
             <div className="p-8 border border-white/10 hover:border-vm-red transition-colors bg-vm-dark">
              <div className="text-4xl text-vm-red mb-6">04</div>
              <h3 className="text-2xl font-syncopate mb-4 text-white">THERMAL DYNAMICS</h3>
              <p className="text-vm-steel">
                NACA ducts integrated seamlessly into the bodywork channel cold air directly to the braking system and intercoolers without increasing drag.
              </p>
            </div>
          </TextReveal>
        </div>
      </div>
    </div>
  );
}
