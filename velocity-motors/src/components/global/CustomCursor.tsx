"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position offscreen
    gsap.set(cursor, { x: -100, y: -100, xPercent: -50, yPercent: -50 });

    let mouse = { x: 0, y: 0 };
    let previousMouse = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      // Calculate velocity
      velocity.x = mouse.x - previousMouse.x;
      velocity.y = mouse.y - previousMouse.y;
      
      const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
      const angle = Math.atan2(velocity.y, velocity.x) * (180 / Math.PI);

      // Scale and stretch based on speed
      const scaleX = Math.min(Math.max(1, speed * 0.15), 4);
      const scaleY = Math.max(0.2, 1 - (speed * 0.01));

      gsap.to(cursor, {
        x: mouse.x,
        y: mouse.y,
        scaleX: scaleX,
        scaleY: scaleY,
        rotation: angle,
        duration: 0.15,
        ease: "power2.out",
      });

      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;
    };

    gsap.ticker.add(render);

    // Add hover states for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select, .interactive");
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          backgroundColor: "#ff1e00",
          scaleX: 2,
          scaleY: 2,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          backgroundColor: "#e0e0e0",
          scaleX: 1,
          scaleY: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(render);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-vm-silver rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ transformOrigin: "center center" }}
    />
  );
}
