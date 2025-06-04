export type LogEntry = {
    date: string;
    displayDate: string;
    createdAt: string;
    whatIDid: string[];
    whatsNext: string[];
    bug: string[];
    score: number;
    project: {
        id: string;
        name: string;
        createdAt: string;
        // Add other fields from the Project model if needed
    };
};
