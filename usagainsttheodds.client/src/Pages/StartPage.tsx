import { useNavigate } from 'react-router-dom';
import '../assets/index.css'
import styles from "../assets/styles/Intro.module.css"
import IntroRules from '../Components/IntroRules';
import { useState } from 'react';
import { useOwnOutlet } from '../Hooks/useOwnOutlet';
import { useSound } from '../Providers/SoundProvider';

const StartPage = () => {
    const { play } = useSound();
    const navigate = useNavigate();
    const [showComponent, setShowComponent] = useState(false);
    const { isStarted } = useOwnOutlet();

    const handleShow = () => {
        setShowComponent(true);
    };

    

    const Continue = () => {
        navigate("/game");
    };


    return (
        <div className={styles.startpage}>

            
            {showComponent && <IntroRules onCloseCallback={() => setShowComponent(false)} />}

            <div className={styles.startpageContainer}>
                <div className={`${styles.layer} ${styles.layer1}`} />
                <div className={`${styles.layer} ${styles.layer2}`} />
                <div className={styles.layer3}/>
                <div className={styles.layer4}>
                    {!showComponent && <div className={styles.buttons}>
                        <button className="buttonIntro" onClick={() => { handleShow(); }}>New game</button>
                        {isStarted && (
                        <button className="buttonIntro" onClick={() => { play('bgMusic'); Continue(); }}>
                            Continue
                        </button>
                        )}
                    </div>}
                </div>
            </div>
            
        </div>
    );
};
export default StartPage;