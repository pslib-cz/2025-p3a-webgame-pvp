import React from "react"
import type { Screen } from "../Types/GameType"
type ChangeScreenButtonProps = {
    Screen: Screen,
    OnClick: (x:Screen) => void 
}

const ChangeScreenButton:React.FC<ChangeScreenButtonProps> = ({Screen, OnClick}) => {

    return <button id={Screen?.toString()} onClick={() => OnClick(Screen)}>Change to {Screen}</button>
}
export default ChangeScreenButton;