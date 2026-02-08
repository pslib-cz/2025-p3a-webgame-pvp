
import styles from "../assets/styles/Homepage.module.css"
import { useNavigate } from 'react-router-dom';

const HomePage2 = () => {


  const navigate = useNavigate();


  return (

    <div className={styles.game}>

      <div className={styles.background} />

      <div className={styles.main_left}>
        <div
          className={styles.goRIGHT_btn}
          onClick={() => navigate("/game")}
        >
        </div>

        <div className={styles.games}>
          <button className={`${styles.building} ${styles.food}`} onClick={() => navigate("/foodbar")} />
          <button className={`${styles.building} ${styles.slots}`} onClick={() => navigate("/minigame/slots")} />
          <button className={`${styles.building} ${styles.blackjack}`} onClick={() => navigate("/minigame/blackjack")} />
          <button className={`${styles.building} ${styles.whackamole}`} onClick={() => navigate("/minigame/whackamole")} />
          <button className={`${styles.building} ${styles.pexeso}`} onClick={() => navigate("/minigame/memorymatch")} />
        </div>

        <div className={styles.NPC}>
          <span className={`${styles.npc_1} ${styles.girlindress}`}></span>
        </div>

        <div className={styles.map}>
          <span className={`${styles.lamp} ${styles.lamp3}`} />
          <span className={`${styles.lamp} ${styles.lamp4}`} />
          <span className={`${styles.trash} ${styles.trash3}`} />
          <span className={`${styles.trash} ${styles.trash4}`} />
        </div>

      </div>

    </div>
  );
};
export default HomePage2;