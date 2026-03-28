"use client"
import ProjectCard from "../../components/custom/ProjectCard";

const Projects = () => {
  return (
    <section
      className={`min-h-dvh flex flex-col items-center mb-80 py-10 border-t-2 justify-center`}
      id="Projects"
    >
      <p className="text-3xl md:text-5xl max-[769px]:text-4xl font-bold text-white mb-4">
        My Projects
      </p>
      <div className="w-30 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
      <div className="flex flex-col mt-12 md:mt-10 gap-5 md:gap-2 md:flex-row items-center  md:justify-center mb-5 transition-transform duration-300">
        <ProjectCard
          className="hover:cursor-pointer hover:scale-105"
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
          className="hover:cursor-pointer hover:scale-105"
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
    </section>
  );
};

export default Projects;
