"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use gsap.quickTo for high-performance cursor tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHoverEnter = () => {
      // Expand the vertical line into a wider horizontal block
      gsap.to(cursor, { width: 40, height: 2, duration: 0.3, ease: "power3.out", backgroundColor: "var(--color-primary)" });
    };

    const handleHoverLeave = () => {
      // Return to thin vertical caret
      gsap.to(cursor, { width: 2, height: 32, duration: 0.3, ease: "power3.out", backgroundColor: "var(--color-foreground)" });
    };

    window.addEventListener("mousemove", moveCursor);

    // Attach hover effects to all links and buttons
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
      className="fixed top-0 left-0 w-[2px] h-[32px] bg-black mix-blend-difference z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
    />
  );
}
