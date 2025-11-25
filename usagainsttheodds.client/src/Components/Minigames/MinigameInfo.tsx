import type { Screen } from "../../Types/GameType"
import ChangeScreenButton from "../ChangeScreenButton"
type MinigameInfoProps = {
    Info: string,
    GameName: string,
    onContinue?: () => void
}


const MinigameInfo:React.FC<MinigameInfoProps> = ({Info, GameName, onContinue}) => {
    return (
        <div>
            <h2>{GameName}</h2>
            <p>
                {Info}
            </p>
            <ChangeScreenButton Screen="gameboard" OnClick={() => {}} Text="Exit" />
            <button onClick={onContinue}>Play</button>
        </div>
    )
}

export default MinigameInfo;