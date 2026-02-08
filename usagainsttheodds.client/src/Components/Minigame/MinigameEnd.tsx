import ChangeScreenButton from "../ChangeScreenButton"
import { useMinigame } from "../../Hooks/useMinigame"
import styles from "../../assets/styles/components/MinigameP.module.css"
import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"



const MinigameEnd = ({ }) => {
    const { reward, exitPagePath, result, playAgain } = useMinigame();



    return (
        <div className={`${minigameStyles.container} ${minigameStyles.table}`}>
            <div className={`${styles.minigameContainer} ${styles.ending}`}>
                {result === "win" ? <h2>You Win!</h2> : result === "lose" ? <h2>You Lose!</h2> : <h2>It's a Draw!</h2>}
                <p>Your reward: {reward} tickets</p>
                <div className={styles.buttons}>
                    <ChangeScreenButton className="buttonIntro buttonRules" to={exitPagePath} text="Exit"/>
                    <button className="buttonIntro buttonRules" onClick={playAgain}>Play again</button>
                </div>
            </div>
        </div>
    )
}

export default MinigameEnd;