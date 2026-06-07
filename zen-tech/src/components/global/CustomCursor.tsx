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

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.05, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.05, ease: "power3" });

    const xToRing = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3.out" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    const handleHoverEnter = () => {
      gsap.to(ring, { scale: 1.5, opacity: 0, duration: 0.3 });
      gsap.to(cursor, { scale: 3, backgroundColor: "transparent", border: "1px solid var(--color-carbon)", duration: 0.3 });
    };

    const handleHoverLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(cursor, { scale: 1, backgroundColor: "var(--color-carbon)", border: "none", duration: 0.3 });
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
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-carbon/20 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-carbon rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
