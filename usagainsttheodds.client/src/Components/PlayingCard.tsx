import { useState } from "react"
import type { PlayingCardFace, PlayingCardSymbol, PlayingCardValue } from "../Types/PlayingCardType"
import styles from "../assets/styles/components/PlayingCard.module.css"


type PlayingCardProps = {
    symbol: PlayingCardSymbol
    value: PlayingCardValue | null
    face: PlayingCardFace
    clickable?: boolean
}

const PlayingCard: React.FC<PlayingCardProps> = ({ face, symbol, value, clickable = true }) => {

    const [currentFace, setCurrentFace] = useState<PlayingCardFace>(face);

    const handleClick = () => {
        if (currentFace === "Front") {
            setCurrentFace("Back")
            console.log(`Clicked on card ${symbol} ${value}, flipping to back.`)
        }
        if (currentFace === "Back") {
            setCurrentFace("Front")
            console.log(`Clicked on card ${symbol} ${value}, flipping to front.`)
        }
    }

    return (
        <>
            <span onClick={(clickable ? handleClick : undefined)} 
                className={`
                    ${styles.card}
                    ${(currentFace === "Front") ? styles[`${symbol}${(symbol !== "Joker") ? value : ""}`] : styles.Back}
                    ${clickable && styles.clickable}
                    `}
            />
        </>
    )
}

export default PlayingCard