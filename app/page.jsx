"use client";
// import Dummy from "../components/custom/Dummy";
import Main from "../components/sections/Hero";
import AboutMe from "../components/sections/AboutMe";
import SkillSection from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
// import Contact from '../components/sections/Contact';

const Page = () => {
  return (
    <div className="overflow-hidden">
      <Main />
      <AboutMe />
      <SkillSection />
      <Projects />
      {/* <Contact /> */}
      {/* placeholder */}
      {/* <Dummy /> */}
    </div>
  );
};

export default Page;
