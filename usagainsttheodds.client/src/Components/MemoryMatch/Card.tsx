import React from 'react';
import styles from '../../assets/styles/Minigames/Memorymatch.module.css';
import type { CardType } from '../../Types/CardType';

type CardProps = {
    card: CardType,
    onClick: (cardId: number) => void
}

const Card: React.FC<CardProps> = ({ card, onClick }) => {


    return (
        <div className={`${styles.card} ${card.facingUp ? styles.up : styles.down} ${card.collected ? styles.collected : ""} `}
        onClick={() => onClick(card.id)}
        data-value={card.value}>

        {card.facingUp ? card.value : "?"}

        </div>
    )
};
export default Card;