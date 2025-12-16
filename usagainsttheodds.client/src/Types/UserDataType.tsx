import type { Screen, Person, Consumable } from "./GameType"

export type UserData = {
    ticketsAmount: number,
    relationshipStamina: number,
    currentPage?: Screen,
    boughtFlower: boolean,
    boughtBloon: boolean,
    lastFood: Consumable,
    lastDrink: Consumable,
    player: Person,
    girlfriend: Person,
}

