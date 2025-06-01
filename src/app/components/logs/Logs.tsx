import { LogEntry } from "app/types";

type LogsProps = {
    data?: LogEntry[]; // optional to allow undefined
};

const Logs = ({ data }: LogsProps) => {
    if (!data || data.length === 0) {
        return (
            <div className="text-center text-gray-400 font-medium">
                No logs available yet.
            </div>
        );
    }

    return (
        <div className="w-[90%] sm:w-xl lg:w-2xl xl:w-4xl p-8 bg-white rounded-lg shadow-md mx-4">
            {data.map((log, logIndex) => (
                <div key={logIndex}>
                    <strong>What I did</strong>
                    {log.whatIDid.map((item, index) => (
                        <p key={index} className="text-gray-700">
                            {item}
                        </p>
                    ))}
                    <strong>What's next</strong>
                    {log.whatsNext.map((item, index) => (
                        <p key={index} className="text-gray-700">
                            {item}
                        </p>
                    ))}
                    <strong>Debug notes</strong>
                    {log.debugNotes.map((item, index) => (
                        <p key={index} className="text-gray-700">
                            {item}
                        </p>
                    ))}
                    <br />
                    <strong>Productivity Score: </strong>
                    <span className="text-green-600 font-semibold">
                        {log.productivityScore}%
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Logs;
