"use client";

import { motion } from "framer-motion";
type SignInToggleButtonProps = {
    selected: "login" | "signup";
    setSelected: React.Dispatch<React.SetStateAction<"login" | "signup">>;
};
const SignInToggleButton: React.FC<SignInToggleButtonProps> = ({
    selected,
    setSelected,
}) => {
    return (
        <div className="relative flex bg-gray-200 rounded-xl p-2 w-full max-w-72">
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                className={`absolute top-1 left-1 bottom-1 w-1/2 bg-white rounded-xl shadow-sm ${
                    selected === "signup" ? "translate-x-[calc(100%-8px)]" : ""
                }`}
            />
            <button
                onClick={() => setSelected("login")}
                className={`z-10 w-1/2 text-sm font-medium rounded-full py-1 cursor-pointer ${
                    selected === "login" ? "text-black" : "text-gray-500"
                }`}
            >
                Log in
            </button>
            <button
                onClick={() => setSelected("signup")}
                className={`z-10 w-1/2 text-sm font-medium rounded-full py-1 cursor-pointer ${
                    selected === "signup" ? "text-black" : "text-gray-500"
                }`}
            >
                Sign up
            </button>
        </div>
    );
};

export default SignInToggleButton;
