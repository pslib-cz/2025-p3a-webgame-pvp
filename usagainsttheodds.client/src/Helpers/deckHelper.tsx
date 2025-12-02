import type { Card, Deck, PlayingCardSymbol, PlayingCardValue } from "../Types/PlayingCardType";

export const createDeck = (deckCount: number = 1):Deck => {

    const symbols: PlayingCardSymbol[] = ["Clubs", "Diamonds", "Hearts", "Spades"]
    const values: PlayingCardValue[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    const count: number = Math.floor(Math.abs(deckCount))

    const deck: Deck = []

    for (let i = 0; i < count; i++) {
        for (const symbol of symbols) {
            for (const value of values) {
                deck.push({symbol, value})
            }
        }
    }
    
    return deck;
}

const shuffleDeck = (deck: Deck): Deck => {
    const shuffledDeck = [...deck];

    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }

    return shuffledDeck;
}

export const createShuffledDeck = (deckCount?: number):Deck => {

    return shuffleDeck(createDeck(deckCount));
}

export const drawCard = (deck: Deck): {card: Card | null, newDeck: Deck} => {

    if (deck.length === 0) {
        return {card: null, newDeck: deck};
    }

    const [newCard, ...newDeck] = deck

    return {card: newCard, newDeck}
}



export const deckService = {
    createDeck,
    createShuffledDeck,
    drawCard,
};
export default deckService;