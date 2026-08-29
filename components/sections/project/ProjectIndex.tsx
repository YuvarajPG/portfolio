"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS_INDEX, ProjectItemData } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { GithubIcon, ArrowUpRight } from "@/components/ui/Icons";
import { ProjectItem } from "./ProjectItem";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const ProjectIndex = () => {
  const [activeProject, setActiveProject] = useState<ProjectItemData>(
    PROJECTS_INDEX[0]
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Animate project items staggering on scroll enter
      const items = containerRef.current.querySelectorAll(".project-item-wrapper");
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate preview card entrance
      gsap.fromTo(
        previewRef.current,
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: previewRef.current,
            start: "top 85%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  // Smooth image swap animation using GSAP contextSafe
  const handleSelectProject = (project: ProjectItemData) => {
    if (activeProject.id === project.id) return;

    if (imageWrapperRef.current) {
      gsap.to(imageWrapperRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 0.15,
        ease: "power2.in",
        onComplete: () => {
          setActiveProject(project);
          gsap.to(imageWrapperRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          });
        },
      });
    } else {
      setActiveProject(project);
    }
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-16"
    >
      {/* Section Heading */}
      <SectionHeading number="01" title="SELECTED WORKS" tag="PORTFOLIO" />

      {/* Editorial Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Interactive Project List (7 cols) */}
        <div className="lg:col-span-7 border-t border-theme">
          {PROJECTS_INDEX.map((project) => (
            <div key={project.id} className="project-item-wrapper opacity-0">
              <ProjectItem
                project={project}
                isSelected={activeProject.id === project.id}
                isHovered={hoveredId === project.id}
                isAnyHovered={hoveredId !== null}
                onHover={(p) => {
                  handleSelectProject(p);
                  setHoveredId(p.id);
                }}
                onLeave={() => setHoveredId(null)}
              />
            </div>
          ))}
        </div>

        {/* Right: Dynamic Sticky Preview (5 cols) */}
        <div
          ref={previewRef}
          className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 opacity-0"
        >
          <div
            ref={imageWrapperRef}
            className="relative aspect-4/3 w-full overflow-hidden border border-theme bg-theme-surface rounded-2xl group shadow-2xl transition-shadow duration-300 hover:shadow-black/20"
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs z-10">
              <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/10 uppercase tracking-wider text-[11px] rounded-lg">
                {activeProject.category}
              </span>
              <a
                href={activeProject.liveUrl}
                target={activeProject.liveUrl.startsWith("#") ? undefined : "_blank"}
                rel={activeProject.liveUrl.startsWith("#") ? undefined : "noopener noreferrer"}
                className="bg-black/70 backdrop-blur-md p-2 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300 rounded-lg"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="p-6 bg-theme-surface border border-theme space-y-4 rounded-2xl">
            <div className="flex items-center justify-between font-mono text-xs text-theme-muted">
              <span>
                {activeProject.number} / {PROJECTS_INDEX.length.toString().padStart(2, "0")}
              </span>
              <span>{activeProject.year}</span>
            </div>

            <h4 className="text-xl font-bold text-theme-main">{activeProject.title}</h4>
            <p className="text-xs text-theme-muted leading-relaxed">{activeProject.summary}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {activeProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[10px] font-mono uppercase bg-theme border border-theme text-theme-muted rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4 border-t border-theme">
              <a
                href={activeProject.liveUrl}
                target={activeProject.liveUrl.startsWith("#") ? undefined : "_blank"}
                rel={activeProject.liveUrl.startsWith("#") ? undefined : "noopener noreferrer"}
                className="flex-1"
              >
                <MagneticButton strength={0.2} className="w-full">
                  <div className="btn-primary w-full py-2.5 font-mono text-xs uppercase font-bold text-center cursor-pointer px-3 rounded-xl">
                    Live Demo
                  </div>
                </MagneticButton>
              </a>

              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton strength={0.3}>
                  <div className="p-2.5 border border-theme hover:bg-theme-surface transition-colors cursor-pointer text-theme-main rounded-xl">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                </MagneticButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
