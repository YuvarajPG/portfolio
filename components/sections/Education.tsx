"use client";

import React, { useRef, useState } from "react";
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
      <div className="relative pl-4 sm:pl-8 border-l border-theme/30 space-y-16">
        {/* GSAP Scrubbed Vertical Line Fill */}
        <div
          ref={lineRef}
          className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-theme-main origin-top pointer-events-none"
        />

        {ACADEMIC_JOURNEY.map((item) => {
          const isFocused = activeEducation === item.id;
          const isMuted = activeEducation !== null && !isFocused;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveEducation(item.id)}
              onFocus={() => setActiveEducation(item.id)}
              onBlur={() => setActiveEducation(null)}
              tabIndex={0}
              className={`education-item relative group outline-none select-none cursor-pointer opacity-0 transition-all duration-300 ${
                isMuted ? "opacity-35" : "opacity-100"
              } ${isFocused ? "translate-x-2" : "translate-x-0"}`}
            >
              {/* Timeline Anchor Node */}
              <div
                className={`absolute -left-[21px] sm:-left-[37px] top-1.5 w-3 h-3 rounded-full border border-theme transition-all duration-300 ${
                  isFocused
                    ? "bg-theme-main scale-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    : "bg-theme-surface"
                }`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                {/* Year Anchor (4 cols) */}
                <div className="lg:col-span-4 space-y-1">
                  <span className="text-xs font-mono tracking-widest text-theme-muted uppercase block">
                    PERIOD
                  </span>
                  <div className="text-xl sm:text-2xl font-mono font-bold tracking-tight text-theme-main">
                    {item.period}
                  </div>
                </div>

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
            </div>
          );
        })}
      </div>
    </section>
  );
};
