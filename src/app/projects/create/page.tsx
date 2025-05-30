"use client";
import { useState } from "react";
import CurrentDate from "app/components/general/CurrentData";
import Logo from "app/components/general/Logo";
import BackButton from "app/components/general/BackButton";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";

const ProjectsPage = () => {
    const [title, setTitle] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        await fetch("http://localhost:3001/api/project", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: title }),
        });
        setTitle("");
        router.push("/projects");
    };

    return (
        <div className="w-full h-screen bg-[#F5F5F5]">
            <div className="flex w-full h-full space-y-4 justify-center items-center flex-col">
                <Logo />
                <CurrentDate />
                <div className="max-w-md w-[90%]">
                    <BackButton />
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="relative w-[90%] max-w-md"
                >
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-white rounded-xl placeholder-neutral-700/40 p-2 pr-12 w-full focus:outline-black"
                        placeholder="Add Title"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-lg cursor-pointer"
                    >
                        <FaPlus size={12} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectsPage;
