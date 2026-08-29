"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS_CATEGORIES } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/skiper-ui/skiper101";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(".skill-category-card");
      
      // Batch scroll entrance reveal
      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 40, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.15,
              ease: "power3.out",
              overwrite: true,
            }
          );
        },
        start: "top 85%",
        once: true,
      });

      // Animate skill pill bullet dots when in view
      const bullets = containerRef.current.querySelectorAll(".skill-bullet");
      gsap.fromTo(
        bullets,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="skills"
      className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-theme space-y-16"
    >
      {/* Section Heading */}
      <SectionHeading number="03" title="TECHNOLOGIES & TOOLS" tag="REPERTOIRE" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {SKILLS_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="skill-category-card space-y-6 p-6 bg-theme-surface border border-theme opacity-0 rounded-xl transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Category heading */}
            <h3 className="text-xs font-mono text-theme-muted uppercase tracking-widest border-b border-theme pb-3">
              {category.title}
            </h3>

            <ul className="space-y-3 font-mono text-sm">
              {category.items.map((item) => (
                <Tooltip key={item}>
                  <TooltipTrigger asChild>
                    <li
                      tabIndex={0}
                      className="flex items-center gap-3 cursor-pointer py-1 select-none outline-none text-theme-main transition-transform duration-200 hover:translate-x-1.5 hover:font-bold"
                    >
                      <span className="skill-bullet w-1.5 h-1.5 rounded-full inline-block bg-theme-subtle transition-all duration-200 hover:bg-theme-main hover:scale-150" />
                      <span className="tracking-wide">{item}</span>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="font-mono text-xs bg-theme-surface text-theme-main border border-theme shadow-md px-3 py-1.5"
                  >
                    <span>{item} — Tech Stack</span>
                  </TooltipContent>
                </Tooltip>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
