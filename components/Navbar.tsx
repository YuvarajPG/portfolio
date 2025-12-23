import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="w-full p-4 backdrop-blur-2xl box-border shadow  border-white/10 dark:border-gray-800">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold">
                            <Link href="/">Portfolio</Link>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="/" className="hover:text-gray-500 dark:hover:text-blue-400">
                                Home
                            </Link>
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
                </div>
            </nav>
        </>
    );
};

export default Navbar;
