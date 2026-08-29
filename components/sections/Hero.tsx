"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DEVELOPER_INFO } from "@/data/portfolio";
import { Skiper42 } from "@/components/ui/skiper-ui/skiper42";
import { Skiper68TypingText } from "@/components/ui/skiper-ui/skiper68";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameFirstRef = useRef<HTMLDivElement>(null);
  const nameSecondRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Stagger split text lines reveal with 3D rotation & clip path
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
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
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
        <div className="overflow-hidden pt-1 pb-4">
          <div ref={nameFirstRef} className="block text-theme-main transform-gpu">
            YUVARAJ
          </div>
        </div>
        <div className="overflow-hidden pt-1 pb-3">
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
        className="flex flex-wrap items-center gap-6 pt-6 font-mono text-xs uppercase tracking-wider opacity-0"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 px-6 py-3.5 bg-theme-surface border border-theme hover:bg-theme-main hover:text-theme-bg transition-all duration-300 text-theme-main rounded-full font-bold cursor-pointer"
        >
          <span>VIEW WORK</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
        </a>

        <a
          href={DEVELOPER_INFO.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-theme-muted hover:text-theme-main transition-colors duration-200"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GITHUB</span>
        </a>

        <a
          href={DEVELOPER_INFO.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-theme-muted hover:text-theme-main transition-colors duration-200"
        >
          <LinkedinIcon className="w-4 h-4" />
          <span>LINKEDIN</span>
        </a>
      </div>
    </section>
  );
};
