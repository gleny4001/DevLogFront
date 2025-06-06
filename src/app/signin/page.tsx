"use client";
import Logo from "../components/general/Logo";
import SignInToggleButton from "app/components/signin/SigninToggleButton";
import { useState } from "react";
import BackButton from "app/components/general/BackButton";
import Login from "app/components/signin/Login";
import SignUp from "app/components/signin/SignUp";
import { useAuth } from "app/components/context/authContext";
const SignInPage = () => {
    const [selected, setSelected] = useState<"login" | "signup">("login");
    const auth = useAuth();
    const userLoggedIn = auth?.userLoggedIn;

    if (userLoggedIn) {
        window.location.href = "/project";
    }
    return (
        <div className="w-full h-screen bg-[#F5F5F5]">
            <div className="flex h-full space-y-8 justify-center items-center flex-col">
                <div className="max-w-md w-full">
                    <BackButton to="/" />
                </div>

                <Logo />
                <SignInToggleButton
                    selected={selected}
                    setSelected={setSelected}
                />
                <div className="w-full min-h-[340px] transition-all duration-300 justify-center flex">
                    {selected === "login" ? (
                        <Login />
                    ) : (
                        <SignUp setSelected={setSelected} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
