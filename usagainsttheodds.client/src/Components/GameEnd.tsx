import ChangeScreenButton from "./ChangeScreenButton"
import type { Screen, GameResult} from "../Types/GameType"
import { useMinigameExit } from "../hooks/useMinigameExit"

type GameEndProps = {
    result: GameResult,
    setCurrentScreen: (screen: Screen) => void
}

const GameEnd:React.FC<GameEndProps> = ({result, setCurrentScreen}) => {
    const { onExit } = useMinigameExit({ setCurrentScreen })

    return (
        <div>
            {result === "win" ? <h2>You Win!</h2> : result === "lose" ? <h2>You Lose!</h2> : <h2>It's a Draw!</h2>}
            <ChangeScreenButton OnClick={() => onExit(null)} Text="Exit" />
        </div>
    )
}

export default GameEnd;