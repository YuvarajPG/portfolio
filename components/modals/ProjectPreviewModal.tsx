"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItemData } from "@/data/portfolio";
import { GithubIcon } from "@/components/ui/Icons";
import { X, ExternalLink } from "lucide-react";

interface ProjectPreviewModalProps {
  project: ProjectItemData | null;
  onClose: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  project,
  onClose,
}) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-theme-surface border border-theme rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Modal Top Bar */}
            <div className="px-6 py-4 border-b border-theme bg-theme/80 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="font-bold text-theme-main">{project.number}</span>
                <span className="text-theme-muted">—</span>
                <span className="font-bold text-theme-main text-sm sm:text-base">{project.title}</span>
                {project.status && (
                  <span className="text-[10px] uppercase font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    {project.status}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-theme hover:bg-theme rounded-xl text-theme-main transition-colors cursor-pointer"
                  title="View Source Code"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target={project.liveUrl.startsWith("#") ? undefined : "_blank"}
                    rel={project.liveUrl.startsWith("#") ? undefined : "noopener noreferrer"}
                    className="p-2 border border-theme hover:bg-theme rounded-xl text-theme-main transition-colors cursor-pointer"
                    title="Open Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 border border-theme bg-theme hover:bg-theme-surface rounded-xl text-theme-main transition-colors cursor-pointer ml-2"
                  title="Close Modal (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body / Image Viewport */}
            <div className="relative w-full flex-1 bg-theme min-h-[400px] max-h-[70vh] flex items-center justify-center overflow-auto p-4 sm:p-6">
              {!imgError ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[65vh] object-contain rounded-xl shadow-2xl"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center font-mono space-y-3">
                  <span className="text-xs uppercase tracking-widest text-theme-muted/60">
                    Preview Not Available
                  </span>
                  <span className="text-xl font-bold text-theme-main">{project.title}</span>
                  {project.status && (
                    <span className="text-[10px] uppercase font-bold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {project.status}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer Info */}
            <div className="px-6 py-4 border-t border-theme bg-theme/60 font-mono text-xs flex flex-wrap items-center justify-between gap-4 text-theme-muted">
              <span>
                Category: <strong className="text-theme-main">{project.category}</strong>
              </span>
              <span>
                Year: <strong className="text-theme-main">{project.year}</strong>
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
