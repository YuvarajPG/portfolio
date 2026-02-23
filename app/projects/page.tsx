"use client";
import CardSection from "@/components/custom/Cards";
import Image from "next/image";
const Page = () => {
    return (
        <>
            <div className="mb-5 min-h-screen mt-10 flex justify-evenly">
                <div className="flex bg-blue-300 w-1/2 h-fit p-8 rounded-lg items-center justify-center max-w-100">
                    <CardSection
                        name="TODO LIST"
                        logo="/todo.png"
                        className="text-2xl font-bold focus:outline-none focus:shadow-0"
                        link="https://todo-two-puce-47.vercel.app/"
                    />
                    <div>
                        <p className="text-black items-start mx-2 text-lg  bg-gray-200 p-4 rounded-lg">
                            Technologies used
                        </p>
                        <p className="text-black items-start mx-2 text-lg  bg-gray-200 p-4 rounded-lg">
                            <Image
                                width={35}
                                height={35}
                                src="/atom.png"
                                alt="react"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
