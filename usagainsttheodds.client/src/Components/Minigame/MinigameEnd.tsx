import ChangeScreenButton from "../ChangeScreenButton"
import { useMinigame } from "../../Hooks/useMinigame"



const MinigameEnd = ({ }) => {
    const { reward, exitPagePath, result, playGame } = useMinigame();



    return (
        <div>
            {result === "win" ? <h2>You Win!</h2> : result === "lose" ? <h2>You Lose!</h2> : <h2>It's a Draw!</h2>}
            <p>Your reward: {reward} tickets</p>
            <ChangeScreenButton to={exitPagePath} text="Exit"/>
            <button onClick={playGame}>Play again</button>
        </div>
    )
}

export default MinigameEnd;