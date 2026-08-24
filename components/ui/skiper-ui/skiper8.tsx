"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skiper8Props {
  onComplete?: () => void;
  duration?: number;
}

const SCROLL_KEYS = new Set([
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Space",
  " ",
  "Home",
  "End",
]);

export function Skiper8({ onComplete, duration = 1400 }: Skiper8Props) {
  const [isPresent, setIsPresent] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Initial lock state setup
    const originalStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      paddingRight: document.body.style.paddingRight,
    };

    // Ensure we start locked at top
    window.scrollTo(0, 0);
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Apply strict scroll lock styles
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // 2. Prevent active scroll input events
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (SCROLL_KEYS.has(e.key)) {
        // Prevent scroll keys only when focus isn't in an editable input
        const target = e.target as HTMLElement | null;
        const isEditable = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
        if (!isEditable) {
          e.preventDefault();
        }
      }
    };

    const enforceTopScroll = () => {
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("scroll", enforceTopScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });

    // Function to safely release lock
    const releaseLock = () => {
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.position = originalStyle.position;
      document.body.style.top = originalStyle.top;
      document.body.style.width = originalStyle.width;
      document.body.style.paddingRight = originalStyle.paddingRight;

      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("scroll", enforceTopScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };

    // 3. Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPresent(false);
      releaseLock();
      if (onComplete) onComplete();
      return;
    }

    // 4. Counter animation
    const startTime = performance.now();
    const animateCounter = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(Math.floor((elapsed / (duration * 0.7)) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(animateCounter);
      }
    };
    const animId = requestAnimationFrame(animateCounter);

    // 5. Complete timer (including panel exit transition)
    const exitDuration = 900; // 0.1s delay + 0.8s slide transition
    const totalDuration = duration + exitDuration;

    const timer = setTimeout(() => {
      setIsPresent(false);
      releaseLock();
      if (onComplete) onComplete();
    }, totalDuration);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timer);
      releaseLock();
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isPresent && (
        <motion.div
          key="skiper8-preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="fixed inset-0 z-100 pointer-events-auto flex flex-col overflow-hidden select-none touch-none"
        >
          {/* Top Panel */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="w-full h-1/2 bg-theme border-b border-theme/40 relative flex items-end justify-between px-8 sm:px-16 pb-6 shadow-2xl"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-theme-muted">
              YUVARAJ PG — PORTFOLIO
            </div>
            <div className="font-mono text-3xl sm:text-5xl font-black text-theme-main tracking-tighter">
              {String(progress).padStart(2, "0")}%
            </div>
          </motion.div>

          {/* Bottom Panel */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="w-full h-1/2 bg-theme relative flex items-start justify-between px-8 sm:px-16 pt-6 shadow-2xl"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-theme-muted">
              INDEX 2025 — 2026
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-theme-main font-bold">
              BUILDING DIGITAL PRODUCTS
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Skiper8;

