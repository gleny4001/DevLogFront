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
    todo?: TodoList;
};

export type ProjectWithLogs = {
    id: string;
    name: string;
    createdAt: string;
    log: LogEntry[];
};

export type Todo = {
    title: string;
    todos: string[];
};

export type TodoList = {
    createdAt: string;
    id: string;
    logId: string;
    todos: Todo[];
};
