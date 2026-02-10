import { useMinigame } from "../../Hooks/useMinigame"
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import ChangeScreenButton from "../ChangeScreenButton"
import introstyles from "../../assets/styles/Intro.module.css"
import styles from "../../assets/styles/components/MinigameP.module.css"
import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"

const MinigameInfo = ({ }) => {

    const { exitPagePath, playGame, data, bet, setBet } = useMinigame();
    const { tickets } = useOwnOutlet();

    const handleBetChange = (x: string) => {

        const inputValue = x;

        // Pokud je input prázdný (uživatel vše smazal), nastavíme 0 a skončíme
        if (inputValue === "") {
            setBet(1);
            return;
        }

        // Jinak převedeme na číslo
        const value = Number(inputValue);   

        if (value > tickets && tickets < 1000) {
            setBet(tickets);
        } else if (value > 1000) {
            setBet(1000);
        }else {
            setBet(Math.abs(Math.round(value)));
        }
    }

    return (
        <div className={`${minigameStyles.container} ${minigameStyles.table}`}>
            <div className={ `${styles.infoContainer} ${styles.start} `}>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <h2>{data ? data.name : "No minigame name available"}</h2>
                        <p>
                            {data ? data.description : "No minigame description available"}
                        </p>
                    </div>
    
                    <div className={styles.rules}>
                        <h2>How to play?</h2>
                        <p>
                            {data ? data.rules : "No minigame rules available"}
                        </p>
                    </div>
    
                    <div className={styles.bet}>
                        <div className={introstyles.nameInputContainer}>
                            <label>Place your bet: </label>
                            <div className={introstyles.nameInputBox}>
                                <input className={introstyles.nameInput} type="number" min={1} max={1000} onChange={(e) => handleBetChange(e.currentTarget.value)} value={bet === 0 ? "" : bet} placeholder="0" />
                            </div>
                            <button className={styles.buttonAll} onClick={() => handleBetChange("1000")}>Max bet</button>
                        </div>
                        <p>*You can place a bet between 1 and 1000. Your reward will depend on it.</p>
                    </div>
                    <div className={styles.buttons}>
                        <ChangeScreenButton className="buttonIntro buttonRules" to={exitPagePath} text="Exit" />
                        <button className="buttonIntro buttonRules" onClick={playGame}>Play {data ? data.name : "minigame"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MinigameInfo;