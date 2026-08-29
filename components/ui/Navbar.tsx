"use client";

import React, { useState, useEffect } from "react";
import { DEVELOPER_INFO } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { motion } from "framer-motion";

interface NavbarProps {
  onOpenResume?: () => void;
  isResumeMode?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, isResumeMode = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "projects", "about", "skills", "education", "github", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "projects", label: "Work" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-theme/90 backdrop-blur-md border-b border-theme shadow-xs"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Name / Mark */}
          <a
            href="#hero"
            className="text-sm font-bold tracking-tight text-theme-main hover:text-theme-muted transition-colors font-mono uppercase"
          >
            {DEVELOPER_INFO.name}
          </a>

          {/* Navigation Links & Theme Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            {!isResumeMode && (
              <nav className="hidden md:flex items-center gap-5 sm:gap-6 text-xs font-mono tracking-wider text-theme-muted">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`relative py-1 transition-colors uppercase ${
                        isActive ? "text-theme-main font-semibold" : "hover:text-theme-main"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-theme-main"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  );
                })}
              </nav>
            )}

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-theme bg-theme-surface hover:bg-theme-main hover:text-theme-bg transition-colors duration-200 text-theme-main rounded-lg uppercase tracking-wider cursor-pointer"
            >
              <span>Resume</span>
            </button>

            <ThemeToggle />
          </div>
        </div>
      </motion.header>
    </>
  );
};
