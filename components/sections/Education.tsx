"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ACADEMIC_JOURNEY } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Education = () => {
  const [activeEducation, setActiveEducation] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // ScrollTrigger timeline scrub for vertical timeline bar fill
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 0.5,
            },
          }
        );
      }

      // Batch reveal education items
      const items = containerRef.current.querySelectorAll(".education-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power3.out",
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
      id="education"
      onMouseLeave={() => setActiveEducation(null)}
      className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-theme space-y-16"
    >
      {/* Section Heading */}
      <SectionHeading number="04" title="EDUCATION" tag="ACADEMIC JOURNEY" />

      {/* Timeline Layout */}
      <div className="relative pl-6 sm:pl-10 border-l border-theme/30 space-y-12">
        {/* GSAP Scrubbed Vertical Line Fill */}
        <div
          ref={lineRef}
          className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-theme-main origin-top pointer-events-none"
        />

        {ACADEMIC_JOURNEY.map((item) => {
          const isFocused = activeEducation === item.id;

          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setActiveEducation(item.id)}
              onMouseLeave={() => setActiveEducation(null)}
              onFocus={() => setActiveEducation(item.id)}
              onBlur={() => setActiveEducation(null)}
              tabIndex={0}
              animate={{
                x: isFocused ? 8 : 0,
                backgroundColor: isFocused ? "var(--color-surface, rgba(255,255,255,0.03))" : "rgba(0,0,0,0)",
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 26,
                mass: 0.7,
              }}
              className={`education-item relative group outline-none select-none cursor-pointer opacity-0 p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                isFocused
                  ? "border-theme shadow-2xl backdrop-blur-xs"
                  : "border-transparent hover:border-theme/40"
              }`}
            >
              {/* Timeline Anchor Node with Smooth Spring Scale and Radiant Glow */}
              <motion.div
                animate={{
                  scale: isFocused ? 1.75 : 1,
                  backgroundColor: isFocused ? "var(--foreground, #ffffff)" : "var(--color-surface, #1e1e1e)",
                  borderColor: isFocused ? "var(--foreground, #ffffff)" : "var(--color-border, #3a3a3a)",
                  boxShadow: isFocused
                    ? "0px 0px 18px rgba(255, 255, 255, 0.9), 0px 0px 30px rgba(255, 255, 255, 0.35)"
                    : "0px 0px 0px rgba(0, 0, 0, 0)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 22,
                }}
                className="absolute -left-[31px] sm:-left-[47px] top-7 sm:top-9 w-3 h-3 rounded-full border-2 z-10"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                {/* Year Anchor (4 cols) */}
                <div className="lg:col-span-4 space-y-1">
                  <span className="text-xs font-mono tracking-widest text-theme-muted uppercase block">
                    PERIOD
                  </span>
                  <div className="text-xl sm:text-2xl font-mono font-bold tracking-tight text-theme-main transition-colors duration-200">
                    {item.period}
                  </div>
                </div>

                {/* Qualification & Details (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-1.5">
                    <motion.h3
                      animate={{
                        x: isFocused ? 4 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="text-2xl sm:text-3xl font-bold tracking-tight text-theme-main leading-snug"
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-base sm:text-lg font-mono text-theme-muted">
                      {item.institution}
                    </p>
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-theme/40 font-mono text-xs">
                    <div>
                      <span className="text-theme-muted uppercase block text-[10px] tracking-wider">
                        PERIOD
                      </span>
                      <span className="text-theme-main font-semibold block mt-0.5">
                        {item.period}
                      </span>
                    </div>

                    <div>
                      <span className="text-theme-muted uppercase block text-[10px] tracking-wider">
                        STATUS
                      </span>
                      <span
                        className={`font-bold block mt-0.5 ${
                          item.status.toLowerCase().includes("currently")
                            ? "text-emerald-500"
                            : "text-theme-main"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div>
                      <span className="text-theme-muted uppercase block text-[10px] tracking-wider">
                        LOCATION
                      </span>
                      <span className="text-theme-main font-semibold block mt-0.5 truncate" title={item.location}>
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
