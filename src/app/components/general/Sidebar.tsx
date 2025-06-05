"use client";
import Link from "next/link";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { LuChevronsLeft } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { useApiQuery } from "app/hooks/useApi";
import { doSignOut } from "app/firebase/auth";
import { FaSignOutAlt } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
    const [displayName, setDisplayName] = useState<string | null>(null);
    const [isCollapsed, setIsCollapsed] = useState(true);
    type Project = { id: string; name: string };
    const { data } = useApiQuery(["projects"], "/projects");
    const projects = (data as Project[]) || [];

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setDisplayName(user?.displayName || null);
        });
        return () => unsubscribe();
    }, []);

    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <motion.aside
            animate={{
                width: isCollapsed ? 0 : 260,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=" flex flex-col bg-neutral-600 text-white min-h-screen relative"
        >
            <div className="flex-grow">
                <AnimatePresence>
                    {isCollapsed && (
                        <motion.button
                            key="hamburger"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 0.3, duration: 0.3 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.1 },
                            }}
                            onClick={toggleSidebar}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute left-2 top-2 p-1 rounded text-neutral-900 hover:bg-neutral-500/40 hover:text-white transition-colors cursor-pointer"
                        >
                            <RxHamburgerMenu className="text-2xl" />
                        </motion.button>
                    )}
                </AnimatePresence>
                {/* Header Section */}
                <div className="flex items-center justify-between mb-2 h-8 p-4 mt-4">
                    <div className="flex-1 overflow-hidden">
                        <AnimatePresence mode="wait">
                            {!isCollapsed && displayName && (
                                <motion.h1
                                    key="name"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-xl font-bold truncate"
                                >
                                    {displayName}
                                </motion.h1>
                            )}
                        </AnimatePresence>
                    </div>
                    <AnimatePresence mode="wait">
                        {!isCollapsed && (
                            <motion.button
                                onClick={toggleSidebar}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-shrink-0 p-1 rounded hover:bg-neutral-500 transition-colors cursor-pointer"
                            >
                                <motion.div transition={{ duration: 0.3 }}>
                                    <LuChevronsLeft className="text-2xl" />
                                </motion.div>
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                {/* Navigation Section */}
                <nav className="space-y-2  p-4">
                    <Link
                        href="/projects/create"
                        className="block hover:bg-neutral-800 transition-colors duration-200 p-1.5 rounded-lg text-neutral-300 hover:text-white"
                    >
                        <div className="flex items-center">
                            <AnimatePresence>
                                {!isCollapsed && (
                                    <div className="flex">
                                        <motion.span
                                            className="text-xl"
                                            animate={{
                                                marginRight: isCollapsed
                                                    ? 0
                                                    : 8,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaCirclePlus />
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{
                                                opacity: 1,
                                                width: "auto",
                                            }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{
                                                duration: 0.2,
                                                delay: isCollapsed ? 0 : 0.05,
                                            }}
                                            className="overflow-hidden whitespace-nowrap"
                                        >
                                            Create New Project
                                        </motion.span>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </Link>
                    <Link
                        href="/projects"
                        className="block hover:bg-neutral-800 transition-colors duration-200 p-1.5 rounded-lg text-neutral-300 hover:text-white "
                    >
                        <div className="flex items-center">
                            <AnimatePresence>
                                {!isCollapsed && (
                                    <div className="flex">
                                        <motion.span
                                            className="text-xl flex-shrink-0"
                                            animate={{
                                                marginRight: isCollapsed
                                                    ? 0
                                                    : 8,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaHome />
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{
                                                opacity: 1,
                                                width: "auto",
                                            }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{
                                                duration: 0.2,
                                                delay: isCollapsed ? 0 : 0.05,
                                            }}
                                            className="overflow-hidden whitespace-nowrap"
                                        >
                                            Home
                                        </motion.span>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </Link>
                </nav>

                {!isCollapsed && (
                    <AnimatePresence>
                        <div className="p-4 overflow-y-auto max-h-[calc(100vh-300px)]">
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: isCollapsed ? 0 : 0.05,
                                }}
                                className="px-4 font-medium"
                            >
                                Projects
                            </motion.span>

                            {projects.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`/projects/${project.id}`}
                                    className="block hover:bg-neutral-800 transition-colors duration-200 p-1.5 rounded-lg text-neutral-300 hover:text-white"
                                >
                                    <div className="flex items-center">
                                        <AnimatePresence>
                                            {!isCollapsed && (
                                                <motion.span
                                                    initial={{
                                                        opacity: 0,
                                                        width: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        width: "auto",
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        width: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                        delay: isCollapsed
                                                            ? 0
                                                            : 0.05,
                                                    }}
                                                    className="overflow-hidden whitespace-nowrap"
                                                >
                                                    {project.name}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </AnimatePresence>
                )}
            </div>

            <div className="w-full p-4 flex items-center justify-center">
                <AnimatePresence>
                    {!isCollapsed && (
                        <motion.button className="flex items-center hover:text-white text-neutral-300 cursor-pointer">
                            <motion.span
                                className="text-xl flex-shrink-0"
                                animate={{
                                    marginRight: isCollapsed ? 0 : 8,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaSignOutAlt />
                            </motion.span>
                            <motion.span
                                onClick={doSignOut}
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: isCollapsed ? 0 : 0.05,
                                }}
                                className="overflow-hidden whitespace-nowrap font-medium"
                            >
                                Log Out
                            </motion.span>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
