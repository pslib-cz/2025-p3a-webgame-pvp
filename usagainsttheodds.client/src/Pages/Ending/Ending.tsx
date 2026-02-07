import { useEffect, useState, Suspense } from "react";
import apiGet from "../../Helpers/apiHelper";
import { ErrorBoundary } from "react-error-boundary";
import EndingContent from "./EndingContent";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import type { EndingType } from "../../Types/GameType";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../Components/Loading"
import ErrorPage from "../ErrorPage"



// Hlavní komponenta, která řeší načítání
const Ending = () => {
    const [promise, setPromise] = useState<Promise<EndingType> | null>(null);
    const {endReason, endPerson} = useOwnOutlet();
    const navigate = useNavigate();

    useEffect(() => {
      if (endReason === null) {
        navigate("/game");
        return;
      }
      setPromise(apiGet<EndingType>(`/api/endings/${endReason}${endPerson ? `/${endPerson}` : ''}`));
    }, [endReason, endPerson]);

    if (!promise) {
        return <Loading />;
    }

    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <Suspense fallback={<Loading message="Loading ending..."/>}>
                <EndingContent promise={promise} />
            </Suspense>
        </ErrorBoundary>
    );
};

export default Ending;