"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextReveal({ text, className = "" }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current) return;
    const words = containerRef.current.querySelectorAll('.word');
    
    gsap.fromTo(words, 
      { opacity: 0.1, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap gap-[0.25em] inline-flex`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="word inline-block opacity-10">
          {word}
        </span>
      ))}
    </div>
  );
}
