import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/Minigames/Memorymatch.module.css';
import type { CardType } from '../../Types/CardType';

type CardProps = {
    card: CardType,
    onClick: (cardId: number) => void
}

const Card: React.FC<CardProps> = ({ card, onClick }) => {


    return (
        <div
        className={styles.card + (card.facingUp ? styles.up : "") + (card.collected ? styles.collected : "")}
        onClick={() => onClick(card.id)}>

        {card.facingUp ? card.value : "?"}

        </div>
    )
};
export default Card;