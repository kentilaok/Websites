"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { cn } from "@/lib/utils";

export default function TextReveal({
  text,
  className,
  as: Component = "p",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
}) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const split = new SplitType(containerRef.current, { types: "lines,chars" });

    // Wrap each line in an overflow-hidden container for the cinematic rise effect
    if (split.lines) {
      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });
    }

    if (split.chars) {
      gsap.fromTo(
        split.chars,
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.03,
          ease: "power4.out",
          duration: 1.2,
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }

    return () => {
      split.revert();
    };
  }, [delay]);

  return (
    <Component ref={containerRef} className={cn("inline-block", className)}>
      {text}
    </Component>
  );
}
