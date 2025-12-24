import { useEffect, useState } from "react"
import type { Card, PlayingCardFace } from "../../Types/PlayingCardType"
import styles from "../../assets/styles/components/cards.module.css"


type PlayingCardProps = {
    card: Card
    face?: PlayingCardFace
    clickable?: boolean
    deckPosition?: [number, number] 
    onAnimationEnd?: () => void
    index?: [number, number]
}

const PlayingCard: React.FC<PlayingCardProps> = ({ card, face="Front", clickable = true, deckPosition, onAnimationEnd, index }) => {

    const [currentFace, setCurrentFace] = useState<PlayingCardFace>(face);
    const [hasDealt, setHasDealt] = useState(false);

    useEffect(() => {
        setCurrentFace(face)
    }, [face]);

    const getCardImageUrl = (card: Card)=> {
        return new URL(`../../assets/images/Cards/card${card.symbol}${card.value}.png`, import.meta.url).href;
    }

    const isFlippingDuringDeal = !hasDealt && deckPosition && currentFace === "Front";


    const handleAnimationEnd = (event: React.AnimationEvent) => {
        // Skončila animace posunu z balíčku
        if (event.animationName.includes("dealFromDeck")) {
            setHasDealt(true); 
            if (onAnimationEnd) onAnimationEnd();
        }
    }

    const handleTransitionEnd = (event: React.TransitionEvent) => {
        // Skončila CSS transition (otočení karty)
        if (event.propertyName === "transform" && onAnimationEnd) {
            onAnimationEnd();
        }
    }

    const getAnimationStyle = () => {
        if (!deckPosition || !index) return {}; 

        const col = index[0];
        const row = index[1];
        
        // Krok mezi kartami
        const stepX = `(var(--card-width) - var(--left-offset))`;
        const stepY = `(var(--card-height) - (var(--top-offset)) * 1.5)`;
        

        return {
            ["--deck-pos-x" as string]: `calc(
                ${deckPosition[0]}vw 
                - ((${col} - 2) * ${stepX})
            )`,
            ["--deck-pos-y" as string]: `calc(
                ${deckPosition[1]}vh 
                - (${row} * ${stepY})
            )`,
        };
    };


    return (
        <span
            className={`${styles.cardContainer} ${(!hasDealt && deckPosition) ? styles.fromDeckAnimation : ""}`}
            style={getAnimationStyle()}
            onAnimationEnd={handleAnimationEnd}
        >
            <span
                onTransitionEnd={handleTransitionEnd}
                className={`
                    ${styles.card}
                    ${isFlippingDuringDeal 
                        ? styles.flippingDuringDeal 
                        : (currentFace === "Back" ? styles.isBack : styles.isFront)
                    }
                    ${clickable && styles.clickable}
                `}
                onClick={clickable ? () => setCurrentFace(prev => prev === "Front" ? "Back" : "Front") : undefined}
            >
                <span className={`${styles.face} ${styles.Front}`} style={{ backgroundImage: `url(${getCardImageUrl(card)})` }} />
                <span className={`${styles.face} ${styles.Back}`} />
            </span>
        </span>
    )
}

export default PlayingCard