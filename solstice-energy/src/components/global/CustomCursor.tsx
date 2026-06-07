"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const cursor = document.getElementById("custom-cursor");
    const cursorDot = document.getElementById("custom-cursor-dot");
    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
    };

    const handleHover = () => {
      gsap.to(cursor, { scale: 1.5, backgroundColor: "rgba(255, 204, 16, 0.2)", duration: 0.3 });
    };
    const handleLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div
        id="custom-cursor"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-solar-500 pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2"
      />
      <div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-solar-600 pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
