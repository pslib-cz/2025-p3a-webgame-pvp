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


export type FoodData = {
    foodId: string;
    name: string;
    description: string;
    price: number;
    restoreValue: number;
}

export type DrinkData = {
    drinkId: string;
    name: string;
    description: string;
    price: number;
    restoreValue: number;
    isAlcoholic: boolean;
    alcoholContent: number;
}

export type Person = {
    name: string,
    hunger: number,
    thirst: number,
    drunkenness: number
}