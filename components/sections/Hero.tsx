"use client";
import { Spotlight } from "../ui/spotlight-new";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import githubLogo from "../../public/github.png";
// import instagramLogo from "../../public/instagram.png";
import linkedinLogo from "../../public/linkedin.png";
import location from "../../public/location.png";
import resume from "../../public/resume.png";
import email from "../../public/email.png";
import { motion } from "framer-motion";

const Main = () => {
    const words = [{ text: "Hello! I'm Yuvaraj" }];
    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-center bg-black/96 antialiased bg-grid-white/[0.02] overflow-hidden relative"
                id="hero"
            >
                <Spotlight />
                <TypewriterEffectSmooth
                    words={words}
                    className="text-white h-auto text-3xl flex justify-center sm:text-4xl w-max m-0 max-[265px]:text-2xl"
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className="container flex flex-col items-center justify-center m-0 p-0 animate-in fade-in duration-3000 ease-in group">
                        <p className="text-white text-2xl max-[265px]:text-lg">
                            Web Developer
                        </p>

                        <p className="text-white max-[265px]:text-sm hover:cursor-pointer hover:underline-offset-4 hover:underline hover:decoration-linear active:decoration-embrald-400/50 transition-all duration-300 relative  hover:decoration-emerald-400">
                            <a
                                href="https://www.google.com/maps/place/Salem,+Tamil+Nadu"
                                target="_blank"
                            >
                                Salem, Tamil Nadu, India
                            </a>

                            <Image
                                src={location}
                                alt="Location"
                                className="h-6 w-6 absolute -translate-y-9.75 mt-3 -translate-x-6.5 max-[265px]:-translate-x-20.25 max-[265px]:h-5 max-[265px]:w-5 transition-all duration-300 group-hover:scale-110"
                            />
                        </p>
                    </div>
                    <div className="flex flex-col animate-in fade-in duration-3000 ease-in">
                        <div className="flex mt-3 gap-2 justify-center">
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

                            {/* instragaram logo and link */}
                            {/*  <>
                        <Link
                            href="https://www.instagram.com/_yuva_raj_21/"
                            target="_blank"
                        >
                            <Image
                                src={instagramLogo}
                                alt="Instagram Logo"
                                width={30}
                            />
                            <span className="">
                                    Instragram
                                </span>
                        </Link>
                    </> */}
                            <>
                                <Link
                                    href="mailto:yuvar2978@gmail.com"
                                    target="_blank"
                                >
                                    <Image
                                        src={email}
                                        alt="Email Icon"
                                        width={30}
                                        className="hover:cursor-pointer"
                                    />
                                </Link>
                            </>
                            <>
                                <Link
                                    href="/resume_v2_updated.pdf"
                                    target="_blank"
                                >
                                    <Image
                                        src={resume}
                                        alt="Resume Icon"
                                        width={30}
                                        className="hover:cursor-pointer"
                                    />
                                </Link>
                            </>
                        </div>
                        <span>
                            <a
                                href="/resume_v2_updated.pdf"
                                download="Yuvaraj Resume.pdf"
                                className="py-1.5 rounded-full font-medium transition-all hover:scale-105 z-99 text-white bg-linear-to-r from-purple-500 to-blue-600 px-4 mt-5 block text-center hover:cursor-pointer hover:bg-linear-to-l active:bg-green-600 animate-in fade-in ease-in duration-300 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-green-500"
                            >
                                Download CV
                            </a>
                        </span>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Main;
