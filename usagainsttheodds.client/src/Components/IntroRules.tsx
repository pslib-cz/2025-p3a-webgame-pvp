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
      <h3>Let's play against the odds.</h3>
      
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
        <h4>Game Rules:</h4>
        <p>Zeny.</p>
      </div>

      <button onClick={handleSaveAndStart}>
        Start game
      </button>
    </div>
  );
};

export default IntroRules;
