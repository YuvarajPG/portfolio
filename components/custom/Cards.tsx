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
            className=" backdrop-blur-md rounded-xl gap-4 p-2 justify-center  flex flex-col items-center
            text-center h-auto card-glow"
        >
            {link ? (
                <a
                    href={link}
                    className="text-blue-500 hover:underline mt-2 focus:outline-none focus:ring-0"
                >
                    <div className="bg-white pt-4 pb-2 rounded-lg shadow-sm border-1.5 border-black w-25">
                        <div className="flex w-16 h-16 bg-gray-200  rounded-full items-center justify-center mx-auto">
                            {
                                logo&&name!==undefined?
                                    <Image
                                        width={32}
                                        height={32}
                                src={logo}
                                alt={name}
                                className="items-center"
                            />:null
                            }
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white px-2">
                            {name}
                        </h3>
                    </div>
                </a>
            ) : (           /* for the skill card the link always false so use this one for the change */
                <div className="bg-white pt-4 pb-2 rounded-lg  border-black  min-h-37.5 w-25 flex flex-col">
                    <div className="flex w-16 h-16 bg-gray-200  rounded-full items-center justify-center mx-auto">
                        {
                                logo&&name!==undefined?
                                    <Image
                                        width={32}
                                        height={32}
                                src={logo}
                                alt={name}
                                className="items-center"
                            />:null
                            }
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white px-2">
                        {name}
                    </h3>
                </div>
            )}
        </div>
    );
};

export default CardSection;
