import PlayingCard from '../Components/Cards/PlayingCard';
import Apitest from '../Components/Apitest';
import { useNavigate } from 'react-router-dom';
import { useOwnOutlet } from '../hooks/useOwnOutlet'
import PauseMenu from '../Components/PauseMenu';
import { useGameSounds } from '../hooks/useGameSounds';

const HomePage = () => {

    const { tickets, setTickets, relationshipValue, setRelationshipValue, player, setPlayer, isOpen, setIsOpen, play, stop, isMusicMuted, setIsMusicMuted, isSfxMuted, setIsSfxMuted } = useOwnOutlet();

    const navigate = useNavigate();

    

    return (
      



        <div className="main">

        <button className="button" onClick={() => setIsOpen(true)}>
          Otevřít modal
          </button>

        {isOpen && (
          <PauseMenu onClose={() => setIsOpen(false)}/>
        )}

        <div>
          <button className="button" onClick={() => navigate("/blackjack")}>
              Blackjack
          </button>
          <button className="button" onClick={() => navigate("/testminigame")}>
              Test Minigame
          </button>
          <button className="button" onClick={() => navigate("/foodbar")}>
              Food bar
          </button>
        </div>

          
      {/*
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
          */}

          <div style={{marginTop: "1em"}}>
            <div>
              <button onClick={() => play("bgMusic")}>Play Music</button>
              <button onClick={() => stop("bgMusic")}>Stop Music</button>
              <button onClick={() => play("chop")}>Play SFX</button>
            </div>
            <div>
              <button onClick={() => setIsMusicMuted(prev => !prev)}>{isMusicMuted ? "Unmute Music" : "Mute Music"}</button>
              <button onClick={() => setIsSfxMuted(prev => !prev)}>{isSfxMuted ? "Unmute SFX" : "Mute SFX"}</button>
            </div>
          </div>


          <Apitest />

          {/* zatim jen na vymazani cookies */}
          <button onClick={() => {localStorage.clear(); window.location.reload();}}>Delete cookies</button>

        </div>
    );
};
export default HomePage;