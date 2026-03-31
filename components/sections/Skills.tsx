"use client";
import { useState } from "react";
import CardSection from "../custom/Cards";
import { motion } from 'framer-motion';

const Skills = () => {
    const [activeId, setActiveId] = useState<number | null>(null);
    const [isFast, setIsFast] = useState(false);

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

            <motion.div 
                className="flex gap-6 justify-center pt-10 flex-wrap flex-col min-[300px]:flex-row w-fit mx-auto"
                onViewportEnter={() => {
                    if (!isFast) {
                        setTimeout(() => setIsFast(true), 3000);
                    }
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: false, margin: "-10px" }}
                        animate={{
                            opacity: activeId === null ? 1 : activeId === skill.id ? 1 : 0.4,
                            scale: activeId === skill.id ? 1.05 : 1,
                        }}
                        transition={{ 
                            duration: isFast ? 0.3 : 0.6, 
                            delay: isFast ? index*0.1 : index * 0.15, 
                            type: "spring", 
                            bounce: isFast ? 0.15 : 0.3 
                        }}
                        className="cursor-pointer"
                    >
                        <CardSection                            
                            name={skill.name}
                            logo={skill.logo}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
