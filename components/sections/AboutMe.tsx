"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
    return (
        <section
            className="py-16 bg-black/95 relative overflow-hidden flex items-center border-t border-white/20 min-h-screen"
            id="About"
        >
            <div className="max-w-6xl mx-auto px-6 w-full">
                {/* TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <p className="text-3xl md:text-5xl font-bold text-white mb-4">
                        About Me
                    </p>
                    <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* CONTENT */}
                <div className="flex max-md:flex-col gap-8 items-center">
                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Hi, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
                                Yuvaraj
                            </span>
                        </h3>

                        <p className="text-white/80 text-lg leading-relaxed  text-wrap container">
                            I am a passionate developer with a strong foundation
                            in frontend technologies. I specialize in building
                            modern, responsive, and user-friendly web
                            applications. I am a quick learner and always
                            looking to expand my skill set.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 80, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false }}
                        className="grid place-items-center"
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Profile Image"
                            width={320}
                            height={320}
                            className="rounded-2xl mx-auto border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.3),0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] active:scale-95 max-w-md max-md:w-60 active:shadow-green-500/50 "
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
