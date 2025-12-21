import { useEffect, useState } from "react"
import type { Card, PlayingCardFace } from "../../Types/PlayingCardType"
import styles from "../../assets/styles/components/cards.module.css"


type PlayingCardProps = {
    card: Card
    face?: PlayingCardFace
    clickable?: boolean
}

const PlayingCard: React.FC<PlayingCardProps> = ({ card, face="Front", clickable = true }) => {

    const [currentFace, setCurrentFace] = useState<PlayingCardFace>(face);
    const [clickableState, setClickableState] = useState<boolean>(clickable);

    useEffect(() => {
        setCurrentFace(face)
    }, [face]);

    useEffect(() => {
        setClickableState(clickable)
    }, [clickable]);


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

    const getCardImageUrl = (card: Card)=> {
        return new URL(`../../assets/images/Cards/card${card.symbol}${card.value}.png`, import.meta.url).href;
    }

    return (
        <>
            <span onClick={(clickableState ? handleClick : undefined)} 
                className={`
                    ${styles.card}
                    ${currentFace === "Back" ? styles.hidden : ""}
                    ${clickableState && styles.clickable}
                    `}
            >
                {/* přední strana karty */}
                <span className={`${styles.face} ${styles.Front} ${styles[`${card.symbol}${card.value}`]}`} style={{ backgroundImage: `url(${getCardImageUrl(card)})` }} />
                {/* zadní strana karty */}
                <span className={`${styles.face} ${styles.Back}`} />
            </span>
        </>
    )
}

export default PlayingCard