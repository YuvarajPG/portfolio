"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import githubLogo from "../../public/github.png";
import instagramLogo from "../../public/instagram.png";
import linkedinLogo from "../../public/linkedin.png";
import location from "../../public/location.png";

const Main = () => {
    const words = [
        { text: "Hello! I'm Yuvaraj" },
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
                <div className="animate-in fade-in duration-3000 ease-in container flex flex-col items-center justify-center  m-0 p-0">
                    <p className="text-white text-2xl">Web Developer</p>
                    <p className="text-white">Salem,Tamil Nadu,India</p>
                    <Image
                        src={location}
                        alt="Location"
                        className="h-6 w-6 absolute -translate-y-3.25 mt-3 -translate-x-24 "
                    />
                    <div className="flex gap-4 mt-3">
                        <div className="">
                            <Link
                                href="https://github.com/YuvarajPG"
                                target="_blank"
                            >
                                <Image
                                    src={githubLogo}
                                    alt="GitHub Logo"
                                    width={30}
                                />
                                {/* <span className="">
                                    GitHub
                                </span> */}
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="https://www.linkedin.com/in/yuvarajpg"
                                target="_blank"
                            >
                                <Image
                                    src={linkedinLogo}
                                    alt="LinkedIn Logo "
                                    width={30}
                                />
                                {/* <span className="">
                                    Linkedin
                                </span> */}
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="https://www.instagram.com/_yuva_raj_21/"
                                target="_blank"
                            >
                                <Image
                                    src={instagramLogo}
                                    alt="Instagram Logo"
                                    width={30}
                                />
                                {/* <span className="">
                                    Instragram
                                </span> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
