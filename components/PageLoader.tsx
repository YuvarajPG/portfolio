"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Skiper8 } from "@/components/ui/skiper-ui/skiper8";

export const PageLoader = () => {
  const pathname = usePathname();

  // Exclude preloader completely when on /resume
  if (pathname === "/resume") {
    return null;
  }

  // Keying Skiper8 by pathname ensures that navigating from /resume -> /
  // unmounts any old state and mounts a fresh preloader instance that plays normally.
  return <Skiper8 key={pathname} duration={700} />;
};
