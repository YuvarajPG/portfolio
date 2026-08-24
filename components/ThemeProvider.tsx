"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { createAnimation } from "@/components/ui/skiper-ui/skiper26";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: (e?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read initial theme from HTML class or localStorage or default to dark
    const isDark = document.documentElement.classList.contains("dark");
    const storedTheme = localStorage.getItem("portfolio-theme") as Theme | null;

    if (storedTheme) {
      setThemeState(storedTheme);
      applyTheme(storedTheme);
    } else if (isDark) {
      setThemeState("dark");
    } else {
      setThemeState("dark");
      applyTheme("dark");
    }

    setMounted(true);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };

  const updateStyles = useCallback((css: string) => {
    if (typeof window === "undefined") return;
    const styleId = "theme-transition-styles";
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = (e?: React.MouseEvent) => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    // Trigger skiper26 View Transition circular reveal from click point or center
    const animation = createAnimation("circle", "center", false);
    updateStyles(animation.css);

    const switchTheme = () => {
      setTheme(nextTheme);
    };

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as any).startViewTransition(switchTheme);
    } else {
      switchTheme();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
