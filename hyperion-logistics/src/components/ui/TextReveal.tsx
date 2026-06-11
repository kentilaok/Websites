"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className = "" }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".char");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      chars,
      { opacity: 0, y: 20, rotateX: -90, color: "var(--color-hyperion-neon-orange)" },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        color: "inherit",
        stagger: 0.02,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );

    return () => {
      tl.kill();
      // Only kill this specific scrollTrigger to avoid killing others on the page
      ScrollTrigger.getById(el.id)?.kill();
    };
  }, []);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-[0.25em] ${className}`} style={{ perspective: "1000px" }}>
      {words.map((word, i) => (
        <span key={i} className="word overflow-hidden inline-flex">
          {word.split("").map((char, j) => (
            <span key={j} className="char inline-block origin-bottom will-change-transform">
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
