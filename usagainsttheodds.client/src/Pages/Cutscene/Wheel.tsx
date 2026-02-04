import { Suspense, use, useEffect, useState } from "react";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import type { Jokes } from "../../Types/GameType";
import styles from "../../assets/styles/Wheel.module.css";
import { ErrorBoundary } from "react-error-boundary";
import ChangeScreenButton from "../../Components/ChangeScreenButton";




const WheelContent = () => {

    const { player } = useOwnOutlet();
    const [promise, setPromise] = useState<Promise<Jokes[]> | null>(null);
    const [joke, setJoke] = useState<Jokes | null>(null);
    const [jokeStage, setJokeStage] = useState<"setup" | "punchline">("setup");


    const fetchJokes = () => {
        console.log("Fetching jokes data");
        return fetch(`/api/joke/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
    }

    useEffect(() => {
        if (!promise) {
            setPromise(fetchJokes());
        }
    }, []);

    const data = promise ? use(promise) : [];

    useEffect(() => {
        if (data.length > 0) {
            setJoke(data[Math.floor(Math.random() * data.length)]);
            const timer = setTimeout(() => {
                setJokeStage("punchline");
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [data]);


    
    const getRandomJoke = (jokes: Jokes[]) => {

        setJoke(jokes[Math.floor(Math.random() * jokes.length)]);

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
    return (
        <ErrorBoundary fallback={<div className={styles.page}>An error occurred while loading the cutscene. Please try again later.</div>}>
            <Suspense fallback={<div className={styles.page}>Loading scene...</div>}>
                <WheelContent />
            </Suspense>
        </ErrorBoundary>
    )
}

export default Wheel;