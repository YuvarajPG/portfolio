"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS_INDEX, ProjectItemData } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { GithubIcon, ArrowUpRight } from "@/components/ui/Icons";
import { ProjectItem } from "./ProjectItem";

export const ProjectIndex = () => {
  const [activeProject, setActiveProject] = useState<ProjectItemData>(
    PROJECTS_INDEX[0]
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
      {/* Section Heading */}
      <SectionHeading number="01" title="SELECTED WORKS" tag="PORTFOLIO" />

      {/* Editorial Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Interactive Project List (7 cols) */}
        <Reveal className="lg:col-span-7 border-t border-theme">
          {PROJECTS_INDEX.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              isSelected={activeProject.id === project.id}
              isHovered={hoveredId === project.id}
              isAnyHovered={hoveredId !== null}
              onHover={(p) => {
                setActiveProject(p);
                setHoveredId(p.id);
              }}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </Reveal>

        {/* Right: Dynamic Sticky Preview (5 cols) */}
        <Reveal delay={0.15} className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
          <div className="relative aspect-4/3 w-full overflow-hidden border border-theme bg-theme-surface rounded-2xl group shadow-2xl">
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
              <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/10 uppercase tracking-wider text-[11px]">
                {activeProject.category}
              </span>
              <a
                href={activeProject.liveUrl}
                target={activeProject.liveUrl.startsWith("#") ? undefined : "_blank"}
                rel={activeProject.liveUrl.startsWith("#") ? undefined : "noopener noreferrer"}
                className="bg-black/70 backdrop-blur-md p-2 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="p-6 bg-theme-surface border border-theme space-y-4 rounded-2xl">
            <div className="flex items-center justify-between font-mono text-xs text-theme-muted">
              <span>{activeProject.number} / {PROJECTS_INDEX.length.toString().padStart(2, "0")}</span>
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
                  <div className="btn-primary w-full py-2.5 font-mono text-xs uppercase font-bold text-center cursor-pointer px-3">
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
        </Reveal>
      </div>
    </section>
  );
};
