import { motion } from "motion/react";

interface ButtonProps {
    background?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({
    background = "bg-black",
    children,
    onClick,
}: ButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`p-2 ${background} font-bold text-white rounded-xl cursor-pointer`}
        >
            {children}
        </motion.button>
    );
};

export default Button;
