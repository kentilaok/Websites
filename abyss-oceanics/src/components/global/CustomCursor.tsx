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

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, borderColor: "rgba(0, 255, 255, 0.8)", duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, borderColor: "rgba(0, 255, 255, 0.4)", duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    
    // Add hover effects to links and buttons
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-bio-cyan/40 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-bio-cyan rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00ffff]"
      />
    </>
  );
}
