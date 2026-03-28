"use client";
import ProjectCard from "../../components/custom/ProjectCard";
import { useEffect, useState } from "react";
const Projects = () => {
  const [date, setDate] = useState(null||String);
  useEffect(() => {
    fetch("/api/latest-commit")
      .then((res) => res.json())
      .then((data) => setDate(data.date))
      .catch(() => setDate("N/A"));
  });

  return (
    <section
      className="min-h-dvh flex flex-col items-center mb-80 py-10 border-t-2 justify-center"
      id="Projects"
    >
      <p className="text-3xl md:text-5xl font-bold text-white mb-4">
        My Projects
      </p>

      <div className="w-30 h-1 bg-linear-to-r from-purple-500 to-blue-500 rounded-full" />

      <div className="flex flex-col mt-12 gap-5 md:flex-row items-center justify-center mb-5">
        <ProjectCard
          className="hover:scale-105"
          techs={["HTML5", "CSS3", "TailwindCSS", "JavaScript", "React JS"]}
          name="Todo App"
          previewImage="/todo_preview.png"
          ImageBtn1="/githubBtn.png"
          ImageBtn2="🚀"
          Text1="GitHub"
          Text2="Preview"
          Link1="https://github.com/YuvarajPG/todo"
          Link2="https://todo-two-puce-47.vercel.app/"
          target="_blank"
        />

        <ProjectCard
          status={["completed"]}
          className="hover:scale-105"
          techs={[
            "HTML5",
            "CSS3",
            "TailwindCSS",
            "JavaScript",
            "TypeScript",
            "React JS",
            "Next JS",
          ]}
          name="Portfolio Website"
          previewImage="/porflio_2.png"
          ImageBtn1="/githubBtn.png"
          ImageBtn2="/startup.png"
          Text1="GitHub"
          Text2="Preview"
          Link1="https://github.com/YuvarajPG/portfolio"
          Link2="#hero"
          btnStyle2="disabled bg-gray-600 hover:bg-gray-500"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl font-bold text-white mb-4">
          Upcoming Projects
        </p>
        <div className="w-30 h-1 bg-linear-to-r from-purple-500 to-blue-500 rounded-full" />
        <p className="text-white">COMING SOON</p>
      </div>

      {/* ✅ Show commit date */}
      <p className="text-white mt-6">Last updated: {date || "Loading..."}</p>
    </section>
  );
};

export default Projects;
