import { useEffect, useState, use } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../assets/styles/intro.module.css';
import type { IntroScreen } from "../../Types/GameType";
import apiGet from "../../Helpers/apiHelper";

const IntroCutscene = () => {

    const [promise, setPromise] = useState<Promise<IntroScreen[]> | null>(null);

    //load data from api
    useEffect(() => {
        setPromise(apiGet<IntroScreen[]>('/api/introscenes/'));
    }, []);
    
    
    if (!promise) {
        return <div>Initializing request...</div>;
    }
    
    const data = use(promise);



    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1em' }}>
                {data.map((screen) => (
                    <div key={screen.introScreenId} style={{ border: '1px solid black', padding: '1em' }}>
                        <h2>{screen.introScreenId}</h2>
                        <h2>Speaker: {screen.speaker}</h2>
                        <p>{screen.text}</p>
                        <img src={screen.imageUrl} />
                        <button>{screen.buttonText}</button>
                    </div>
                ))}
            </div>

            

            {/* {page === 2 && ( 
                <div className={`${styles.cutscene} ${styles.cutscene1}`}>
                    <h1>Prvni dialog</h1>

                <button className={styles.cutscene__button} onClick={() => setPage(3)}>
                    pokracovat
                </button>

                </div>
            )}
            {page === 3 && ( 
                <div className={`${styles.cutscene} ${styles.cutscene2}`}>
                    <h1>Druhy dialog</h1>

                <button className={styles.cutscene__button} onClick={() => setPage(4)}>
                    Pokracovat
                </button>

                </div>
            )}
            {page === 4 && ( 
                <div className={`${styles.cutscene} ${styles.cutscene3}`}>
                    <h1>Treti dialog</h1>

                <button className={styles.cutscene__button} onClick={() => setPage(5)}>
                    Pokracovat
                </button>

                </div>
            )}

            {page === 5 && ( 
                <div className={`${styles.cutscene} ${styles.cutscene4}`}>
                    <h1>Posledni dialog</h1>

                <button className={styles.cutscene__button} onClick={() => navigate("/game")}>
                    Zacit hru
                </button>

                </div>
            )} */}


        </div>
    );
};
export default IntroCutscene;