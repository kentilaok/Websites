"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MotionOrchestrator() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const splits: SplitType[] = [];

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: reduceMotion ? 0 : 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: reduceMotion ? 0.2 : 0.95,
            delay: Math.min(index * 0.025, 0.16),
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      if (!reduceMotion) {
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((heading) => {
          const split = new SplitType(heading, { types: "lines,words" });
          splits.push(split);

          split.lines?.forEach((line) => {
            const wrapper = document.createElement("span");
            wrapper.className = "split-line-mask";
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
          });

          gsap.fromTo(
            split.words ?? [],
            { yPercent: 112, autoAlpha: 0 },
            {
              yPercent: 0,
              autoAlpha: 1,
              duration: 1.05,
              stagger: 0.035,
              ease: "power4.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 82%",
                once: true,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((element) => {
          const speed = Number(element.dataset.speed ?? "0.18");
          gsap.to(element, {
            yPercent: speed * -40,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-scale-media]").forEach((element) => {
          gsap.fromTo(
            element,
            { scale: 0.92, filter: "brightness(0.72)" },
            {
              scale: 1,
              filter: "brightness(1)",
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 30%",
                scrub: 1,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-stack-card]").forEach((card, index) => {
          gsap.to(card, {
            y: index * -12,
            scale: 1 - index * 0.018,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 72%",
              end: "bottom 30%",
              scrub: 1,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-marquee-track]").forEach((track) => {
          gsap.to(track, {
            xPercent: -50,
            duration: 22,
            ease: "none",
            repeat: -1,
          });
        });

        gsap.matchMedia().add("(min-width: 900px)", () => {
          gsap.utils.toArray<HTMLElement>("[data-pin-panel]").forEach((panel) => {
            ScrollTrigger.create({
              trigger: panel,
              start: "top 12%",
              end: "bottom 45%",
              pin: panel.querySelector("[data-pin-inner]"),
              pinSpacing: false,
            });
          });
        });
      }

      return () => {
        splits.forEach((split) => split.revert());
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope },
  );

  return <div ref={scope} aria-hidden="true" />;
}
