import { useMinigame } from "../../Hooks/useMinigame"
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import ChangeScreenButton from "../ChangeScreenButton"
import introstyles from "../../assets/styles/Intro.module.css"
import styles from "../../assets/styles/components/MinigameP.module.css"
import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"

const MinigameInfo = ({ }) => {

    const { exitPagePath, playGame, data, bet, setBet } = useMinigame();
    const { tickets } = useOwnOutlet();

    const handleBetChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const inputValue = e.currentTarget.value;

        // Pokud je input prázdný (uživatel vše smazal), nastavíme 0 a skončíme
        if (inputValue === "") {
            setBet(0);
            return;
        }

        // Jinak převedeme na číslo
        const value = Number(inputValue);

        if (value > tickets) {
            setBet(tickets);
        } else {
            setBet(Math.abs(Math.round(value)));
        }
    }
    /*
                <div className={styles.rules}>
                <h2>How to play?</h2>
                <p>
                    {data ? data.rules : "No minigame rules available"}
                </p>
            </div>
    */

    return (
        <div className={`${minigameStyles.container} ${minigameStyles.table}`}>
            <div className={ `${styles.minigameContainer} ${styles.start} `}>
                <div className={styles.text}>
                    <h2>{data ? data.name : "No minigame name available"}</h2>
                    <p>
                        {data ? data.description : "No minigame description available"}
                    </p>
                </div>

                <div className={styles.bet}>
                    <div className={introstyles.nameInputContainer}>
                        <label>Place your bet: </label>
                        <div className={introstyles.nameInputBox}>
                            <input className={introstyles.nameInput} type="number" min={1} max={tickets} onChange={(e) => handleBetChange(e)} value={bet === 0 ? "" : bet} placeholder="0" />
                        </div>
                        <button className={styles.buttonAll} onClick={() => setBet(tickets)}>All in</button>
                    </div>
                    <p>*You can bet how many tickets you want. Your reward will depend on it.</p>
                </div>
                <div className={styles.buttons}>
                    <ChangeScreenButton className="buttonIntro buttonRules" to={exitPagePath} text="Exit" />
                    <button className="buttonIntro buttonRules" onClick={playGame}>Play {data ? data.name : "minigame"}</button>
                </div>
            </div>
        </div>
    )
}

export default MinigameInfo;