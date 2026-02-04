import { Suspense, use, useEffect, useState } from "react";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import type { JokeType } from "../../Types/GameType";
import styles from "../../assets/styles/Wheel.module.css";
import { ErrorBoundary } from "react-error-boundary";
import ChangeScreenButton from "../../Components/ChangeScreenButton";
import apiGet from "../../Helpers/apiHelper";




const WheelContent = ({ promise }: { promise: Promise<JokeType[]> }) => {

    const { player } = useOwnOutlet();
    const [joke, setJoke] = useState<JokeType | null>(null);
    const [jokeStage, setJokeStage] = useState<"setup" | "punchline">("setup");



    const data = use(promise);

    useEffect(() => {
        if (data.length > 0) {
            setJoke(data[Math.floor(Math.random() * data.length)]);
            const timer = setTimeout(() => {
                setJokeStage("punchline");
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [data]);


    
    const getRandomJoke = (jokes: JokeType[]) => {

        setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
            //pridat do controlleru fetchrandom 
    }

    useEffect(() => {
        getRandomJoke(data);
        const timer = setTimeout(() => {
            setJokeStage("punchline");
        }, 5000);

        return () => clearTimeout(timer);
    }, [data]);




    return (
        <div className={`${styles.page}`}>
            <div className={styles.textContainer}>
                <span className={`${styles.speakerAvatar}`}></span>
                <p className={`${styles.speakerName}`}>
                    {player.name}:
                </p>
                <p className={styles.text}>{jokeStage === "setup" ? joke?.jokeText : joke?.punchline}</p>
                {jokeStage === "punchline" && (
                    <ChangeScreenButton text="Get off the wheel" to="/game" />
                )}
            </div>
        </div>
    );


}



const Wheel = () => {
    const [promise, setPromise] = useState<Promise<JokeType[]> | null>(null);

    useEffect(() => {
        setPromise(apiGet<JokeType[]>('/api/jokes'));
    }, []);

    if (!promise) {
        return <div className={styles.page}>Initializing request...</div>;
    }


    return (
        <ErrorBoundary fallback={<div className={styles.page}>An error occurred while loading the cutscene. Please try again later.</div>}>
            <Suspense fallback={<div className={styles.page}>Loading scene...</div>}>
                <WheelContent promise={promise}/>
            </Suspense>
        </ErrorBoundary>
    )
}

export default Wheel;