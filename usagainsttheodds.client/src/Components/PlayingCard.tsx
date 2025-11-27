import { useState } from "react"
import type { Card, PlayingCardFace } from "../Types/PlayingCardType"
import styles from "../assets/styles/components/PlayingCard.module.css"


type PlayingCardProps = {
    card: Card
    face?: PlayingCardFace
    clickable?: boolean
}

const PlayingCard: React.FC<PlayingCardProps> = ({ card, face="Front", clickable = true }) => {

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
                {/* přední strana karty */}
                <span className={`${styles.face} ${styles.Front} ${styles[`${card.symbol}${card.value ? card.value : ""}`]}`} />
                {/* zadní strana karty */}
                <span className={`${styles.face} ${styles.Back}`} />
            </span>
        </>
    )
}

export default PlayingCard