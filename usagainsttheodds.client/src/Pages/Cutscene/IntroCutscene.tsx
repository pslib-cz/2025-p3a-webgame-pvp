import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../assets/styles/intro.module.css';

const IntroCutscene = () => {

    const navigate = useNavigate();
    const [ page, setPage ] = useState(1);

  useEffect(() => {
//sami se prepinaji
    if (page === 2 || page === 3 || page === 4) {
      const timer = setTimeout(() => {
        setPage(prev => prev + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [page]);

    return (
        <div>

            {page === 1 && ( 
                <div className={styles.cutscene__rules}>
                    <h1>Nova hra - pravidla</h1>

                <button onClick={() => setPage(2)}>
                    Zacit scenku
                </button>

                </div>
            )}

            {page === 2 && ( 
                <div className={`${styles.cutscene} ${styles.cutscene1}`}>
                    <h1>Prvni dialog</h1>

                <button onClick={() => setPage(3)}>
                    pokracovat
                </button>

                </div>
            )}
            {page === 3 && ( 
                <div className={`${styles.cutscene} ${styles.cutscene2}`}>
                    <h1>Druhy dialog</h1>

                <button onClick={() => setPage(4)}>
                    Pokracovat
                </button>

                </div>
            )}
            {page === 4 && ( 
                <div className={`${styles.cutscene} ${styles.cutscene3}`}>
                    <h1>Treti dialog</h1>

                <button onClick={() => setPage(5)}>
                    Pokracovat
                </button>

                </div>
            )}

            {page === 5 && ( 
                <div className={`${styles.cutscene} ${styles.cutscene4}`}>
                    <h1>Posledni dialog</h1>

                <button onClick={() => navigate("/game")}>
                    Zacit hru
                </button>

                </div>
            )}


        </div>
    );
};
export default IntroCutscene;