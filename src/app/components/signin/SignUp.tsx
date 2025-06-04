"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "../general/Button";
import { useRouter } from "next/navigation";
import {
    doSignInWithGoogle,
    doCreateUserWithEmailAndPassword,
} from "app/firebase/auth";
import { motion } from "framer-motion";

type SignupProps = {
    setSelected: React.Dispatch<React.SetStateAction<"login" | "signup">>;
};

const Signup: React.FC<SignupProps> = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const isStrongPassword = (password: string) => {
        const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return pattern.test(password);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!isStrongPassword(password)) {
            setError(
                "Password must be at least 8 characters, include a number and a special character."
            );
            return;
        }

        try {
            await doCreateUserWithEmailAndPassword(email, password, fullName);
            router.push("/projects");
        } catch (error) {
            setError(error instanceof Error ? error.message : String(error));
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            {error && (
                <motion.p
                    initial={{ x: 0 }}
                    animate={error ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    className="text-red-500 text-sm"
                >
                    {error}
                </motion.p>
            )}

            <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="fullName" className="font-medium text-md">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        autoComplete="name"
                        className="bg-white shadow rounded-md p-1 focus:outline focus:outline-black"
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="username"
                        className="bg-white shadow rounded-md p-1 focus:outline  focus:outline-black"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                            className="bg-white shadow rounded-md p-1 pr-10 w-full focus:outline focus:outline-1 focus:outline-black"
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
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                            className="bg-white shadow rounded-md p-1 pr-10 w-full focus:outline focus:outline-1 focus:outline-black"
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

            <div className="flex items-center justify-center mt-4 flex-col space-y-4">
                <p className="text-gray-500">or</p>
                <button
                    className="gsi-material-button"
                    onClick={async () => {
                        try {
                            await doSignInWithGoogle();
                            router.push("/projects");
                        } catch (error) {
                            console.error("Google sign-in failed", error);
                            setError("Google sign-in failed.");
                        }
                    }}
                >
                    <div className="gsi-material-button-state"></div>
                    <div className="gsi-material-button-content-wrapper">
                        <div className="gsi-material-button-icon">
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                style={{ display: "block" }}
                            >
                                <path
                                    fill="#EA4335"
                                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                ></path>
                                <path
                                    fill="#4285F4"
                                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                ></path>
                                <path
                                    fill="#FBBC05"
                                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                ></path>
                                <path
                                    fill="#34A853"
                                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                ></path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                            </svg>
                        </div>
                        <span className="gsi-material-button-contents">
                            Sign up with Google
                        </span>
                        <span style={{ display: "none" }}>
                            Sign up with Google
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Signup;
