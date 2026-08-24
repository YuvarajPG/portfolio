"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTimeDigitProps {
  digit: string;
}

const AnimatedDigit: React.FC<AnimatedTimeDigitProps> = ({ digit }) => {
  return (
    <div className="relative inline-block overflow-hidden h-[1em] w-[0.65em] vertical-align-middle">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={digit}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center font-mono"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export const Skiper37AnimatedTime: React.FC<{ timeZone?: string; locationLabel?: string }> = ({
  timeZone = "Asia/Kolkata",
  locationLabel = "SALEM, IN",
}) => {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatted = new Date().toLocaleTimeString("en-US", options);
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  if (!timeStr) {
    return <span>{locationLabel} — --:--:-- --</span>;
  }

  return (
    <div className="inline-flex items-center gap-1 font-mono text-xs">
      <span>{locationLabel} — </span>
      <div className="inline-flex items-center tracking-wider">
        {timeStr.split("").map((char, index) => {
          if (/\d/.test(char)) {
            return <AnimatedDigit key={index} digit={char} />;
          }
          return <span key={index} className="px-[1px]">{char}</span>;
        })}
      </div>
    </div>
  );
};
