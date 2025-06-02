import { ReactNode } from "react";

interface LogContainerProps {
    children: ReactNode;
}

const LogContainer = ({ children }: LogContainerProps) => {
    return (
        <div className="w-[90%] sm:w-xl lg:w-2xl xl:w-4xl p-8 h-fit bg-white rounded-lg shadow-md mx-4">
            {children}
        </div>
    );
};

export default LogContainer;
