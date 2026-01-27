import { useEffect, useState, use } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../assets/styles/intro.module.css';
import type { IntroScreen } from "../../Types/GameType";
import apiGet from "../../Helpers/apiHelper";

const IntroCutscene = () => {

    const navigate = useNavigate()
    const [promise, setPromise] = useState<Promise<IntroScreen[]> | null>(null);
    const [page, setPage] = useState<number>(0)

    //load data from api
    useEffect(() => {
        setPromise(apiGet<IntroScreen[]>('/api/introscenes/'));
    }, []);
    
    
    if (!promise) {
        return <div>Initializing request...</div>;
    }
    
    const data = use(promise);
    const sceneData = data[page]

    const nextPage = () => {
        if (data.length-1 === page) navigate("/game");
        else setPage(prev => prev + 1)
    }



    return (
        <div className={`${styles.page}`} style={{backgroundImage: `url(${sceneData.imageUrl})`}}>
            
            <div className={styles.textContainer}>
                <span className={`${styles.speaker} ${styles[sceneData.speaker]}`}></span>
                <p className={styles.text}>{sceneData.text}{sceneData.text}</p>
                <p className={styles.text}>{sceneData.text}{sceneData.text}{sceneData.text}{sceneData.text}</p>
                                
            </div>

            <button className={styles.button} onClick={nextPage}>
                {data.length-1 === page ? "Let's play!" : "Continue"}
            </button>

        


        </div>
    );
};
export default IntroCutscene;