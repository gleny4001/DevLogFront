"use client";
import { useState } from "react";
import CurrentDate from "app/components/general/CurrentData";
import Logo from "app/components/general/Logo";
import BackButton from "app/components/general/BackButton";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { useApiMutation } from "app/hooks/useApi";
const ProjectsPage = () => {
    const [title, setTitle] = useState("");
    const router = useRouter();

    const mutation = useApiMutation("post", "/project", {
        onSuccess: () => {
            setTitle("");
            router.push("/projects");
        },
        onError: (error) => {
            console.error("Error creating project:", error);
        },
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ name: title });
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
