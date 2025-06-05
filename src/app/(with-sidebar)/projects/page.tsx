"use client";
import CurrentDate from "app/components/general/CurrentData";
import Logo from "app/components/general/Logo";
import { CiCirclePlus } from "react-icons/ci";
import Link from "next/link";
import { useApiQuery } from "app/hooks/useApi";
import Loading from "app/components/general/Loading";
import { useRouter } from "next/navigation";
const ProjectsPage = () => {
    type Project = { id: string; name: string };
    const { data, isLoading } = useApiQuery(["projects"], "/projects");
    const projects = (data as Project[]) || [];
    const router = useRouter();

    const handleProjectClick = (projectId: string) => {
        router.push(`/projects/${projectId}`);
    };
    return (
        <div className="w-full h-screen bg-[#F5F5F5]">
            <div className="flex h-full space-y-4 justify-center items-center flex-col">
                <Logo />
                <CurrentDate />

                <div className="flex sm:space-x-8 max-sm:flex-col max-sm:items-center max-sm:space-y-4">
                    <Link
                        href="/projects/create"
                        className="flex flex-col shadow-md items-center justify-center space-y-4 bg-white rounded-xl py-12 px-4 cursor-pointer hover:bg-neutral-100/5"
                    >
                        <CiCirclePlus size={34} />

                        <span className="text-lg font-semibold">
                            Add New Project
                        </span>
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold">Projects</h1>
                        {isLoading ? (
                            <Loading />
                        ) : projects.length > 0 ? (
                            <div className="flex flex-col space-y-2">
                                <div className="flex flex-col space-y-2 max-h-36 overflow-y-auto pr-2">
                                    {projects.map((project) => (
                                        <div key={project.id}>
                                            <h2
                                                onClick={() =>
                                                    handleProjectClick(
                                                        project.id
                                                    )
                                                }
                                                className="text-md text-neutral-400 font-semibold hover:underline cursor-pointer"
                                            >
                                                {project.name}
                                            </h2>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-neutral-500">
                                No projects found
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
