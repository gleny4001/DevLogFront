"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    PropsWithChildren,
} from "react";
import { auth } from "../../../firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";

type AuthContextType = {
    user: User | null;
    userLoggedIn: boolean;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: PropsWithChildren<object>) => {
    const [user, setUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/");
        }
    }, [user, loading, router]);

    const initializeUser = (user: User | null) => {
        if (user) {
            setUser(user);
            setUserLoggedIn(true);
        } else {
            setUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return () => unsubscribe();
    }, []);

    const value: AuthContextType = {
        user,
        userLoggedIn,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
