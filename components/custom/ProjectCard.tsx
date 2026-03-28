"use client";

import { p } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
    techs,
    altImage1,
    status=["ongoing"],
    altImage2,
    altImage3,
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
    techs?: string[];
    altImage1?: string;
    status?: string[];
    altImage2?: string;
    altImage3?: string;
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
    return (
        <div
            className={`${className} hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-4 will-change-transform bg-card/50 text-white`}
        >
            <div className="rounded-2xl border border-white/10 flex max-w-90 flex-col gap-4
                backdrop-blur-md shadow-lg py-4 max-[1158px]:max-h-130
                transition-all duration-300 hover:shadow-2xl
            ">

                <div className="h-55 relative rounded-2xl overflow-hidden group">
                    <Image
                        loading="eager"
                        src={previewImage}
                        alt={name}
                        fill
                        className="px-2 object-cover object-center my-auto transition-all duration-500 ease-out group-hover:blur-sm group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-black/70 text-white px-4 py-2 rounded-lg text-lg font-semibold">
                            <Link href={Link2} target={target}>
                                Preview
                            </Link>
                        </span>
                    </div>
                </div>

                <div className="flex flex-col pt-4 gap-1 relative">
                    <div className="flex justify-between">
                        <p className="text-xl font-bold px-4">{name}</p>
                        {status.includes("completed") ?
                            (
                                <p className="text-white font-medium bg-green-500 rounded-xl px-2 me-4 max-h-7 flex justify-center items-center"><span>
                                Completed</span></p>
                            )
                            :
                            (
                                <p className="text-white font-medium bg-yellow-500 rounded-xl px-2 me-4 max-h-7 flex justify-center items-center"><span>
                                On Going</span></p>
                            )
                        }
                        </div>
                    <div className="flex gap-2 px-4 flex-col">
                        <p className="text-sm text-muted-foreground">
                            Technologies Used
                        </p>

                        <span className="flex gap-2 flex-wrap mt-2">
                            {techs?.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-500/80 px-2 py-1 rounded-md text-xs text-white font-semibold
                                    hover:bg-blue-500 hover:scale-105 transition-all duration-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </span>
                    </div>
                </div>

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
                                        altImage2?.trim()
                                            ? altImage2
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
                        className={`${btnStyle2 || "bg-green-600 hover:bg-green-500"}text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group`}
                    >
                        <a
                            href={Link2}
                            target={target}
                            className="flex items-center gap-1 justify-center relative"
                        >
                            {Text2}
                            {ImageBtn2.includes(".png") ||
                                ImageBtn2.includes(".jpg") ||
                                ImageBtn2.includes(".jpeg")
                                ? (
                                <Image
                                    src={ImageBtn2}
                                    width={20}
                                    height={20}
                                    alt={altImage3?.trim() || "icon"}
                                    className=""
                                />
                            ) : (
                                    <span className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110">
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