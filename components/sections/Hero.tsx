"use client";

import React from "react";
import { motion } from "framer-motion";
import { DEVELOPER_INFO } from "@/data/portfolio";
import { TextReveal } from "@/components/motion/TextReveal";
import { Skiper42 } from "@/components/ui/skiper-ui/skiper42";
import { Skiper68TypingText } from "@/components/ui/skiper-ui/skiper68";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const Hero = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-end pt-36 pb-16 px-6 sm:px-12 border-b border-theme max-w-7xl mx-auto space-y-8"
    >
      {/* Category Eyebrow with Skiper68 Typing Animation */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xs font-mono tracking-widest text-theme-muted uppercase"
      >
        <Skiper68TypingText text={DEVELOPER_INFO.role} speed={50} delay={600} />
      </motion.div>

      {/* Multi-Line Physical Text Reveal for Hero Name */}
      <TextReveal
        lines={["YUVARAJ", "PG"]}
        delay={0.2}
        className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-theme-main leading-[0.95] tracking-[0.02em]"
        lineClassName="block text-theme-main"
      />

      {/* Short Statement Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="max-w-2xl text-lg sm:text-xl text-theme-muted font-normal leading-relaxed"
      >
        {DEVELOPER_INFO.tagline}
      </motion.p>

      {/* Action Links & Social CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap items-center gap-6 pt-4 font-mono text-xs uppercase tracking-wider"
      >
        <div onClick={scrollToProjects} className="inline-block cursor-pointer">
          <Skiper42>
            View Work
          </Skiper42>
        </div>

        <AnimatedLink href={DEVELOPER_INFO.socials.github} external showArrow={false}>
          <div className="flex items-center gap-2">
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </div>
        </AnimatedLink>

        <AnimatedLink href={DEVELOPER_INFO.socials.linkedin} external showArrow={false}>
          <div className="flex items-center gap-2">
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </div>
        </AnimatedLink>
      </motion.div>
    </section>
  );
};
