import { useState } from "react"
import type { PlayingCardFace, PlayingCardSymbol, PlayingCardValue } from "../../Types/PlayingCardType"
import styles from "./PlayingCard.module.css"


type PlayingCardProps = {
    symbol: PlayingCardSymbol
    value: PlayingCardValue | null
    face: PlayingCardFace
}

const PlayingCard: React.FC<PlayingCardProps> = ({face, symbol, value}) => {

    const [currentFace, setCurrentFace] = useState<PlayingCardFace>(face);
    
    const handleClick = () => {
        if(currentFace === "Front"){
            setCurrentFace("Back")
            console.log(`Clicked on card ${symbol} ${value}, flipping to back.`)
        } 
        if(currentFace === "Back"){
            setCurrentFace("Front")
            console.log(`Clicked on card ${symbol} ${value}, flipping to front.`)
        }
    }

    return (
        <>
            <span onClick={handleClick} className={`${styles.card} ${(currentFace==="Front") ? styles[`${symbol}${(symbol!=="Joker") ? value : ""}`] : styles.Back}`}/>
        </>
    )
}

export default PlayingCard