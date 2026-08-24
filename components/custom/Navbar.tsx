import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="py-4 px-4 backdrop-blur-2xl box-border shadow  border-white/10 dark:border-gray-800">
                <div className="max-[200]:flex max-[200]:justify-around hidden">please use big screen</div>
                <div className="flex justify-between items-center max-[200]:hidden">
                    <div className="text-xl font-bold hidden min-[330]:block">
                        <Link href="/" className="">
                            Portfolio
                        </Link>
                    </div>
                    <div className="flex space-x-4 text-lg">
                        <Link
                            href="/"
                            className="hover:text-blue-500"
                        >
                            Home
                        </Link>
                        <Link
                            href="/projects"
                            className="hover:text-blue-500"
                            target="_blank"
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
