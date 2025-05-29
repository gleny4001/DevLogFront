"use client";

import { motion } from "framer-motion";
type LogToggleButtonProps = {
    selected: "logs" | "todo" | "new";
    setSelected: React.Dispatch<React.SetStateAction<"logs" | "todo" | "new">>;
};
const LogToggleButton: React.FC<LogToggleButtonProps> = ({
    selected,
    setSelected,
}) => {
    return (
        <div className="relative flex bg-gray-200 rounded-xl p-2 w-full max-w-72">
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                className={`absolute top-1 left-1 bottom-1 w-1/3 bg-white rounded-xl shadow-sm ${
                    selected === "todo"
                        ? "translate-x-[calc(100%-4px)]"
                        : selected === "new"
                        ? "translate-x-[calc(200%-8px)]"
                        : ""
                }`}
            />
            <button
                onClick={() => setSelected("logs")}
                className={`z-10 w-1/2 text-sm font-medium rounded-full py-1 cursor-pointer ${
                    selected === "logs" ? "text-black" : "text-gray-500"
                }`}
            >
                Logs
            </button>
            <button
                onClick={() => setSelected("todo")}
                className={`z-10 w-1/2 text-sm font-medium rounded-full py-1 cursor-pointer ${
                    selected === "todo" ? "text-black" : "text-gray-500"
                }`}
            >
                To-do
            </button>
            <button
                onClick={() => setSelected("new")}
                className={`z-10 w-1/2 text-sm font-medium rounded-full py-1 cursor-pointer ${
                    selected === "new" ? "text-black" : "text-gray-500"
                }`}
            >
                New
            </button>
        </div>
    );
};

export default LogToggleButton;
