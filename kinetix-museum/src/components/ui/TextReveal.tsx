'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = '' }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current) return;
    
    const words = containerRef.current.querySelectorAll('.word');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo(words, 
      { opacity: 0, y: 50, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.05, ease: 'back.out(1.7)' }
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Split text into words for animation
  const wordArray = text.split(' ');

  return (
    <div ref={containerRef} className={`perspective-[1000px] ${className}`}>
      {wordArray.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.3em] pb-[0.1em]">
          <span className="word inline-block origin-bottom transform-gpu will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
