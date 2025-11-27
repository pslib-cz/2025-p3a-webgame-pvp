import type { Deck, PlayingCardSymbol, PlayingCardValue } from "../Types/PlayingCardType";

export const createDeck = ():Deck => {

    const symbols: PlayingCardSymbol[] = ["Clubs", "Diamonds", "Hearts", "Spades"]
    const values: PlayingCardValue[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    

    const deck: Deck = []

    for (const symbol of symbols) {
        for (const value of values) {
            deck.push({symbol, value})
        }
    }
    return deck;
}

export const shuffleDeck = (deck: Deck): Deck => {
    const shuffledDeck = [...deck];

    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }

    return shuffledDeck;
}

export const createShuffledDeck = ():Deck => {

    return shuffleDeck(createDeck());
}

export const drawCard = (deck: Deck): {card: Deck[0] | null, newDeck: Deck} => {
    if (deck.length === 0) {
        return {card: null, newDeck: deck};
    }
    const [card, ...newDeck] = deck;
    return {card, newDeck};
}


export const deckService = {
    createDeck,
    shuffleDeck,
    createShuffledDeck,
    drawCard
};
export default deckService;