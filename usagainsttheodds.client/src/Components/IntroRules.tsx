import { useNavigate, useOutletContext } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "../assets/styles/Intro.module.css"
import ResetButton from '../Components/ResetButton';
import type { Person } from '../Types/GameType';

const IntroRules = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("John");
  
  const { setPlayer } = useOutletContext<{ setPlayer: React.Dispatch<React.SetStateAction<Person>> }>();

  const handleSaveAndStart = () => {
    setPlayer(prev => ({
      ...prev,
      name: userName
    }));

    navigate("/cutscene/intro");
  };

  {/* LIKES */}

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

      <button onClick={handleSaveAndStart}> {/*asi by to mel byt resetutton ale to neni muj problem @likes*/}
        Start game
      </button>
    </div>
  );
};

export default IntroRules;
