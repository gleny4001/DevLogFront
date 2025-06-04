import { useState } from "react";
import LogContainer from "./LogContainer";
import Button from "../general/Button";
import { useApiMutation } from "../../hooks/useApi";
import { useParams } from "next/navigation";

type SectionTitle = "What I did" | "What’s next" | "Debug Notes";

type LogValues = {
    "What I did": string[];
    "What’s next": string[];
    "Debug Notes": string[];
    projectId: string;
};

type SectionInputProps = {
    title: SectionTitle;
    values: string[];
    onChange: (index: number, value: string) => void;
};

const SectionInput = ({ title, values, onChange }: SectionInputProps) => {
    const placeholders: Record<SectionTitle, string[]> = {
        "What I did": [
            "Write what you worked on today",
            "Mention specific tasks or features",
            "Any meetings or collaborations?",
        ],
        "What’s next": [
            "What's your next goal or task?",
            "Any blockers you foresee?",
            "Outline your priorities",
        ],
        "Debug Notes": [
            "Describe any bugs or issues",
            "How did you attempt to fix them?",
            "What's still not working?",
        ],
    };

    return (
        <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <div className="space-y-1">
                {values.map((val, idx) => (
                    <div key={idx} className="relative">
                        <input
                            type="text"
                            value={val}
                            onChange={(e) => onChange(idx, e.target.value)}
                            className="peer w-full focus:outline-none"
                            id={`${title}-${idx}`}
                            placeholder=" " // enable placeholder-shown detection
                        />
                        <label
                            htmlFor={`${title}-${idx}`}
                            className={`absolute left-1 top-0.5 text-gray-400 text-sm pointer-events-none opacity-0 transition-opacity duration-200 ${
                                !val && "peer-focus:opacity-100"
                            }`}
                        >
                            {placeholders[title][idx] || "Enter text here"}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

const NewLog = () => {
    const params = useParams();
    const projectId = params.projectId as string;

    const [logValues, setLogValues] = useState<LogValues>({
        "What I did": ["", "", ""],
        "What’s next": ["", "", ""],
        "Debug Notes": ["", "", ""],
        "projectId": projectId,
    });

    const mutation = useApiMutation("post", "/log", {
        onSuccess: () => {
            setLogValues({
                "What I did": ["", "", ""],
                "What’s next": ["", "", ""],
                "Debug Notes": ["", "", ""],
                "projectId": "",
            });
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        mutation.mutate({
            whatIDid: logValues["What I did"],
            whatsNext: logValues["What’s next"],
            bug: logValues["Debug Notes"],
            score: 10,
            projectId: logValues.projectId,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <LogContainer>
                <form className="w-full p-4" onSubmit={handleSubmit}>
                    <SectionInput
                        title="What I did"
                        values={logValues["What I did"]}
                        onChange={(i, val) =>
                            setLogValues((prev) => ({
                                ...prev,
                                ["What I did"]: prev["What I did"].map(
                                    (v, idx) => (idx === i ? val : v)
                                ),
                            }))
                        }
                    />
                    <SectionInput
                        title="What’s next"
                        values={logValues["What’s next"]}
                        onChange={(i, val) =>
                            setLogValues((prev) => ({
                                ...prev,
                                ["What’s next"]: prev["What’s next"].map(
                                    (v, idx) => (idx === i ? val : v)
                                ),
                            }))
                        }
                    />
                    <SectionInput
                        title="Debug Notes"
                        values={logValues["Debug Notes"]}
                        onChange={(i, val) =>
                            setLogValues((prev) => ({
                                ...prev,
                                ["Debug Notes"]: prev["Debug Notes"].map(
                                    (v, idx) => (idx === i ? val : v)
                                ),
                            }))
                        }
                    />
                    <div className="flex justify-end">
                        <Button type="submit">
                            {mutation.isPending ? "Submitting..." : "Submit"}
                        </Button>
                    </div>
                </form>
            </LogContainer>
        </div>
    );
};

export default NewLog;
