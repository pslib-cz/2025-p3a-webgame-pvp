import type { Screen } from './Types/GameType';
import { useState, useEffect } from 'react';
import Gameboard from './Components/Gameboard'
import PlayingCard from './Components/Cards/PlayingCard';
import HUD from './Components/HUD/HUD';
import MinigameContainer from './Components/MinigameContainer';
import {type UserData } from './Types/UserDataType';
import Apitest from './Components/Apitest';


function App() {

  const [userName, setUserName] = useState<string>("John");

  
  const intitialData: UserData = {
    ticketsAmount: 50,
    relationshipStamina: 85,
    playerName: userName,
    currentPage: null,
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
  const [currentScreen, setCurrentScreen] = useState<Screen | null>(userData.currentPage);
  

  useEffect(() => {
      const updated = {
        ...userData,
        ticketsAmount: tickets,
        relationshipStamina: relationshipValue,
        currentPage: currentScreen
      };
      localStorage.setItem("UserData", JSON.stringify(updated));


    setUserData(prev => {
      if (
        prev.ticketsAmount === updated.ticketsAmount &&
        prev.relationshipStamina === updated.relationshipStamina &&
        prev.currentPage === updated.currentPage
      ) {
        return prev; // nic se nezměnilo
      }
      return updated;
    });
  }, [tickets, relationshipValue, currentScreen, userData]);//ulozi do local storage kdyz se zmeni hodnota




  switch (currentScreen) {

    case "roulette":
      // Render roulette component
      return <div></div>

    case "russian-rulette":
      return <MinigameContainer id={currentScreen} exitScreenCallback={() => setCurrentScreen(null)} />;

    case "blackjack":
      // Render blackjack component
      return <MinigameContainer id={"blackjack"} exitScreenCallback={() => setCurrentScreen(null)} />;

    case "slots":
      // Render slots component
      return <div>Slots Component</div>;

    case "wheel-of-fate":
      // Render wheel of fate component
      return <div>Wheel of Fate Component</div>;

    case "case-opening":
      // Render case opening component
      return <div>Case Opening Component</div>;

    case "dice-roll":
      // Render dice roll component
      return <div>Dice Roll Component</div>;

    case "test":
      return <MinigameContainer id={"test"} exitScreenCallback={() => setCurrentScreen(null)} />;


    default:
      // Render default or home component
      return (
        <div>
          <Gameboard buttons={["blackjack", "dice-roll", "russian-rulette", "test"]} setCurrent={setCurrentScreen} />


          <div>
            <h2>karty:</h2>
            <div style={{ display: 'flex', gap: '1em' }}>
              <PlayingCard card={{ symbol: "Clubs", value: "J" }} clickable={false} />
              <PlayingCard card={{ symbol: "Diamonds", value: "8" }} face="Back" />
              <PlayingCard card={{ symbol: "Spades", value: "K" }} />
            </div>
          </div>

          <HUD tickets={tickets} relationship={relationshipValue} />

          <div>
            <div>
              relationshipValue:
              <input type="range" defaultValue={relationshipValue} max={100} onChange={e => setRelationshipValue(Number(e.target.value))} />
            </div>
            <div>
              tickets:
              <input type="number" defaultValue={tickets} onChange={e => setTickets(Number(e.target.value))} />
            </div>
          </div>

          <Apitest />
        </div>
      );



  }
}

export default App
