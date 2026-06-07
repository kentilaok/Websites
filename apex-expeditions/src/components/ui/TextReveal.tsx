"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";

export default function TextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current || !containerRef.current) return;

    // Split text into words for animation
    const words = textRef.current.innerText.split(" ");
    textRef.current.innerHTML = "";

    words.forEach((word) => {
      const span = document.createElement("span");
      span.className = "inline-block overflow-hidden mr-[0.25em] py-1";
      
      const innerSpan = document.createElement("span");
      innerSpan.className = "inline-block translate-y-[120%]";
      innerSpan.innerText = word;
      
      span.appendChild(innerSpan);
      textRef.current?.appendChild(span);
    });

    const innerSpans = textRef.current.querySelectorAll("span > span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(innerSpans, {
      y: "0%",
      duration: 1,
      ease: "power4.out",
      stagger: 0.05,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [text]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <h2 ref={textRef} className="opacity-0 m-0 leading-tight">
        {text}
      </h2>
    </div>
  );
}
