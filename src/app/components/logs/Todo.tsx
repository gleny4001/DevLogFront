"use client";

import LogContainer from "./LogContainer";
import { TodoList } from "app/types";
const Todo = ({ data }: { data?: TodoList }) => {
    const todoList = data?.todos ?? [];

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <LogContainer>
                {todoList.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6 w-full">
                        <h2 className="text-lg font-semibold mb-2">
                            {section.title}
                        </h2>
                        <ul className="space-y-2">
                            {section.todos.map((task, taskIndex) => (
                                <li
                                    key={taskIndex}
                                    className="flex items-center space-x-3"
                                >
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-neutral-500 border-gray-300 rounded"
                                    />
                                    <span
                                        className={`text-gray-800
                                        }`}
                                    >
                                        {task}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </LogContainer>
        </div>
    );
};

export default Todo;
