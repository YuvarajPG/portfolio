"use client";

import React from "react";
import Image from "next/image";
import { DEVELOPER_INFO } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const About = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-theme space-y-16">
      {/* Section Heading */}
      <SectionHeading number="02" title="ABOUT" tag="SALEM, TAMIL NADU, INDIA" />

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Statement & Bio Text (7 cols) */}
        <Reveal className="lg:col-span-7 space-y-8 my-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-theme-main leading-tight">
            Building responsive, performant web applications with clean code.
          </h2>

          <div className="space-y-6 text-theme-muted text-base sm:text-lg leading-relaxed font-normal">
            {DEVELOPER_INFO.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        {/* Right Column: Editorial Personal Visual / Profile Area (5 cols) */}
        <Reveal delay={0.15} className="lg:col-span-5 w-full">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full border border-theme bg-theme-surface overflow-hidden p-3 transition-colors duration-300"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between text-[11px] font-mono text-theme-muted pb-3 px-1 border-b border-theme/40 uppercase tracking-widest">
              <span>{DEVELOPER_INFO.name}</span>
              <span>PROFILE 02</span>
            </div>

            {/* Photo Container Frame with Viewport Clip Reveal */}
            <div className="relative aspect-3/4 w-full overflow-hidden my-3 border border-theme/40 bg-theme/50">
              <motion.div
                initial={prefersReducedMotion ? false : { scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
              >
                <Image
                  src="/profile.jpg"
                  alt={DEVELOPER_INFO.name}
                  fill
                  priority
                  className="object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Subtle Theme Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </motion.div>

              {/* Hover Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/10 uppercase tracking-wider text-[11px]">
                  {DEVELOPER_INFO.role}
                </span>
                <span className="bg-black/70 backdrop-blur-md p-1.5 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Bottom Metadata Block */}
            <div className="grid grid-cols-2 gap-2 pt-2 px-1 font-mono text-[11px] text-theme-muted border-t border-theme/40">
              <div>
                <span className="block text-[10px] uppercase text-theme-muted/60">LOCATION</span>
                <span className="text-theme-main font-semibold block mt-0.5 truncate">{DEVELOPER_INFO.location}</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] uppercase text-theme-muted/60">STATUS</span>
                <span className="text-emerald-500 font-semibold block mt-0.5">AVAILABLE 2026</span>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};
