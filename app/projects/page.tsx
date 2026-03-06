"use client";

import ProjectCard from "@/components/custom/ProjectCard";

const Page = () => {
    return (
        <div className="mt-25 flex flex-col items-center justify-center mb-80">
            <p className="text-center text-2xl font-bold mb-5 my-auto ">
                My Projects
            </p>
            <div className="flex flex-col mt-5 gap-5 md:flex-row items-center md:justify-center hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                <ProjectCard
                    className=""
                    techs={[
                        "HTML5",
                        "CSS3",
                        "TailwindCSS",
                        "JavaScript",
                        "React JS",
                    ]}
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
                    className=""
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
                    ImageBtn2="🚀"
                    Text1="GitHub"
                    Text2="Preview"
                    Link1="https://github.com/YuvarajPG/portfolio"
                    //"https://portfolio-phi-steel-w7uujjbyn9.vercel.app/"
                    btnStyle2="disabled bg-gray-400"
                />
                
            </div>
        </div>
    );
};

export default Page;
