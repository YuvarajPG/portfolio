"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Contact = () => {
    return (
        <section className="py-20 bg-black/96 relative overflow-hidden flex flex-col items-center justify-center border-t border-white/10" id="Contact">
            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-blue-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <a href="mailto:yuvar2978@gmail.com" className="text-white text-lg hover:text-blue-400 transition-colors">
                                    yuvar2978@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-purple-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Location</p>
                                <p className="text-white text-lg">Salem, Tamil Nadu, India</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <Link href="https://github.com/YuvarajPG" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/yuvarajpg" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <form className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-gray-300 text-sm">Name</label>
                                <input type="text" id="name" placeholder="John Doe" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-gray-300 text-sm">Email</label>
                                <input type="email" id="email" placeholder="john@example.com" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-gray-300 text-sm">Message</label>
                                <textarea id="message" rows={4} placeholder="Your message..." className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                            </div>
                            <button className="bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
