"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DEVELOPER_INFO } from "@/data/portfolio";
import { Skiper42 } from "@/components/ui/skiper-ui/skiper42";
import { Skiper68TypingText } from "@/components/ui/skiper-ui/skiper68";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameFirstRef = useRef<HTMLDivElement>(null);
  const nameSecondRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Stagger split text lines reveal with 3D rotation
      tl.fromTo(
        [nameFirstRef.current, nameSecondRef.current],
        {
          yPercent: 120,
          rotateX: -25,
          opacity: 0,
        },
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.15,
          delay: 0.2,
        }
      )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        );

      // Subtle parallax on scroll using ScrollTrigger
      gsap.to(containerRef.current, {
        yPercent: 15,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-end pt-36 pb-16 px-6 sm:px-12 border-b border-theme max-w-7xl mx-auto space-y-8 overflow-hidden"
    >
      {/* Category Eyebrow */}
      <div className="text-xs font-mono tracking-widest text-theme-muted uppercase">
        <Skiper68TypingText text={DEVELOPER_INFO.role} speed={50} delay={600} />
      </div>

      {/* Hero Name with GSAP 3D Reveal */}
      <div className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-theme-main leading-[0.95] tracking-[0.02em] perspective-1000">
        <div className="overflow-hidden py-1">
          <div ref={nameFirstRef} className="block text-theme-main transform-gpu">
            YUVARAJ
          </div>
        </div>
        <div className="overflow-hidden py-1">
          <div ref={nameSecondRef} className="block text-theme-main transform-gpu">
            PG
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="max-w-2xl text-lg sm:text-xl text-theme-muted font-normal leading-relaxed opacity-0"
      >
        {DEVELOPER_INFO.tagline}
      </p>

      {/* Action Links & Social CTAs */}
      <div
        ref={ctaRef}
        className="flex flex-wrap items-center gap-6 pt-4 font-mono text-xs uppercase tracking-wider opacity-0"
      >
        <div onClick={scrollToProjects} className="inline-block cursor-pointer">
          <Skiper42>View Work</Skiper42>
        </div>

        <Link
          href="/resume"
          className="inline-flex items-center gap-2 px-4 py-2 bg-theme-surface border border-theme hover:bg-theme-main hover:text-theme-bg transition-colors duration-200 text-theme-main rounded-xl"
        >
          <FileText className="w-4 h-4" />
          <span>Resume</span>
        </Link>

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
      </div>
    </section>
  );
};
