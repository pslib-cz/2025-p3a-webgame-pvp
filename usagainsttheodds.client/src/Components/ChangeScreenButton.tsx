import React from "react"
import type { Game } from "../Types/GameType"
type ChangeScreenButtonProps = {
    Game: Game,
    OnClick: (x:Game) => void 
}

const ChangeScreenButton:React.FC<ChangeScreenButtonProps> = ({Game, OnClick}) => {

    return <button id={Game?.toString()} onClick={() => OnClick(Game)}>Change to {Game}</button>
}
export default ChangeScreenButton;