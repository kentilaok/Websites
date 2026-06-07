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
      span.className = "inline-block overflow-hidden mr-[0.25em] pb-2";
      const innerSpan = document.createElement("span");
      // Fast, aggressive pop up
      innerSpan.className = "inline-block translate-y-[100%]";
      innerSpan.innerText = word;
      span.appendChild(innerSpan);
      el.appendChild(span);
    });

    const innerSpans = el.querySelectorAll("span > span");

    const anim = gsap.to(innerSpans, {
      y: "0%",
      duration: 0.6,
      stagger: 0.05,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [text]);

  return <Tag ref={containerRef} className={className} />;
}
