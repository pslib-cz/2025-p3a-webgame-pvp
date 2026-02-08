import { useEffect, useState, use, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../assets/styles/Intro.module.css';
import type { IntroScreen } from "../../Types/GameType";
import apiGet from "../../Helpers/apiHelper";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import { ErrorBoundary } from "react-error-boundary";
import { useSound } from "../../Providers/SoundProvider";
import { Loading } from "../../Components/Loading"
import ErrorPage from "../ErrorPage"
import "../../assets/index.css"

//Pomocná komponenta pro samotný obsah cutscény
const IntroCutsceneContent = ({ promise }: { promise: Promise<IntroScreen[]> }) => {
    const data = use(promise);
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(0);
    const { player, girlfriend } = useOwnOutlet();
    const { play, stop } = useSound();

    const sceneData = data[page];

    const isLastPage = page === data.length - 1;

    const nextPage = () => {
        if (isLastPage) {
            navigate("/game");
            play('bgMusic');
            stop('crowd');
        } else {
            setPage(prev => prev + 1)
        }
    }

    useEffect(() => {
        if (isLastPage) return;
        const timer = setTimeout(() => {
            nextPage();
        }, 5000);

        return () => clearTimeout(timer);
    }, [page, isLastPage]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space" || e.code === "Enter") {
                nextPage();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [page, isLastPage]);

    return (
        <div className={`${styles.page}`} style={{ backgroundImage: `url(${sceneData.imageUrl})` }}>
            <div className={styles.textContainer}>
                <span className={`${styles.speakerAvatar} ${styles[sceneData.speaker]}`}></span>
                <p className={`${styles.speakerName}`}>
                    {sceneData.speaker.toLowerCase() === "boy" ? player.name : 
                     sceneData.speaker.toLowerCase() === "girl" ? girlfriend.name : 
                     sceneData.speaker}:
                </p>
                <p className={styles.text}>{sceneData.text}</p>
            </div>

            <button className="buttonNext" onClick={nextPage}>
                {sceneData.buttonText}
            </button>
        </div>
    );
};

// Hlavní komponenta, která řeší načítání
const IntroCutscene = () => {
    const [promise, setPromise] = useState<Promise<IntroScreen[]> | null>(null);

    useEffect(() => {
        setPromise(apiGet<IntroScreen[]>('/api/cutscenes/intro'));
    }, []);

    if (!promise) {
        return <Loading />;
    }

    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <Suspense fallback={<Loading message="Loading scene..."/>}>
                <IntroCutsceneContent promise={promise} />
            </Suspense>
        </ErrorBoundary>
    );
};

export default IntroCutscene;