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

    // Use GSAP quickTo for performance
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToDot(e.clientX);
      yToDot(e.clientY);
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, backgroundColor: "rgba(255, 255, 255, 0.1)", duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Add hover effect to links and buttons
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-snow/50 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-moss-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
