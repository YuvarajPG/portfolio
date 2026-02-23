"use client";
import CardSection from "@/components/custom/Cards";
const page = () => {
    return (
        <>
            <div className="mt-2 mb-5">
                <CardSection
                    name="TODO"
                    logo="/todo.png"
                    className="mx-auto mt-10"
                    link="https://todo-two-puce-47.vercel.app/"
                />
            </div>
        </>
    );
};

export default page;
