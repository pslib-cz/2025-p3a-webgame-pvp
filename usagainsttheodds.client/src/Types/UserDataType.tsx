import type { Screen, Person, Consumable } from "./GameType"

export type UserData = {
    ticketsAmount: number,
    relationshipStamina: number,
    currentPage?: Screen,
    boughtFlower: boolean,
    boughtBloon: boolean,
    lastFood: Consumable | null,
    lastDrink: Consumable | null,
    player: Person,
    girlfriend: Person,
}

