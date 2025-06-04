import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    getIdToken,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (
    email: string,
    password: string,
    name: string
) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await updateProfile(userCredential.user, {
            displayName: name,
        });
        const token = await getIdToken(userCredential.user);
        return { user: userCredential.user, token };
    } catch (error: unknown) {
        if (
            typeof error === "object" &&
            error !== null &&
            "code" in error &&
            (error as { code?: string }).code === "auth/email-already-in-use"
        ) {
            throw new Error("This email is already registered.");
        }
        console.error("Error creating user:", error);
        throw error;
    }
};

export const doSignInWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return userCredential.user;
    } catch (error) {
        console.error("Error signing in with email and password:", error);
        throw error;
    }
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const token = await getIdToken(result.user);
        return { user: result.user, token };
    } catch (error) {
        console.error("Error signing in with Google:", error);
        throw error;
    }
};

export const doSignOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Error signing out:", error);
        throw error;
    }
};

// export const doResetPassword = async (email: string) => {
//     try {
//         await auth.sendPasswordResetEmail(auth.currentUser, email);
//     } catch (error) {
//         console.error("Error resetting password:", error);
//         throw error;
//     }
// };
