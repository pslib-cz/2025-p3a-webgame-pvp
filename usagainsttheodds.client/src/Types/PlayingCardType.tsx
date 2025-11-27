export type PlayingCardSymbol = "Hearts" | "Diamonds" | "Clubs" | "Spades" | "Joker";
export type PlayingCardValue = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
export type Card = {
    symbol: PlayingCardSymbol;
    value: PlayingCardValue | null;
}

export type PlayingCardFace = "Front" | "Back";
