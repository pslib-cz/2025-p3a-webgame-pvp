type Screen = IntroScreens | "gameboard" | "test" | "russian-roulette" | "roulette" | "blackjack" | "slots" | "wheel-of-fate" | "case-opening" | "dice-roll" | null;
type IntroScreens = "first" | "second"

export type { Screen };

export type GameResult = "win" | "lose" | "draw" | null;
export type GameState = "intro" | "playing" | "ended";

export type GameData = {
    minigameId: string;
    name: string;
    description: string;
    price: number;
    difficulty: number;
}

export type Consumable = {
    consumableId: string;
    type: "food" | "drink";
    name: string;
    description: string;
    price: number;
    hungerRestoreValue: number;
    thirstRestoreValue: number;
    isAlcoholic: boolean;
    alcoholContent: number;
}
export type Items = {
    ItemId: string;
    name: string;
    description: string;
    price: number;
    RelationRestoreValue: number;
}


export type Person = {
    name: string,
    hunger: number,
    thirst: number,
    drunkenness: number
}

export type IntroScreen = {
    introScreenId: number,
    text: string,
    speaker: Speaker
    imageUrl: string,
    buttonText: string
}

export type EndingType = {
    endingId: number,
    reason: EndReason,
    person: "boy" | "girl" | null,
    title: string,
    message: string,
    imageUrl: string
}

export type Speaker = "Narrator" | "Boy" | "Girl"

export type EndReason = "notEnded" | "victory" | "drunk" | "hungry" | "thirsty" | "bankrupt" | "breakup";