"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export default function TextReveal({ text, className = "", as: Component = "p" }: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = wordsRef.current;

    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 20,
        rotationX: 45,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Component ref={containerRef} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-block flex-wrap">
        {text.split(" ").map((word, i) => (
          <span
            key={i}
            className="inline-block mr-[0.25em] overflow-hidden"
          >
            <span
              ref={(el) => {
                wordsRef.current[i] = el;
              }}
              className="inline-block transform-gpu origin-bottom"
            >
              {word}
            </span>
          </span>
        ))}
      </span>
    </Component>
  );
}
