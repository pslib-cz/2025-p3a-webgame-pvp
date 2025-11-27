import type { Screen } from "../Types/GameType"
import ChangeScreenButton from "./ChangeScreenButton"



type MinigameInfoProps = {
    Info: string,
    GameName: string,
    onContinue?: () => void,
    onExit?: (screen: Screen) => void
}


const MinigameInfo:React.FC<MinigameInfoProps> = ({Info, GameName, onContinue, onExit}) => {

    const handleExit = () => {
        onExit?.(null);
    }

    return (
        <div>
            <h2>{GameName}</h2>
            <p>
                {Info}
            </p>
            <ChangeScreenButton OnClick={handleExit} Text="Exit" />
            <button onClick={onContinue}>Play</button>
        </div>
    )
}

export default MinigameInfo;