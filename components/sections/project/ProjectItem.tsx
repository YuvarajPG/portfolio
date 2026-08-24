"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectItemData } from "@/data/portfolio";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectItemProps {
  project: ProjectItemData;
  isSelected: boolean;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHover: (project: ProjectItemData) => void;
  onLeave: () => void;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  isSelected,
  isHovered,
  isAnyHovered,
  onHover,
  onLeave,
}) => {
  const isMuted = isAnyHovered && !isHovered;

  return (
    <div
      onMouseEnter={() => onHover(project)}
      onMouseLeave={onLeave}
      className={`py-8 px-4 sm:px-6 cursor-pointer editorial-row border-b border-theme transition-all duration-300 ${isSelected ? "bg-theme-surface" : ""
        } ${isMuted ? "opacity-40" : "opacity-100"}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <motion.div
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="space-y-2"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-theme-muted">
              {project.number}
            </span>
            <span className="text-xs font-mono text-theme-muted">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-theme-main tracking-tight">
            {project.title}
          </h3>

          <p className="text-xs font-mono text-theme-muted">
            {project.technologies.join(" · ")}
          </p>
        </motion.div>

        <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-start gap-2 shrink-0 pt-2 sm:pt-0">
          <span className="text-xs font-mono text-theme-muted">
            {project.year}
          </span>

          <div className="flex items-center gap-4 font-mono text-xs">
            <AnimatedLink
              href={project.liveUrl}
              external={!project.liveUrl.startsWith("#")}
              onClick={(e) => e.stopPropagation()}
            >
              Live
            </AnimatedLink>

            <AnimatedLink
              href={project.githubUrl}
              external
              showArrow={false}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </div>
            </AnimatedLink>
          </div>
        </div>
      </div>
    </div>
  );
};
