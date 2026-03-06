import { Spotlight } from "../ui/spotlight-new";
import CardSection from "./Cards";

const Section2 = () => {
    return (
        <>
            <Spotlight />
            <div className="min-w-screen bg-linear-to-b from-[#2b7fff] to-[#1e3c72]  px-2 py-10 max-w-7xl mx-auto">
                <p className="text-black text-center text-3xl font-bold underline">
                    My Skills
                </p>
                <div className="flex flex-row  gap-4 justify-center flex-wrap pt-10">
                    <CardSection
                        name="HTML5"
                        logo="/html-5.png"
                        className="ps-2 pt-5"
                    />
                    <CardSection
                        name="Tailwind CSS"
                        logo="/TailwindCSS.png"
                        className="ps-2 pt-5"
                    />
                    <CardSection
                        name="JavaScript"
                        logo="/js.png"
                        className="ps-2 pt-5"
                    />
                    <CardSection
                        name="React JS"
                        logo="/atom.png"
                        className="ps-2 pt-5"
                    />
                    <CardSection
                        name="Next JS"
                        logo="/Next.js.png"
                        className="ps-2 pt-5"
                    />
                    <CardSection
                        name="Java"
                        logo="/javaTemp.png"
                        className="ps-2 pt-5"
                    />
                </div>
            </div>
        </>
    );
};

export default Section2;
