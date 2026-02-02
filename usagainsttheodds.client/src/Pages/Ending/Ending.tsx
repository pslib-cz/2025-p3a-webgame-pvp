import { useEffect, useState, Suspense } from "react";
import styles from '../../assets/styles/Intro.module.css';
import apiGet from "../../Helpers/apiHelper";
import { ErrorBoundary } from "react-error-boundary";
import EndingContent from "./EndingContent";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import type { EndingType } from "../../Types/GameType";
import { useNavigate } from "react-router-dom";



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
        return <div className={styles.page}>Initializing request...</div>;
    }

    return (
        <ErrorBoundary fallback={<div className={styles.page}>An error occurred while loading the ending. Please try again later.</div>}>
            <Suspense fallback={<div className={styles.page}>Loading ending...</div>}>
                <EndingContent promise={promise} />
            </Suspense>
        </ErrorBoundary>
    );
};

export default Ending;