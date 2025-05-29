"use client";

import { LuAxe } from "react-icons/lu";
import Logo from "./components/general/Logo";
import { useRouter } from "next/navigation";
import Button from "./components/general/Button";
const Page = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/signin");
    };
    return (
        <div className="w-full h-screen bg-[#F5F5F5]">
            <div className="flex h-full space-y-8 justify-center items-center flex-col">
                <Logo />
                <p className="text-center px-4 text-[#9E9696] max-w-3xl">
                    Developer Daily Log is a lightweight, structured journaling
                    tool designed to help developers capture what they worked
                    on, what’s next, and what broke—before logging off each day.
                </p>
                <Button onClick={handleClick}>
                    <span className="flex space-x-2 items-center">
                        <LuAxe size={20} />
                        <p>Get Started</p>
                    </span>
                </Button>
            </div>
        </div>
    );
};
export default Page;
