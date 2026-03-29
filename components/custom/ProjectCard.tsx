"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
    id,
    activeId,
    setActiveId,
    altImage1,
    altImage2,
    techs,
    status = ["ongoing"],
    name,
    previewImage,
    Text1,
    Text2,
    Link1,
    Link2 = "#",
    ImageBtn1,
    ImageBtn2,
    target,
    className,
    btnStyle1,
    btnStyle2,
}: {
    altImage1?: string;
    altImage2?: string;
    id: number;
    activeId: number | null;
    setActiveId: (id: number | null) => void;
    techs?: string[];
    status?: string[];
    name: string;
    previewImage: string;
    Text1: string;
    Text2: string;
    Link1: string;
    Link2?: string;
    ImageBtn1: string;
    ImageBtn2: string;
    target?: string;
    className?: string;
    btnStyle1?: string;
    btnStyle2?: string;
}) => {
    const isActive = activeId === id;
    const isCompleted = status?.includes("completed");

    const activeClass = isActive
        ? isCompleted
            ? "glass-card-completed"
            : "glass-card-ongoing"
        : "";
    return (
        <div
            onClick={() => setActiveId(activeId === id ? null : id)} onMouseEnter={() => setActiveId(id)} onMouseLeave={() => setActiveId(null)}
            className={`glass-card ${activeClass} ${className || ""} mx-4 my-2`}
        >
            <div className="rounded-xl flex max-w-90 flex-col gap-4 py-4">
                {/* IMAGE */}
                <div className="h-55 relative rounded-2xl overflow-hidden group">
                    <Image
                        src={previewImage}
                        alt={name}
                        fill
                        className="px-2 object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <span className="bg-black/70 px-4 py-2 rounded-lg font-semibold">
                            <Link href={Link2} target={target}>
                                Preview
                            </Link>
                        </span>
                    </div>
                </div>

                {/* TITLE */}
                <div className="flex justify-between px-4">
                    <p className="text-xl font-bold relative">{name}</p>

                    {status.includes("completed") ? (
                        <span className="bg-emerald-500 px-2 rounded-xl text-sm py-1 font-medium max-h-fit">
                            Completed
                        </span>
                    ) : (
                        <span className="bg-amber-400 px-2 rounded-xl text-sm py-1 font-medium">
                            On Going
                        </span>
                    )}
                </div>

                {/* TECH */}
                <div className="px-4">
                    <p className="text-sm text-muted-foreground">
                        Technologies Used
                    </p>

                    <div className="flex gap-2 flex-wrap mt-2">
                        {techs?.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-blue-500/80 px-2 py-1 rounded text-xs font-semibold hover:scale-105 transition"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* BUTTONS */}
                <div className="flex justify-around px-4 gap-2 flex-wrap mt-auto max-[908px]:flex-col">
                    {/* Github */}
                    <button
                        className={`${btnStyle1 || ""}  group bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200`}
                    >
                        <Link
                            href={Link1}
                            target={target}
                            className="flex items-center gap-1 justify-center"
                        >
                            {Text1}
                            {ImageBtn1.includes(".png") ||
                            ImageBtn1.includes(".jpg") ||
                            ImageBtn1.includes(".jpeg") ? (
                                <Image
                                    src={ImageBtn1}
                                    width={40}
                                    height={40}
                                    // quality={100}
                                    alt={
                                        altImage1?.trim()
                                            ? altImage1
                                            : "Button Icon"
                                    }
                                    className="w-5 h-5 transition-all duration-200 group-hover:scale-125 group-hover:rotate-6"
                                />
                            ) : (
                                ImageBtn1
                            )}
                        </Link>
                    </button>

                    {/* Preview */}
                    <button
                        className={`${btnStyle2 || "bg-green-600 hover:bg-green-500"}text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group `}
                    >
                        <a
                            href={Link2}
                            target={target}
                            className="flex items-center gap-1 justify-center relative"
                        >
                            {Text2}
                            {ImageBtn2.includes(".png") ||
                            ImageBtn2.includes(".jpg") ||
                            ImageBtn2.includes(".jpeg") ? (
                                <Image
                                    src={ImageBtn2}
                                    width={20}
                                    height={20}
                                    alt={altImage2?.trim() || "icon"}
                                    className=""
                                />
                            ) : (
                                <span className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 ">
                                    {ImageBtn2}
                                </span>
                            )}
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
