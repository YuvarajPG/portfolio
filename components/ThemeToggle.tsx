"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { ThemeToggleButton2 } from "@/components/ui/skiper-ui/skiper4";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      <ThemeToggleButton2 className="w-8 h-8 p-1.5 border border-theme text-theme-main bg-theme-surface hover:bg-theme-elevated" />
    </div>
  );
};
