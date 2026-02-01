import { Suspense, useState, useEffect } from "react";
import MinigameProvider from "../../Providers/MinigameProvider";
import Minigame from "./Minigame";
import { ErrorBoundary } from "react-error-boundary";
import type { GameData } from "../../Types/GameType";

type MinigameContainerProps = {
    id: string;
    exitPage: string;
    devVersion?: boolean;
}

const MinigameContainer: React.FC<MinigameContainerProps> = ({ id, exitPage, devVersion = false }) => {

    if (devVersion) { 
        return (
            <Suspense fallback={<div>Loading dev minigame...</div>}>
                <MinigameProvider exitPage={exitPage} promise={Promise.resolve({
                    minigameId: id,
                    name: "Dev Minigame",
                    description: "This is a dev version of the minigame.",
                    price: 100,
                    difficulty: 1
                } as GameData)}>
                    <Minigame id={id.toLowerCase()} devVersion={true} />
                </MinigameProvider>
            </Suspense>
        )
    }
    else {

        const [promise, setPromise] = useState<Promise<GameData> | null>(null);

        const fetchData = (id: string) => {
            console.log("Fetching minigame data for id:", id);
            return fetch(`/api/minigames/${id.toLowerCase()}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                });
        }

        //load data from api
        useEffect(() => {
            setPromise(fetchData(id));
        }, [id]);

        if (!promise) {
            return <div>Initializing request...</div>;
        }

        return (
            <ErrorBoundary
                FallbackComponent={({ error, resetErrorBoundary }) => {
                    let message = "Unknown error";
                    if (error instanceof Error) {
                    message = error.message;
                    } else if (typeof error === "string") {
                    message = error;
                    }
                    return (
                    <div>
                        <pre style={{ color: 'red' }}>{message}</pre>
                        <button onClick={resetErrorBoundary}>Try again</button>
                    </div>
                    );
                }}
            >
                <Suspense fallback={<div>Loading minigame data...</div>}>
                    <MinigameProvider exitPage={exitPage} promise={promise}>
                        <Minigame id={id.toLowerCase()} />
                    </MinigameProvider>
                </Suspense>
            </ErrorBoundary>
        );
    }
}
export default MinigameContainer;