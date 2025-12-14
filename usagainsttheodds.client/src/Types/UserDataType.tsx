import type { Screen, Food, Drink, Person } from "./GameType"

export type UserData = {
    ticketsAmount: number,
    relationshipStamina: number,
    currentPage?: Screen,
    boughtFlower: boolean,
    boughtBloon: boolean,
    lastFood: Food,
    lastDrink: Drink
    player: Person,
    girlFriend: Person,
}

