"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  staggerChildrenSelector?: string;
}

export const GsapReveal: React.FC<GsapRevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 40,
  stagger,
  staggerChildrenSelector,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const targets = staggerChildrenSelector
        ? containerRef.current.querySelectorAll(staggerChildrenSelector)
        : containerRef.current;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: stagger || 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
