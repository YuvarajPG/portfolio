"use client";
const NavbarV2 = () => {
    return (
        <div className="w-full flex justify-center fixed top-4 left-0 z-50 px-2">
            <ul className="flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-lg border border-white/10 bg-black/30 text-gray-300 shadow-lg">
                <li>
                    <a
                        href="#hero"
                        className="px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white"
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="#Projects"
                        className="px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white"
                    >
                        Projects
                    </a>
                </li>

                <li>
                    <a
                        href="#About"
                        className="px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white"
                    >
                        About
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default NavbarV2;