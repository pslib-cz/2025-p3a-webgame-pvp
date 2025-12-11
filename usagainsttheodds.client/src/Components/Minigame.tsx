import { useMinigame } from "../Hooks/useMinigame";
import Blackjack from "../Pages/Minigames/Blackjack";
import GameEnd from "./GameEnd";
import MinigameInfo from "./MinigameInfo";

type MinigameProps = {
    id: string;
}


const Minigame: React.FC<MinigameProps> = ({ id }) => {

    const { state } = useMinigame();

    if (state === "intro") {
        return <MinigameInfo/>;
    }
    if (state === "playing") {
        switch (id) {
            case "blackjack":
                return <Blackjack />;
            case "russianrulette":
                return "<RussianRulette />";
            case "test":
                return <div>Test Minigame</div>;
            default:
                return <div>Unknown Minigame</div>;
        }
    }
    if (state === "ended") {
        
        return <GameEnd/>;
    }
    
}

export default Minigame;