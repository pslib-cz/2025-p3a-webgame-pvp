import type {  Person, Consumable, EndReason } from "./GameType"

export type UserData = {
    ticketsAmount: number,
    relationshipStamina: number,
    //currentPage?: Screen,
    boughtFlower: boolean,
    boughtBalloon: boolean,
    lastFood: Consumable | null,
    lastDrink: Consumable | null,
    endReason: EndReason | null,
    endPerson: "boy" | "girl" | "both" | null,
    player: Person,
    girlfriend: Person,
}

