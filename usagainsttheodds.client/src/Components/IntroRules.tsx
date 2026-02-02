import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import styles from "../assets/styles/Intro.module.css"
import { useOwnOutlet } from '../Hooks/useOwnOutlet';

const IntroRules = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("John");
  
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
        />
      </div>

      <div className={styles.rulesText}>
        <h2>Game Rules:</h2>
        <span>Goal: Buy your girlfriend her dream plushie.</span>
        <span>Movement: You can move freely on two gameboards.</span>
        <span>Mechanics: You play games to earn tickets, but don't forget to keep eating.</span>
        <p>Don't forget to keep your relationship healthy!</p>
      </div>

      <button onClick={handleSaveAndStart}>
        Let's play against the odds.
      </button>
    </div>
  );
};

export default IntroRules;
