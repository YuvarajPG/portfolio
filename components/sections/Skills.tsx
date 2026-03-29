import CardSection from "../custom/Cards";
const skills = () => {
    return (
        <>
            <div className="w-full px-2 py-10 flex flex-col border-t border-white/20">
                <p className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
                    My Skills
                </p>
                <div className="w-30 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
                <div className="flex flex-row gap-4 justify-center flex-wrap pt-10 max-[265px]:gap-2 max-[265px]:">
                    <CardSection name="HTML5" logo="/html-5.png" />
                    <CardSection name="CSS" logo="/css.png" />
                    <CardSection name="Tailwind CSS" logo="/TailwindCSS.png" />
                    <CardSection name="bootstarp" logo="/bootstrap.png" />
                    <CardSection name="JavaScript" logo="/js.png" />
                    <CardSection name="React JS" logo="/atom.png" />
                    <CardSection name="Next JS" logo="/Next.js.png" />
                    <CardSection name="Java" logo="/javaTemp.png" />
                </div>
            </div>
        </>
    );
};

export default skills;
