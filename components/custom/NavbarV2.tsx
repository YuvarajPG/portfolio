"use client";
import { motion } from "framer-motion";

const NavbarV2 = () => {
    return (
        <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 18,
                delay: 0.2,
            }}
            className="fixed top-3 sm:top-4 left-0 w-full flex justify-center z-50 px-2"
        >
            <nav
                className="flex items-center gap-1 sm:gap-2 md:gap-3 
                px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 
                rounded-full 
                backdrop-blur-xl bg-black/40 border border-white/10 
                shadow-lg shadow-black/40
                max-w-[95vw] sm:max-w-max
                no-scrollbar"
            >
                {[
                    { name: "Home", link: "#hero" },
                    { name: "Projects", link: "#Projects" },
                    { name: "About", link: "#About" },
                ].map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium rounded-full whitespace-nowrap text-gray-300 transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95"
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </motion.div>
    );
};

export default NavbarV2;
