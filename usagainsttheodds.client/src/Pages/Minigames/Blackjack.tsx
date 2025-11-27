import { useState } from "react";
import PlayingCard from "../../Components/PlayingCard";
import ds from "../../Services/deckService";
import type { Deck, Hand } from "../../Types/PlayingCardType";
import styles from "../../assets/styles/components/Minigames/Blackjack.module.css";


const Blackjack = () => {

    const [playerHand, setPlayerHand] = useState<Hand>([])
    const [dealerHand, setDealerHand] = useState<Hand>([])
    const [deck, setDeck] = useState<Deck>(ds.createShuffledDeck());
    const [turn, setTurn] = useState<"player" | "dealer">("dealer");

    const drawCard = (person: "player" | "dealer") => {
        const {card, newDeck} = ds.drawCard(deck)
        if (card) {
            person === "player" ? setPlayerHand(prev => [...prev, card]) : setDealerHand(prev => [...prev, card]);
        } else console.log("No more cards in the deck!");
        setDeck(newDeck);
    }

    const handleClick = () => {
        drawCard(turn);
        setTurn(prev => prev === "dealer" ? "player" : "dealer");
    }

    const reset = () => {
        setDealerHand([])
        setPlayerHand([])
        setTurn("dealer")
        setDeck(ds.createShuffledDeck)
    }

    return (
        <>
            <div>Blackjack Component</div>

            <button onClick={() => drawCard("player")}>Draw player</button>
            <button onClick={() => drawCard("dealer")}>Draw dealer</button>
            <button onClick={reset}>Reset game</button>

            <div>
                <h2>Deck:</h2>
                {deck.length>0 && <img onClick={handleClick} style={{height: "136px"}} src="src\assets\images\Cards\deckOfCards.png" alt="" />}
                <p>{deck.length} cards left</p>
                <h2>Player Hand:</h2>
                <div className={`${styles.cardContainer}`}>
                    {playerHand.map(({symbol, value}, index) => 
                        <PlayingCard card={{symbol, value}} clickable={false} key={`${symbol}${value}-${index}`} />
                    )}
                </div>
                <h2>Dealer Hand:</h2>
                <div className={`${styles.cardContainer}`}>
                    {dealerHand.map(({symbol, value}, index) => 
                        <PlayingCard card={{symbol, value}} clickable={false} key={`${symbol}${value}-${index}`} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Blackjack;