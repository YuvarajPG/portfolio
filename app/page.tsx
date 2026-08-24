"use client";

import { Hero } from "@/components/sections/Hero";
import { ProjectIndex } from "@/components/sections/project/ProjectIndex";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-theme text-theme-main">
      <Hero />
      <ProjectIndex />
      <About />
      <Skills />
      <Education />
      <GithubActivity />
      <Contact />
    </div>
  );
}
