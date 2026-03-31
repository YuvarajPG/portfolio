"use client";

import Image from "next/image";

const CardSection = ({
    name,
    logo,
    link,
}: {
    name?: string;
    logo?: string;
    link?: string;
}) => {
    return (
        <div
            className="bg-white/20 backdrop-blur-md shadow-lg shadow-white/50 rounded-2xl p-2 
            flex flex-col items-center justify-center text-center transition-all duration-300
            group active:shadow-2xl active:scale-95 hover:shadow-purple-400 hover:scale-105"
        >
            {/* INNER CARD */}
            <div
                className="bg-white pt-4 pb-2 min-h-37.5 w-25 flex flex-col rounded-xl border border-white/20 transition-all duration-300"
            >
                {/* ICON */}
                <div
                    className="flex w-16 h-16 bg-gray-200 rounded-full 
                    items-center justify-center mx-auto transition-all duration-300"
                >
                    {logo && name && (
                        <Image
                            width={32}
                            height={32}
                            src={logo}
                            alt={name}
                        />
                    )}
                </div>

                {/* TEXT */}
                <h3 className="mt-2 text-lg font-semibold text-gray-900 text-center px-2">
                    {name}
                </h3>

                {/* LINK */}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-blue-500 mt-1 hover:underline"
                    >
                        Open
                    </a>
                )}
            </div>
        </div>
    );
};

export default CardSection;