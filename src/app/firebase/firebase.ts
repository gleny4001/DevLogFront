// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaMOFa_tmKizUY9N_RItUchWfNfJx6gU0",
    authDomain: "devlog-f3e77.firebaseapp.com",
    projectId: "devlog-f3e77",
    storageBucket: "devlog-f3e77.firebasestorage.app",
    messagingSenderId: "656272414830",
    appId: "1:656272414830:web:ae8126c3dddd0f6e3a6e7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
