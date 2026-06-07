"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    // Split text into words for animation
    const words = textRef.current.innerText.split(" ");
    textRef.current.innerHTML = "";
    
    words.forEach((word) => {
      const span = document.createElement("span");
      span.innerText = word + " ";
      span.className = "inline-block opacity-20 translate-y-4 transition-colors duration-300 hover:text-brand-green";
      textRef.current?.appendChild(span);
    });

    const spans = textRef.current.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    tl.to(spans, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power2.out",
      duration: 1,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [text]);

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <h2 ref={textRef} className="m-0">
        {text}
      </h2>
    </div>
  );
}
