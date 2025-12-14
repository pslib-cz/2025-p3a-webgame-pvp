import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { type UserData } from "./Types/UserDataType";
import { isDeepEqual } from "./Helpers/generalHelper";
import { useNavigate } from 'react-router-dom';
import type { Person } from './Types/GameType';
import { useGameSounds } from "./Hooks/useGameSounds";


const RootLayout = () => {
    const intitialData: UserData = {
        ticketsAmount: 50,
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
        },
    };

  const [userName, setUserName] = useState<string>("John");
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserData>(() => {

      const stored = localStorage.getItem("UserData");
      return stored ? JSON.parse(stored) : intitialData;  // Return saved data
  });//taha data z local storage jinak hodi initial value


  const [tickets, setTickets] = useState<number>(userData.ticketsAmount);
  const [relationshipValue, setRelationshipValue] = useState<number>(userData.relationshipStamina);
  const [player, setPlayer] = useState<Person>(userData.player);
  const [girlfriend, setGirlfriend] = useState<Person>(userData.girlfriend);
  //takhle se to pak pouziva
  //setGirlfriend(prev => ({ ...prev, name: "Pavla" }));



   const [isOpen, setIsOpen] = useState(false);

   
    const { play, stop, isMusicMuted, setIsMusicMuted, isSfxMuted, setIsSfxMuted } = useGameSounds();


    useEffect(() => {
        const updated = {
            ...userData,
            ticketsAmount: tickets,
            relationshipStamina: relationshipValue,
            player,
            girlfriend: girlfriend,
        };

        localStorage.setItem("UserData", JSON.stringify(updated));

        setUserData((prev) =>
            isDeepEqual(prev, updated) ? prev : updated
        );
    }, [tickets, relationshipValue, player, girlfriend]);//ulozi do local storage kdyz se zmeni hodnota


        // console.log
        // ("HUD DATA", {
        // tickets,
        // relationshipValue,
        // player,
        // girlfriend
        // });

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
                    girlfriend,
                    setGirlfriend,
                    isOpen,
                    setIsOpen,
                    play,
                    stop,
                    isMusicMuted,
                    setIsMusicMuted,
                    isSfxMuted,
                    setIsSfxMuted,
                }}
            />
        </div>

        /*
  ---pro preklikavani page
    <button className="building" onClick={() => navigate("/blackjack")}>
      Blackjack
    </button>


    ---braní dat např. v mnihrách se dělá takto:
    const { tickets } = useOwnOutlet();
    ---pokud chci měnit data takto:
    const { setTickets } = useOwnOutlet();
    setTickets(prev => prev - 100);
    */
    );
};

export default RootLayout;
