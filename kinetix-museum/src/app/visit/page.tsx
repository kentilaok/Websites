'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextReveal from '@/components/ui/TextReveal';

const visitInfo = [
  {
    title: 'Location',
    content: '404 Cipher Street, Digital District. Coordinates: 45.9231° N, 12.4567° E.',
    isList: false
  },
  {
    title: 'Hours of Operation',
    content: [
      'Monday - Closed (System Maintenance)',
      'Tuesday to Thursday - 10:00 AM to 6:00 PM',
      'Friday - 10:00 AM to 10:00 PM (Late Night Glitch)',
      'Saturday to Sunday - 09:00 AM to 8:00 PM'
    ],
    isList: true
  },
  {
    title: 'Admission',
    content: 'General Admission: $25 | Students/Seniors: $15 | Members: Free. Digital Access Pass: $10/month.',
    isList: false
  },
  {
    title: 'Accessibility',
    content: 'The physical space is fully ADA compliant. Sensory-friendly hours are available every Wednesday morning. Digital spaces include screen reader support and high-contrast modes.',
    isList: false
  },
  {
    title: 'Photography Policy',
    content: 'Flash photography disrupts the generative sensors and is strictly prohibited. Non-flash photography is encouraged. Tag us @KinetixMuseum.',
    isList: false
  },
  {
    title: 'Guided Tours',
    content: 'Led by our algorithmic docent AI, tours are available daily at 11 AM and 3 PM. Download the Kinetix App to sync your audio.',
    isList: false
  }
];

export default function Visit() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray('.info-item');
    gsap.fromTo(items,
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'power3.out',
        delay: 0.5
      }
    );
  }, []);

  return (
    <main className="min-h-screen pt-32 px-6 md:px-12 pb-24">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
        <div className="lg:sticky lg:top-32 h-fit">
          <h1 className="text-[12vw] lg:text-[8vw] leading-none font-black tracking-tighter uppercase mb-8">Plan<br/>Your<br/>Visit</h1>
          <TextReveal 
            text="Prepare to interface. Everything you need to know before entering the Kinetix environment." 
            className="text-xl md:text-3xl font-medium max-w-md"
          />
          
          <div className="mt-16 w-full aspect-video bg-stark-black relative overflow-hidden group">
            <div className="absolute inset-0 bg-lilac mix-blend-multiply opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center text-stark-white">
              <span className="font-bold tracking-widest uppercase">Map Data Loading...</span>
            </div>
          </div>
        </div>

        <div ref={listRef} className="flex flex-col gap-12 mt-12 lg:mt-0">
          {visitInfo.map((info, idx) => (
            <div key={idx} className="info-item border-l-4 border-stark-black pl-8 py-2">
              <h2 className="text-3xl font-black tracking-tighter uppercase mb-4">{info.title}</h2>
              {info.isList ? (
                <ul className="space-y-2 text-lg opacity-80 font-medium">
                  {(info.content as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg opacity-80 font-medium leading-relaxed max-w-xl">
                  {info.content}
                </p>
              )}
            </div>
          ))}

          <div className="info-item mt-12 bg-peach p-12 text-stark-black">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Book Tickets</h2>
            <p className="text-lg font-medium mb-8">Secure your timeslot online to guarantee entry.</p>
            <button className="bg-stark-black text-stark-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-stark-white hover:text-stark-black transition-colors duration-300">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
