"use client";
import "./globals.css";
import FuzzyText from "../components/ui/FuzzyText";
import TextType from "../components/ui/TextType";
import { usePathname,useRouter } from 'next/navigation';

const Notfound = () => {
    const router = useRouter();
    const pathname = usePathname();
    
    return (
        <html>
            <body>
                {pathname=='/about'?<div className="h-screen flex flex-col justify-center items-center bg-black">
                    <FuzzyText
                        baseIntensity={0.2}
                        hoverIntensity={0.4}
                        enableHover={true}
                    >
                        error 404
                    </FuzzyText>

                    <TextType
                        className="text-red-600 z-99 text-3xl md:text-5xl font-bold mt-4"
                        text={[
                            "Page Not Found Redirecting to Home Page",
                            "in 3 seconds...",
                            "in 2 seconds...",
                            "in 1 second...",
                        ]}
                        // text={["Hello", "Welcome", "Goodbye"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        variableSpeed={""}
                        onSentenceComplete={() => {
                            setTimeout(() => {
                                router.push("/");
                                window.location.href = "/";
                            }, 12000);
                        }}
                    />
                </div>:
                // <div className="flex flex-col items-center">
                //     {/* <NavbarV2/> */}
                //     <span className="pt-35 text-5xl ">PAGE UNDER CONSTRUCTION</span>
                // </div>
                null
                }
            </body>
        </html>
    );
};

export default Notfound;
