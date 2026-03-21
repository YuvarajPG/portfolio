"use client";
import Link from "next/link";
const NavbarV2 = () => {
    return (
        <div className="w-full flex justify-center pt-6 absolute top-0 left-0 z-5">
            <ul
                className={`flex items-center gap-2 px-2 py-2 rounded-full backdrop-blur-md max-[260px]:px-0 max-[260px]:text-sm max-[260px]:min-h-10 max-[260px]:gap-1 border border-white/10 min-h-12 bg-black/20 text-gray-400 `}
            >
                <li>
                    <Link
                        href="/"
                        className={`px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white`}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <a
                        href="#Projects"
                        className={`px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white`}
                    >
                        Projects
                    </a>
                </li>

                <li>
                    <a
                        href="#About"
                        className={`px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:text-white`}
                    >
                        About
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavbarV2;
