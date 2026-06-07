"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll(".word");
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 40,
          rotateX: -40,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [isClient]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`perspective-1000 ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word inline-block mr-[0.25em] origin-bottom will-change-transform">
          {word}
        </span>
      ))}
    </div>
  );
}
