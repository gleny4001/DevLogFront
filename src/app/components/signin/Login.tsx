"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "../general/Button";
import { useRouter } from "next/navigation";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Here you would typically handle the login logic, e.g., API call
        // For now, we'll just redirect to the home page
        router.push("/projects");
    };

    return (
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="email" className="font-medium text-md">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-white border border-gray-300 rounded-md p-1 focus-within:outline-1 focus-within:outline-black"
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
                        className="bg-white border border-gray-300 rounded-md p-1 pr-10 w-full focus-within:outline-1 focus-within:outline-black"
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

            <Button type="submit" customStyles="w-full">
                Login
            </Button>
        </form>
    );
};

export default Login;
