"use client";

import { LuAxe } from "react-icons/lu";
import { motion } from "motion/react";

export default function Page() {
    return (
        <div className="w-full h-screen bg-[#F5F5F5]">
            <div className="flex h-full space-y-8 justify-center items-center flex-col">
                <h1 className="text-4xl font-extrabold">DevLog</h1>
                <p className="text-center px-4 text-[#9E9696] max-w-3xl">
                    Developer Daily Log is a lightweight, structured journaling
                    tool designed to help developers capture what they worked
                    on, what’s next, and what broke—before logging off each day.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-black font-bold text-white  rounded-xl cursor-pointer"
                >
                    <span className="flex space-x-2 items-center">
                        <LuAxe size={20} />
                        <p>Get Started</p>
                    </span>
                </motion.button>
            </div>
        </div>
    );
}
