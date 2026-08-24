"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <section
            className="py-12 sm:py-16 lg:py-20 bg-black relative border-t border-white/10"
            id="Contact"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
                        I’m open to opportunities, collaborations, or just a
                        quick chat.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center gap-6 sm:gap-8"
                    >
                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <Mail className="text-blue-400" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <a
                                    href="mailto:yuvar2978@gmail.com"
                                    className="text-white text-base sm:text-lg hover:text-blue-400 transition-colors"
                                >
                                    yuvar2978@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <MapPin className="text-purple-400" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">
                                    Location
                                </p>
                                <Link
                                    href="https://maps.app.goo.gl/5iY3XMdbLbHFvc6t8"
                                    target="_blank"
                                    className="text-white text-base sm:text-lg hover:text-blue-400 transition-colors"
                                >
                                    Salem, Tamil Nadu, India
                                </Link>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-4 mt-2">
                            {[
                                {
                                    icon: (
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    ),
                                    link: "https://github.com/YuvarajPG",
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    ),
                                    link: "https://www.linkedin.com/in/yuvarajpg",
                                },
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full 
                                    bg-white/5 border border-white/10 backdrop-blur-md 
                                    hover:scale-110 hover:border-white/20 transition-all text-white/80"
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {success ? (
                            <div
                                className="h-full flex flex-col items-center justify-center 
                            bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 text-center"
                            >
                                <CheckCircle className="text-green-400 w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Message Sent!
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    I’ll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="h-full flex flex-col gap-5 sm:gap-6 
                                bg-white/5 border border-white/10 backdrop-blur-xl 
                                rounded-2xl p-5 sm:p-6 lg:p-8"
                            >
                                {/* Floating Input */}
                                {["name", "email"].map((field) => (
                                    <div key={field} className="relative">
                                        <input
                                            id={field}
                                            type={
                                                field === "email"
                                                    ? "email"
                                                    : "text"
                                            }
                                            value={(formData as any)[field]}
                                            onChange={handleChange}
                                            required
                                            className="peer w-full bg-transparent border border-white/10 rounded-lg px-4 pt-5 pb-2 text-white outline-none 
                                            focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
                                        />
                                        <label
                                            htmlFor={field}
                                            className="absolute left-4 top-2 text-gray-400 text-xs 
                                            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm 
                                            peer-placeholder-shown:text-gray-500 
                                            peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400 
                                            transition-all"
                                        >
                                            {field.charAt(0).toUpperCase() +
                                                field.slice(1)}
                                        </label>
                                    </div>
                                ))}

                                {/* Textarea */}
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full bg-transparent border border-white/10 rounded-lg px-4 pt-5 pb-2 text-white outline-none resize-none
                                        focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
                                    />
                                    <label
                                        className="absolute left-4 top-2 text-gray-400 text-xs 
                                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm 
                                        peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400 
                                        transition-all"
                                    >
                                        Message
                                    </label>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-2 bg-linear-to-r from-purple-500 to-blue-500 
                                    text-white py-3 rounded-lg font-medium 
                                    hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30 
                                    transition-all disabled:opacity-50"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
