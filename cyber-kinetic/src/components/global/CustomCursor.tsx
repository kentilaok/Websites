"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    // Fast tracking crosshair
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.05, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.05, ease: "power3" });

    // Slower trailing box
    const xToTrail = gsap.quickTo(trail, "x", { duration: 0.2, ease: "power3" });
    const yToTrail = gsap.quickTo(trail, "y", { duration: 0.2, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToTrail(e.clientX);
      yToTrail(e.clientY);
    };

    const handleHoverEnter = () => {
      gsap.to(cursor, { scale: 1.5, rotate: 90, duration: 0.2, ease: "power2.out", borderColor: "var(--color-alert-red)" });
      gsap.to(trail, { scale: 0.5, opacity: 0, duration: 0.2 });
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, { scale: 1, rotate: 0, duration: 0.2, ease: "power2.out", borderColor: "var(--color-matrix-green)" });
      gsap.to(trail, { scale: 1, opacity: 1, duration: 0.2 });
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
    <>
      {/* Glitched Crosshair */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 border-[1px] border-matrix-green z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors duration-150"
      >
        <div className="w-[1px] h-full bg-matrix-green" />
        <div className="h-[1px] w-full bg-matrix-green absolute" />
      </div>
      
      {/* Trailing Box */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-8 h-8 border border-matrix-green/30 bg-matrix-green/5 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm"
      />
    </>
  );
}
