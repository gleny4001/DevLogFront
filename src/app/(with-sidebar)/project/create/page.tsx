"use client";
import { useState } from "react";
import Logo from "app/components/general/Logo";
import BackButton from "app/components/general/BackButton";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { useApiMutation } from "app/hooks/useApi";
const ProjectsPage = () => {
    const [title, setTitle] = useState("");
    const router = useRouter();

    const mutation = useApiMutation("post", "/project", {
        onSuccess: (data) => {
            setTitle("");
            // Assuming the API returns { userId: string }
            const projectId = (data as { id: string }).id;
            router.push(`/project/${projectId}`);
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

                <div className="max-w-md w-[90%] flex items-center">
                    <BackButton to="/projects" />
                    <div className="flex-1 flex justify-center mr-8">
                        <h1 className="text-xl font-medium text-neutral-400 ">
                            Create New Project
                        </h1>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="relative w-[90%] max-w-md"
                >
                    <label htmlFor="projectName" className="sr-only">
                        Project Name
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-white rounded-xl placeholder-neutral-700/40 p-2 pr-12 w-full focus:outline-black"
                        placeholder="Type Project Name"
                    />
                    <button
                        type="submit"
                        aria-label="Create Project"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-lg cursor-pointer"
                    >
                        <FaPlus size={12} />
                    </button>
                    {mutation.isError && (
                        <p className="text-red-600 mt-2" role="alert">
                            Failed to create project. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ProjectsPage;
