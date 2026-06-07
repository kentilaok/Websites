"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Smooth, deliberate tracking for minimal interior aesthetic
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHoverEnter = () => {
      gsap.to(cursor, { 
        width: 64, 
        height: 64, 
        backgroundColor: "var(--color-foreground)",
        mixBlendMode: "difference",
        duration: 0.5, 
        ease: "power2.out" 
      });
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, { 
        width: 8, 
        height: 8, 
        backgroundColor: "var(--color-primary)",
        mixBlendMode: "normal",
        duration: 0.5, 
        ease: "power2.out" 
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverEnter);
      el.addEventListener("mouseleave", handleHoverLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverEnter);
        el.removeEventListener("mouseleave", handleHoverLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-2 h-2 bg-muted-coral rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
    />
  );
}
