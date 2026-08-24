"use client";

import React, { useState } from "react";
import { SKILLS_CATEGORIES } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { motion, useReducedMotion } from "framer-motion";

import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/skiper-ui/skiper101";

export const Skills = () => {
  const [activeTechnology, setActiveTechnology] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      onMouseLeave={() => setActiveTechnology(null)}
      className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-theme space-y-16"
    >
      {/* Section Heading */}
      <SectionHeading number="03" title="TECHNOLOGIES & TOOLS" tag="REPERTOIRE" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {SKILLS_CATEGORIES.map((category, idx) => (
          <Reveal key={category.title} delay={idx * 0.1} className="space-y-6 p-6 bg-theme-surface border border-theme">
            {/* Category heading remains muted/accent and does not participate in fade */}
            <h3 className="text-xs font-mono text-theme-muted uppercase tracking-widest border-b border-theme pb-3">
              {category.title}
            </h3>

            <ul className="space-y-3 font-mono text-sm">
              {category.items.map((item) => {
                const isFocused = activeTechnology === item;
                const isMuted = activeTechnology !== null && !isFocused;

                return (
                  <Tooltip key={item}>
                    <TooltipTrigger asChild>
                      <motion.li
                        tabIndex={0}
                        onMouseEnter={() => setActiveTechnology(item)}
                        onFocus={() => setActiveTechnology(item)}
                        onBlur={() => setActiveTechnology(null)}
                        animate={{
                          opacity: isMuted ? 0.3 : 1,
                          x: prefersReducedMotion ? 0 : isFocused ? 6 : 0,
                          scale: prefersReducedMotion ? 1 : isFocused ? 1.02 : 1,
                        }}
                        transition={{
                          duration: 0.22,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`flex items-center gap-3 cursor-pointer py-1 select-none outline-none transition-colors ${
                          isFocused ? "text-theme-main font-bold" : "text-theme-main font-normal"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full inline-block transition-all duration-200 ${
                            isFocused
                              ? "bg-theme-main scale-150 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                              : "bg-theme-subtle"
                          }`}
                        />
                        <span className="tracking-wide">{item}</span>
                      </motion.li>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="font-mono text-xs bg-theme-surface text-theme-main border border-theme shadow-md px-3 py-1.5">
                      <span>{item} — Tech Stack</span>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
