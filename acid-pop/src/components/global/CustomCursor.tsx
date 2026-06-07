"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHoverEnter = () => {
      gsap.to(cursor, { scale: 1.5, rotate: 15, duration: 0.3, ease: "back.out(2)" });
      if (cursorRef.current) cursorRef.current.innerText = "🔥";
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
      if (cursorRef.current) cursorRef.current.innerText = "👀";
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
      className="fixed top-0 left-0 text-5xl z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 drop-shadow-xl"
    >
      👀
    </div>
  );
}
