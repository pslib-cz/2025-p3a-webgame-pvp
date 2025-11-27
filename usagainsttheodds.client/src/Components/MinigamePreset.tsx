import React, { useState } from "react";
import MinigameInfo from "./MinigameInfo";
import type { Screen } from "../Types/GameType";
import { useMinigameExit } from "../hooks/useMinigameExit";
import GameEnd from "./GameEnd";

type MinigamePresetProps = {
    setCurrentScreen: (screen: Screen) => void
    GameName: string;
    GameInfo: string;
    children?: (actions: { endGame: () => void }) => React.ReactNode; 
}


const MiniGamePreset:React.FC<MinigamePresetProps> = ({ setCurrentScreen, GameName, GameInfo, children}) => {



    const [state,setState] = useState<"intro" | "started" | "ended">("intro");
    const endGame = () => setState("ended");

    const { onExit } = useMinigameExit({ setCurrentScreen })






    if (state === "started") {

        return (
            <>{children && children({ endGame })}</>
        )


    }else if (state === "ended") {
        return <GameEnd result="win" setCurrentScreen={setCurrentScreen} />
    }



    return (
        
        <MinigameInfo GameName={GameName} Info={GameInfo} onContinue={ () => setState("started")} onExit={onExit}/>
    )
}

export default MiniGamePreset;