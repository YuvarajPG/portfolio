"use client";
import { Spotlight } from "../ui/spotlight-new";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import githubLogo from "../../public/github.png";
import instagramLogo from "../../public/instagram.png";
import linkedinLogo from "../../public/linkedin.png";
import location from "../../public/location.png";
import resume from "../../public/resume.png";
import email from "../../public/email.png";

const Main = () => {
    const words = [
        { text: "Hello! I'm Yuvaraj" },
        // { text: "Srimathi, I love you" },
        // { text: "Srimathi, I like you" },
    ];
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-black/96 antialiased bg-grid-white/[0.02] overflow-hidden relative">
                <Spotlight />
                <TypewriterEffectSmooth
                    words={words}
                    className="text-white h-auto text-3xl flex justify-center sm:text-4xl w-max m-0 max-[265px]:text-2xl"
                />
                <div className="container flex flex-col items-center justify-center  m-0 p-0 animate-in fade-in duration-3000 ease-in">
                    <p className="text-white text-2xl max-[265px]:text-lg">Web Developer</p>
                    <p className="text-white max-[265px]:text-sm">Salem,Tamil Nadu,India</p>
                    <Image
                        src={location}
                        alt="Location"
                        className="h-6 w-6 absolute translate-y-2 mt-3 -translate-x-24 max-[265px]:-translate-x-20.25 max-[265px]:h-5 max-[265px]:w-5"
                    />
                </div>
                <div className="flex mt-3 gap-2 animate-in fade-in duration-3000 ease-in">
                    <>
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
                    </>

                    <>
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
                    </>

                    <>
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
                    </>
                    <>
                        <Link href="mailto:yuvar2978@gmail.com" target="_blank">
                            <Image
                                src={email}
                                alt="Email Icon"
                                width={30}
                                className="hover:cursor-pointer"
                            />
                        </Link>
                        <Link href="/resume_v2_updated.pdf" target="_blank">
                            <Image
                                src={resume}
                                alt="Resume Icon"
                                width={30}
                                className="hover:cursor-pointer"
                            />
                        </Link>
                    </>
                </div>
                <a 
                    href="/resume_v2_updated.pdf" 
                    download="Yuvaraj_Resume.pdf"
                    className="py-1.5 rounded-full font-medium transition-all hover:scale-105 z-99 text-white bg-orange-600/95.5 hover:bg-orange-600/80 px-4 mt-5 animate-in fade-in duration-3000 ease-in block"
                >
                    Download CV
                </a>
            </div>
        </>
    );
};

export default Main;
