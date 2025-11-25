import type { Screen } from './Types/GameType';
import { useState,useEffect } from 'react';
import Gameboard from './Components/Gameboard'
import PlayingCard from './Components/PlayingCard/PlayingCard';



function App() {

  const [currentScreen, setCurrentScreen] = useState<Screen>(null);
  const [tickets, setTickets] = useState<Number>(50);



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
    



  




  return (
    <div>
      
      {renderScreen(currentScreen)}
      <Gameboard buttons={["blackjack","dice-roll"]} setCurrent={setCurrentScreen}/>

      <div>
        <h2>karty:</h2>
        <div style={{display: 'flex', gap: '1em'}}>
          <PlayingCard face="Front" symbol="Clubs" value="A"/>
          <PlayingCard face="Back" symbol="Diamonds" value="8"/>
          <PlayingCard face="Front" symbol="Joker" value={null}/>        
        </div>
      </div>
      

    </div>
  );

}

export default App
