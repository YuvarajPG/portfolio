"use client";
import FuzzyText from "../components/ui/FuzzyText";
import TextType from "../components/ui/TextType";

const Notfound = () => {
    
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-black px-4 text-center">
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.4}
                enableHover={true}
            >
                error 404
            </FuzzyText>

            <TextType
            variableSpeed={7}
                className="text-red-600 z-50 text-3xl md:text-5xl font-bold mt-4"
                text={[
                    "Page Not Found. Redirecting to Home Page",
                    "in 3 seconds...",
                    "in 2 seconds...",
                    "in 1 second...",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                onSentenceComplete={() => {
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 3000); // Redirect after the countdown finishes
                }}
            />
        </div>
    );
};

export default Notfound;
