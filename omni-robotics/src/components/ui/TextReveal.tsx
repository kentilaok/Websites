"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Split text into words manually
    const words = el.innerText.split(" ");
    el.innerHTML = "";
    
    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "inline-block overflow-hidden mr-[0.25em]";
      
      const innerSpan = document.createElement("span");
      innerSpan.className = "inline-block translate-y-[100%]";
      innerSpan.innerText = word;
      
      wordSpan.appendChild(innerSpan);
      el.appendChild(wordSpan);
    });

    const innerSpans = el.querySelectorAll("span > span");

    gsap.to(innerSpans, {
      y: "0%",
      ease: "power4.out",
      duration: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [text]);

  return (
    <h2 ref={textRef} className={className}>
      {text}
    </h2>
  );
}
