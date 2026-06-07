"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import clsx from "clsx";

export default function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    // Split text by words
    const words = text.split(" ");
    container.innerHTML = "";
    
    words.forEach((word) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.display = "inline-block";
      container.appendChild(span);
    });

    const chars = container.children;

    gsap.to(chars, {
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
      delay,
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === container) st.kill();
      });
    };
  }, [text, delay]);

  return <div ref={containerRef} className={clsx("flex flex-wrap", className)} />;
}
