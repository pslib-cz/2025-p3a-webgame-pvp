import styles from "../assets/styles/Homepage.module.css"
import { useNavigate } from 'react-router-dom';

const HomePage1 = () => {


  const navigate = useNavigate();

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
          <span className={`${styles.npc_3} ${styles.baloons}`}></span>
          <span className={`${styles.npc_1} ${styles.family}`}></span>
        </div>

      </div>

    </div>
  );
};
export default HomePage1;