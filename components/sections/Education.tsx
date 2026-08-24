"use client";

import React, { useState } from "react";
import { ACADEMIC_JOURNEY } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";

export const Education = () => {
  const [activeEducation, setActiveEducation] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="education"
      onMouseLeave={() => setActiveEducation(null)}
      className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-theme space-y-16"
    >
      {/* Section Heading */}
      <SectionHeading number="04" title="EDUCATION" tag="ACADEMIC JOURNEY" />

      {/* Timeline Layout */}
      <div className="relative pl-4 sm:pl-8 border-l border-theme/40 space-y-16">
        {ACADEMIC_JOURNEY.map((item, idx) => {
          const isFocused = activeEducation === item.id;
          const isMuted = activeEducation !== null && !isFocused;

          return (
            <motion.div
              key={item.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setActiveEducation(item.id)}
              onFocus={() => setActiveEducation(item.id)}
              onBlur={() => setActiveEducation(null)}
              tabIndex={0}
              animate={{
                opacity: isMuted ? 0.35 : 1,
                x: prefersReducedMotion ? 0 : isFocused ? 6 : 0,
              }}
              className="relative group outline-none select-none cursor-pointer"
            >
              {/* Timeline Anchor Node */}
              <motion.div
                animate={{
                  scale: isFocused ? 1.4 : 1,
                  backgroundColor: isFocused
                    ? "var(--foreground)"
                    : "var(--border)",
                }}
                transition={{ duration: 0.2 }}
                className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-3 h-3 rounded-full border border-theme bg-theme-surface transition-colors"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                {/* Year Anchor (4 cols) */}
                <motion.div
                  animate={{
                    x: prefersReducedMotion ? 0 : isFocused ? 4 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="lg:col-span-4 space-y-1"
                >
                  <span className="text-xs font-mono tracking-widest text-theme-muted uppercase block">
                    PERIOD
                  </span>
                  <div className="text-xl sm:text-2xl font-mono font-bold tracking-tight text-theme-main">
                    {item.period}
                  </div>
                </motion.div>

                {/* Qualification & Details (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-theme-main leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg font-mono text-theme-main/90 mt-1">
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
                        className={`font-bold block mt-0.5 ${item.status.toLowerCase().includes("currently")
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

