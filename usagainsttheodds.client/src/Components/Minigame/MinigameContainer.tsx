import { Suspense, useState, useEffect } from "react";
import MinigameProvider from "../../Providers/MinigameProvider";
import Minigame from "./Minigame";
import { ErrorBoundary } from "react-error-boundary";
import type { GameData } from "../../Types/GameType";
import {Loading } from "../Loading"
import ErrorPage from "../../Pages/ErrorPage"
import apiGet from "../../Helpers/apiHelper";
import { useParams } from "react-router-dom";

const MinigameContainer: React.FC = () => {

    const { id } = useParams<{ id: string }>();

    const exitPageMap: Record<string, string> = {
        blackjack: "/game/right",
        whackamole: "/game/right",
        memorymatch: "/game/right",
        slots: "/game/right",
    };

    


    const currentId = id?.toLowerCase() || "";
    const exitPage = exitPageMap[currentId] || "/game";

    const [promise, setPromise] = useState<Promise<GameData> | null>(null);

    useEffect(() => {
        if (currentId) {
            setPromise(apiGet(`/api/minigames/${currentId}`));
        }
    }, [currentId]);

    if (!promise) {
        return <Loading />;
    }

    return (
        <ErrorBoundary
            FallbackComponent={ErrorPage}
        >
            <Suspense fallback={<Loading />}>
                <MinigameProvider exitPage={exitPage} promise={promise}>
                    <Minigame id={currentId} />
                </MinigameProvider>
            </Suspense>
        </ErrorBoundary>
    );
}
export default MinigameContainer;