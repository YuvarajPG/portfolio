"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import location from "../../public/location.png";

gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    SplitText,
    TextPlugin,
);

const main = () => {
    const words = [
        { text: "Hello! I’m Yuvaraj" },
        // { text: "Srimathi, I love you" },
        // { text: "Srimathi, I like you" },
    ];
    return (
        <>
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-black/96 antialiased bg-grid-white/[0.02] overflow-hidden relative">
                <Spotlight />
                <TypewriterEffectSmooth
                    words={words}
                    className="text-white h-auto text-lg flex justify-center sm:text-3xl w-max m-0"
                />
                <div className="animate-in fade-in duration-1000 ease-in container flex flex-col items-center justify-center">
                    <p className="text-white text-2xl">Web Developer</p>
                    <p className="text-white">Salem,Tamil Nadu,India</p>
                    <Image
                        src={location}
                        alt="Location"
                        className="h-7 w-7 absolute translate-y-4 -translate-x-24 "
                    />
                </div>
            </div>
        </>
    );
};

export default main;
