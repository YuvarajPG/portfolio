"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavbarV2 = () => {
    const pathname = usePathname();

    const color = {
        Home: pathname === "/" ? "bg-black/20 text-gray-400" : "",
        Projects:
            pathname === "/projects"
                ? "bg-blue-500/50 text-white"
                : "bg-gray/30 text-gray-300",
        About:
            pathname === "/about"
                ? "bg-blue-500/50 text-gray-500"
                : "bg-gray/30 text-gray-300",
    };

    return (
        <div className="w-full flex justify-center pt-6 absolute top-0 left-0 z-50">
            <ul
                className={`flex items-center gap-2 px-2 py-2 rounded-full backdrop-blur-md max-[260px]:px-0 max-[260px]:text-sm max-[260px]:min-h-10 max-[260px]:gap-1 border border-white/10 min-h-12
        ${color[pathname === "/" ? "Home" : pathname === "/projects" ? "Projects" : "About"]}`}
            >
                <li>
                    <Link
                        href="/"
                        className={`px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10
            ${
                pathname === "/"
                    ? " hover:bg-white/10 hover:text-white"
                    : " hover:text-white"
            }
                    `}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/projects"
                        className={`px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10
            ${
                pathname === "/projects"
                    ? "bg-white/10 hidden"
                    : " hover:text-white"
            }`}
                    >
                        Projects
                    </Link>
                </li>

                <li>
                    <Link
                        href="/about"
                        className={`px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:bg-white/10
            ${pathname === "/about" ? " bg-white/10" : " hover:text-white"}`}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavbarV2;
