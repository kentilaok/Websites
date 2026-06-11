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
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split text into words for animation
    const words = text.split(" ");
    el.innerHTML = "";
    words.forEach((word: string) => {
      const span = document.createElement("span");
      span.className = "inline-block overflow-hidden pb-2 mr-[0.25em]";
      const innerSpan = document.createElement("span");
      innerSpan.className = "inline-block translate-y-[100%]";
      innerSpan.innerText = word;
      span.appendChild(innerSpan);
      el.appendChild(span);
    });

    const innerSpans = el.querySelectorAll("span > span");

    const anim = gsap.to(innerSpans, {
      y: "0%",
      duration: 1,
      stagger: 0.05,
      ease: "power4.out",
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

  // @ts-ignore - Dynamic tag ref causes complex union type error
  return <Tag ref={containerRef} className={className} />;
}
