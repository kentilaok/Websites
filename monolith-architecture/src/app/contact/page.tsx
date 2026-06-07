export default function ContactPage() {
  return (
    <main className="bg-obsidian text-stark-white min-h-screen pt-48 pb-32 px-6 md:px-12 font-sans flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold tracking-tighter uppercase mb-16">Inquiries [01.3]</h1>
      <p className="text-sm uppercase tracking-widest opacity-50 mb-8">[SYS.COMMUNICATION_PORTAL]</p>
      <div className="border border-stark-white/20 p-16 w-full max-w-xl">
        <p className="font-mono text-sm leading-loose">
          TRANSMIT_TO: INQUIRIES@MONOLITH.ARCH<br/>
          ENCRYPTION: NONE<br/>
          STATUS: WAITING_FOR_PACKET...
        </p>
      </div>
    </main>
  );
}
