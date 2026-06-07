"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select, .brutalist-border");
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { 
          scale: 4, 
          borderWidth: "1px", 
          backgroundColor: "transparent",
          duration: 0.3 
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { 
          scale: 1, 
          borderWidth: "0px", 
          backgroundColor: "#ccff00",
          duration: 0.3 
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 bg-ec-lime border-ec-white rounded-none pointer-events-none z-[9999] mix-blend-difference"
      style={{ transformOrigin: "center center" }}
    />
  );
}
