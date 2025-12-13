import { useMinigame } from "../../Hooks/useMinigame";
import Blackjack from "../../Pages/Minigames/Blackjack";
import TestMinigame from "../../Pages/Minigames/TestMinigame";
import MinigameEnd from "./MinigameEnd";
import MinigameInfo from "./MinigameInfo";

type MinigameProps = {
    id: string;
}


const Minigame: React.FC<MinigameProps> = ({ id }) => {

    const { state } = useMinigame();

    if (state === "intro") {
        return <MinigameInfo />;
    }
    if (state === "playing") {
        switch (id) {
            case "blackjack":
                return <Blackjack />;
            case "russianrulette":
                return "<RussianRulette />";
            case "test":
                return <TestMinigame />;
            default:
                return <div>Unknown Minigame</div>;
        }
    }
    if (state === "ended") {

        return <MinigameEnd />;
    }

}

export default Minigame;