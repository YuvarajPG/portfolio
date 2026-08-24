"use client";

import React from "react";
import { DEVELOPER_INFO } from "@/data/portfolio";
import { ArrowUp, Clock } from "lucide-react";
import { Skiper37AnimatedTime } from "@/components/ui/skiper-ui/skiper37";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-theme bg-theme text-theme-muted text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-theme-main font-bold">{DEVELOPER_INFO.name}</span>
          <span>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </div>

        <div className="flex items-center gap-2 text-theme-muted">
          <Clock className="w-3.5 h-3.5 shrink-0 text-theme-muted" />
          <Skiper37AnimatedTime locationLabel="SALEM, IN" timeZone="Asia/Kolkata" />
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-theme-muted hover:text-theme-main transition-colors cursor-pointer uppercase"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
