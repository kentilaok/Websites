"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        {
          opacity: 0,
          y: 20,
          filter: "blur(10px)",
          color: "var(--color-aegis-neon-red)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          color: "var(--color-foreground)",
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => {
            wordsRef.current[i] = el;
          }}
          className="inline-block"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
