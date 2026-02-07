import { useEffect } from "react";
import styles from "../assets/styles/Homepage.module.css"
import { useNavigate } from 'react-router-dom';

const HomePage1 = () => {


  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        navigate("/game/right");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (

    <div className={styles.game}>

      <div className={styles.background} />

      <div className={styles.main_right}>
        <div className={styles.goLEFT_btn} onClick={() => navigate("/game/right")}/>

        <div className={styles.games}>

          <button className={`${styles.building} ${styles.wheel}`} onClick={() => navigate("/wheel")} />
          <button className={`${styles.building} ${styles.shop}`} onClick={() => navigate("/itemshop")} />
          <button className={`${styles.building} ${styles.feelinglucky}`} onClick={() => navigate("/minigame/feelinglucky")} /> {/* nema routu udelanou*/}
          <button className={`${styles.building} ${styles.russianroulette}`} onClick={() => navigate("/minigame/russianroulette")} />
          <button className={`${styles.building} ${styles.darts}`} onClick={() => navigate("/minigame/darts")} />

        </div>
        <div className={styles.NPC}>
          <span className={`${styles.npc} ${styles.baloons}`}></span>
          <span className={`${styles.npc} ${styles.longwalk} ${styles.family}`}></span>
        </div>

        <div className={styles.map}>
          <span className={`${styles.lamp} ${styles.lamp1}`} />
          <span className={`${styles.lamp} ${styles.lamp2}`} />
          <span className={`${styles.trash} ${styles.trash1}`} />
          <span className={`${styles.trash} ${styles.trash2}`} />
        </div>

      </div>

    </div>
  );
};
export default HomePage1;