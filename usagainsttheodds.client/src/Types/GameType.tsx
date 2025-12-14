type Screen = IntroScreens | "gameboard" | "test" | "russian-roulette" | "roulette" | "blackjack" | "slots" | "wheel-of-fate" | "case-opening" | "dice-roll" | null;
type IntroScreens = "first" | "second"

export type { Screen };

export type GameResult = "win" | "lose" | "draw" | null;
export type GameState = "intro" | "playing" | "ended";

export type GameData = {
    id: string;
    name: string;
    description: string;
    price: number;
    stamina: number;
}

export type Food = "hotdog" | "burger" | "pizza" | "salad" | "langos" | "goulash" | "cottoncandy" | null;
export type Drink = "water" | "soda" | "beer" | "wine" | "palinka" | "fruitsmoothie" | "gintonic" | "pepermintliqueur" | "eggnog" | "slushy" | null;

export type Person = {
    name: string,
    hunger: number,
    thirst: number,
    drunkenness: number
}