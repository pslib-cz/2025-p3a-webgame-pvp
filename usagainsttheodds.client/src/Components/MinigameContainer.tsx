import MinigameProvider from "../Providers/MinigameProvider";
import Minigame from "./Minigame";

type MinigameContainerProps = {
    id: string;
    exitScreenCallback: () => void;
}

const MinigameContainer: React.FC<MinigameContainerProps> = ({id, exitScreenCallback}) => {


    return (
        <MinigameProvider id={id} onExitCallback={exitScreenCallback}>
            <Minigame id={id} />
        </MinigameProvider>
    );
}
export default MinigameContainer;