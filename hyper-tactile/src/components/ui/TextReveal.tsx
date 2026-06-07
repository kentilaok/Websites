"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function TextReveal({ text, className = "", as: Tag = "p" }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split text into words
    const words = text.split(" ");
    el.innerHTML = "";
    words.forEach((word) => {
      const span = document.createElement("span");
      span.className = "inline-block overflow-hidden mr-[0.25em]";
      const innerSpan = document.createElement("span");
      // Slower, softer fade up for tactile perfumery
      innerSpan.className = "inline-block translate-y-[100%] opacity-0";
      innerSpan.innerText = word;
      span.appendChild(innerSpan);
      el.appendChild(span);
    });

    const innerSpans = el.querySelectorAll("span > span");

    const anim = gsap.to(innerSpans, {
      y: "0%",
      opacity: 1,
      duration: 1.5,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [text]);

  return <Tag ref={containerRef} className={className} />;
}
