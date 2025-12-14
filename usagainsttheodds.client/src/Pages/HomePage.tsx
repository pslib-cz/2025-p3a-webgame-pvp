import PlayingCard from '../Components/Cards/PlayingCard';
import Apitest from '../Components/Apitest';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";

const HomePage = () => {

    const { tickets, setTickets, relationshipValue, setRelationshipValue, player, setPlayer } =
    useOutletContext<{
        tickets: number;
        setTickets: React.Dispatch<React.SetStateAction<number>>;
        relationshipValue: number;
        setRelationshipValue: React.Dispatch<React.SetStateAction<number>>;
        player: {
            hunger: number;
            thirst: number;
            drunkenness: number;
        };
        setPlayer: React.Dispatch<React.SetStateAction<{
            hunger: number;
            thirst: number;
            drunkenness: number;
        }>>;
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
            <div>
              hunger:
              <input
                type="range"
                value={player.hunger}
                onChange={e => setPlayer(prev => ({...prev, hunger: Number(e.target.value)}))}
                />
            </div>
            <div>
              thirst:
              <input
                type="range"
                value={player.thirst}
                onChange={e => setPlayer(prev => ({...prev, thirst: Number(e.target.value)}))}
                />
            </div>
            <div>
              drunkenness:
              <input
                type="range"
                value={player.drunkenness}
                onChange={e => setPlayer(prev => ({...prev, drunkenness: Number(e.target.value)}))}
                />
            </div>
          </div>

          <div style={{fontSize: "2em", color: "red", marginTop: "1em"}}>
            <h2 style={{margin: ".1em"}}>TODO</h2>
            <p style={{margin: ".1em"}}>-menu</p>
            <p style={{margin: ".1em"}}>-intropage</p>
            <p style={{margin: ".1em"}}>-jídelní stanky</p>
            <p style={{margin: ".1em"}}>-zvuky</p>
            <p style={{margin: ".1em"}}>-udelat pro Outlet vlastni hook (at se to za jednoduseji pouzivat)</p>
            <p style={{margin: ".1em"}}>-predelat ten HUD nejak (nemyslim že se takhle ma delat, hlavne at mizi ve hrach)</p>
          </div>

          <Apitest />

          {/* zatim jen na vymazani cookies */}
          <button onClick={() => {localStorage.clear(); window.location.reload();}}>Delete cookies</button>

        </div>
    );
};
export default HomePage;