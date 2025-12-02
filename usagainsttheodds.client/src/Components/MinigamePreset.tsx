import React, { useState } from "react";
import MinigameInfo from "./MinigameInfo";
import type { Screen, GameResult } from "../Types/GameType";
import { useMinigameExit } from "../Hooks/useMinigameExit";
import GameEnd from "./GameEnd";

type MinigamePresetProps = {
    setCurrentScreen: (screen: Screen) => void
    GameName: string;
    GameInfo: string;
    children?: (actions: { endGame: () => void }) => React.ReactNode;
    Result: GameResult;
    Tickets: (x: number) => void;
}


const MiniGamePreset: React.FC<MinigamePresetProps> = ({ setCurrentScreen, GameName, GameInfo, children, Result, Tickets }) => {



    const [state, setState] = useState<"intro" | "started" | "ended">("intro");
    const endGame = () => setState("ended");

    const { onExit } = useMinigameExit({ setCurrentScreen })






    if (state === "started") {

        return (
            <>{children && children({ endGame })}</>
        )


    } else if (state === "ended") {
        return <GameEnd result={Result} setCurrentScreen={setCurrentScreen} />
    }



    return (

        <MinigameInfo GameName={GameName} Info={GameInfo} onContinue={() => setState("started")} onExit={onExit} />
    )
}

export default MiniGamePreset;