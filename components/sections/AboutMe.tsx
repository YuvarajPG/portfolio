"use client";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight-new";

const AboutMe = () => {

    return (
        <section className="py-20 bg-black/96 relative overflow-hidden flex flex-col items-center justify-center border-t border-white/20 min-h-screen" id="About">    
            <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Yuvaraj</span>
                        </h3>
                        <p className="text-white text-lg">
                            I am a passionate developer with a strong foundation in frontend technologies. I specialize in building modern, responsive, and user-friendly web applications. I am a quick learner and am always looking to expand my skill set.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
