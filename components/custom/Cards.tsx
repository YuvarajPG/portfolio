const CardSection = ({
    name,
    logo,
    className,
    link,
}: {
    name?: string;
    logo?: string;
    className?: string;
    link?: string;
}) => {
    return (
        <div className={`flex gap-2 ${className} h-auto w-fit text-center`}>
            {link ? (
                <a
                    href={link}
                    className="text-blue-500 hover:underline mt-2 focus:outline-none focus:ring-0"
                >
                    <div className="bg-white dark:bg-gray-700 pt-4 pb-2 rounded-lg shadow-sm border-1.5 border-black hover:shadow-2xl shadow-cyan-950  transition-all duration-300 w-25">
                        <div className="flex w-16 h-16 bg-gray-200 dark:bg-gray-700  rounded-full items-center justify-center mx-auto">
                            <img
                                src={logo}
                                alt={name}
                                className="w-8 h-8 items-center"
                            />
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white px-2">
                            {name}
                        </h3>
                    </div>
                </a>
            ) : (
                <div className="bg-white dark:bg-gray-700 pt-4 pb-2 rounded-lg shadow-sm border-1.5 border-black hover:shadow-2xl shadow-cyan-950  transition-all duration-300 w-25">
                    <div className="flex w-16 h-16 bg-gray-200 dark:bg-gray-700  rounded-full items-center justify-center mx-auto">
                        <img
                            src={logo}
                            alt={name}
                            className="w-8 h-8 items-center"
                        />
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
