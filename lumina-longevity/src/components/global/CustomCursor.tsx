"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow) return;

    gsap.set([cursor, glow], { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    const glowXTo = gsap.quickTo(glow, "x", { duration: 0.6, ease: "power3" });
    const glowYTo = gsap.quickTo(glow, "y", { duration: 0.6, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      glowXTo(e.clientX);
      glowYTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Breathing glow animation
    gsap.to(glow, {
      scale: 1.2,
      opacity: 0.8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 0.5, duration: 0.3 });
        gsap.to(glow, { scale: 2, backgroundColor: "#0ea5e9", duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        gsap.to(glow, { scale: 1, backgroundColor: "#38bdf8", duration: 0.3 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-24 h-24 bg-ll-blue-glow/30 rounded-full blur-xl pointer-events-none z-[9998]"
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-ll-blue-glow rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(56,189,248,0.8)]"
      />
    </>
  );
}
