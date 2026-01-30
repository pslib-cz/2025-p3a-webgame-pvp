import styles from "../assets/styles/Homepage.module.css"
import { useNavigate } from 'react-router-dom';
import { useOwnOutlet } from '../Hooks/useOwnOutlet'
import PauseMenu from '../Components/PauseMenu';

const HomePage1 = () => {

  const { isPauseMenuOpen, setIsPauseMenuOpen } = useOwnOutlet();

  const navigate = useNavigate();

  return (

    <div className={styles.game}>

      <div className={styles.background} />

      <div className={styles.main_right}>
        <div
          className={styles.goLEFT_btn}
          onClick={() => navigate("/game/right")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 57 60" fill="none">
            <path d="M47.8285 32.8284C49.3906 31.2663 49.3906 28.7337 47.8285 27.1716L22.3727 1.71573C20.8106 0.153632 18.2779 0.153632 16.7158 1.71573C15.1537 3.27783 15.1537 5.81049 16.7158 7.37258L39.3432 30L16.7158 52.6274C15.1537 54.1895 15.1537 56.7222 16.7158 58.2843C18.2779 59.8464 20.8106 59.8464 22.3727 58.2843L47.8285 32.8284ZM45 30V34H45.0001V30V26H45V30Z" fill="#131522" />
          </svg>
        </div>

        <div className={styles.games}>
          <button className="btn-menu" onClick={() => setIsPauseMenuOpen(true)} />
          {isPauseMenuOpen && (<PauseMenu onClose={() => setIsPauseMenuOpen(false)} />)}

          <button className={`${styles.building} ${styles.wheel}`} onClick={() => navigate("/stall/wheel")} />
          <button className={`${styles.building} ${styles.shop}`} onClick={() => navigate("/stall/itemshop")} />
          <button className={`${styles.building} ${styles.feelinglucky}`} onClick={() => navigate("/stall/feelinglucky")} /> {/* nema routu udelanou*/}
          <button className={`${styles.building} ${styles.russianroulette}`} onClick={() => navigate("/stall/russianroulette")} />
          <button className={`${styles.building} ${styles.baloons}`} onClick={() => navigate("/stall/baloons")} /> {/* nema routu udelanou*/}
          <button className={`${styles.building} ${styles.darts}`} onClick={() => navigate("/stall/darts")} />
          {/* <Russianroulette/> */}
        </div>

        <div className={styles.NPC}>
          <span className={`${styles.npc_1} ${styles.family}`}></span>
        </div>

      </div>

    </div>
  );
};
export default HomePage1;