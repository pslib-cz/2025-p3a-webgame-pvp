import PlayingCard from '../Components/Cards/PlayingCard';
import Apitest from '../Components/Apitest';
import styles from "../assets/styles/Homepage.module.css"
import { useNavigate } from 'react-router-dom';
import { useOwnOutlet } from '../Hooks/useOwnOutlet'
import PauseMenu from '../Components/PauseMenu';
import { useState } from 'react';

const HomePage = () => {

    const { tickets, setTickets, relationshipValue, setRelationshipValue, player, setPlayer, isOpen, setIsOpen, play, stop, isMusicMuted, setIsMusicMuted, isSfxMuted, setIsSfxMuted } = useOwnOutlet();

    const navigate = useNavigate();

    type Area = "right" | "left";
    const [area, setArea] = useState<Area>("right");


    return (

      <div className={styles.game}>

        { area === "right" && (
        <div className={styles.main_right}>
          <div
            className={styles.goLEFT_btn}
            onClick={() => setArea("left")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 57 60" fill="none">
            <path d="M47.8285 32.8284C49.3906 31.2663 49.3906 28.7337 47.8285 27.1716L22.3727 1.71573C20.8106 0.153632 18.2779 0.153632 16.7158 1.71573C15.1537 3.27783 15.1537 5.81049 16.7158 7.37258L39.3432 30L16.7158 52.6274C15.1537 54.1895 15.1537 56.7222 16.7158 58.2843C18.2779 59.8464 20.8106 59.8464 22.3727 58.2843L47.8285 32.8284ZM45 30V34H45.0001V30V26H45V30Z" fill="#131522"/>
            </svg>
          </div>

          <div className={styles.games}>
            <button className="btn-menu" onClick={() => setIsOpen(true)}/>
              {isOpen && ( <PauseMenu onClose={() => setIsOpen(false)}/> )}

            <button className={`${styles.building} ${styles.wheel}`} onClick={() => navigate("/cutscene/wheel")}/>

            <button className={`${styles.building} ${styles.russianroulette}`} onClick={() => navigate("/stall/russianroulette")}>
                ruska rul
            </button>
            <button className="button" onClick={() => navigate("/stall/whackamole")}>
                Whack A Mole
            </button>
            <button className="button" onClick={() => navigate("/stall/slots")}>
                Sloty
            </button>
            <button className="button" onClick={() => navigate("/stall/foodbar")}>
                Food bar
            </button>
            <button className="button" onClick={() => navigate("/stall/itemshop")}>
                Item shop
            </button>
            {/* <Russianroulette/> */}
          </div>

          <div className={styles.NPC}>
            <span className={styles.family}></span>
          </div>

        </div>
        )}

        { area === "left" && (
          <div className={styles.main_left}>
            <div
              className={styles.goRIGHT_btn}
              onClick={() => setArea("right")}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 57 60" fill="none">
            <path d="M47.8285 32.8284C49.3906 31.2663 49.3906 28.7337 47.8285 27.1716L22.3727 1.71573C20.8106 0.153632 18.2779 0.153632 16.7158 1.71573C15.1537 3.27783 15.1537 5.81049 16.7158 7.37258L39.3432 30L16.7158 52.6274C15.1537 54.1895 15.1537 56.7222 16.7158 58.2843C18.2779 59.8464 20.8106 59.8464 22.3727 58.2843L47.8285 32.8284ZM45 30V34H45.0001V30V26H45V30Z" fill="#131522"/>
            </svg>
            </div>

            <button className="btn-menu" onClick={() => setIsOpen(true)}/>
              {isOpen && ( <PauseMenu onClose={() => setIsOpen(false)}/> )}

            <div className={styles.games}>
              <button className={`${styles.building} ${styles.blackjack}`} onClick={() => navigate("/stall/blackjack")}/>
            </div>

            <div className={styles.NPC}>
              <span className={styles.girlindress}></span>
            </div> 

          </div> )}

        {/*
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
            
            /* zatim jen na vymazani cookies
          <button onClick={() => {localStorage.clear(); window.location.reload();}}>Delete cookies</button>
          </div>
          */}

      </div>
    );
};
export default HomePage;