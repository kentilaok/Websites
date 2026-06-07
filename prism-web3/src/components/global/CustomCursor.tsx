"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const orb = orbRef.current;
    if (!cursor || !orb) return;

    // Fast tracking for the main dot
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    // Slow, trailing tracking for the glowing orb
    const xToOrb = gsap.quickTo(orb, "x", { duration: 0.8, ease: "power3" });
    const yToOrb = gsap.quickTo(orb, "y", { duration: 0.8, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToOrb(e.clientX);
      yToOrb(e.clientY);
    };

    const handleHoverEnter = () => {
      gsap.to(orb, { scale: 1.5, opacity: 1, duration: 0.4, ease: "power3.out" });
    };

    const handleHoverLeave = () => {
      gsap.to(orb, { scale: 1, opacity: 0.5, duration: 0.4, ease: "power3.out" });
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
      {/* Trailing Glowing Orb */}
      <div
        ref={orbRef}
        className="fixed top-0 left-0 w-64 h-64 bg-electric-indigo/40 rounded-full blur-3xl z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      />
      
      {/* Precision Core */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-neon-cyan rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(0,255,255,0.8)]"
      />
    </>
  );
}
