import ChangeScreenButton from "./ChangeScreenButton"
import { useMinigame } from "../Hooks/useMinigame"



const GameEnd= ({ }) => {
    const { tickets, exitPagePath, result } = useMinigame();

    return (
        <div>
            {result === "win" ? <h2>You Win!</h2> : result === "lose" ? <h2>You Lose!</h2> : <h2>It's a Draw!</h2>}
            <p>Your reward: {tickets} tickets</p>
            <ChangeScreenButton to={exitPagePath} text="Exit" />
        </div>
    )
}

export default GameEnd;