import { LogEntry } from "app/types";
import LogContainer from "./LogContainer";

type LogsProps = {
    data?: LogEntry[];
};

const Logs = ({ data }: LogsProps) => {
    interface FormatDate {
        (dateString: string): string;
    }

    interface ToDateOnly {
        (d: Date): Date;
    }

    const toDateOnly: ToDateOnly = (d) =>
        new Date(d.getFullYear(), d.getMonth(), d.getDate());

    const formatDate: FormatDate = (dateString) => {
        const inputDate = new Date(dateString);
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        const input = toDateOnly(inputDate);
        const t = toDateOnly(today);
        const y = toDateOnly(yesterday);

        if (input.getTime() === t.getTime()) {
            return "Today";
        } else if (input.getTime() === y.getTime()) {
            return "Yesterday";
        } else {
            return inputDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
            });
        }
    };

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
        <div className="flex flex-col items-center justify-center space-y-8">
            {data.map((log, logIndex) => (
                <LogContainer key={logIndex}>
                    <div>
                        {log.whatIDid?.filter(Boolean).length > 0 && (
                            <strong>What I did</strong>
                        )}
                        {log.whatIDid?.map((item, index) => (
                            <p key={index} className="text-gray-700">
                                {item}
                            </p>
                        ))}

                        {log.whatsNext?.filter(Boolean).length > 0 && (
                            <strong>What&#39;s next</strong>
                        )}

                        {log.whatsNext?.map((item, index) => (
                            <p key={index} className="text-gray-700">
                                {item}
                            </p>
                        ))}

                        {log.bug?.filter(Boolean).length > 0 && (
                            <strong>Debug notes</strong>
                        )}

                        {log.bug?.map((item, index) => (
                            <p key={index} className="text-gray-700">
                                {item}
                            </p>
                        ))}
                        <div className="w-full flex justify-end">
                            <p>{formatDate(log.createdAt)}</p>
                        </div>
                    </div>
                </LogContainer>
            ))}
        </div>
    );
};

export default Logs;
