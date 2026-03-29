"use client";

import { useState } from "react";
import ProjectCard from "../custom/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section
            className="min-h-dvh flex flex-col items-center mb-80 py-16 border-t border-white/20 justify-center"
            id="Projects"
        >
            {/* TITLE */}
            <p className="text-3xl md:text-5xl font-bold text-white mb-4">
                My Projects
            </p>

            <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-blue-500 rounded-full" />

            {/* PROJECTS */}
            <div className="flex flex-col mt-12 gap-10 md:flex-row items-center justify-center mb-5">
                {/* CARD 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <ProjectCard
                        id={1}
                        activeId={activeId}
                        setActiveId={setActiveId}
                        techs={[
                            "HTML5",
                            "CSS3",
                            "TailwindCSS",
                            "JavaScript",
                            "React JS",
                        ]}
                        name="Todo App"
                        previewImage="/todo_preview.png"
                        altImage1="todo app preview"
                        ImageBtn1="/githubBtn.png"
                        ImageBtn2="🚀"
                        Text1="GitHub"
                        Text2="Preview"
                        Link1="https://github.com/YuvarajPG/todo"
                        Link2="https://todo-two-puce-47.vercel.app/"
                        target="_blank"
                    />
                </motion.div>

                {/* CARD 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ProjectCard
                        id={2}
                        activeId={activeId}
                        setActiveId={setActiveId}
                        status={["completed"]}
                        techs={[
                            "HTML5",
                            "CSS3",
                            "TailwindCSS",
                            "JavaScript",
                            "TypeScript",
                            "React JS",
                        ]}
                        name="Portfolio Website"
                        previewImage="/porflio_2.png"
                        altImage2="portfolio preview"
                        ImageBtn1="/githubBtn.png"
                        ImageBtn2="/startup.png"
                        Text1="GitHub"
                        Text2="Preview"
                        Link1="https://github.com/YuvarajPG/portfolio"
                        Link2="#hero"
                        btnStyle2="disabled bg-gray-600 hover:bg-gray-500"
                    />
                </motion.div>
            </div>

            {/* UPCOMING */}
            <div className="flex flex-col items-center justify-center mt-16">
                <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Upcoming Projects
                </p>

                <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-blue-500 rounded-full" />

                <p className="text-white/70 mt-10">COMING SOON!</p>
            </div>
        </section>
    );
};

export default Projects;
