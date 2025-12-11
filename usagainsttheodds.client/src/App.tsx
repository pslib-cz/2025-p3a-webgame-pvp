import type { Screen } from './Types/GameType';
import { useState, useEffect, Suspense } from 'react';
import Gameboard from './Components/Gameboard'
import PlayingCard from './Components/Cards/PlayingCard';
import HUD from './Components/HUD/HUD';
import MinigameContainer from './Components/MinigameContainer';
import {type UserData } from './Types/UserDataType';
import Apitest from './Components/Apitest';


function App() {

  // const [userName, setUserName] = useState<string>("John");

  
  // const intitialData: UserData = {
  //   ticketsAmount: 50,
  //   relationshipStamina: 85,
  //   playerName: userName,
  //   currentPage: null,
  //   boughtBloon: false,
  //   boughtFlower: true,
  //   lastDrink: null,
  //   lastFood: null
  // }

  // const [userData, setUserData] = useState<UserData>(() => {

  //   try {
  //     const stored = localStorage.getItem("UserData");

  //     if (stored) {
  //       return JSON.parse(stored);  // Return saved data
  //     }
  //   } catch {
  //     return intitialData
  //   }

  // });//taha veci z local storage jinak hodi initial value



  const [tickets, setTickets] = useState<number>(50);
  const [relationshipValue, setRelationshipValue] = useState(85);
  const [currentScreen, setCurrentScreen] = useState<Screen | null>(null);
  

  useEffect(() => {

  }, [tickets, relationshipValue, currentScreen]);




  switch (currentScreen) {

    case "roulette":
      // Render roulette component
      return <div></div>

    case "russian-rulette":
      return <MinigameContainer id={"russianrulette"} exitScreenCallback={() => setCurrentScreen(null)} />;


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
          <Gameboard buttons={["blackjack", "test", "russian-rulette"]} setCurrent={setCurrentScreen} />


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
