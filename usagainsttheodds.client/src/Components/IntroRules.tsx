import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import styles from "../assets/styles/Intro.module.css"
import { useOwnOutlet } from '../Hooks/useOwnOutlet';
import { useSound } from '../Providers/Soundprovider';

const IntroRules = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("John");

  const { play } = useSound();  
  
  const { setPlayer, setIsStarted } = useOwnOutlet();

  const handleSaveAndStart = () => {
    setPlayer(prev => ({
      ...prev,
      name: userName
    }));
    setIsStarted(true);    
    navigate("/cutscene/intro");
  };

  return (
    <div className={styles.introRules}>
      <div className={styles.introText}>
        <h1>Let's play against the odds.</h1>
        <p>You're playing as a boyfriend of your beautiful girlfriend Anastasia.
          You decided to go on a fair in the center of town.
          Try to enjoy the time you're spending together and retain your relationship.</p>
        
        <div className={styles.nameInput}>
          <label htmlFor="nameInput">Choose your name: </label>
          <input
            id="nameInput"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your name..."
            maxLength={15}
          />
        </div>
      </div>

      <div className={styles.rulesText}>
        <h2>How to play?</h2>
        <p>Play games, win tickets and buy your girl her dream plushie!</p>
        <p>Don't forget to keep your relationship healthy!</p>
        <div className={styles.rules}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#63231b" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4z"/></svg>
            <p>Stamina bar: happiness of your girl, buy her gifts to keep her mood up</p>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#63231b" d="M29.715 25.15h1.52v3.04h-1.52Zm-1.53 3.04h1.53v1.53h-1.53Zm-1.52-4.57h3.05v1.53h-3.05Zm-1.52 6.1h3.04v1.52h-3.04Zm0-7.62h1.52v1.52h-1.52Zm-1.53 4.57h1.53v3.05h-1.53Zm0-6.1h-1.52v1.53h3.05v-9.15h-1.53zm-1.52 4.58h1.52v1.52h-1.52Zm0-16.77h1.52v4.57h-1.52Zm-1.52 13.72v1.52h-7.62v1.53h9.14V22.1zm0-15.24h1.52v1.52h-1.52Zm-1.53-1.52h1.53v1.52h-1.53Zm-1.52-1.53h1.52v1.53h-1.52Zm-1.53-1.52h1.53v1.52h-1.53Zm-1.52 15.24h1.52v1.52h-1.52Z"/><path fill="#63231b" d="M8.375 22.1h4.58v1.52h-4.58Zm1.53-4.57h3.05v1.52h-3.05ZM8.375 16h1.53v1.53h-1.53Zm-1.52 4.57h1.52v1.53h-1.52Zm0-6.09h1.52V16h-1.52ZM5.335.76h10.66v1.53H5.335Zm0 18.29h1.52v1.52h-1.52Zm0-6.1h1.52v1.53h-1.52Zm-1.53 4.58h1.53v1.52h-1.53Zm0-7.62h1.53v3.04h-1.53Zm0-7.62h1.53v1.52h-1.53ZM2.285 16h1.52v1.53h-1.52Zm0-12.19h1.52v1.53h-1.52ZM.765 5.34h1.52V16H.765Z"/></svg>
            <p>Hunger bar: your and your girlfriend's needs, don't forget to buy food</p>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#63231b" d="M13 2h-2v2H9v4H7v4H5v6h2v2h2v2h6v-2h2v-2h2v-6h-2V8h-2V4h-2zm0 2v4h2v4h2v3H7v-3h2V8h2V4z"/></svg>
            <p>Thirst bar: your and your girlfriend's needs, don't forget to buy drinks</p>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#63231b" d="M19 3H3v4h2v2h2v2h2v2h2v6H7v2h10v-2h-4v-6h2v-2h2V9h2V7h2V3zm0 4H5V5h14z"/></svg>
            <p>Drunkenness: level of intoxication, affects your ability to play games</p>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#63231b" d="M6 2h12v2H6zM4 6V4h2v2zm0 12V6H2v12zm2 2v-2H4v2zm12 0v2H6v-2zm2-2v2h-2v-2zm0-12h2v12h-2zm0 0V4h-2v2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3z"/></svg>
            <p>Tickets: earned in games, need for food, drinks and fun</p>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#63231b" d="M10 2h4v4h-4zM7 7h10v2h-2v13h-2v-6h-2v6H9V9H7zM5 5v2h2V5zm0 0H3V3h2zm14 0v2h-2V5zm0 0V3h2v2z"/></svg>
          <p>Movement: move freely on two gameboards</p>
          </span>
        </div>
        
      </div>

      <button onClick={() => { play('crowd'); play('bgIntro'); handleSaveAndStart(); }}>
        Start new game
      </button>
    </div>
  );
};

export default IntroRules;
