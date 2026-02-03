import { use, useEffect, useState } from "react";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import type { Jokes } from "../../Types/GameType";
import styles from "../../assets/styles/Wheel.module.css";




const Wheel = () => {

    const { setRelationshipValue, player } = useOwnOutlet();
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
    //load data from api
    useEffect(() => {
        setPromise(fetchJokes());
    }, []); 

    if (!promise) {
        return <div>Initializing request...</div>;
    }
    const data = use(promise);


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
            </div>
        </div>
    );


}

export default Wheel;