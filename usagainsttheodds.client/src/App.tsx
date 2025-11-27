import type { Screen } from './Types/GameType';
import { useState } from 'react';
import Gameboard from './Components/Gameboard'
import PlayingCard from './Components/PlayingCard';
import HUD from './Components/HUD/HUD';



function App() {

  const [currentScreen, setCurrentScreen] = useState<Screen>(null);
  const [tickets, setTickets] = useState<number>(50);



  const renderScreen = (scr: Screen) => {

    switch (scr) {

      case "roulette":
        // Render roulette component
        return <div>Roulette Component</div>;

      case "blackjack":
        // Render blackjack component
        return <div>Blackjack Component</div>;

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
        return <div>Select a game to play</div>;
    }
  };

  // For testing RelationshipMeter
  const [relationshipValue, setRelationshipValue] = useState(50);

  return (
    <div>

      {renderScreen(currentScreen)}
      <Gameboard buttons={["blackjack", "dice-roll"]} setCurrent={setCurrentScreen} />

      <div>
        <h2>karty:</h2>
        <div style={{ display: 'flex', gap: '1em' }}>
          <PlayingCard card={{symbol:"Clubs", value:"J"}} clickable={false} />
          <PlayingCard card={{symbol:"Diamonds", value:"8"}} face="Back"/>
          <PlayingCard card={{symbol:"Spades", value:"K"}} />
        </div>
      </div>

      <HUD tickets={tickets} relationship={relationshipValue} />

      <div>
        <div>
          relationshipValue:
          <input type="range" max={100} onChange={e => setRelationshipValue(Number(e.target.value))} />
        </div>
        <div>
          tickets:
          <input type="number" value={tickets} onChange={e => setTickets(Number(e.target.value))} />
        </div>
      </div>
      
    </div>
  );

}

export default App
