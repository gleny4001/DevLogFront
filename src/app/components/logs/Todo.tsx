"use client";

import { useState } from "react";

const Todo = () => {
    const [todoList, setTodoList] = useState([
        {
            category: "Debug & Investigate",
            tasks: [
                {
                    text: "Investigate memory leak in analytics (likely caused by third-party SDK)",
                    completed: false,
                },
                {
                    text: "Check AWS Lambda log delay (~5 mins)",
                    completed: true,
                },
                {
                    text: "Look into intermittent 401 errors from auth service",
                    completed: false,
                },
            ],
        },
        {
            category: "Development",
            tasks: [
                {
                    text: "Write tests for the new session manager",
                    completed: false,
                },
                {
                    text: "Refactor step 3 of the data pipeline",
                    completed: false,
                },
            ],
        },
        {
            category: "Code Review",
            tasks: [
                {
                    text: "Review pull request from the frontend team",
                    completed: false,
                },
            ],
        },
    ]);

    const handleCategoryChange = (index: number, newTitle: string) => {
        const updated = [...todoList];
        updated[index].category = newTitle;
        setTodoList(updated);
    };

    const handleTaskChange = (
        sectionIndex: number,
        taskIndex: number,
        newText: string
    ) => {
        const updated = [...todoList];
        updated[sectionIndex].tasks[taskIndex].text = newText;
        setTodoList(updated);
    };

    const handleToggle = (sectionIndex: number, taskIndex: number) => {
        const updated = [...todoList];
        const task = updated[sectionIndex].tasks[taskIndex];
        task.completed = !task.completed;
        setTodoList(updated);
    };

    return (
        <div className="w-[90%] sm:w-xl lg:w-2xl xl:w-4xl p-8 h-fit bg-white rounded-lg shadow-md mx-4">
            {todoList.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6">
                    <input
                        type="text"
                        value={section.category}
                        onChange={(e) =>
                            handleCategoryChange(sectionIndex, e.target.value)
                        }
                        className="font-semibold text-md mb-2 w-full focus:outline-none "
                    />
                    <div className="space-y-2 mt-2">
                        {section.tasks.map((task, taskIndex) => (
                            <div
                                key={taskIndex}
                                className="flex items-center space-x-2 group"
                            >
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() =>
                                        handleToggle(sectionIndex, taskIndex)
                                    }
                                />
                                <input
                                    type="text"
                                    value={task.text}
                                    onChange={(e) =>
                                        handleTaskChange(
                                            sectionIndex,
                                            taskIndex,
                                            e.target.value
                                        )
                                    }
                                    className={`w-full bg-transparent transition-colors duration-200 focus:outline-none text-wrap ${
                                        task.completed
                                            ? "line-through text-gray-500"
                                            : ""
                                    }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Todo;
