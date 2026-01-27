import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { type UserData } from "./Types/UserDataType";
import { isDeepEqual } from "./Helpers/generalHelper";
import { useNavigate } from 'react-router-dom';
import type { Person } from './Types/GameType';
import { useGameSounds } from "./Hooks/useGameSounds";


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
        girlfriend: {
            name: "Anastasia",
            hunger: 50,
            thirst: 50,
            drunkenness: 10,
        },
    };

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


        checkIfLost(updated);

    }, [tickets, relationshipValue, player, girlfriend]);//ulozi do local storage kdyz se zmeni hodnota



    const checkIfLost = (data: UserData) => {
        console.log("Checking losing conditions", data);
        if ( data.relationshipStamina <= 0 ){
            return navigate("/ending/breakup");
        }
        if ( data.ticketsAmount <= 0 ){
            return navigate("/ending/bankrupt");
        }
        if ( data.player.hunger <= 0 || data.girlfriend.hunger <= 0 ){
            return navigate("/ending/hungry");
        }
        if ( data.player.thirst <= 0 || data.girlfriend.thirst <= 0 ){
            return navigate("/ending/thirsty");
        }
        if ( data.player.drunkenness >= 100 || data.girlfriend.drunkenness >= 100 ){
            return navigate("/ending/drunk");
        }
        return;
    }



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
