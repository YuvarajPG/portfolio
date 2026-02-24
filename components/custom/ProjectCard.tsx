"use client";
// import CardSection from "@/components/custom/Cards";
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
    Link1,
    Link2 = "null",
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
            className={`${className} hover:cursor-pointer hover:scale-105 transition-transform duration-300`}
        >
            <div
                className={`rounded border-2 border-black h-110 w-80 fled flex-col justify-between bg-white shadow-lg flex py-4`}
            >
                <div>
                    <Image
                        src={previewImage}
                        width={320}
                        height={240}
                        alt={name}
                        className="rounded-2xl px-6 w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                    />
                </div>
                <div>
                    <p className="text-xl font-bold px-4">{name}</p>
                    <div className="flex gap-2 px-4 flex-col">
                        <span>
                            <p>Technologies Used</p>
                        </span>
                        <span className="flex gap-2 flex-wrap">
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

                <div className="flex justify-around">
                    <button
                        className={`${btnStyle1} bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200`}
                    >
                        <Link
                            href={Link1}
                            target={target}
                            className="group gap-1 flex items-center"
                        >
                            {Text1}
                            <span>
                                <Image
                                    src={ImageBtn1}
                                    width={20}
                                    height={20}
                                    alt={
                                        altImage1?.trim()
                                            ? altImage1
                                            : "Button Icon"
                                    }
                                    className="group-hover:scale-110 transition-transform duration-200"
                                />
                            </span>
                        </Link>
                    </button>
                    <button
                        className={`${btnStyle2 || "bg-green-500 hover:bg-green-600"}  text-white px-4 py-2 rounded  transition-colors duration-200`}
                    >
                        <Link
                            href={Link2}
                            target={target}
                            className="group gap-1 flex items-center"
                        >
                            {Text2}
                            <span
                                className={`transition-transform duration-200 ${Link2 ? null : "group-hover:-translate-y-1 group-hover:translate-x-1"}`}
                            >
                                {ImageBtn2}
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
    /* return (
        <div
            className={`flex bg-blue-300 w-1/2 h-fit rounded-lg items-center justify-center max-w-100 ${target ? "cursor-pointer" : ""} ${className} min-h-53.75`}
        >
            <CardSection
                name={name}
                logo={previewImage}
                className="text-2xl font-bold focus:outline-none focus:shadow-0"
            />

            <div>
                <p
                    className={`text-black items-start mx-2 text-lg  bg-gray-200 p-4 rounded-lg ${target ? "cursor-pointer" : ""}`}
                >
                    Technologies used
                    <span className="grid grid-flow-col max-h-8.75 gap-2 mt-2 ">
                        {tech_1_Image?.trim() && (
                            <Image
                                width={35}
                                height={35}
                                src={tech_1_Image}
                                alt={altImage1}
                            />
                        )}
                        {tech_2_Image?.trim() && (
                            <Image
                                width={35}
                                height={35}
                                src={tech_2_Image}
                                alt={altImage2}
                            />
                        )}
                        {tech_3_Image?.trim() && (
                            <Image
                                width={35}
                                height={35}
                                src={tech_3_Image}
                                alt={altImage3}
                            />
                        )}
                    </span>
                </p>
                <div className="flex gap-4 px-4 justify-around">
                    <Link
                        href={Link1}
                        target={target}
                        className="flex items-center -gap-1 group hover:underline"
                    >
                        {Text1}
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                            🔗
                        </span>
                    </Link>

                    <Link
                        href={Link2}
                        target={target}
                        className="flex items-center -gap-1 group hover:underline"
                    >
                        {Text2}
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                            🚀
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    ); */
};

export default ProjectCard;
