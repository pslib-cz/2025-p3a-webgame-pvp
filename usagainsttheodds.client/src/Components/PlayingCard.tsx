import { useState } from "react"
import type { PlayingCardFace, PlayingCardSymbol, PlayingCardValue } from "../Types/PlayingCardType"
import styles from "../assets/styles/components/PlayingCard.module.css"


type PlayingCardProps = {
    symbol: PlayingCardSymbol
    value: PlayingCardValue | null
    face?: PlayingCardFace
    clickable?: boolean
}

const PlayingCard: React.FC<PlayingCardProps> = ({ face = "Front", symbol, value, clickable = true }) => {

    const [currentFace, setCurrentFace] = useState<PlayingCardFace>(face);


    const turnCard = () => {
        setCurrentFace(prev => prev === "Front" ? "Back" : "Front")
        // if (currentFace === "Front") {
        //     setCurrentFace("Back")
        // }
        // if (currentFace === "Back") {
        //     setCurrentFace("Front")
        // }
    }

    const handleClick = () => {
        turnCard()
    }

    return (
        <>
            <span onClick={(clickable ? handleClick : undefined)} 
                className={`
                    ${styles.card}
                    ${currentFace === "Back" ? styles.hidden : ""}
                    ${clickable && styles.clickable}
                    `}
            >
                {/* přední strana s konkrétním obrázkem */}
                <span className={`${styles.face} ${styles.Front} ${styles[`${symbol}${value ? value : ""}`]}`} />
                {/* zadní strana (společný obrázek rubu) */}
                <span className={`${styles.face} ${styles.Back}`} />
            </span>
        </>
    )
}

export default PlayingCard