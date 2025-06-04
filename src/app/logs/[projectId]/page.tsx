"use client";
import LogToggleButton from "app/components/logs/LogToggleButton";
import { useState, useMemo } from "react";
import Todo from "app/components/logs/Todo";
import BackButton from "app/components/general/BackButton";
import CurrentDate from "app/components/general/CurrentData";
import Logs from "app/components/logs/Logs";
import { useParams } from "next/navigation";
import { useApiQuery } from "app/hooks/useApi";
import { LogEntry } from "app/types";
import NewLog from "app/components/logs/NewLog";
const LogPage = () => {
    const [selected, setSelected] = useState<"logs" | "todo" | "new">("todo");
    const rawParams = useParams();

    const projectId = useMemo(() => rawParams.projectId as string, [rawParams]);
    const { data } = useApiQuery<LogEntry[]>(
        ["log", projectId],
        `/logs/${projectId}`
    );
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen space-y-8 bg-[#F5F5F5]">
            {/* Top bar stays in place */}

            <div className="max-w-lg w-full mt-12 sm:mt-24 md:mt-[20vh] lg:mt-[30vh]">
                <BackButton />
                <div className="flex justify-between items-center mt-4 max-sm:flex-col max-sm:space-y-2">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">
                            {data?.[0]?.project?.name || "Project Logs"}
                        </h1>
                        <CurrentDate />
                    </div>
                    <LogToggleButton
                        selected={selected}
                        setSelected={setSelected}
                    />
                </div>
            </div>

            {/* Scrollable section below */}
            <div className="flex-grow overflow-y-auto justify-center items-center w-full">
                {selected === "logs" ? (
                    <Logs data={data as LogEntry[]} />
                ) : selected === "todo" ? (
                    <Todo />
                ) : (
                    <NewLog />
                )}
            </div>
        </div>
    );
};

export default LogPage;
