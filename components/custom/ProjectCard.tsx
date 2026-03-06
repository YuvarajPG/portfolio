"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
    techs,
    altImage1,
    altImage2,
    altImage3,
    name,
    previewImage,
    Text1,
    Text2,
    Link1 /*  Github Link */,
    Link2 = "#" /* Preview link */,
    ImageBtn1,
    ImageBtn2,
    target,
    className,
    btnStyle1,
    btnStyle2,
}: {
    techs?: string[];
    altImage1?: string;
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
            className={`${className} hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-4`}
        >
            <div className="rounded border-2 border-black flex max-w-90 flex-col gap-4 bg-white shadow-lg py-4 max-[1158px]:max-h-130">
                {/* ===== PREVIEW IMAGE SECTION ===== */}
                <div className="w-full h-55  relative rounded-2xl overflow-hidden group">
                    <Image
                    loading="eager"
                        src={previewImage}
                        alt={name}
                        fill
                        className="px-2 object-cover object-center my-auto
                        transition-all duration-300
                        group-hover:blur-sm group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300"
                    >
                        <span className="bg-black/70 text-white px-4 py-2 rounded-lg text-lg font-semibold">
                            <Link href={Link2} target={target}>
                                Preview
                            </Link>
                        </span>
                    </div>
                </div>

                {/* ===== PROJECT INFO ===== */}
                <div className="flex flex-col pt-4 gap-1">
                    <p className="text-xl font-bold px-4">{name}</p>

                    <div className="flex gap-2 px-4 flex-col">
                        <p>Technologies Used</p>

                        <span className="flex gap-2 flex-wrap mt-2">
                            {techs?.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-400 px-2 py-1 rounded text-sm text-white font-semibold hover:bg-blue-500 transition-all hover:scale-110 duration-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </span>
                    </div>
                </div>

                {/* ===== BUTTONS ===== */}
                <div
                    className={`flex justify-around px-4 gap-2 relative h-max flex-wrap bottom-0 mt-auto  max-[908px]:w-full max-[908px]:flex-col ${!Link2 ? "pointer-events-none" : ""}`}
                >
                    {/* Button 1 */}
                    <button
                        className={`${btnStyle1} bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-200`}
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
                                    placeholder="empty"
                                    // quality={100}
                                    alt={
                                        altImage2?.trim()
                                            ? altImage2
                                            : "Button Icon"
                                    }
                                    className="w-5 h-5 transition-transform duration-200 hover:scale-110"
                                />
                            ) : (
                                ImageBtn1
                            )}
                        </Link>
                    </button>

                    {/* Button 2 */}
                    <button
                        className={`${btnStyle2 || "bg-green-500 hover:bg-green-600"} text-white px-4 py-2 rounded transition-colors duration-200`}
                    >
                        <Link
                            href={Link2}
                            target={target}
                            className="flex items-center gap-1 justify-center"
                        >
                            {Text2}
                            {ImageBtn2.includes(".png") ||
                            ImageBtn2.includes(".jpg") ||
                            ImageBtn2.includes(".jpeg") ? (
                                <Image
                                    src={ImageBtn2}
                                    width={20}
                                    height={20}
                                    quality={100}
                                    alt={
                                        altImage3?.trim()
                                            ? altImage3
                                            : "Button Icon"
                                    }
                                    className="transition-transform duration-200 hover:scale-110 object-cover"
                                />
                            ) : (
                                ImageBtn2
                            )}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
