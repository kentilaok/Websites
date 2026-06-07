"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    gsap.set([cursor, dot], { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });
    
    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power3" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { 
          scale: 3, 
          backgroundColor: "#A6654E", 
          opacity: 0.2,
          border: "none",
          duration: 0.3 
        });
        gsap.to(dot, { scale: 0, duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { 
          scale: 1, 
          backgroundColor: "transparent",
          border: "1px solid #3A4032",
          opacity: 1,
          duration: 0.3 
        });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-ts-moss pointer-events-none z-[9998]"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-ts-clay rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
}
