"use client";
import Image from "next/image";
import Link from "next/link";
import githubLogo from "../../public/github.png";
import instagramLogo from "../../public/instagram.png";
import linkedinLogo from "../../public/linkedin.png";

const page = () => {
    return (
        <div className="flex justify-center flex-col items-center p-8 space-y-4 min-h-screen">
            <p className="text-3xl bold">Contact Page</p>
            <div className="grid grid-cols-1 space-y-4 items-center gap-4 sm:grid-cols-3 sm:space-y-0">
                <Link href="https://github.com/YuvarajPG" target="_blank">
                    <Image src={githubLogo} alt="GitHub Logo" width={30} />
                    <span className="underline text-blue-600">GitHub</span>
                </Link>

                <Link
                    href="https://www.instagram.com/_yuva_raj_21/"
                    target="_blank"
                >
                    <Image
                        src={instagramLogo}
                        alt="Instagram Logo"
                        width={30}
                    />
                    <span className="text-blue-600 underline">Instragram</span>
                </Link>

                <Link
                    href="https://www.linkedin.com/in/yuvarajpg"
                    target="_blank"
                >
                    <Image src={linkedinLogo} alt="LinkedIn Logo " width={30} />
                    <span className="underline text-blue-600">Linkedin</span>
                </Link>
            </div>
        </div>
    );
};
export default page;
