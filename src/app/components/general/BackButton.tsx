import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface BackButtonProps {
    to: string;
}

const BackButton = ({ to }: BackButtonProps) => {
    const router = useRouter();

    const handleBackClick = () => {
        router.push(to);
    };
    return (
        <button
            onClick={handleBackClick}
            className="ml-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
        >
            <IoChevronBack size={24} className="text-gray-600" />
        </button>
    );
};

export default BackButton;
