import type React from "react"
import type { Hand, PlayingCardFace } from "../../Types/PlayingCardType"
import PlayingCard from "./PlayingCard"
import styles from "../../assets/styles/components/Cards/CardHand.module.css"

type CardHandProps = {
    hand: Hand
    hiddenCards?: number[] | "all" | "none"
}

const CardHand: React.FC<CardHandProps> = ({hand, hiddenCards}) => {

    const decideCardFace = (index: number): PlayingCardFace => {
        if(hiddenCards==="all") return "Back"
        if (Array.isArray(hiddenCards) && hiddenCards.includes(index+1)) return "Back"
        if (hiddenCards === "none") return "Front"
        return "Front"
    }

    
    return (
        <div className={styles.handContainer}>
            {hand.map((card, index) =>
                <div>
                    <PlayingCard key={`${index}`} card={{symbol: card.symbol, value: card.value}} face={decideCardFace(index)} />
                    <p>{index}</p>
                </div>
            )}
        </div>
    )
}

export default CardHand