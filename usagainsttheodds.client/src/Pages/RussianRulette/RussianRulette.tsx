import { useState } from "react";
import MinigameInfo from "../../Components/MinigameInfo"
import type { Screen } from "../../Types/GameType"
import { useMinigameExit } from "../../hooks/useMinigameExit"
import GameEnd from "../../Components/GameEnd";
import RussianRuletteLogic from "./RussianRuletteLogic";

type RussianRuletteProps = {
    setCurrentScreen: (screen: Screen) => void
}

const RussianRulette = ({ setCurrentScreen }: RussianRuletteProps) => {

    // Hook to handle exiting the minigame
    const { onExit } = useMinigameExit({ setCurrentScreen })


    const [state,setState] = useState<"intro" | "started" | "ended">("intro");





    if (state === "started") {

        return (
            <RussianRuletteLogic />
        )


    }else if (state === "ended") {
        return <GameEnd result="win" setCurrentScreen={setCurrentScreen} />
    }



    return (
        
        <MinigameInfo GameName="Russian Rulette" Info="Russian rulette is a game." onContinue={ () => setState("started")} onExit={onExit}/>
    )
}

export default RussianRulette;