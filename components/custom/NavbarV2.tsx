"use client";
import { motion } from "framer-motion";

const NavbarV2 = () => {
    return (
        <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="w-full flex justify-center fixed top-4 left-0 z-50 px-2"
        >
            <ul className="flex items-center justify-between gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-full backdrop-blur-lg border border-white/10 bg-black/30 text-gray-300 shadow-lg max-w-[95vw] overflow-hidden max-[265px]:gap-0">
                <li>
                    <a
                        href="#hero"
                        className="px-2 sm:px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white whitespace-nowrap"
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="#Projects"
                        className="px-2 sm:px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white whitespace-nowrap"
                    >
                        Projects
                    </a>
                </li>

                <li>
                    <a
                        href="#About"
                        className="px-2 sm:px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white whitespace-nowrap"
                    >
                        About
                    </a>
                </li>
            </ul>
        </motion.div>
    );
};

export default NavbarV2;