import { useMinigame } from "../../Hooks/useMinigame";
import Blackjack from "../../Pages/Minigames/Blackjack";
import Russianroulette from "../../Pages/Minigames/RussianRoulette";
import MinigameEnd from "./MinigameEnd";
import MinigameInfo from "./MinigameInfo";
import { useEffect } from "react";
import SlotsGame from "../../Pages/Minigames/Slots";
import MemoryMatch from "../../Pages/Minigames/MemoryMatch";
import Darts from "../../Pages/Minigames/Darts";
import WhackAMole from "../../Pages/Minigames/WhackAMole";
import NotFoundPage from "../../Pages/NotFoundPage";
import FeelingLucky from "../../Pages/Minigames/FeelingLucky"

type MinigameProps = {
    id: string;
    devVersion?: boolean;
}


const Minigame: React.FC<MinigameProps> = ({ id, devVersion = false }) => {
    const { state, setState } = useMinigame();


    useEffect(() => {
        if (devVersion && state === "intro") {
            setState("playing");
        }
    }, [])

    if (state === "intro") {
        return <MinigameInfo />;
    }
    if (state === "playing") {
        switch (id) {
            case "blackjack":
                return <Blackjack />;
            case "memorymatch":
                return <MemoryMatch />;
            case "russianroulette":
                return <Russianroulette />;
            case "whackamole":
                return <WhackAMole />;
            case "slots":
                return <SlotsGame />;
            case "darts":
                return <Darts />
            case "feelinglucky":
                return <FeelingLucky />;
            default:
                return <NotFoundPage />;
        }
    }
    if (state === "ended") {

        return <MinigameEnd />;
    }

}

export default Minigame;