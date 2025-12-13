import { useMinigame } from "../Hooks/useMinigame"
import ChangeScreenButton from "./ChangeScreenButton"




const MinigameInfo = ({}) => {

    const { exitPagePath, playGame, data } = useMinigame();
    

    return (
        <div>
            <h2>{data ? data.name : "No name available"}</h2>
            <p>
                {data ? data.description : "No description available"}
            </p>
            <ChangeScreenButton to={exitPagePath} text="Exit" />
            <button onClick={playGame}>Play</button>
        </div>
    )
}

export default MinigameInfo;