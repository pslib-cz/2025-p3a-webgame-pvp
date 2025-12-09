import { type Screen, type Food, type Drink } from "./GameType"

export type UserData = {
    ticketsAmount: number,
    relationshipStamina: number,
    playerName: string,
    currentPage: Screen,
    boughtFlower: boolean,
    boughtBloon: boolean,
    lastFood: Food,
    lastDrink: Drink
}