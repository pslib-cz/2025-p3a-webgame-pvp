import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "../assets/styles/Intro.module.css"
import { useOwnOutlet } from '../Hooks/useOwnOutlet';
import ResetButton from '../Components/ResetButton';
import IntroRules from '../Components/IntroRules';

const StartPage = () => {
    const navigate = useNavigate();
    const hasSave = localStorage.getItem("UserData");
    const [showComponent, setShowComponent] = useState(false);

    const handleShow = () => {
        setShowComponent(true);
    };

    const NewGame = () => {
        localStorage.removeItem("UserData");
        navigate("/cutscene/intro");

    };

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