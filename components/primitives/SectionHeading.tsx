"use client";

import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  number: string;
  title: string;
  tag?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  tag,
}) => {
  return (
    <Reveal className="border-b border-theme pb-4 flex items-center justify-between">
      <span className="text-xs font-mono tracking-widest text-theme-muted uppercase">
        {number} / {title}
      </span>
      {tag && (
        <span className="text-xs font-mono text-theme-muted">
          [ {tag} ]
        </span>
      )}
    </Reveal>
  );
};
