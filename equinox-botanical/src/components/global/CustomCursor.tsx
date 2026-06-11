"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop/devices with a mouse
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, backgroundColor: "transparent", border: "1px solid #7b9781", duration: 0.3 });
      gsap.to(follower, { scale: 0.5, opacity: 0, duration: 0.3 });
    };
    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "#7b9781", border: "none", duration: 0.3 });
      gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.3 });
    };

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
    <div className="hidden sm:block pointer-events-none z-[9999]">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-sage-500 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-sage-300 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"
      />
    </div>
  );
}
