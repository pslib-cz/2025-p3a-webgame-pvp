import ChangeScreenButton from "./ChangeScreenButton"
import { useMinigame } from "../Hooks/useMinigame"



const GameEnd= ({ }) => {
    const { exitGame } = useMinigame();
    const { tickets } = useMinigame();
    const { result } = useMinigame();

    return (
        <div>
            {result === "win" ? <h2>You Win!</h2> : result === "lose" ? <h2>You Lose!</h2> : <h2>It's a Draw!</h2>}
            <p>Your reward: {tickets} tickets</p>
            <ChangeScreenButton OnClick={exitGame} Text="Exit" />
        </div>
    )
}

export default GameEnd;