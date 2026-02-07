
import { Suspense, use, useEffect, useState } from "react";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import type { JokeType } from "../../Types/GameType";
import styles from "../../assets/styles/Wheel.module.css";
import style from "../../assets/styles/Intro.module.css"
import { ErrorBoundary } from "react-error-boundary";
import ChangeScreenButton from "../../Components/ChangeScreenButton";
import apiGet from "../../Helpers/apiHelper";
import { Loading } from "../../Components/Loading"
import ErrorPage from "../ErrorPage"


const WheelContent = ({ promise }: { promise: Promise<JokeType> }) => {

    const { player, setRelationshipValue, setTickets } = useOwnOutlet();
    const [jokeStage, setJokeStage] = useState<"setup" | "punchline">("setup");



    const joke = use(promise);

    useEffect(() => {
            const timer = setTimeout(() => {
                setJokeStage("punchline");
                setTickets(prev => prev - 200);//poladit dyl
                setRelationshipValue(prev => prev + 20);
            }, 5000);

            return () => clearTimeout(timer);
    }, [joke]);


    return (
        <div className={`${styles.page}`}>
            <div className={style.textContainer}>
                <span className={`${style.speakerAvatar} ${style.boy}`}></span>
                <p className={`${style.speakerName} `}>
                    {player.name}:
                </p>
                <p className={styles.text}>{jokeStage === "setup" ? joke?.jokeText : joke?.punchline}</p>
            </div>
            {jokeStage === "punchline" && (
                <ChangeScreenButton className="buttonNext" text="Get off the wheel" to="/game" />
            )}
        </div>
    );


}



const Wheel = () => {
    const [promise, setPromise] = useState<Promise<JokeType> | null>(null);

    useEffect(() => {
        setPromise(apiGet<JokeType>('/api/jokes/random'));
    }, []);

    if (!promise) {
        return <Loading/>;
    }


    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <Suspense fallback={<Loading />}>
                <WheelContent promise={promise}/>
            </Suspense>
        </ErrorBoundary>
    )
}

export default Wheel;