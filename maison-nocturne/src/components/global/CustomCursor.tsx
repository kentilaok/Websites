"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "@/lib/site-data";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canHover || reduceMotion) {
      cursor.style.display = "none";
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.22, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.22, ease: "power3.out" });
    const rotateTo = gsap.quickTo(cursor, "rotation", { duration: 0.35, ease: "power3.out" });

    const onMove = (event: MouseEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);
      if ((site.cursorVariant as string) === "compass" && (event.movementX || event.movementY)) {
        rotateTo((Math.atan2(event.movementY, event.movementX) * 180) / Math.PI + 90);
      }
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, select, [data-cursor='magnetic']");
      if (interactive) {
        cursor.classList.add("is-hovering");
      }
    };

    const onOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, select, [data-cursor='magnetic']");
      if (interactive) {
        cursor.classList.remove("is-hovering");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={"custom-cursor cursor-" + site.cursorVariant}
      aria-hidden="true"
    >
      <span className="cursor-mark" />
      <span className="cursor-mark-secondary" />
    </div>
  );
}
