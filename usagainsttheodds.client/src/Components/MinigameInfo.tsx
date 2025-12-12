import { useMinigame } from "../Hooks/useMinigame"
import ChangeScreenButton from "./ChangeScreenButton"




const MinigameInfo = ({}) => {

    const { exitGame, playGame, data } = useMinigame();
    

    return (
        <div>
            <h2>{data ? data.name : "No name available"}</h2>
            <p>
                {data ? data.description : "No description available"}
            </p>
            <ChangeScreenButton OnClick={exitGame} Text="Exit" />
            <button onClick={playGame}>Play</button>
        </div>
    )
}

export default MinigameInfo;