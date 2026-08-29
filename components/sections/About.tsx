"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DEVELOPER_INFO } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Maximize2 } from "lucide-react";
import { ProfileModal } from "@/components/modals/ProfileModal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const About = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title slide up with power3 ease
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      // Bio paragraphs stagger reveal
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Profile Card Entrance & Subtle Parallax
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        }
      );

      // Image subtle scale effect tied to scroll
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-theme space-y-16"
    >
      {/* Section Heading */}
      <SectionHeading number="02" title="ABOUT" tag="SALEM, TAMIL NADU, INDIA" />

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Statement & Bio Text (7 cols) */}
        <div className="lg:col-span-7 space-y-8 my-auto">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-theme-main leading-tight opacity-0"
          >
            Building responsive, performant web applications with clean code.
          </h2>

          <div ref={textRef} className="space-y-6 text-theme-muted text-base sm:text-lg leading-relaxed font-normal">
            {DEVELOPER_INFO.bio.map((paragraph, idx) => (
              <p key={idx} className="opacity-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: Editorial Personal Visual / Profile Area (5 cols) */}
        <div className="lg:col-span-5 w-full md:flex md:justify-center lg:block">
          <div
            ref={cardRef}
            className="group relative w-full md:max-w-[380px] lg:max-w-none border border-theme bg-theme-surface overflow-hidden p-3 transition-colors duration-300 opacity-0 rounded-2xl shadow-xl"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between text-[11px] font-mono text-theme-muted pb-3 px-1 border-b border-theme/40 uppercase tracking-widest">
              <span>{DEVELOPER_INFO.name}</span>
              <span>PROFILE 02</span>
            </div>

            {/* Photo Container Frame with Viewport Clip Reveal */}
            <div
              onClick={() => setIsProfileModalOpen(true)}
              className="relative aspect-3/4 w-full overflow-hidden my-3 border border-theme/40 bg-theme/50 rounded-xl cursor-pointer"
            >
              <div ref={imageRef} className="w-full h-full relative">
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
              </div>

              {/* Hover Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/10 uppercase tracking-wider text-[11px] rounded-lg">
                  {DEVELOPER_INFO.role}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsProfileModalOpen(true);
                  }}
                  className="bg-black/70 backdrop-blur-md p-2 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300 rounded-lg cursor-pointer flex items-center justify-center"
                  title="Expand Profile Photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
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
          </div>
        </div>
      </div>

      {/* Dedicated Profile Photo Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </section>
  );
};
