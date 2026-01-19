import { type UserData } from "./Types/UserDataType";

const intitialData: UserData = {
    ticketsAmount: 5000,
    relationshipStamina: 85,
    boughtBloon: false,
    boughtFlower: false,
    lastDrink: null,
    lastFood: null,
    player: {
        name: "John",
        hunger: 50,
        thirst: 50,
        drunkenness: 10,
    },
    girlfriend: {
        name: "Anastasia",
        hunger: 50,
        thirst: 50,
        drunkenness: 10,
    }
}
export default intitialData;