type Screen = IntroScreens | "gameboard" | "test" | "russian-rulette" | "roulette" | "blackjack" | "slots" | "wheel-of-fate" | "case-opening" | "dice-roll" | null;
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

export type Food = "guláš";
export type Drink = "guláš";