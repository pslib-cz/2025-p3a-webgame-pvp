import PlayingCard from '../Components/Cards/PlayingCard';
import Apitest from '../Components/Apitest';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";

const HomePage = () => {

    const { tickets, setTickets, relationshipValue, setRelationshipValue } =
    useOutletContext<{
        tickets: number;
        setTickets: React.Dispatch<React.SetStateAction<number>>;
        relationshipValue: number;
        setRelationshipValue: React.Dispatch<React.SetStateAction<number>>;
    }>();

    const navigate = useNavigate();

    return (
        <div>

            <button onClick={() => navigate("/blackjack")}>
                Blackjack
            </button>
            <button onClick={() => navigate("/testminigame")}>
                Test Minigame
            </button>
          
          <div>
            <h2>karty:</h2>
            <div style={{ display: 'flex', gap: '1em' }}>
              <PlayingCard card={{ symbol: "Clubs", value: "J" }} clickable={false} />
              <PlayingCard card={{ symbol: "Diamonds", value: "8" }} face="Back" />
              <PlayingCard card={{ symbol: "Spades", value: "K" }} />
            </div>
          </div>

          <div>
            <div>
              relationshipValue:
              <input
                type="range"
                value={relationshipValue}
                max={100}
                onChange={e => setRelationshipValue(Number(e.target.value))}
                />
            </div>
            <div>
              tickets:
              <input
                type="number"
                value={tickets}
                onChange={e => setTickets(Number(e.target.value))}
                />
            </div>
          </div>

          <Apitest />

          {/* zatim jen na vymazani cookies */}
          <button onClick={() => {localStorage.clear(); window.location.reload();}}>Delete cookies</button>

        </div>
    );
};
export default HomePage;