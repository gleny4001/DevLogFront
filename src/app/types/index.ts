export type LogEntry = {
    date: string;
    displayDate: string;
    whatIDid: string[];
    whatsNext: string[];
    debugNotes: string[]; // ← fix: this should be string[], not string
    productivityScore: number;
};
