import "./globals.css";
import FuzzyText from "@/components/ui/FuzzyText";
import TextType from "@/components/ui/TextType";
const notfound = () => {
    return (
        <html>
            <body>
                <div className="h-screen flex flex-col justify-center items-center bg-black">
                    <FuzzyText
                        baseIntensity={0.2}
                        hoverIntensity={0.4}
                        enableHover={true}
                    >
                    error 404    
                    </FuzzyText>

                    <TextType
                    className="text-white z-99 text-3xl md:text-5xl font-bold mt-4"
                        text="Page Not Found"
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </div>
            </body>
        </html>
    );
};

export default notfound;
