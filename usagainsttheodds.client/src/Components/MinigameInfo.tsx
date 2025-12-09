import { useMinigame } from "../Hooks/useMinigame"
import ChangeScreenButton from "./ChangeScreenButton"




const MinigameInfo = ({}) => {

    const { exitGame, continueGame, data } = useMinigame();
    

    return (
        <div>
            <h2>{data?.name}</h2>
            <p>
                {data?.description}
            </p>
            <ChangeScreenButton OnClick={exitGame} Text="Exit" />
            <button onClick={continueGame}>Play</button>
        </div>
    )
}

export default MinigameInfo;