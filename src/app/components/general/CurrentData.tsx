const CurrentDate = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB", {
        weekday: "long", // Tuesday
        day: "2-digit", // 27
        month: "short", // May
    });

    return (
        <time className="block font-bold  text-neutral-400">
            {formattedDate}
        </time>
    );
};

export default CurrentDate;
