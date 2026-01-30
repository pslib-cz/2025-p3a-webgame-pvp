import { useNavigate } from 'react-router-dom';
import styles from "../assets/styles/Intro.module.css"
import IntroRules from '../Components/IntroRules';
import { useState } from 'react';
import { useOwnOutlet } from '../Hooks/useOwnOutlet';

const StartPage = () => {
    const navigate = useNavigate();
    const hasSave = localStorage.getItem("UserData");
    const [showComponent, setShowComponent] = useState(false);
    const { play } = useOwnOutlet();

    const handleShow = () => {
        setShowComponent(true);
    };

    // const NewGame = () => {
    //     localStorage.removeItem("UserData");
    //     navigate("/cutscene/intro");

    // };

    const Continue = () => {
        navigate("/game");
    };

    return (
        <div className={styles.startpage}>
            <div className={styles.text}>
                <h1>Us against the odds</h1>
                <div className={styles.buttons}>
                    <button className={styles.buttonIntro} onClick={handleShow}>New game</button>
                    {hasSave && (
                    <button className={styles.buttonIntro} onClick={Continue}>
                        Continue
                    </button>
                    )}
                </div>
            </div>
            {showComponent && <IntroRules />}
        </div>
    );
};
export default StartPage;