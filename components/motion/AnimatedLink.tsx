"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@/components/ui/Icons";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
  external?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  showArrow = true,
  external = false,
  className = "",
  onClick,
}) => {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`group relative inline-flex items-center gap-1 text-theme-main font-mono text-xs uppercase cursor-pointer ${className}`}
    >
      <span className="relative">
        {children}
        {/* Animated Underline Expansion */}
        <motion.span
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-theme-main origin-left"
        />
      </span>

      {showArrow && (
        <motion.span
          variants={{
            rest: { x: 0, y: 0 },
            hover: { x: 3, y: -3 },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="shrink-0"
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </motion.span>
      )}
    </motion.a>
  );
};
