import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { type UserData } from "./Types/UserDataType";
import { isDeepEqual } from "./Helpers/generalHelper";

const RootLayout = () => {
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
        girlFriend: {
            name: "Anastasia",
            hunger: 50,
            thirst: 50,
            drunkenness: 10,
        },
    };

    const [userData, setUserData] = useState<UserData>(() => {
        const stored = localStorage.getItem("UserData");
        return stored ? JSON.parse(stored) : intitialData;
    });

    const [tickets, setTickets] = useState(userData.ticketsAmount);
    const [relationshipValue, setRelationshipValue] = useState(
        userData.relationshipStamina
    );
    const [player, setPlayer] = useState(userData.player);
    const [girlfriend, setGirlfriend] = useState(userData.girlFriend);

    useEffect(() => {
        const updated = {
            ...userData,
            ticketsAmount: tickets,
            relationshipStamina: relationshipValue,
            player,
            girlFriend: girlfriend,
        };

        localStorage.setItem("UserData", JSON.stringify(updated));

        setUserData((prev) =>
            isDeepEqual(prev, updated) ? prev : updated
        );
    }, [tickets, relationshipValue, player, girlfriend]);

    return (
        <div className="game-root">
            <Outlet
                context={{
                    tickets,
                    setTickets,
                    relationshipValue,
                    setRelationshipValue,
                    player,
                    setPlayer,
                    girlFriend: girlfriend,
                    setGirlFriend: setGirlfriend,
                }}
            />
        </div>

        /*
  ---pro preklikavani page
    <button className="building" onClick={() => navigate("/blackjack")}>
      Blackjack
    </button>


    ---braní dat např. v mnihrách se dělá takto:
    const { tickets } = useOutletContext<{
      tickets: number;
    }>();
    */
    );
};

export default RootLayout;
