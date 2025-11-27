import { useState } from "react";
import MinigameInfo from "../Components/MinigameInfo"
import type { Screen } from "../Types/GameType"
import { useMinigameExit } from "../hooks/useMinigameExit"
import GameEnd from "../Components/GameEnd";
import MiniGamePreset from "../Components/MinigamePreset";

type RussianRuletteProps = {
    setCurrentScreen: (screen: Screen) => void
}

const RussianRulette = ({ setCurrentScreen }: RussianRuletteProps) => {






    return (
        <MiniGamePreset setCurrentScreen={setCurrentScreen} GameName="Russian Rulette" GameInfo="A dangerous game of chance.">

            {({ endGame }) => (
                <div>
                    <h1>Probíhá minihra…</h1>
                    <button onClick={endGame}>Ukončit hru</button>
                </div>
            )}
        </MiniGamePreset>
    )
}

export default RussianRulette;