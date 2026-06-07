"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Slow, deliberate elegance
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.6, ease: "power3.out" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHoverEnter = () => {
      gsap.to(cursor, { scale: 2, duration: 0.8, ease: "power2.out", backgroundColor: "var(--color-sage)" });
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.8, ease: "power2.out", backgroundColor: "var(--color-mahogany)" });
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
      className="fixed top-0 left-0 w-12 h-12 rounded-full border border-ink/10 bg-mahogany/10 backdrop-blur-sm z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors mix-blend-multiply"
    >
      <div className="w-1 h-1 bg-ink rounded-full" />
    </div>
  );
}
