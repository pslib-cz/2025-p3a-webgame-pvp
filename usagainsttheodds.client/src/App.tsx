import type { Screen } from './Types/GameType';
import { useState } from 'react';
import Gameboard from './Components/Gameboard'
import PlayingCard from './Components/Cards/PlayingCard';
import HUD from './Components/HUD/HUD';
import RussianRulette from './Pages/Minigames/RussianRulette';
import Blackjack from './Pages/Minigames/Blackjack';
import random from './Services/randomService'


function App() {

  const [currentScreen, setCurrentScreen] = useState<Screen>(null);
  const [tickets, setTickets] = useState<number>(random.generate(10,9999));
  // For testing RelationshipMeter
  const [relationshipValue, setRelationshipValue] = useState(random.generateNumber(1, 100));


  const EnterGame = (entryCost: number, Component: React.ReactNode): React.ReactNode => {
    if (tickets >= entryCost) {
      setTickets(prev => prev - entryCost);
      return Component;
    }
    alert("Not enough tickets to enter the game.");
    return null;
  }
    



    switch (currentScreen) {

      case "roulette":
        // Render roulette component
        return <div></div>

      case "russian-rulette":

        EnterGame(50, <RussianRulette setCurrentScreen={setCurrentScreen}/>)



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
          <PlayingCard card={{symbol:"Clubs", value:"J"}} clickable={false} />
          <PlayingCard card={{symbol:"Diamonds", value:"8"}} face="Back"/>
          <PlayingCard card={{symbol:"Spades", value:"K"}} />
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
            
          </div>
        );



  }
}

export default App
