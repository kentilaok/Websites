"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's a touch device, don't show custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        backgroundColor: "rgba(0, 255, 102, 0.1)",
        borderColor: "rgba(0, 255, 102, 0.5)",
        duration: 0.3,
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(0, 255, 102, 1)",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, select, [role='button']");
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

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-brand-green rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-pink rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
