"use client";
import Link from "next/link";
import Image from "next/image";

const Main = () => {
    return (
        <div className="bg-[#e5ebe7] dark:bg-[#020403] text-black min-h-screen dark:text-white">
            <main className="flex min-h-screen flex-col items-center justify-center py-2">
                <p className="text-4xl font-bold">Welcome to my portfolio</p>

                <div className="flex gap-4 justify-center mt-10 items-center text-center">
                    <div>
                        <Link href="https://github.com/YuvarajPG">
                            <Image
                                src="/github.png"
                                alt="GitHub"
                                width={30}
                                height={30}
                                title="Github"
                            />
                        </Link>
                    </div>

                    <div>
                        <Link href="https://www.linkedin.com/in/yuvarajpg">
                            <Image
                                src="/linkedin.png"
                                alt="LinkedIn"
                                width={30}
                                height={30}
                                title="Linkedin"
                            />
                        </Link>
                    </div>

                    <div>
                        <Link href="https://www.instagram.com/_yuva_raj_21/">
                            <Image
                                src="/instagram.png"
                                alt="Instagram"
                                width={30}
                                height={30}
                                title="Instragram"
                            />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Main;
