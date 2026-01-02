"use client";
import LogoLoop from "./../ui/LogoLoop";

const Dummy = () => {
    const techLogos = [
        {
            node: (
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                    className="w-16 flex"
                />
            ),
            title: "HTML5",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },

        {
            node: (
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                    className="w-16"
                />
            ),
            title: "CSS3",
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },

        {
            node: (
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    className="w-[48] h-[48]"
                />
            ),
            title: "JavaScript",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },

        {
            node: (
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    className="w-[48] h-[48]"
                />
            ),
            title: "React",
            href: "https://react.dev",
        },

        {
            node: (
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                    className="w-[48] h-[48]"
                />
            ),
            title: "Next.js",
            href: "https://nextjs.org",
        },

        {
            node: (
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                    className="w-[48] h-[48]"
                />
            ),
            title: "TypeScript",
            href: "https://www.typescriptlang.org",
        },

        {
            node: (
                <div className="w-15 h-16 flex items-center justify-center rounded-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width={50}/>
                </div>
            ),
            title: "Tailwind CSS",
            href: "https://tailwindcss.com",
        },
    ];

    // Alternative with image sources
    const imageLogos = [
        {
            src: "/logos/company1.png",
            alt: "Company 1",
            href: "https://company1.com",
        },
        {
            src: "/logos/company2.png",
            alt: "Company 2",
            href: "https://company2.com",
        },
        {
            src: "/logos/company3.png",
            alt: "Company 3",
            href: "https://company3.com",
        },
    ];
    return (
        <div className="min-h-screen flex justify-center text-4xl items-center bg-[#e3ebe7]">
            {" "}
            {/*  bg-gray-700 */}
            <div
                style={{
                    height: "200px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Basic horizontal loop */}
                <LogoLoop
                    logos={techLogos}
                    speed={50}
                    direction="right"
                    logoHeight={48}
                    gap={60}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
            </div>
        </div>
    );
};

export default Dummy;
