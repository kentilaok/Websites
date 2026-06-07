"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    gsap.set([cursor, ring], { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    // Slower, floating ring for zero-g effect
    const ringXTo = gsap.quickTo(ring, "x", { duration: 0.8, ease: "power2.out" });
    const ringYTo = gsap.quickTo(ring, "y", { duration: 0.8, ease: "power2.out" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      ringXTo(e.clientX);
      ringYTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 0, duration: 0.3 });
        gsap.to(ring, { 
          scale: 1.5, 
          borderColor: "#00ffff", 
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
          duration: 0.5,
          ease: "back.out(1.7)"
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        gsap.to(ring, { 
          scale: 1, 
          borderColor: "rgba(240, 240, 245, 0.3)",
          boxShadow: "none",
          duration: 0.5 
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-12 h-12 border border-na-stardust/30 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
      >
        <div className="absolute top-0 w-1 h-1 bg-na-atmosphere -translate-y-1/2" />
        <div className="absolute bottom-0 w-1 h-1 bg-na-atmosphere translate-y-1/2" />
        <div className="absolute left-0 w-1 h-1 bg-na-atmosphere -translate-x-1/2" />
        <div className="absolute right-0 w-1 h-1 bg-na-atmosphere translate-x-1/2" />
      </div>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-na-stardust rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
}
