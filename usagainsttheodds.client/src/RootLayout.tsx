import { useState, useEffect } from 'react';
import HUD from './Components/HUD/HUD';
import {type UserData } from './Types/UserDataType';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { isDeepEqual } from './Helpers/generalHelper';


const RootLayout = () => {

  const [userName, setUserName] = useState<string>("John");
  const navigate = useNavigate();

  
  const intitialData: UserData = {
    ticketsAmount: 5000,
    relationshipStamina: 85,
    //currentPage: null, BUDEME UKLÁDÁT SPÍŠ POZICI HRÁČE NA X, ALE ZATIM DELAM ZE TO NEVIDIM
    boughtBloon: false,
    boughtFlower: false,
    lastDrink: null,
    lastFood: null,
    player: {
      name: userName,
      hunger: 50,
      thirst: 50,
      drunkenness: 10
    },
    girlFriend: {
      name: "Anastasia",
      hunger: 50,
      thirst: 50,
      drunkenness: 10
    }
  }


  const [userData, setUserData] = useState<UserData>(() => {

      const stored = localStorage.getItem("UserData");
      return stored ? JSON.parse(stored) : intitialData;  // Return saved data
  });//taha data z local storage jinak hodi initial value


  const [tickets, setTickets] = useState<number>(userData.ticketsAmount);
  const [relationshipValue, setRelationshipValue] = useState(userData.relationshipStamina);
  const [player, setPlayer] = useState(userData.player);
  const [girlfriend, setGirlfriend] = useState(userData.girlFriend);
  //takhle se to pak pouziva
  //setGirlFriend(prev => ({ ...prev, name: "Pavla" }));


  useEffect(() => {
    const updated = {
      ...userData,
      ticketsAmount: tickets,
      relationshipStamina: relationshipValue,
      player: player,
      girlFriend: girlfriend
    };
    localStorage.setItem("UserData", JSON.stringify(updated));

    setUserData(prev => {
      if (
        isDeepEqual(prev, updated)//porovná všechny hodnoty
      ) {
        return prev; // nic se nezměnilo
      }
      return updated;
    });
  }, [tickets, relationshipValue, userData, player, girlfriend]);//ulozi do local storage kdyz se zmeni hodnota


  return (
    <div className="game-root">

      {/*to co cheme ukládat pořád*/}
      <HUD tickets={tickets} relationshipValue={relationshipValue} player={player} girlFriend={girlfriend} />

      {/* tady se jakoby vykresluje ta page co chci? */}
      <Outlet
        context={{
          tickets,
          setTickets,
          relationshipValue,
          setRelationshipValue,
          player,
          setPlayer,
          girlfriend,
          setGirlfriend
        }}
      />

    </div>

/*
  ---pro preklikavani page
    <button className="building" onClick={() => navigate("/blackjack")}>
      Blackjack
    </button>


    ---braní dat např. v mnihrách se dělá takto:
    const { tickets } = useOutletContext<{                 //Z TOHODLE MUZEME UDELAT VLASTNI HOOK AT TO MUZEME LEPE POUZIVAT
      tickets: number;
    }>();
    */
     

  );
  
}

export default RootLayout;