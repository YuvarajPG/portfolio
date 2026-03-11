import { Spotlight } from "../ui/spotlight-new";
import CardSection from "./Cards";

const Section2 = () => {
    return (
        <>
            {/* <Spotlight /> */}
            <div className="w-full bg-linear-to-b from-[#1e3c72] via-[#2a5298] to-[#1b2b4b] px-2 py-10">
                <p className="text-black text-center text-3xl font-bold underline">
                    My Skills
                </p>
                <div className="flex flex-row  gap-4 justify-center flex-wrap pt-10">
                    <CardSection
                        name="HTML5"
                        logo="/html-5.png"
                    />
                    <CardSection
                        name="Tailwind CSS"
                        logo="/TailwindCSS.png"
                    />
                    <CardSection
                        name="JavaScript"
                        logo="/js.png"
                    />
                    <CardSection
                        name="React JS"
                        logo="/atom.png"
                    />
                    <CardSection
                        name="Next JS"
                        logo="/Next.js.png"
                    />
                    <CardSection
                        name="Java"
                        logo="/javaTemp.png"
                    />
                </div>
            </div>
        </>
    );
};

export default Section2;
