"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export default function TextReveal({ text, className = "", as: Component = "h2" }: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll(".char");
    if (!chars || chars.length === 0) return;

    gsap.fromTo(
      chars,
      { opacity: 0.1, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const words = text.split(" ");

  return (
    <Component ref={containerRef} className={clsx("flex flex-wrap gap-x-[0.25em]", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="word inline-flex overflow-hidden">
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className="char inline-block will-change-transform">
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}
