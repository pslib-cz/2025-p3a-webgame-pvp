import type { Screen, FoodType, DrinkType, Person } from "./GameType"

export type UserData = {
    ticketsAmount: number,
    relationshipStamina: number,
    currentPage?: Screen,
    boughtFlower: boolean,
    boughtBloon: boolean,
    lastFood: FoodType,
    lastDrink: DrinkType,
    player: Person,
    girlfriend: Person,
}

