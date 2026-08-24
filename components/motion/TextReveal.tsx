"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  once = true,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
      clipPath: "inset(0% 0% 100% 0%)",
    },
    show: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
      variants={containerVariants}
      className={`space-y-1 ${className}`}
    >
      {lines.map((line, idx) => (
        <div key={idx} className="overflow-hidden">
          <motion.div variants={lineVariants} className={lineClassName}>
            {line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};
