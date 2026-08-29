"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS_CATEGORIES } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/skiper-ui/skiper101";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTechnology, setActiveTechnology] = React.useState<string | null>(null);

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
      onMouseLeave={() => setActiveTechnology(null)}
      className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-theme space-y-16"
    >
      {/* Section Heading */}
      <SectionHeading number="03" title="TECHNOLOGIES & TOOLS" tag="REPERTOIRE" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {SKILLS_CATEGORIES.map((category) => {
          const categoryHasActive = category.items.includes(activeTechnology || "");

          return (
            <div
              key={category.title}
              className="skill-category-card p-6 sm:p-8 bg-theme-surface border border-theme opacity-0 rounded-2xl transition-shadow duration-300 hover:shadow-xl space-y-6"
            >
              {/* Category heading */}
              <div className="flex items-center justify-between border-b border-theme pb-3">
                <h3 className="text-xs font-mono text-theme-muted uppercase tracking-widest">
                  {category.title}
                </h3>
              </div>

              {/* Vertical Stack List */}
              <div className="flex flex-col space-y-2 font-mono text-sm" onMouseLeave={() => setActiveTechnology(null)}>
                {category.items.map((item) => {
                  const isFocused = activeTechnology === item;
                  const isMuted = categoryHasActive && !isFocused;

                  return (
                    <Tooltip key={item}>
                      <TooltipTrigger asChild>
                        <motion.div
                          tabIndex={0}
                          onMouseEnter={() => setActiveTechnology(item)}
                          onMouseLeave={() => setActiveTechnology(null)}
                          onFocus={() => setActiveTechnology(item)}
                          onBlur={() => setActiveTechnology(null)}
                          animate={{
                            x: isFocused ? 8 : 0,
                            opacity: isMuted ? 0.3 : 1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 28,
                            mass: 0.8,
                          }}
                          className={`flex items-center gap-3 cursor-pointer py-1.5 select-none outline-none ${
                            isFocused ? "text-theme-main font-bold" : "text-theme-main font-normal"
                          }`}
                        >
                          <motion.span
                            animate={{
                              scale: isFocused ? 1.6 : 1,
                              backgroundColor: isFocused ? "var(--foreground, #ffffff)" : "var(--color-border, #404040)",
                              boxShadow: isFocused
                                ? "0px 0px 12px rgba(255, 255, 255, 0.7)"
                                : "0px 0px 0px rgba(0, 0, 0, 0)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            }}
                            className="skill-bullet w-1.5 h-1.5 rounded-full inline-block shrink-0"
                          />
                          <span className="tracking-wide text-xs sm:text-sm">{item}</span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="font-mono text-xs bg-theme-surface text-theme-main border border-theme shadow-xl px-3 py-1.5 z-50 rounded-lg"
                      >
                        <span>{item} — Tech Stack</span>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
