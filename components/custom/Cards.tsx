"use client";

import Image from "next/image";

const CardSection = ({
    name,
    logo,
    link,
    id,
    activeId,
    setActiveId,
}: {
    name?: string;
    logo?: string;
    link?: string;
    id: number;
    activeId: number | null;
    setActiveId: (id: number | null) => void;
}) => {
    const isActive = activeId === id;

    return (
        <div
            onClick={() => setActiveId(activeId === id ? null : id)}
            className={`card-glow ${
                isActive ? "card-active" : ""
            } backdrop-blur-md p-2 flex items-center justify-center active:scale-105`}
        >
            {/* INNER CARD */}
            <div
                className={`w-28 h-36 flex flex-col items-center justify-between py-4 rounded-xl cursor-pointerbg-gray-800/80 backdrop-blur-sm border border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 ${isActive ? "ring-1 ring-white/30" : ""}`}
            >
                {/* ICON */}
                <div className="flex w-14 h-14 bg-white/10 rounded-full items-center justify-center">
                    {logo && name && (
                        <Image width={28} height={28} src={logo} alt={name} />
                    )}
                </div>

                {/* TEXT */}
                <h3
                    className="text-md font-semibold text-white/90
                    text-center px-2 leading-snug tracking-wide"
                >
                    {name}
                </h3>

                {/* LINK (optional) */}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] text-white/60 hover:text-white/90 transition"
                    >
                        Open
                    </a>
                )}
            </div>
        </div>
    );
};

export default CardSection;
