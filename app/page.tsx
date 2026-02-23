"use client";
// import Dummy from "@/components/custom/Dummy";
import Main from "@/components/custom/main";
import Section2 from "@/components/custom/Section2";
import Section3 from "@/components/custom/Section3";
const page = () => {
    return (
        <div className="overflow-hidden max-w-svw">
            <Main />
            <Section2 />
            <Section3 />
            
            {/* placeholder */}
            {/* <Dummy /> */}
        </div>
    );
};

export default page;
