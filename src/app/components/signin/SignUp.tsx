"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "../general/Button";

type SignupProps = {
    setSelected: React.Dispatch<React.SetStateAction<"login" | "signup">>;
};
const Signup: React.FC<SignupProps> = ({ setSelected }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <form className="w-full max-w-md space-y-4">
            <div className="flex flex-col">
                <label htmlFor="fullName" className="font-medium text-md">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="bg-white shadow rounded-md p-1 focus-within:outline-1 focus-within:outline-black"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="font-medium text-md">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-white shadow rounded-md p-1 focus-within:outline-1 focus-within:outline-black"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="font-medium text-md">
                    Password
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        required
                        className="bg-white shadow rounded-md p-1 pr-10 w-full focus-within:outline-1 focus-within:outline-black"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? (
                            <FiEyeOff size={20} />
                        ) : (
                            <FiEye size={20} />
                        )}
                    </button>
                </div>
            </div>

            <div className="flex flex-col">
                <label
                    htmlFor="confirmPassword"
                    className="font-medium text-md"
                >
                    Confirm Password
                </label>
                <div className="relative">
                    <input
                        type={showConfirm ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        className="bg-white shadow rounded-md p-1 pr-10 w-full focus-within:outline-1 focus-within:outline-black"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showConfirm ? (
                            <FiEyeOff size={20} />
                        ) : (
                            <FiEye size={20} />
                        )}
                    </button>
                </div>
            </div>

            <Button type="submit" customStyles="w-full">
                Sign Up
            </Button>
        </form>
    );
};

export default Signup;
