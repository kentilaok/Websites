"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;
      
      const chars = textRef.current.querySelectorAll(".char");
      
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.02,
          duration: 1.2,
          ease: "power4.out",
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, text]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden perspective-1000", className)}>
      <p ref={textRef} className="flex flex-wrap" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
        {text.split(" ").map((word, i) => (
          <span key={i} className="inline-flex mr-[0.25em] mb-[0.1em] overflow-hidden">
            {word.split("").map((char, j) => (
              <span key={j} className="char inline-block origin-bottom transform-gpu">
                {char}
              </span>
            ))}
          </span>
        ))}
      </p>
    </div>
  );
}
