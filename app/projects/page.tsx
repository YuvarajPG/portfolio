"use client";

import ProjectCard from "@/components/custom/ProjectCard";

const Page = () => {
    return (
        <>
            <div className="mb-5 min-h-screen mt-10 flex gap-6 flex-col md:flex-row items-center md:justify-center hover:   cursor-pointer hover:scale-105 transition-transform duration-300">
                <ProjectCard
                    className=""
                    techs={["HTML5", "TailwindCSS", "JavaScript", "React JS"]}
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
                        "TailwindCSS",
                        "JavaScript",
                        "React JS",
                        "Next JS",
                    ]}
                    name="Portfolio Website"
                    previewImage="/portfolio_preview.png"
                    ImageBtn1="/githubBtn.png"
                    ImageBtn2="🚀"
                    Text1="GitHub"
                    Text2="Preview"
                    Link1="https://github.com/YuvarajPG/portfolio"
                    
                    //"https://portfolio-phi-steel-w7uujjbyn9.vercel.app/"
                    btnStyle2="disabled bg-gray-400"
                />
            </div>
        </>
    );
};

export default Page;
