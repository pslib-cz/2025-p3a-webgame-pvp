import ChangeScreenButton from "./ChangeScreenButton"
import type { Screen } from "../Types/GameType"
import { useMinigameExit } from "../hooks/useMinigameExit"

type GameEndProps = {
    result: "win" | "lose",
    setCurrentScreen: (screen: Screen) => void
}

const GameEnd:React.FC<GameEndProps> = ({result, setCurrentScreen}) => {
    const { onExit } = useMinigameExit({ setCurrentScreen })

    return (
        <div>
            {result === "win" ? <h2>You Win!</h2> : <h2>You Lose!</h2>}
            <ChangeScreenButton OnClick={() => onExit(null)} Text="Exit" />
        </div>
    )
}

export default GameEnd;