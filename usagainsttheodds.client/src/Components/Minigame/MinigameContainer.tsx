import { Suspense, useState, useEffect } from "react";
import MinigameProvider from "../../Providers/MinigameProvider";
import Minigame from "./Minigame";
import { ErrorBoundary } from "react-error-boundary";
import type { GameData } from "../../Types/GameType";
import {Loading } from "../Loading"
import ErrorPage from "../../Pages/ErrorPage"
import apiGet from "../../Helpers/apiHelper";

type MinigameContainerProps = {
    id: string;
    exitPage: string;
}

const MinigameContainer: React.FC<MinigameContainerProps> = ({ id, exitPage}) => {

    

    const [promise, setPromise] = useState<Promise<GameData> | null>(null);


    //load data from api
    useEffect(() => {
        setPromise(apiGet(`/api/minigames/${id.toLowerCase()}`));
    }, [id]);

    if (!promise) {
        return <Loading />;
    }

    return (
        <ErrorBoundary
            FallbackComponent={ErrorPage}
        >
            <Suspense fallback={<Loading />}>
                <MinigameProvider exitPage={exitPage} promise={promise}>
                    <Minigame id={id.toLowerCase()} />
                </MinigameProvider>
            </Suspense>
        </ErrorBoundary>
    );
}
export default MinigameContainer;