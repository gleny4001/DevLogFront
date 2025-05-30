"use client";
import LogToggleButton from "app/components/logs/LogToggleButton";
import { useState } from "react";
import Todo from "app/components/logs/Todo";
import BackButton from "app/components/general/BackButton";
import CurrentDate from "app/components/general/CurrentData";
import Logs from "app/components/logs/Logs";
const LogPage = () => {
    const [selected, setSelected] = useState<"logs" | "todo" | "new">("todo");

    return (
        <div className="w-full h-screen bg-[#F5F5F5]">
            <div className="flex h-full space-y-8 justify-center items-center flex-col">
                <div className="max-w-lg w-full max-sm:w-sm">
                    <BackButton />
                </div>

                <div className="flex max-sm:flex-col items-center justify-between max-w-lg w-full max-sm:space-y-4">
                    <div className="flex flex-col justify-start">
                        <h1 className=" text-2xl font-bold ">ProjectName</h1>
                        <CurrentDate />
                    </div>
                    <LogToggleButton
                        selected={selected}
                        setSelected={setSelected}
                    />
                </div>
                {selected === "logs" ? (
                    <Logs />
                ) : selected === "todo" ? (
                    <Todo />
                ) : null}
            </div>
        </div>
    );
};

export default LogPage;
