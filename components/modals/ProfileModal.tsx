"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolio";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-fit max-w-[90vw] sm:max-w-md bg-theme-surface border border-theme rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
          >
            {/* Modal Header */}
            <div className="px-5 py-3 border-b border-theme bg-theme/80 flex items-center justify-between font-mono text-xs gap-4">
              <div className="flex items-center gap-2 truncate">
                <span className="font-bold text-theme-main">{DEVELOPER_INFO.name}</span>
                <span className="text-theme-muted">—</span>
                <span className="text-theme-muted uppercase tracking-widest text-[10px] sm:text-xs">
                  {DEVELOPER_INFO.role}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 border border-theme bg-theme hover:bg-theme-surface rounded-lg text-theme-main transition-colors cursor-pointer shrink-0"
                title="Close Photo (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Photo Viewport - Large Centered View (object-contain preserving natural aspect ratio) */}
            <div className="relative p-3 sm:p-4 bg-theme flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] max-h-[65vh]">
              <div className="relative h-[55vh] max-h-[520px] aspect-3/4 max-w-full rounded-xl overflow-hidden shadow-2xl border border-theme/40">
                <Image
                  src="/profile.jpg"
                  alt={DEVELOPER_INFO.name}
                  fill
                  priority
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 90vw, 450px"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-theme bg-theme/60 font-mono text-xs flex items-center justify-between text-theme-muted">
              <span className="truncate">{DEVELOPER_INFO.location}</span>
              <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] sm:text-xs shrink-0 ml-2">
                AVAILABLE 2026
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
