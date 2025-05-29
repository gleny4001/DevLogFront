import { IoChevronBack } from "react-icons/io5";

const BackButton = () => {
    const handleBackClick = () => {
        window.history.back();
    };
    return (
        <button
            onClick={handleBackClick}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
        >
            <IoChevronBack size={24} className="text-gray-600" />
        </button>
    );
};

export default BackButton;
