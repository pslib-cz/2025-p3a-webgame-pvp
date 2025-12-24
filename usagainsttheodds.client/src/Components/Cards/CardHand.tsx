import type React from "react"
import type { Hand, PlayingCardFace } from "../../Types/PlayingCardType"
import PlayingCard from "./PlayingCard"
import styles from "../../assets/styles/components/Cards.module.css"

type CardHandProps = {
    hand: Hand
    hiddenCards?: number[] | "all" | "none"
    deckPosition?: [number, number]
    onAnimationEnd?: () => void
}

const CardHand: React.FC<CardHandProps> = ({hand, hiddenCards, deckPosition, onAnimationEnd}) => {

    const decideCardFace = (index: number): PlayingCardFace => {
        if(hiddenCards==="all") return "Back"
        if (Array.isArray(hiddenCards) && hiddenCards.includes(index+1)) return "Back"
        if (hiddenCards === "none") return "Front"
        return "Front"
    }

    
    return (
        <div className={styles.handContainer}>
            {hand.map((card, index) =>
                <PlayingCard
                    key={`${card.symbol}${card.value}-${index}`}
                    card={{symbol: card.symbol, value: card.value}}
                    clickable={false}
                    face={decideCardFace(index)}
                    index={[ index % 5, Math.floor(index / 5)]}
                    deckPosition={deckPosition}
                    onAnimationEnd={onAnimationEnd}
                />
            )}
        </div>
    )
}

export default CardHand