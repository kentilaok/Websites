"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export default function TextReveal({ text, className = "", as: Component = "p" }: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split text into lines/words for better reveal
    const lines = el.querySelectorAll(".reveal-line");

    gsap.fromTo(
      lines,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  }, []);

  // Simple word split wrapping logic for SSR compatibility
  const words = text.split(" ");

  return (
    <Component ref={containerRef} className={className}>
      <span className="overflow-hidden inline-block">
        <span className="reveal-line inline-block">
          {text}
        </span>
      </span>
    </Component>
  );
}
