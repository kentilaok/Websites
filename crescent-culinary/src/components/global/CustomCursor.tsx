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

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(cursor, {
        x: mouseX - 16,
        y: mouseY - 16,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(dot, {
        x: mouseX - 3,
        y: mouseY - 3,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, backgroundColor: "rgba(140, 29, 52, 0.2)", borderColor: "rgba(140, 29, 52, 0)", duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "transparent", borderColor: "rgba(212, 175, 55, 0.5)", duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll("a, button, input, [role='button']");
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
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold-500/50 pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-500 pointer-events-none z-[100] hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
