"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Skiper42Props {
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Skiper42({
  children,
  icon = true,
  className = "",
  onClick,
}: Skiper42Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-theme px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-300 bg-theme-surface text-theme-main hover:text-theme-bg cursor-pointer",
        className
      )}
    >
      {/* Background slide fill layer */}
      <motion.span
        variants={{
          initial: { y: "100%" },
          hover: { y: "0%" },
          tap: { y: "0%", scale: 0.98 },
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 bg-theme-main rounded-full"
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-theme-bg transition-colors duration-300">
        <span>{children}</span>
        {icon && (
          <motion.span
            variants={{
              initial: { x: 0, y: 0, rotate: 0 },
              hover: { x: 2, y: -2, rotate: 45 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-block"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.span>
        )}
      </span>
    </motion.button>
  );
}

export default Skiper42;
