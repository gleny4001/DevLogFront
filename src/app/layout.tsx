import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "./providers/query-provider";
import { AuthProvider } from "./components/context/authContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DevLogs",
    description: "Daily logs for developers",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AuthProvider>
                    <QueryProvider>{children}</QueryProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
