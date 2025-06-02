import { LogEntry } from "app/types";
import LogContainer from "./LogContainer";

type LogsProps = {
    data?: LogEntry[];
};

const Logs = ({ data }: LogsProps) => {
    if (!data || data.length === 0) {
        return (
            <div className="flex items-center justify-center">
                <LogContainer>
                    <div className="text-center text-gray-400 font-medium p-20">
                        No logs available yet.
                    </div>
                </LogContainer>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            {data.map((log, logIndex) => (
                <LogContainer key={logIndex}>
                    <div className="mb-6">
                        <strong>What I did</strong>
                        {log.whatIDid?.map((item, index) => (
                            <p key={index} className="text-gray-700">
                                {item}
                            </p>
                        ))}

                        <strong>What&#39;s next</strong>
                        {log.whatsNext?.map((item, index) => (
                            <p key={index} className="text-gray-700">
                                {item}
                            </p>
                        ))}

                        <strong>Debug notes</strong>
                        {log.bug?.map((item, index) => (
                            <p key={index} className="text-gray-700">
                                {item}
                            </p>
                        ))}

                        <div className="mt-2">
                            <strong>Productivity Score: </strong>
                            <span className="text-green-600 font-semibold">
                                {log.score}%
                            </span>
                        </div>
                    </div>
                </LogContainer>
            ))}
        </div>
    );
};

export default Logs;
