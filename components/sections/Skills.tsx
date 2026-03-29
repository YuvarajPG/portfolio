import { useState } from "react";
import CardSection from "../custom/Cards";
const Skills = () => {
const [activeId,setActiveId]=useState<number | null>(null)
    return (
        <>
            <div className="w-full px-2 py-10 flex flex-col border-t border-white/20">
                <p className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
                    My Skills
                </p>
                <div className="w-30 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
                <div className="flex flex-row gap-4 justify-center flex-wrap pt-10 max-[265px]:gap-2 max-[265px]:">
                    <CardSection
                        name="HTML5"
                        logo="/html-5.png"
                        id={1}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />
                    <CardSection
                        name="CSS"
                        logo="/css.png"
                        id={2}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />
                    <CardSection
                        name="Tailwind CSS"
                        logo="/TailwindCSS.png"
                        id={3}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />
                    <CardSection
                        name="bootstarp"
                        logo="/bootstrap.png"
                        id={4}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />
                    <CardSection
                        name="JavaScript"
                        logo="/js.png"
                        id={5}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />
                    <CardSection
                        name="React JS"
                        logo="/atom.png"
                        id={6}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />
                    <CardSection
                        name="Next JS"
                        logo="/Next.js.png"
                        id={7}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />
                    <CardSection
                        name="Java"
                        logo="/javaTemp.png"
                        id={8}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />
                </div>
            </div>
        </>
    );
};

export default Skills;
