// "use client";
// import Dummy from "../components/custom/Dummy";
import Main from "../components/sections/Hero";
import AboutMe from "../components/sections/AboutMe";
import SkillSection from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
// import Technologies from "../components/custom/technologies";
// import ClickSpark from "../components/ui/ClickSpark";

const Page = () => {
    return (
        
            <div className="overflow-hidden">
                <Main />
                <AboutMe />
                <SkillSection />
                <Projects />
                <Contact />z
                {/* <Technologies /> */}
            </div>
    );
};

export default Page;
