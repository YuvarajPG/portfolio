"use client";
import { useState } from "react";
import CardSection from "../custom/Cards";
import { motion } from 'framer-motion';

const Skills = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const skills = [
        { id: 1, name: "HTML5", logo: "/html-5.png" },
        { id: 2, name: "CSS", logo: "/css.png" },
        { id: 3, name: "Tailwind CSS", logo: "/TailwindCSS.png" },
        { id: 4, name: "Bootstrap", logo: "/bootstrap.png" },
        { id: 5, name: "JavaScript", logo: "/js.png" },
        { id: 6, name: "React JS", logo: "/atom.png" },
        { id: 7, name: "Next JS", logo: "/Next.js.png" },
        { id: 8, name: "Java", logo: "/javaTemp.png" },
    ];

    return (
        <div className="w-full px-4 py-16 flex flex-col border-t border-white/20">
            <p className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
                My Skills
            </p>

            <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />

            <div className="flex gap-6 justify-center pt-10 flex-wrap flex-col min-[300px]:flex-row w-fit mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        animate={{ opacity: activeId === skill.id ? 1 : 0.7 }}
                        key={skill.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.1, type: "spring",ease: "easeInOut" }}
                        viewport={{ once: false }}
                    >
                        <CardSection
                            id={skill.id}
                            name={skill.name}
                            logo={skill.logo}
                            activeId={activeId}
                            setActiveId={setActiveId}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
