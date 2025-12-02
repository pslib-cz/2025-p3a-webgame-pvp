import type { Screen } from './Types/GameType';
import { useEffect, useState } from 'react';
import Gameboard from './Components/Gameboard'
import PlayingCard from './Components/Cards/PlayingCard';
import HUD from './Components/HUD/HUD';
import RussianRulette from './Pages/Minigames/RussianRulette';
import Blackjack from './Pages/Minigames/Blackjack';
import Apitest from './Components/Apitest';


function App() {

  const [currentScreen, setCurrentScreen] = useState<Screen>(null);
  const [tickets, setTickets] = useState<number>(1500);
  // For testing RelationshipMeter
  const [relationshipValue, setRelationshipValue] = useState(90);
  const [showGame, setShowGame] = useState(false);

  //TODO: brat enter cost z db, odecistpri tlacitku nejakym ne kdyz tam dojdes do infa
  const handleEnter = () => {
    if (tickets >= 10) {
      setTickets(t => t - 10);
      setRelationshipValue(t => t - 10);
      setShowGame(true);
    } else {
      alert("Not enough tickets");
    }
  };




  useEffect(() => {
    setShowGame(false);
  }, [currentScreen])

  switch (currentScreen) {

    case "roulette":
      // Render roulette component
      return <div></div>

    case "russian-rulette":
      return (
        <>
          {!showGame ? (
            <button onClick={handleEnter}>Enter game Russian Rulette</button>
          ) : (
            <RussianRulette Tickets={setTickets} setCurrentScreen={setCurrentScreen} />
          )}
        </>
      );


    case "blackjack":


      // Render blackjack component
      return <Blackjack />;

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


    default:
      // Render default or home component
      return (
        <div>
          <Gameboard buttons={["blackjack", "dice-roll", "russian-rulette"]} setCurrent={setCurrentScreen} />


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
