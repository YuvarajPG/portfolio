"use client";

import React from "react";
import { DEVELOPER_INFO } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { GithubIcon } from "@/components/ui/Icons";

export const GithubActivity = () => {
  return (
    <section id="github" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-theme space-y-16">
      {/* Section Heading */}
      <SectionHeading number="05" title="DEVELOPER ACTIVITY" tag="GITHUB" />

      <Reveal className="p-8 bg-theme-surface border border-theme flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-theme-muted uppercase">
            <GithubIcon className="w-4 h-4" />
            <span>@YuvarajPG ON GITHUB</span>
          </div>

          <h3 className="text-2xl font-bold text-theme-main tracking-tight">
            Explore Open Repositories & Source Code
          </h3>

          <p className="text-sm text-theme-muted leading-relaxed">
            All primary web projects, code samples, and frontend experiments are publicly hosted on GitHub.
          </p>
        </div>

        <AnimatedLink href={DEVELOPER_INFO.socials.github} external className="shrink-0">
          <div className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase font-semibold">
            <span>View GitHub Profile</span>
          </div>
        </AnimatedLink>
      </Reveal>
    </section>
  );
};
