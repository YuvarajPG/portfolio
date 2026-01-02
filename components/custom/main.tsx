"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const main = () => {
    const words = [
        /* { text: "Full-Stack Developer" } ,*/ { text: "Hi Srimathi" },
    ];
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-black/96 antialiased bg-grid-white/[0.02] overflow-hidden relative">
                <Spotlight gradientThird="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)" />
                <div className=" px-4 max-w-7xl  mx-auto relative z-10  w-full">
                    <TextGenerateEffect
                        words={"Welcome to my Portfolio Website"}
                        className="text-white text-2xl md:text-5xl sm:text-4xl font-bold text-center bg-clip-text  bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                    />

                    <TypewriterEffectSmooth
                        words={words}
                        className="text-white h-auto text-lg flex justify-center sm:text-3xl w-max"
                    />
                    
                </div>

                {/*  <LayoutTextFlip text={"Welcome to my"} list={["name is Yuvaraj", "portfolio", "website"]}/> */}
            </div>
        </>
    );
};

export default main;
