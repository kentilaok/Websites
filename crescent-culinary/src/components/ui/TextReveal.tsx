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
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;
      
      const words = textRef.current.querySelectorAll(".word");
      
      gsap.fromTo(
        words,
        {
          y: 50,
          opacity: 0,
          rotateX: -45,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  // Split text into words for animation
  const words = text.split(" ").map((word, i) => (
    <span key={i} className="word inline-block overflow-hidden pb-1 mr-[0.25em]">
      {word}
    </span>
  ));

  return (
    <Component ref={containerRef} className={`${className} perspective-1000`}>
      <span ref={textRef} className="inline-block">
        {words}
      </span>
    </Component>
  );
}
