"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const blur = blurRef.current;
    if (!cursor || !blur) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    // The blur follows very slowly like a trailing scent/smoke
    const xToBlur = gsap.quickTo(blur, "x", { duration: 1.5, ease: "power2.out" });
    const yToBlur = gsap.quickTo(blur, "y", { duration: 1.5, ease: "power2.out" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBlur(e.clientX);
      yToBlur(e.clientY);
    };

    const handleHoverEnter = () => {
      gsap.to(blur, { scale: 2, opacity: 0.8, duration: 1, backgroundColor: "var(--color-rose)" });
      gsap.to(cursor, { scale: 0, duration: 0.2 });
    };

    const handleHoverLeave = () => {
      gsap.to(blur, { scale: 1, opacity: 0.3, duration: 1, backgroundColor: "var(--color-vetiver)" });
      gsap.to(cursor, { scale: 1, duration: 0.2 });
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
        ref={blurRef}
        className="fixed top-0 left-0 w-64 h-64 rounded-full blur-[40px] bg-vetiver/30 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-multiply transition-colors"
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-oud z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
