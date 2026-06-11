"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 1.5, backgroundColor: "rgba(155, 81, 224, 0.5)", duration: 0.3 });
      gsap.to(follower, { scale: 0.5, borderColor: "rgba(209, 148, 255, 1)", duration: 0.3 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "#f8f9fb", duration: 0.3 });
      gsap.to(follower, { scale: 1, borderColor: "rgba(155, 81, 224, 0.4)", duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);

    const addLinkEvents = () => {
      const links = document.querySelectorAll("a, button, input, select, [role='button']");
      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnterLink as EventListener);
        link.addEventListener("mouseleave", onMouseLeaveLink as EventListener);
      });
    };

    addLinkEvents();

    // Re-add on mutation
    const observer = new MutationObserver(() => {
      addLinkEvents();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      const links = document.querySelectorAll("a, button, input, select, [role='button']");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink as EventListener);
        link.removeEventListener("mouseleave", onMouseLeaveLink as EventListener);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-[#9b51e0]/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
