import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="p-4 backdrop-blur-2xl box-border shadow  border-white/10 dark:border-gray-800">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold hidden min-[350]:block">
                        <Link href="/" className="">Portfolio</Link>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="/"
                            className="hover:text-gray-500 dark:hover:text-blue-400"
                        >
                            Home
                        </a>
                        <Link
                            href="/projects"
                            className="hover:text-gray-500 dark:hover:text-blue-400"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-gray-500 dark:hover:text-blue-400"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
