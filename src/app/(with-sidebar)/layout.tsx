// app/(with-sidebar)/layout.tsx
// Update the import path below if Sidebar is located elsewhere in your project structure
import Sidebar from "../components/general/Sidebar";

export default function WithSidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1">{children}</main>
        </div>
    );
}
