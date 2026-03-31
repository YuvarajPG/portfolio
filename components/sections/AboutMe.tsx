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
                <div className="flex max-md:flex-col gap-8 min-[768px]:gap-25 items-center">
                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="text-center md:text-left max-w-xl"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Hi, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
                                Yuvaraj
                            </span>
                        </h3>

                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                            I&apos;m an aspiring developer who enjoys building
                            modern, responsive web applications with a strong
                            focus on clean design and performance. I work with
                            React, Tailwind CSS, and JavaScript to create
                            user-friendly interfaces and real-world projects.
                        </p>

                        {/* EDUCATION CARD */}
                        <div className="bg-white/5 shadow-lg shadow-white/10 rounded-xl p-5 backdrop-blur-sm hover:shadow-purple-400 transition-all duration-300 hover:scale-105 active:scale-95 text-left">
                            <h4 className="text-white font-semibold text-2xl mb-2 underline underline-offset-4">
                                Education
                            </h4>

                            <p className="text-white/90 font-medium">
                                B.E. Electronics and Communication Engineering
                            </p>

                            <p className="text-white/60 text-sm mb-2">
                                AVS Engineering College (2023 – 2027)
                            </p>

                            <ul className="text-white/70 text-sm space-y-1">
                                <li>
                                    • CGPA:{" "}
                                    <span className="text-white font-medium">
                                        8.29
                                    </span>
                                </li>
                                <li>
                                    • Focused on software development & modern
                                    web technologies
                                </li>
                                <li>• Hands-on experience through projects</li>
                            </ul>
                            {/* SCHOOL */}
                            <div className="mt-4">
                                <p className="text-white font-medium">
                                    Higher Secondary Education
                                </p>

                                <p className="text-white/60 text-sm">
                                    Bharathi Vidyalaya Higher Secondary School
                                </p>

                                <ul className="text-white/70 text-sm mt-1 space-y-1">
                                    <li>• 12th Grade: 55%</li>
                                    <li>• 10th Grade: Completed</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 80, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false }}
                        className="flex justify-center"
                    >
                        <div className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[420px] aspect-[4/5]">
                            <Image
                                src="/profile.jpg"
                                alt="Yuvaraj profile"
                                fill
                                sizes="(max-width: 640px) 260px,(max-width: 768px) 300px,(max-width: 1024px) 340px,(max-width: 1280px) 380px,420px"
                                className="rounded-2xl object-cover shadow-lg shadow-white/10 hover:shadow-purple-400 transition-all duration-300 hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
