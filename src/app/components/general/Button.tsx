import { motion } from "motion/react";

type ButtonProps = {
    background?: string;
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    customStyles?: string;
};

const Button = ({
    background = "bg-black",
    children,
    onClick,
    type = "button",
    customStyles = "",
}: ButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`p-2 ${background} font-bold text-white rounded-xl cursor-pointer ${customStyles}`}
            type={type}
        >
            {children}
        </motion.button>
    );
};

export default Button;
