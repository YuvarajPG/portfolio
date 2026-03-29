"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, CheckCircle } from "lucide-react";
import Link from "next/link";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (success) {
            const timeout = setTimeout(() => {
                setSuccess(false);
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [success]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setError(data.message || "Failed to send message.");
            }
        } catch (err) {
            setError("An error occurred while sending the message.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="py-20 bg-black/96 relative overflow-hidden flex flex-col items-center justify-center border-t border-white/10" id="Contact">
            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-blue-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <a href="mailto:yuvar2978@gmail.com" target="_blank" className="text-white text-lg hover:text-blue-400 transition-all">
                                    yuvar2978@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-purple-400">
                                <Link href={"https://maps.app.goo.gl/5iY3XMdbLbHFvc6t8"} target="_blank"><MapPin className="w-6 h-6" /></Link>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Location</p>
                                <Link href={"https://maps.app.goo.gl/5iY3XMdbLbHFvc6t8"} target="_blank"><p className="text-white text-lg hover:text-blue-400 transition-all">Salem, Tamil Nadu, India</p></Link>
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
                        viewport={{ once: false }}
                    >
                        {success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, type: "spring" }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 min-h-[464px]"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-2"
                                >
                                    <CheckCircle className="w-10 h-10" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                <p className="text-gray-400 text-center max-w-sm">
                                    Thanks for reaching out! I will get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium border border-purple-500/30 px-4 py-2 rounded-lg hover:bg-purple-500/10"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col gap-6" onSubmit={handleSubmit}>
                                {error && (
                                    <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
                                        {error}
                                    </div>
                                )}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-gray-300 text-sm">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-gray-300 text-sm">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your_email@example.com"
                                        className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-gray-300 text-sm">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your message..."
                                        className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                                >
                                    {loading ? (
                                        <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                    ) : (
                                        "Send Message"
                                    )}
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
