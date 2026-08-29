"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProjectIndex } from "@/components/sections/project/ProjectIndex";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Contact } from "@/components/sections/Contact";
import { ResumeSection } from "@/components/sections/ResumeSection";

export default function Page() {
  const [showResume, setShowResume] = useState(false);

  const handleOpenResume = () => {
    setShowResume(true);
  };

  const handleBackToPortfolio = () => {
    setShowResume(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-theme text-theme-main">
      <Navbar onOpenResume={handleOpenResume} isResumeMode={showResume} />

      <AnimatePresence mode="wait">
        {showResume ? (
          <ResumeSection key="resume-section" onBackToPortfolio={handleBackToPortfolio} />
        ) : (
          <motion.main
            key="portfolio-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full"
          >
            <Hero onOpenResume={handleOpenResume} />
            <ProjectIndex />
            <About />
            <Skills />
            <Education />
            <GithubActivity />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
