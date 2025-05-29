const Logs = () => {
    const logs = [
        {
            date: "2024-05-26",
            displayDate: "Yesterday, May 26",
            whatIDid: [
                "Finished login API (added rate limiting)",
                "Fixed session expiration bug (#231)",
                "Investigated memory leak in analytics module",
            ],
            whatsNext: [
                "Write tests for new session manager",
                "Refactor data pipeline step 3",
                "Review PR from frontend team",
            ],
            debugNotes: [
                "Memory leak likely from third-party SDK",
                "AWS Lambda logs delayed by ~5 mins",
                "Intermittent 401s from auth service",
            ],
            productivityScore: 80,
        },
    ];

    return (
        <div className="w-[90%] sm:w-xl lg:w-2xl xl:w-4xl p-8 bg-white rounded-lg shadow-md mx-4">
            {logs.map((log, logIndex) => (
                <div key={logIndex}>
                    <strong>What I did</strong>
                    {log.whatIDid.map((item, index) => (
                        <p key={index} className="text-gray-700">
                            {item}
                        </p>
                    ))}
                    <strong>What&#39;s next</strong>
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
