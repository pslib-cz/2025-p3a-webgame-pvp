import { useState, useEffect } from 'react';
import HUD from './Components/HUD/HUD';
import {type UserData } from './Types/UserDataType';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const RootLayout = () => {

  const [userName, setUserName] = useState<string>("John");
  const navigate = useNavigate();


  
  const intitialData: UserData = {
    ticketsAmount: 50,
    relationshipStamina: 85,
    playerName: userName,
    //currentPage: null, BUDEME UKLÁDÁT SPÍŠ POZICI HRÁČE NA X, ALE ZATIM DELAM ZE TO NEVIDIM
    boughtBloon: false,
    boughtFlower: false,
    lastDrink: undefined,
    lastFood: undefined
  }



  const [userData, setUserData] = useState<UserData>(() => {

      const stored = localStorage.getItem("UserData");
      return stored ? JSON.parse(stored) : intitialData;  // Return saved data
  });//taha data z local storage jinak hodi initial value



  
  const [tickets, setTickets] = useState<number>(userData.ticketsAmount);
  const [relationshipValue, setRelationshipValue] = useState(userData.relationshipStamina);
  

  useEffect(() => {
      const updated = {
        ...userData,
        ticketsAmount: tickets,
        relationshipStamina: relationshipValue,
      };
      localStorage.setItem("UserData", JSON.stringify(updated));


    setUserData(prev => {
      if (
        prev.ticketsAmount === updated.ticketsAmount &&
        prev.relationshipStamina === updated.relationshipStamina
      ) {
        return prev; // nic se nezměnilo
      }
      return updated;
    });
  }, [tickets, relationshipValue, userData]);//ulozi do local storage kdyz se zmeni hodnota


  return (
    <div className="game-root">

      {/*to co cheme ukládat pořád*/}
      <HUD tickets={tickets} relationship={relationshipValue} />

      {/* tady se jakoby vykresluje ta page co chci? */}
      <Outlet
        context={{
          tickets,
          setTickets,
          relationshipValue,
          setRelationshipValue,
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
  
}

export default RootLayout;