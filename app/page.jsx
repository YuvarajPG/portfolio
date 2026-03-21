"use client";
// import Dummy from "../components/custom/Dummy";
import Main from "../components/custom/main";
import AboutMe from "../components/custom/AboutMe";
import SkillSection from "../components/custom/skillSection";
import Projects from '../components/custom/Projects'
const Page = () => {
    return (
        <div className="overflow-hidden">
            <Main />
            <AboutMe />
            <SkillSection />
            <Projects />

            {/* placeholder */}
            {/* <Dummy /> */}
        </div>
    );
};

export default Page;
