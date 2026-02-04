import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import '../assets/index.css'
import styles from "../assets/styles/Intro.module.css"
import { useOwnOutlet } from '../Hooks/useOwnOutlet';
import { useSound } from '../Providers/SoundProvider';

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
        
        <div className={styles.nameInputContainer}>
          <label htmlFor="nameInput">Choose your name: </label>
          <div className={styles.nameInputBox}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#341B17" d="M18 2h-2v2h-2v2h-2v2h-2v2H8v2H6v2H4v2H2v6h6v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V8h2V6h-2V4h-2zm0 8h-2v2h-2v2h-2v2h-2v2H8v-2H6v-2h2v-2h2v-2h2V8h2V6h2v2h2zM6 16H4v4h4v-2H6z"/></svg>
            <input
            className={styles.nameInput}
            id="nameInput"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your name..."
            maxLength={15}
          />
          
          <span>{15 - userName.length}</span>
          </div>
        </div>
      </div>

      <div className={styles.rulesText}>
        <h2>How to play?</h2>
        <p><span className={styles.rulesBold}>Play games</span>, <span className={styles.rulesBold}>win tickets</span> and buy your girl her dream plushie!</p>
        <p>Don't forget to keep your relationship healthy!</p>
        <div className={styles.rules}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#63231b" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4z"/></svg>
            <p><span className={styles.rulesBold}>Stamina bar:</span> happiness of your girl, buy her gifts to keep her mood up</p>
          </span>
          <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAkElEQVR4AcyQ0QmAMAwF1TX8dDTncjQ/nUO/DspB0QpNKpRHEkPvukydv7wL9m29y/NXNN4A6uO85vLQbzWJM4AQakjdp2b+lnEGJoHURtTMvec6zsBk1CZqreMMIIP86xuzV8t4A0hsghHpOXvOPANIIHXWTOizn28AiRMjiKn937gGJq2ZjG/A25M2627wAAAA//8IC0yvAAAABklEQVQDADf0oDGWisypAAAAAElFTkSuQmCC" x="0" y="0" width="24" height="24"/>
              </svg>
            <p><span className={styles.rulesBold}>Hunger bar:</span> your and your girlfriend's needs, don't forget to buy food</p>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#63231b" d="M13 2h-2v2H9v4H7v4H5v6h2v2h2v2h6v-2h2v-2h2v-6h-2V8h-2V4h-2zm0 2v4h2v4h2v3H7v-3h2V8h2V4z"/></svg>
            <p><span className={styles.rulesBold}>Thirst bar:</span> your and your girlfriend's needs, don't forget to buy drinks</p>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#63231b" d="M19 3H3v4h2v2h2v2h2v2h2v6H7v2h10v-2h-4v-6h2v-2h2V9h2V7h2V3zm0 4H5V5h14z"/></svg>
            <p><span className={styles.rulesBold}>Drunkenness:</span> level of intoxication, affects your ability to play games</p>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#63231b" d="M6 2h12v2H6zM4 6V4h2v2zm0 12V6H2v12zm2 2v-2H4v2zm12 0v2H6v-2zm2-2v2h-2v-2zm0-12h2v12h-2zm0 0V4h-2v2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3z"/></svg>
            <p><span className={styles.rulesBold}>Tickets:</span> earned in games, need for food, drinks and fun</p>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#63231b" d="M10 2h4v4h-4zM7 7h10v2h-2v13h-2v-6h-2v6H9V9H7zM5 5v2h2V5zm0 0H3V3h2zm14 0v2h-2V5zm0 0V3h2v2z"/></svg>
          <p><span className={styles.rulesBold}>Movement:</span> move freely on two gameboards</p>
          </span>
        </div>
        <button className="buttonIntro buttonRules" onClick={() => { play('crowd'); play('bgIntro'); handleSaveAndStart(); }}>
          Start new game
        </button>
      </div>

      
    </div>
  );
};

export default IntroRules;
