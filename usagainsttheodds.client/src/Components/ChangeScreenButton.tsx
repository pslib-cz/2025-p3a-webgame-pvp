import React from "react"
import type { Screen } from "../Types/GameType"
type ChangeScreenButtonProps = {
    Screen?: Screen,
    OnClick: (x:Screen) => void ,
    Text?: string | null
}

const ChangeScreenButton:React.FC<ChangeScreenButtonProps> = ({Screen = null, OnClick, Text}) => {

    return <button id={Screen?.toString()} onClick={() => OnClick(Screen)}>{Text}</button>
}
export default ChangeScreenButton;