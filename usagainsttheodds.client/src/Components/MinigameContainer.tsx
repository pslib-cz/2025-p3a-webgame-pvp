import { Suspense, useState, useEffect } from "react";
import MinigameProvider from "../Providers/MinigameProvider";
import Minigame from "./Minigame";
import { ErrorBoundary } from "react-error-boundary";

type MinigameContainerProps = {
    id: string;
    exitScreenCallback: () => void;
}

const MinigameContainer: React.FC<MinigameContainerProps> = ({id, exitScreenCallback}) => {

    const [promise, setPromise] = useState<Promise<any> | null>(null);
    
    const fetchData = (id: string) => {
        console.log("Fetching minigame data for id:", id);
        return fetch(`https://localhost:7222/api/minigames/${id}`)
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

    return (
        <ErrorBoundary FallbackComponent={({ error, resetErrorBoundary }) => (
            <div>
                <pre style={{ color: 'red' }}>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        )}
        >
            <Suspense fallback={<div>Loading minigame data...</div>}>
                <MinigameProvider onExitCallback={exitScreenCallback} promise={promise}>
                    <Minigame id={id} />
                </MinigameProvider>
            </Suspense>
        </ErrorBoundary>
    );
}
export default MinigameContainer;